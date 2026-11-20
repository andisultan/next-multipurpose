import { API_URL } from "@/config/api";
import { fetcher, fetcherWithMeta } from "@/helper/fetcher";
import type { Post, PostsResult } from "./type";

const ONE_MINUTES = 60;
const FIVE_MINUTES = 5 * ONE_MINUTES;

export async function getPosts(page = 1, perPage = 10) {
  const { data, meta } = await fetcherWithMeta<Post[]>(`${API_URL}/posts`, {
    params: {
      page,
      per_page: perPage,
      _embed: true,
    },
    next: {
      revalidate: ONE_MINUTES,
      tags: ["posts"],
    },
  });

  return {
    posts: data,
    pagination: {
      total: meta.total,
      totalPages: meta.totalPages,
      currentPage: page,
      perPage,
    },
  } satisfies PostsResult;
}

export async function getPostBySlug(slug: string) {
  const posts = await fetcher<Post[]>(`${API_URL}/posts`, {
    params: {
      slug,
      _embed: true,
    },
    next: {
      revalidate: FIVE_MINUTES,
      tags: ["posts", `post-${slug}`],
    },
  });

  return posts[0] ?? null;
}
