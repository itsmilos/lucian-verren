import BookCTA from "@/components/BookCTA";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FacebookookPost from "@/components/FacebookPost";
import BookReaction from "@/components/BookReaction";

export default function Home() {
  return (
    <>
      <Hero />
      <BookCTA />
      <FacebookookPost />
      <BookReaction />
    </>
  );
}
