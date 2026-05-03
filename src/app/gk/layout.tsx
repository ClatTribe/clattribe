import "./gk.css";
import type { Metadata } from "next";
import GKAuthWrapper from "@/components/gk/GKAuthWrapper";

export const metadata: Metadata = {
  title: "Daily GK for CLAT 2027 | Editorials, News, Flashcards | CLAT Tribe",
  description:
    "Master GK & Legal Reasoning for CLAT with daily editorials, flashcards, testing engine and more.",
  alternates: { canonical: "/gk" },
};

export default function GKAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GKAuthWrapper>{children}</GKAuthWrapper>;
}
