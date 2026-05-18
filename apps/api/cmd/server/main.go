package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/meshalive/api/internal/config"
)

func main() {
	cfg := config.Load()

	app := fiber.New(fiber.Config{
		AppName:      "Meshalive API",
		ErrorHandler: errorHandler,
	})

	app.Use(recover.New())
	app.Use(logger.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins: "https://app.meshalive.com,https://meshalive.com,http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Authorization, X-Workspace-ID",
		AllowMethods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
	}))

	app.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "ok", "env": cfg.AppEnv})
	})

	log.Printf("Starting Meshalive API on :%s (env=%s)", cfg.Port, cfg.AppEnv)
	log.Fatal(app.Listen(":" + cfg.Port))
}

func errorHandler(c *fiber.Ctx, err error) error {
	code := fiber.StatusInternalServerError
	if e, ok := err.(*fiber.Error); ok {
		code = e.Code
	}
	return c.Status(code).JSON(fiber.Map{
		"error": fiber.Map{
			"code":    "INTERNAL_ERROR",
			"message": err.Error(),
		},
	})
}
