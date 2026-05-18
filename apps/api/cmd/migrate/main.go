package main

import (
	"log"
	"os"

	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/meshalive/api/internal/config"
)

func main() {
	cfg := config.Load()
	direction := "up"
	if len(os.Args) > 1 {
		direction = os.Args[1]
	}

	// Must run from apps/api/ so "file://migrations" resolves to apps/api/migrations/.
	// In Docker the binary is at /app/api and migrations at /app/migrations/ — same relative layout.
	m, err := migrate.New("file://migrations", cfg.DatabaseURL)
	if err != nil {
		log.Fatalf("migrate init: %v", err)
	}
	defer m.Close()

	switch direction {
	case "up":
		if err := m.Up(); err != nil && err != migrate.ErrNoChange {
			log.Fatalf("migrate up: %v", err)
		}
		log.Println("Migrations applied.")
	case "down":
		if err := m.Down(); err != nil && err != migrate.ErrNoChange {
			log.Fatalf("migrate down: %v", err)
		}
		log.Println("Migrations rolled back.")
	default:
		log.Fatalf("Unknown direction: %s. Use 'up' or 'down'.", direction)
	}
}
