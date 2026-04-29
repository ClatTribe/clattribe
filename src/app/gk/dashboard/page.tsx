import GKDashboard from "@/components/gk/Dashboard";
import PortalPaywall from "@/components/gk/PortalPaywall";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - GK & Legal Portal | CLAT Tribe",
  description:
    "Track your overall progress, streaks, accuracy, and quick start activities on CLAT Tribe.",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Paywall: only shown when trial has expired and user hasn't paid. Auto-hidden otherwise. */}
      <PortalPaywall />
      <GKDashboard />
    </div>
  );
}
