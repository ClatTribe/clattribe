import GKVault from "@/components/gk/Vault";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLAT Current Affairs Vault — Daily Legal & GK News (May 2026)",
  description:
    "Access the comprehensive vault of current affairs and static GK resources.",
  alternates: { canonical: "/gk/vault" },
};

export default function VaultPage() {
  return <GKVault />;
}
