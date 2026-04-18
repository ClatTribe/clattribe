import GKDashboard from "@/components/gk/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - GK & Legal Portal | CLAT Tribe",
  description:
    "Track your overall progress, streaks, accuracy, and quick start activities on CLAT Tribe.",
};

export default function DashboardPage() {
  return <GKDashboard />;
}
