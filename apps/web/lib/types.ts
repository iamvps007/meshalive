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
