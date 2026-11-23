import type { Metadata } from "next";
import { PageHeader } from "@/components/main/page-header";
import { Container } from "@/components/ui";
import { generateSeoMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    title: "Store",
    description: "Kumpulan artikel terbaru.",
    path: "/store",
  });
}

export default function Store() {
  return (
    <main>
      <PageHeader
        title="Store"
        description="We Look Forward to Connecting With You"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Store" }]}
      />
      <Container className="py-24">
        <h1>Store Page</h1>
      </Container>
    </main>
  );
}
