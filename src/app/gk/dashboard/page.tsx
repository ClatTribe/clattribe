import GKDashboard from "@/components/gk/Dashboard";
import PortalPaywall from "@/components/gk/PortalPaywall";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My CLAT GK Dashboard — Streaks, Targets & Daily Reads",
  description:
    "Track your daily targets, reading speed, and CLAT prep progress on CLAT Tribe — India's #1 GK platform for CLAT.",
  alternates: { canonical: "/gk/dashboard" },
  openGraph: {
    title: "Dashboard | CLAT Tribe",
    description:
      "Your personal CLAT prep dashboard — daily targets, reading speed, and progress in one place.",
    url: "https://www.clattribe.com/gk/dashboard",
    type: "website",
    siteName: "CLAT Tribe",
    images: [
      { url: "/clattribe.png", width: 1200, height: 630, alt: "CLAT Tribe Dashboard" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | CLAT Tribe",
    description:
      "Your personal CLAT prep dashboard — daily targets, reading speed, and progress in one place.",
  },
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* SSR-only SEO header for crawlers. Visible Dashboard renders its own personalized greeting. */}
      <header className="sr-only">
        <h1>My CLAT GK Dashboard - Streaks, Targets & Daily Reads</h1>
        <p>Track your daily editorial reading streak, weekly mock-test scores, GK accuracy, and personalized study targets in one CLAT-prep dashboard.</p>
      </header>
      {/* Paywall: only shown when trial has expired and user hasn't paid. Auto-hidden otherwise. */}
      <PortalPaywall />
      <GKDashboard />
    </div>
  );
}
