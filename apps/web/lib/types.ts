export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Workspace {
  id: string;
  name: string;
  slug: string;
  plan: string;
}

export interface AuthResult {
  access_token: string;
  user: User;
  workspace: Workspace;
}

export interface Link {
  id: string;
  domain_id: string;
  slug: string;
  destination: string;
  title: string;
  tags: string[];
  archived: boolean;
  short_url?: string;
  expires_at?: string;
  click_limit?: number;
  created_at: string;
}

export interface ListLinksResponse {
  links: Link[];
  total_count: number;
  page: number;
  page_size: number;
}

export interface ApiError {
  error: { code: string; message: string };
}

export interface AnalyticsSummary {
  total_links: number;
  total_clicks: number;
  clicks_today: number;
  clicks_week: number;
}

export interface ClicksByDay { day: string; clicks: number; }
export interface CountryStat { country: string; clicks: number; }
export interface DeviceStat { device: string; clicks: number; }
export interface TopLink {
  id: string; slug: string; title: string; destination: string; clicks: number;
}

export interface WorkspaceAnalytics {
  summary: AnalyticsSummary;
  clicks_by_day: ClicksByDay[];
  countries: CountryStat[];
  devices: DeviceStat[];
  top_links: TopLink[];
}

export interface Domain {
  id: string;
  hostname: string;
  is_primary: boolean;
  status: 'pending' | 'active' | 'error';
  verified_at: string | null;
}

export interface WorkspaceSettings {
  id: string;
  name: string;
  slug: string;
  plan: string;
  billing_email: string | null;
  currency: string;
}

export interface APIToken {
  id: string;
  name: string;
  prefix: string;
  last_used_at: string | null;
  created_at: string;
  raw_token?: string;
}
