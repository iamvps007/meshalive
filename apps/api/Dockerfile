FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
# Build both binaries: the API server and the migration runner
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /api ./cmd/server
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /migrate ./cmd/migrate

FROM alpine:3.19
RUN apk add --no-cache ca-certificates tzdata
WORKDIR /app
COPY --from=builder /api /app/api
COPY --from=builder /migrate /app/migrate
# migrations/ must be present alongside the binary so "file://migrations" resolves
COPY migrations/ /app/migrations/
EXPOSE 8080
CMD ["/app/api"]
