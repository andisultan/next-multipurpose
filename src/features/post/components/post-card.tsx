import Image from "next/image";
import Link from "next/link";
import { formattedDate } from "@/utils/format-date";
import type { Post } from "../type";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const imageUrl = featuredImage?.source_url;
  const categories = post._embedded?.["wp:term"]?.[0] ?? [];

  return (
    <article className="flex flex-col gap-4 mb-6">
      {imageUrl && (
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={imageUrl}
            alt={featuredImage.alt_text || post.title.rendered}
            width={featuredImage.media_details?.width || 368}
            height={featuredImage.media_details?.height || 207}
            className="w-full aspect-368/207 object-cover rounded-lg"
          />
        </Link>
      )}

      <ul className="flex gap-2 items-center text-sm">
        {categories.map((category) => (
          <li key={category.id} className="bg-tertiary py-1 px-2 rounded">
            {category.name}
          </li>
        ))}
        <li>{formattedDate(post.date)}</li>
      </ul>
      <h3 className="text-xl">
        <Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
      </h3>
    </article>
  );
}
