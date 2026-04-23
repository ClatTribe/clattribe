"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import FullMockRunner from "@/components/gk/testing/FullMockRunner";
import TestPageLayout from "@/components/gk/testing/TestPageLayout";
import { ExamType } from "@/components/gk/testing/constants";

export default function RunMockPage() {
  const params = useParams();
  const router = useRouter();
  const examSlug = params.examSlug as string;
  const mockSlug = params.mockSlug as string; // e.g., "mock-1"
  
  const examType = examSlug.toUpperCase() as ExamType;
  const mockNumber = parseInt(mockSlug.replace("mock-", ""));

  return (
    <TestPageLayout categoryName={`${examType} Mock ${mockNumber}`}>
      {(onComplete) => (
        <FullMockRunner
          examType={examType}
          mockNumber={mockNumber}
          onBack={() => router.back()}
          onComplete={onComplete}
        />
      )}
    </TestPageLayout>
  );
}
