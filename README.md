# Meshalive — Free URL Shortener with Analytics

[![Live](https://img.shields.io/badge/Live-meshalive.com-green?style=flat-square)](https://meshalive.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

**Meshalive** is a free URL shortener with real-time click analytics, dynamic QR codes, and branded short links. No credit card. No expiry. No catch.

🔗 **Live:** [meshalive.com](https://meshalive.com)

---

## Features

- **URL Shortener** — Shorten any URL into a clean branded short link
- **Click Analytics** — Real-time click counts, device, browser, country tracking
- **QR Codes** — Auto-generated QR code for every link, downloadable instantly
- **Custom Slugs** — Choose your own short link path
- **Expiring Links** — Set links to auto-expire in 1h, 6h, 24h, 3 days, or 7 days
- **API Access** — REST API available on all plans

## Free Tools

All tools available at [meshalive.com/tools](https://meshalive.com/tools) — no signup needed:

| Tool | URL |
|---|---|
| WhatsApp Click-to-Chat Generator | [/tools/whatsapp-landing-page](https://meshalive.com/tools/whatsapp-landing-page) |
| URL Redirect Chain Checker | [/tools/redirect-checker](https://meshalive.com/tools/redirect-checker) |
| Link Preview / OG Tag Checker | [/tools/link-preview-checker](https://meshalive.com/tools/link-preview-checker) |
| Temporary / Expiring Link Generator | [/tools/temporary-link-generator](https://meshalive.com/tools/temporary-link-generator) |
| vCard QR Code Generator | [/tools/vcard-generator](https://meshalive.com/tools/vcard-generator) |
| Affiliate Link Cloaker | [/tools/affiliate-link-cloaker](https://meshalive.com/tools/affiliate-link-cloaker) |
| Deep Link Generator | [/tools/deep-link-generator](https://meshalive.com/tools/deep-link-generator) |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15, React 18, TypeScript |
| Backend API | Go 1.22 (Fiber framework) |
| Database | PostgreSQL 16 |
| Cache | Redis 7 |
| Reverse Proxy | Nginx (Alpine) |
| Infrastructure | Docker Compose on Ubuntu VPS |
| Monorepo | Turborepo |

---

## Project Structure

```
meshalive/
├── apps/
│   ├── web/          # Next.js 15 frontend (App Router)
│   └── api/          # Go (Fiber) REST API
├── infra/
│   ├── docker-compose.yml
│   ├── docker-compose.prod.yml
│   └── nginx/        # Nginx config
└── packages/         # Shared packages
```

---

## Local Development

### Prerequisites

- Node.js 20+
- Go 1.22+
- Docker & Docker Compose
- PostgreSQL 16

### 1. Clone the repo

```bash
git clone https://github.com/iamvps007/meshalive.git
cd meshalive
```

### 2. Set up environment variables

```bash
# apps/api/.env
DATABASE_URL=postgres://meshalive:password@localhost:5432/meshalive
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
BASE_URL=http://localhost:8080

# apps/web/.env.local
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### 3. Start the database

```bash
cd infra
docker compose up -d postgres redis
```

### 4. Run the API

```bash
cd apps/api
go mod download
go run cmd/server/main.go
```

### 5. Run the frontend

```bash
cd apps/web
npm install
npm run dev
```

Frontend runs at `http://localhost:3000`, API at `http://localhost:8080`.

---

## Production Deployment

The app runs on Docker Compose. To deploy:

```bash
cd infra

# Build and start all services
docker compose build
docker compose up -d

# Rebuild only the web container
docker compose build web && docker compose up -d web

# Rebuild only the API container
docker compose build api && docker compose up -d api
```

### Services

| Service | Port |
|---|---|
| Web (Next.js) | 3000 (internal) |
| API (Go) | 8080 (internal) |
| PostgreSQL | 5432 (internal) |
| Redis | 6379 (internal) |
| Nginx | 80, 443 (public) |

---

## API Reference

### Shorten a URL

```bash
POST https://api.meshalive.com/v1/shorten
Content-Type: application/json

{
  "url": "https://example.com/very-long-url",
  "custom_slug": "my-link",        # optional
  "expires_in_hours": 24           # optional, 0 = never expires
}
```

**Response:**
```json
{
  "short_url": "https://meshalive.com/abc123",
  "slug": "abc123",
  "expires_at": "2026-05-28T10:00:00Z"
}
```

---

## Security

- URL validation blocks XSS (`javascript:`), SSRF (private IP ranges), and local file access (`file://`)
- Private IP ranges blocked: `127.0.0.0/8`, `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `169.254.0.0/16`

---

## Live Links

- 🌐 **Website:** [meshalive.com](https://meshalive.com)
- 🛠 **Free Tools:** [meshalive.com/tools](https://meshalive.com/tools)
- 💰 **Pricing:** [meshalive.com/pricing](https://meshalive.com/pricing)
- 📖 **Blog:** [meshalive.com/blog](https://meshalive.com/blog)
- 🚀 **Product Hunt:** [producthunt.com/products/url-shortener-with-analytics-qr-codes](https://www.producthunt.com/products/url-shortener-with-analytics-qr-codes)

---

## License

MIT
