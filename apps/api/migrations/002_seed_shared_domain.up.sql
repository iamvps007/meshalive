-- System workspace that owns the shared short domain
INSERT INTO workspaces (id, name, slug, currency)
VALUES ('00000000-0000-0000-0000-000000000001', 'Meshalive System', 'system', 'USD')
ON CONFLICT (id) DO NOTHING;

-- Seed mshl.in as a shared active domain
INSERT INTO domains (workspace_id, hostname, is_primary, status, ssl_issued)
VALUES ('00000000-0000-0000-0000-000000000001', 'mshl.in', true, 'active', true)
ON CONFLICT (hostname) DO UPDATE SET status = 'active', is_primary = true;
