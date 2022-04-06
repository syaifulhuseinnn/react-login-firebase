export interface Quotes {
  page: number;
  last_page: boolean;
  quotes: Quote[];
}

export interface Quote {
  id: number;
  dialogue: boolean;
  private: boolean;
  tags: string[];
  url: string;
  favorites_count: number;
  upvotes_count: number;
  downvotes_count: number;
  author: string;
  author_permalink: string;
  body: string;
  source?: string;
}
