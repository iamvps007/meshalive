-- name: InsertClick :exec
INSERT INTO clicks (link_id, country, device, browser, referrer)
VALUES ($1, $2, $3, $4, $5);
