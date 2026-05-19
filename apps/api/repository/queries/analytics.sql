-- name: GetWorkspaceAnalyticsSummary :one
SELECT
  COUNT(DISTINCT l.id)                                                          AS total_links,
  COUNT(c.id)                                                                   AS total_clicks,
  COUNT(c.id) FILTER (WHERE c.clicked_at >= CURRENT_DATE)                      AS clicks_today,
  COUNT(c.id) FILTER (WHERE c.clicked_at >= CURRENT_DATE - INTERVAL '7 days') AS clicks_week
FROM links l
LEFT JOIN clicks c ON c.link_id = l.id
WHERE l.workspace_id = $1 AND l.archived = false;

-- name: GetWorkspaceLinkIDs :many
SELECT id FROM links WHERE workspace_id = $1 AND archived = false;

-- name: GetClicksByDay :many
SELECT DATE(c.clicked_at) AS day, COUNT(*) AS clicks
FROM clicks c
JOIN links l ON l.id = c.link_id
WHERE l.workspace_id = $1 AND l.archived = false
  AND c.clicked_at >= NOW() - ($2::int || ' days')::interval
GROUP BY day
ORDER BY day;

-- name: GetTopCountries :many
SELECT COALESCE(c.country, 'XX') AS country, COUNT(*) AS clicks
FROM clicks c
JOIN links l ON l.id = c.link_id
WHERE l.workspace_id = $1 AND l.archived = false
  AND c.clicked_at >= NOW() - ($2::int || ' days')::interval
GROUP BY country
ORDER BY clicks DESC
LIMIT 10;

-- name: GetTopDevices :many
SELECT COALESCE(c.device, 'unknown') AS device, COUNT(*) AS clicks
FROM clicks c
JOIN links l ON l.id = c.link_id
WHERE l.workspace_id = $1 AND l.archived = false
  AND c.clicked_at >= NOW() - ($2::int || ' days')::interval
GROUP BY device
ORDER BY clicks DESC
LIMIT 5;

-- name: GetTopLinks :many
SELECT l.id, l.slug, l.title, l.destination, COUNT(c.id) AS clicks
FROM links l
LEFT JOIN clicks c ON c.link_id = l.id
WHERE l.workspace_id = $1 AND l.archived = false
GROUP BY l.id
ORDER BY clicks DESC
LIMIT 10;

-- name: GetLinkClicksByDay :many
SELECT DATE(clicked_at) AS day, COUNT(*) AS clicks
FROM clicks
WHERE link_id = $1
  AND clicked_at >= NOW() - ($2::int || ' days')::interval
GROUP BY day
ORDER BY day;

-- name: GetLinkTopCountries :many
SELECT COALESCE(country, 'XX') AS country, COUNT(*) AS clicks
FROM clicks
WHERE link_id = $1
  AND clicked_at >= NOW() - ($2::int || ' days')::interval
GROUP BY country
ORDER BY clicks DESC
LIMIT 10;

-- name: GetLinkTopDevices :many
SELECT COALESCE(device, 'unknown') AS device, COUNT(*) AS clicks
FROM clicks
WHERE link_id = $1
  AND clicked_at >= NOW() - ($2::int || ' days')::interval
GROUP BY device
ORDER BY clicks DESC
LIMIT 5;

-- name: GetLinkTotalClicks :one
SELECT COUNT(*) AS clicks FROM clicks WHERE link_id = $1;
