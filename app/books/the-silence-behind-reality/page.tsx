import type { Metadata } from "next";
import ProductPage from "./ProductPage";

export const metadata: Metadata = {
  title: "The Silence Behind Reality - Lucian Verren",

  description:
    "Read The Silence Behind Reality by Lucian Verren, a digital book exploring perception, influence, belief, consciousness, and the hidden structures shaping the reality we experience.",

  alternates: {
    canonical: "https://lucianverren.com/products/the-silence-behind-reality",
  },

  openGraph: {
    title: "The Silence Behind Reality — Lucian Verren",
    description: "Discover The Silence Behind Reality by Lucian Verren.",
    url: "https://lucianverren.com/products/the-silence-behind-reality",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Silence Behind Reality by Lucian Verren",
      },
    ],
  },
};

export default function Page() {
  return <ProductPage />;
}
