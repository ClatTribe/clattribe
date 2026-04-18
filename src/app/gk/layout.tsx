import "./gk.css";
import type { Metadata } from "next";
import GKAuthWrapper from "@/components/gk/GKAuthWrapper";

export const metadata: Metadata = {
  title: "CLAT Tribe GK Portal",
  description:
    "Master GK & Legal Reasoning for CLAT with daily editorials, flashcards, testing engine and more.",
};

export default function GKAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GKAuthWrapper>{children}</GKAuthWrapper>;
}
