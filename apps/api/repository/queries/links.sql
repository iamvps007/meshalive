-- name: GetDomainByHostname :one
SELECT id FROM domains
WHERE hostname = $1 AND status = 'active';

-- name: GetLinkForRedirect :one
SELECT id, destination FROM links
WHERE domain_id = $1
  AND slug = $2
  AND archived = false
  AND (expires_at IS NULL OR expires_at > NOW())
  AND (click_limit IS NULL OR
       (SELECT COUNT(*) FROM clicks WHERE link_id = links.id) < click_limit)
LIMIT 1;

-- name: ListActiveDomains :many
SELECT id, hostname FROM domains WHERE status = 'active';
