import type { Metadata } from "next";
import MainFooter from "@/components/main/footer";
import MainHeader from "@/components/main/header";
import { generateSeoMetadata } from "@/utils/metadata";

export const metadata: Metadata = {
  ...generateSeoMetadata({
    title: "Your Website",
    description: "Welcome to our website.",
    path: "/",
  }),
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
};

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
