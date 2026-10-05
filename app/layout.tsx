import type { Metadata } from "next";
import { Italianno, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = "https://lucianverren.com";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "The Silence Behind Reality - Lucian Verren",
    template: "%s - Lucian Verren",
  },

  description:
    "The Silence Behind Reality by Lucian Verren explores perception, belief, influence, consciousness, human behavior, and the invisible structures shaping the reality we experience.",

  applicationName: "The Silence Behind Reality",

  authors: [
    {
      name: "Lucian Verren",
      url: siteUrl,
    },
  ],

  creator: "Lucian Verren",
  publisher: "Lucian Verren",

  keywords: [
    "The Silence Behind Reality",
    "Lucian Verren",
    "money",
    "influence",
    "perception",
    "belief",
    "consciousness",
    "psychology",
    "human behavior",
    "consciousness",
    "perception",
    "belief",
    "influence",
    "reality",
    "critical thinking",
    "philosophy",
    "self awareness",
    "digital book",
    "ebook",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "The Silence Behind Reality",
    title: "The Silence Behind Reality - Lucian Verren",
    description:
      "What if the reality you know was never the whole story? Discover The Silence Behind Reality by Lucian Verren.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "The Silence Behind Reality - Lucian Verren",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Silence Behind Reality — Lucian Verren",
    description: "What if the reality you know was never the whole story?",
    images: ["/og-image.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${italianno.variable} ${manrope.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
