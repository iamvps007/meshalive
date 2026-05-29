CREATE TABLE IF NOT EXISTS bio_pages (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
    slug        TEXT NOT NULL,
    title       TEXT NOT NULL DEFAULT '',
    config      JSONB NOT NULL DEFAULT '{"blocks":[],"theme":{"background":"#0a0a0a","foreground":"#f0f0f0","primary":"#0078d4","fontFamily":"Inter","borderRadius":12,"maxWidth":640}}',
    published   BOOLEAN NOT NULL DEFAULT false,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS bio_pages_slug_idx ON bio_pages(slug);
CREATE INDEX IF NOT EXISTS bio_pages_workspace_idx ON bio_pages(workspace_id);
