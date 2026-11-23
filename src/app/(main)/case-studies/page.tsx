import type { Metadata } from "next";
import { PageHeader } from "@/components/main/page-header";
import { Container } from "@/components/ui";
import { generateSeoMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    title: "Case Studies",
    description: "Kumpulan artikel terbaru.",
    path: "/case-studies",
  });
}

export default function CaseStudies() {
  return (
    <main>
      <PageHeader
        title="Case Studies"
        description="We Look Forward to Connecting With You"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
      />
      <Container className="py-24">
        <h1>Store Page</h1>
      </Container>
    </main>
  );
}
