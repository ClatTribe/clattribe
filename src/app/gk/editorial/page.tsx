import GKEditorial from "@/components/gk/Editorial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorials - GK & Legal Portal | CLAT Tribe",
  description:
    "Read the latest CLAT-focused editorials and passages for Legal & GK preparation.",
};

export default function EditorialPage() {
  return <GKEditorial />;
}
