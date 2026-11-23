import type { Metadata } from "next";
import { PageHeader } from "@/components/main/page-header";
import { Container } from "@/components/ui";
import { generateSeoMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    title: "About",
    description: "Kumpulan artikel terbaru.",
    path: "/about",
  });
}

export default function About() {
  return (
    <main>
      <PageHeader
        title="About"
        description="We Look Forward to Connecting With You"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <Container className="py-24">
        <h1>About Page</h1>
      </Container>
    </main>
  );
}
