"use client";
import React from "react";
import MockSelectionFlow from "@/components/gk/testing/MockSelectionFlow";
import { useRouter } from "next/navigation";

export default function ExamSelectionPage() {
  const router = useRouter();
  return (
    <div className="p-4 md:p-8">
      <MockSelectionFlow 
        onBack={() => router.push("/gk/testing")}
      />
    </div>
  );
}
