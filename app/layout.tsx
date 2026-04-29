import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexdigitalbharat.com"),
  title: {
    default: "Apex Digital Bharat — Premium Google Business Profile management for India",
    template: "%s · Apex Digital Bharat",
  },
  description:
    "Premium Google Business Profile management for India's ambitious local businesses. Weekly content, review management, Q&A handled by our team. Starting at ₹1,999/month.",
  keywords: [
    "Google Business Profile management India",
    "GBP agency India",
    "GMB management India",
    "local SEO India",
    "Google My Business agency India",
    "Google Business Profile Delhi Mumbai Bangalore",
  ],
  openGraph: {
    title: "Apex Digital Bharat — Premium GBP management for India",
    description:
      "Where India's businesses get found online. Premium Google Business Profile management starting at ₹1,999/month.",
    url: "https://apexdigitalbharat.com",
    siteName: "Apex Digital Bharat",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Digital Bharat — Premium GBP management for India",
    description:
      "Where India's businesses get found online. Premium GBP management starting at ₹1,999/month.",
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
