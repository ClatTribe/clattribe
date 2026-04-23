"use client";
import React from "react";
import GKPYQTest from "@/components/gk/GKPYQTest";
import TestPageLayout from "@/components/gk/testing/TestPageLayout";
import { useRouter } from "next/navigation";

export default function PYQTestPage() {
  const router = useRouter();
  return (
    <TestPageLayout categoryName="PYQ Test">
      {(onComplete) => (
        <GKPYQTest
          onComplete={(score, total) => onComplete({ score, total, timeSpent: 1200 })}
          onBack={() => router.push("/gk/testing")}
        />
      )}
    </TestPageLayout>
  );
}
