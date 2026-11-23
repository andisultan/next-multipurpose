import type { Metadata } from "next";
import { Container } from "@/components/ui";
import HomeHero from "@/features/home/components/hero";
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
    <main>
      <Container>
        <h1>Home</h1>
        <HomeHero />
      </Container>
    </main>
  );
}
