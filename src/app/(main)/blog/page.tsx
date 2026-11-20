import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Pagination from "@/components/pagination";
import PostList from "@/features/post/components/post-list";
import { getPosts } from "@/features/post/services";
import { generateSeoMetadata } from "@/utils/metadata";
import { toInt } from "@/utils/number";

type PostsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    title: "Blog",
    description: "Kumpulan artikel terbaru.",
    path: "/blog",
  });
}

const PAGE_SIZE = 16;

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, toInt(page ?? "", 1));
  const { posts, pagination } = await getPosts(currentPage, PAGE_SIZE);
  const { totalPages } = pagination;

  if (totalPages > 0 && currentPage > totalPages) {
    notFound();
  }

  return (
    <main>
      <header className="bg-tertiary min-h-92.5 flex items-center">
        <div className="container m-auto px-6">
          <ul className="flex gap-2 pb-4 mb-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <h1 className="text-5xl font-forum pb-2">News & Resources</h1>
          <p>Get the latest articles, insight, and news from our blog</p>
        </div>
      </header>
      <div className="container m-auto px-6 py-24">
        <PostList posts={posts} />
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
        )}
      </div>
    </main>
  );
}
