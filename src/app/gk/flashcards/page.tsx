import GKFlashcards from "@/components/gk/Flashcards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flashcards - GK & Legal Portal | CLAT Tribe",
  description:
    "Memorize critical GK facts and Legal concepts using intelligent spaced repetition flashcards.",
};

export default function FlashcardsPage() {
  return <GKFlashcards />;
}
