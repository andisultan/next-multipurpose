import type { Metadata } from "next";

type MetadataImage = {
  url: string;
  alt?: string;
};

type GenerateSeoMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  image?: MetadataImage;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

const SITE_NAME = "Your Website";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function generateSeoMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  publishedTime,
  noIndex = false,
}: GenerateSeoMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title,
      description,
      url,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(image
        ? {
            images: [
              {
                url: image.url,
                alt: image.alt || title,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image ? { images: [image.url] } : {}),
    },
  };
}
