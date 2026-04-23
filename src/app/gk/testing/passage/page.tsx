"use client";
import React from "react";
import GKPassageTest from "@/components/gk/PassageTest";
import TestPageLayout from "@/components/gk/testing/TestPageLayout";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function PassageTestPage() {
  const router = useRouter();
  return (
    <TestPageLayout categoryName="Passage Practice">
      {(onComplete) => (
        <div className="space-y-6">
          <button
            onClick={() => router.push("/gk/testing")}
            className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Engine
          </button>
          <GKPassageTest onComplete={onComplete} />
        </div>
      )}
    </TestPageLayout>
  );
}
