package config

import (
	"os"
)

type Config struct {
	Port        string
	DatabaseURL string
	RedisURL    string
	JWTSecret   string
	AppEnv      string
}

func Load() *Config {
	return &Config{
		Port:        getEnv("PORT", "8080"),
		DatabaseURL: getEnv("DATABASE_URL", "postgres://meshalive:meshalive@postgres:5432/meshalive?sslmode=disable"),
		RedisURL:    getEnv("REDIS_URL", "redis://redis:6379"),
		JWTSecret:   getEnv("JWT_SECRET", "change-me-in-production"),
		AppEnv:      getEnv("APP_ENV", "development"),
	}
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
