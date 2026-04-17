/**
 * Shared types for web content pages
 */

export interface ContentData {
  id: string;
  type: string;
  url: string;
  title: string;
  summary?: string;
  content?: string;
  author: {
    id: number;
    username: string;
    display_name?: string;
    avatar_url?: string;
  };
  media?: Array<{
    type: string;
    url: string;
    width?: number;
    height?: number;
  }>;
  counts: {
    likes: number;
    comments: number;
    shares?: number;
    views?: number;
  };
  tags?: string[];
  createdAt: string;
  updatedAt?: string;
  publishedAt?: string;
  og_image: string;
  og_url: string;
  canonical_url: string;
}
