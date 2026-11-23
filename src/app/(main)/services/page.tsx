import type { Metadata } from "next";
import { PageHeader } from "@/components/main/page-header";
import { Container } from "@/components/ui";
import { generateSeoMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    title: "Services",
    description: "Kumpulan artikel terbaru.",
    path: "/services",
  });
}

export default function Services() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        description="We Look Forward to Connecting With You"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <Container className="py-24">
        <h1>Store Page</h1>
      </Container>
    </main>
  );
}
