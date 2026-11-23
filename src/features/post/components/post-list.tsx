import type { Post } from "../type";
import PostCard from "./post-card";

export default function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return <p>Belum ada artikel.</p>;

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
