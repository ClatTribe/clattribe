import GKTestingEngine from "@/components/gk/TestingEngine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testing Engine - GK & Legal Portal | CLAT Tribe",
  description:
    "Take weekly mock tests, sectional tests, and PYQs under timed conditions.",
};

export default function TestingEnginePage() {
  return <GKTestingEngine />;
}
