import GKVault from "@/components/gk/Vault";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GK Vault - GK & Legal Portal | CLAT Tribe",
  description:
    "Access the comprehensive vault of current affairs and static GK resources.",
};

export default function VaultPage() {
  return <GKVault />;
}
