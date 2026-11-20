import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/features/post/services";
import type { Post } from "@/features/post/type";
import { formattedDate } from "@/utils/format-date";
import { generateSeoMetadata } from "@/utils/metadata";
import { sanitizePostContent } from "@/utils/sanitize-html";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getDescription(post: Post) {
  return stripHtml(post.excerpt.rendered) || stripHtml(post.content.rendered).slice(0, 160);
}

export async function generateMetadata({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return generateSeoMetadata({
      title: "Article Not Found",
      description: "The requested article could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  const image = post._embedded?.["wp:featuredmedia"]?.[0];

  return generateSeoMetadata({
    title: stripHtml(post.title.rendered),
    description: getDescription(post),
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    image: image
      ? {
          url: image.source_url,
          alt: image.alt_text || stripHtml(post.title.rendered),
        }
      : undefined,
  });
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const image = post._embedded?.["wp:featuredmedia"]?.[0];
  const categories = post._embedded?.["wp:term"]?.[0] ?? [];
  const sanitizedContent = sanitizePostContent(post.content.rendered);

  return (
    <main>
      <header className="bg-tertiary min-h-92.5 flex items-center">
        <div className="container m-auto px-6 flex flex-col text-center items-center">
          <ul className="flex gap-2 pb-4 mb-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <h1 className="text-5xl font-forum pb-2">{post.title.rendered}</h1>
          <ul className="flex flex-wrap gap-2 items-center text-sm mb-4">
            {categories.map((category) => (
              <li key={category.id} className="bg-white py-1 px-2 rounded">
                {category.name}
              </li>
            ))}
            <li>{formattedDate(post.date)}</li>
          </ul>
        </div>
      </header>
      <article className="blog-detail container m-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {image && (
            <div className="relative aspect-video mb-10 overflow-hidden rounded-xl">
              <Image
                src={image.source_url}
                alt={image.alt_text || post.title.rendered}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}
          <div
            className="prose prose-lg max-w-none"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: Content is sanitized with sanitize-html
            dangerouslySetInnerHTML={{
              __html: sanitizedContent,
            }}
          />
        </div>
      </article>
    </main>
  );
}
