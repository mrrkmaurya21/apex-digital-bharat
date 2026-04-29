import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexdigitalbharat.com"),
  title: {
    default:
      "Apex Digital Bharat — Digital Solutions for Retail & Enterprise",
    template: "%s · Apex Digital Bharat",
  },
  description:
    "End-to-end digital partner for Indian businesses. Web platforms, AI workflows, brand systems, growth campaigns, and Local SEO — for retail SMBs to multi-state enterprises.",
  keywords: [
    "digital agency India",
    "web development India",
    "AI automation India",
    "UI UX design India",
    "digital marketing India",
    "Google Business Profile management India",
    "enterprise software India",
    "Indian software company",
    "Made in Bharat tech",
  ],
  openGraph: {
    title: "Apex Digital Bharat — Digital solutions for Retail & Enterprise",
    description:
      "Software, design, and growth — under one roof. End-to-end digital partner for ambitious Indian businesses.",
    url: "https://apexdigitalbharat.com",
    siteName: "Apex Digital Bharat",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Digital Bharat — Digital solutions for Retail & Enterprise",
    description:
      "Software, design, and growth — under one roof. End-to-end digital partner for ambitious Indian businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans bg-bg text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
