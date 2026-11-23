import { PageHeader } from "@/components/main/page-header";
import { Container } from "@/components/ui";

export default function Contact() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        description="We Look Forward to Connecting With You"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <Container className="py-24">
        <h1>Contact Page</h1>
      </Container>
    </main>
  );
}
