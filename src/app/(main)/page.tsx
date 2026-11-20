import type { Metadata } from "next";
import { generateSeoMetadata } from "@/utils/metadata";

export function generateMetadata(): Metadata {
  return generateSeoMetadata({
    title: "Home",
    description: "Halaman home",
    path: "/",
  });
}

export default function Home() {
  return (
    <main className="container m-auto px-6">
      <h1>Welcome</h1>
    </main>
  );
}
