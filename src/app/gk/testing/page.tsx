import GKTestingEngine from "@/components/gk/TestingEngine";
import MocksUnlockBanner from "@/components/gk/MocksUnlockBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testing Engine - GK & Legal Portal | CLAT Tribe",
  description:
    "Take weekly mock tests, sectional tests, and PYQs under timed conditions.",
  alternates: { canonical: "/gk/testing" },
};

export default function TestingEnginePage() {
  return (
    <div className="space-y-8">
      {/* Banner: hidden once user has lifetime mocks access. */}
      <MocksUnlockBanner />
      <GKTestingEngine />
    </div>
  );
}
