"use client";
import React from "react";
import CustomTestBuilder from "@/components/gk/testing/CustomTestBuilder";
import { useRouter } from "next/navigation";

export default function CustomTestPage() {
  const router = useRouter();
  return (
    <div className="p-4 md:p-8">
      <CustomTestBuilder onBack={() => router.push("/gk/testing")} />
    </div>
  );
}
