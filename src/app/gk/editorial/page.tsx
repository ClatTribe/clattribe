import GKEditorial from "@/components/gk/Editorial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hindu Editorial for CLAT 2027 — Daily GK Capsule",
  description:
    "Read the latest CLAT-focused editorials and passages for Legal & GK preparation.",
};

export default function EditorialPage() {
  return <GKEditorial />;
}
