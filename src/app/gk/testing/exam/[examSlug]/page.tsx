"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import MockSelectionFlow from "@/components/gk/testing/MockSelectionFlow";
import { ExamType } from "@/components/gk/testing/constants";

export default function ExamMocksPage() {
  const params = useParams();
  const router = useRouter();
  const examSlug = params.examSlug as string;
  
  const examType = examSlug.toUpperCase() as ExamType;
  
  // Basic validation
  const validExams: ExamType[] = ["CLAT", "AILET", "NLAT", "MHCET"];
  if (!validExams.includes(examType)) {
    return <div>Invalid Exam</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <MockSelectionFlow 
        initialExam={examType} 
        onBack={() => router.push("/gk/testing")}
      />
    </div>
  );
}
