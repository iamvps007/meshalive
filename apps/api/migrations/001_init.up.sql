CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email        TEXT UNIQUE NOT NULL,
  name         TEXT NOT NULL DEFAULT '',
  password_hash TEXT,
  avatar_url   TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_login   TIMESTAMPTZ
);

CREATE TABLE workspaces (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name           TEXT NOT NULL,
  slug           TEXT UNIQUE NOT NULL,
  plan           TEXT NOT NULL DEFAULT 'free',
  billing_email  TEXT,
  gstin          TEXT,
  currency       TEXT NOT NULL DEFAULT 'USD',
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE workspace_members (
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  user_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role         TEXT NOT NULL DEFAULT 'editor',
  joined_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (workspace_id, user_id),
  CONSTRAINT role_check CHECK (role IN ('owner','admin','editor','viewer'))
);

CREATE TABLE domains (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  hostname     TEXT UNIQUE NOT NULL,
  is_primary   BOOLEAN NOT NULL DEFAULT FALSE,
  status       TEXT NOT NULL DEFAULT 'pending',
  ssl_issued   BOOLEAN NOT NULL DEFAULT FALSE,
  verified_at  TIMESTAMPTZ,
  CONSTRAINT status_check CHECK (status IN ('pending','active','error'))
);

CREATE TABLE links (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  domain_id    UUID NOT NULL REFERENCES domains(id),
  slug         TEXT NOT NULL,
  destination  TEXT NOT NULL,
  title        TEXT NOT NULL DEFAULT '',
  tags         TEXT[] NOT NULL DEFAULT '{}',
  archived     BOOLEAN NOT NULL DEFAULT FALSE,
  expires_at   TIMESTAMPTZ,
  click_limit  INT,
  created_by   UUID REFERENCES users(id),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (domain_id, slug)
);

CREATE TABLE clicks (
  id         BIGSERIAL PRIMARY KEY,
  link_id    UUID NOT NULL REFERENCES links(id) ON DELETE CASCADE,
  clicked_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  country    CHAR(2),
  device     TEXT,
  browser    TEXT,
  referrer   TEXT
);

CREATE TABLE api_tokens (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  name         TEXT NOT NULL,
  token_hash   TEXT UNIQUE NOT NULL,
  prefix       TEXT NOT NULL,
  last_used_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Critical indexes (from spec Section 4)
CREATE INDEX links_domain_slug   ON links (domain_id, slug);
CREATE INDEX clicks_link_time    ON clicks (link_id, clicked_at DESC);
CREATE INDEX clicks_covering     ON clicks (link_id) INCLUDE (country, device, referrer);
CREATE INDEX tokens_hash         ON api_tokens (token_hash);
-- Additional index (not in spec list but required by redirect domain lookup):
CREATE INDEX domains_hostname    ON domains (hostname);
