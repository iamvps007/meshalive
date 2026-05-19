package main

import (
	"context"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/meshalive/api/internal/cache"
	"github.com/meshalive/api/internal/config"
	internaldb "github.com/meshalive/api/internal/db"
	"github.com/meshalive/api/internal/handler"
	"github.com/meshalive/api/internal/middleware"
	"github.com/meshalive/api/internal/service"
	"github.com/meshalive/api/repository"
)

func main() {
	cfg := config.Load()

	db, err := internaldb.New(cfg.DatabaseURL)
	if err != nil {
		log.Fatalf("db: %v", err)
	}
	defer db.Close()

	cacheClient, err := cache.New(cfg.RedisURL)
	if err != nil {
		log.Fatalf("redis: %v", err)
	}

	q := repository.New(db)

	if err := warmDomains(context.Background(), cacheClient, q); err != nil {
		log.Printf("domain warmup: %v", err)
	}

	redirectSvc := service.NewRedirectService(cacheClient, q)
	redirectH := handler.NewRedirectHandler(redirectSvc)

	authSvc := service.NewAuthService(q, cacheClient, cfg.JWTSecret)
	authH := handler.NewAuthHandler(authSvc, cfg.CookieSecure)

	linkSvc := service.NewLinkService(q, cacheClient)
	linksH := handler.NewLinksHandler(linkSvc)

	analyticsSvc := service.NewAnalyticsService(q)
	analyticsH := handler.NewAnalyticsHandler(analyticsSvc)

	domainSvc := service.NewDomainService(q, cacheClient)
	domainsH := handler.NewDomainsHandler(domainSvc)

	workspaceSvc := service.NewWorkspaceService(q)
	workspaceH := handler.NewWorkspaceHandler(workspaceSvc)

	tokenSvc := service.NewTokenService(q)
	tokensH := handler.NewTokensHandler(tokenSvc)

	app := fiber.New(fiber.Config{
		AppName:      "Meshalive API",
		ErrorHandler: errorHandler,
	})
	app.Use(recover.New())
	app.Use(logger.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "https://app.meshalive.com,https://meshalive.com,http://localhost:3000,http://72.61.233.21:3000",
		AllowHeaders:     "Origin, Content-Type, Authorization, X-Workspace-ID",
		AllowMethods:     "GET,POST,PUT,PATCH,DELETE,OPTIONS",
		AllowCredentials: true,
	}))

	app.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "ok", "env": cfg.AppEnv})
	})

	redirectH.Register(app)
	authH.Register(app)

	protected := app.Group("/v1", middleware.Auth(cfg.JWTSecret, q))
	linksH.RegisterProtected(protected)
	analyticsH.RegisterProtected(protected)
	domainsH.RegisterProtected(protected)
	workspaceH.RegisterProtected(protected)
	tokensH.RegisterProtected(protected)

	log.Printf("Starting Meshalive API on :%s (env=%s)", cfg.Port, cfg.AppEnv)
	log.Fatal(app.Listen(":" + cfg.Port))
}

func warmDomains(ctx context.Context, c *cache.Client, q *repository.Queries) error {
	domains, err := q.ListActiveDomains(ctx)
	if err != nil {
		return err
	}
	for _, d := range domains {
		if err := c.SetDomainID(ctx, d.Hostname, d.ID); err != nil {
			log.Printf("warmDomains %s: %v", d.Hostname, err)
		}
	}
	log.Printf("Warmed %d domain(s) into Redis", len(domains))
	return nil
}

func errorHandler(c *fiber.Ctx, err error) error {
	code := fiber.StatusInternalServerError
	if e, ok := err.(*fiber.Error); ok {
		code = e.Code
	}
	return c.Status(code).JSON(fiber.Map{
		"error": fiber.Map{"code": "INTERNAL_ERROR", "message": err.Error()},
	})
}
