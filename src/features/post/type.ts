export interface Post {
  id: number;
  date: string;
  slug: string;
  status: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  tags: number[];

  _embedded?: {
    "wp:featuredmedia"?: {
      id: number;
      source_url: string;
      alt_text: string;
      media_details?: {
        width: number;
        height: number;
      };
    }[];

    "wp:term"?: {
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }[][];
  };
}

export interface PostsPagination {
  total: number;
  totalPages: number;
  currentPage: number;
  perPage: number;
}

export interface PostsResult {
  posts: Post[];
  pagination: {
    total: number;
    totalPages: number;
    currentPage: number;
    perPage: number;
  };
}
