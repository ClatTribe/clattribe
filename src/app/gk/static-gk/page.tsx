import StaticGK from "@/components/gk/StaticGK";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Static GK - GK & Legal Portal | CLAT Tribe",
  description:
    "Master constitutional GK, legal maxims, landmark SC cases and polity for CLAT, AILET, NLAT and MHCET Law.",
};

export default function StaticGKPage() {
  return <StaticGK />;
}
