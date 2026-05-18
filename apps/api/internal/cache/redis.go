package cache

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/redis/go-redis/v9"
)

const RedirectTTL = 24 * time.Hour

type RedirectEntry struct {
	Dest   string    `json:"dest"`
	LinkID uuid.UUID `json:"link_id"`
}

type Client struct {
	rdb *redis.Client
}

func New(redisURL string) (*Client, error) {
	opts, err := redis.ParseURL(redisURL)
	if err != nil {
		return nil, err
	}
	rdb := redis.NewClient(opts)
	if err := rdb.Ping(context.Background()).Err(); err != nil {
		return nil, err
	}
	return &Client{rdb: rdb}, nil
}

func (c *Client) GetRedirect(ctx context.Context, host, slug string) (*RedirectEntry, error) {
	val, err := c.rdb.Get(ctx, redirectKey(host, slug)).Result()
	if err == redis.Nil {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	var entry RedirectEntry
	return &entry, json.Unmarshal([]byte(val), &entry)
}

func (c *Client) SetRedirect(ctx context.Context, host, slug string, entry RedirectEntry) error {
	data, err := json.Marshal(entry)
	if err != nil {
		return err
	}
	return c.rdb.Set(ctx, redirectKey(host, slug), data, RedirectTTL).Err()
}

func (c *Client) DelRedirect(ctx context.Context, host, slug string) error {
	return c.rdb.Del(ctx, redirectKey(host, slug)).Err()
}

func (c *Client) GetDomainID(ctx context.Context, hostname string) (uuid.UUID, bool, error) {
	val, err := c.rdb.Get(ctx, domainKey(hostname)).Result()
	if err == redis.Nil {
		return uuid.Nil, false, nil
	}
	if err != nil {
		return uuid.Nil, false, err
	}
	id, err := uuid.Parse(val)
	return id, err == nil, err
}

func (c *Client) SetDomainID(ctx context.Context, hostname string, id uuid.UUID) error {
	return c.rdb.Set(ctx, domainKey(hostname), id.String(), 0).Err()
}

func (c *Client) DelDomainID(ctx context.Context, hostname string) error {
	return c.rdb.Del(ctx, domainKey(hostname)).Err()
}

func redirectKey(host, slug string) string { return fmt.Sprintf("redirect:%s:%s", host, slug) }
func domainKey(hostname string) string     { return fmt.Sprintf("domain:%s", hostname) }

const refreshTTL = 30 * 24 * time.Hour

func (c *Client) SetRefreshToken(ctx context.Context, tokenHash string, userID uuid.UUID) error {
	return c.rdb.Set(ctx, "refresh:"+tokenHash, userID.String(), refreshTTL).Err()
}

func (c *Client) GetRefreshToken(ctx context.Context, tokenHash string) (uuid.UUID, error) {
	val, err := c.rdb.Get(ctx, "refresh:"+tokenHash).Result()
	if err == redis.Nil {
		return uuid.Nil, nil
	}
	if err != nil {
		return uuid.Nil, err
	}
	return uuid.Parse(val)
}

func (c *Client) DelRefreshToken(ctx context.Context, tokenHash string) error {
	return c.rdb.Del(ctx, "refresh:"+tokenHash).Err()
}
