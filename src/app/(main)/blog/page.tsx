import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/main/page-header";
import Pagination from "@/components/pagination";
import { Container } from "@/components/ui";
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

const PAGE_SIZE = 12;

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
      <PageHeader
        title="News & Resources"
        description="Explore expert advice, real-world case studies, and actionable strategies to drive
            growth and innovation in your business."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <Container className="py-24">
        <PostList posts={posts} />
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
        )}
      </Container>
    </main>
  );
}
