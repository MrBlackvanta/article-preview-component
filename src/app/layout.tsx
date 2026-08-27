import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Article Preview Card | Share a story in one tap";
const description =
  "A photograph, a headline and the byline, with a share panel that opens over the card and puts Facebook, Twitter and Pinterest one tap away.";
const siteUrl =
  "https://article-preview-component.abdelrhman-ahmed8881.workers.dev";
const images = [
  {
    url: "/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "Article Preview Card, beside the article's own photograph",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Article Preview Card",
    locale: "en_US",
    type: "website",
    images,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="relative flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
