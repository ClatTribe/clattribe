"use client";
import React from "react";
import GKWeeklyTest from "@/components/gk/GKWeeklyTest";
import TestPageLayout from "@/components/gk/testing/TestPageLayout";
import { useRouter } from "next/navigation";

export default function WeeklyTestPage() {
  const router = useRouter();
  return (
    <TestPageLayout categoryName="Weekly Quiz">
      {(onComplete) => (
        <GKWeeklyTest
          onComplete={onComplete}
          onBack={() => router.push("/gk/testing")}
        />
      )}
    </TestPageLayout>
  );
}
