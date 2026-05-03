import GKMonthlySummary from "@/components/gk/MonthlySummary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Summary - GK & Legal Portal | CLAT Tribe",
  description:
    "Review your monthly performance, insights, and study analytics.",
  alternates: { canonical: "/gk/monthly-summary" },
};

export default function MonthlySummaryPage() {
  return <GKMonthlySummary />;
}
