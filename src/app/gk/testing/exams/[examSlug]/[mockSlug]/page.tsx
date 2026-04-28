"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import FullMockRunner from "@/components/gk/testing/FullMockRunner";
import TestPageLayout from "@/components/gk/testing/TestPageLayout";
import { ExamType, EXAM_META } from "@/components/gk/testing/constants";

export default function RunMockPage() {
  const params = useParams();
  const router = useRouter();

  const examSlug = ((params?.examSlug as string) ?? "").toLowerCase();
  const mockSlug = (params?.mockSlug as string) ?? "";

  const examType = examSlug.toUpperCase() as ExamType;
  const mockNumber = parseInt(mockSlug.replace(/^mock-/, ""), 10);

  const validExams = Object.keys(EXAM_META) as ExamType[];
  const isValid =
    validExams.includes(examType) &&
    Number.isFinite(mockNumber) &&
    mockNumber > 0;

  if (!isValid) {
    return (
      <div className="px-4 py-10 sm:py-16 max-w-2xl mx-auto text-center">
        <p className="text-base sm:text-lg font-black text-[#060818] dark:text-white mb-3">
          Invalid mock URL
        </p>
        <button
          onClick={() => router.push("/gk/testing/exams")}
          className="text-[#F59E0B] font-bold underline text-sm"
        >
          Back to all exams
        </button>
      </div>
    );
  }

  return (
    <TestPageLayout categoryName={`${examType} Mock ${mockNumber}`}>
      {(onComplete) => (
        <FullMockRunner
          examType={examType}
          mockNumber={mockNumber}
          onBack={() => router.push(`/gk/testing/exams/${examSlug}`)}
          onComplete={onComplete}
        />
      )}
    </TestPageLayout>
  );
}
