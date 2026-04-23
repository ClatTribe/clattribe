"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FeedbackScreen from "./FeedbackScreen";
import { TestResult } from "./constants";

export default function TestPageLayout({
  children,
  categoryName,
}: {
  children: (onComplete: (res: { score: number; total: number; timeSpent: number }) => void) => React.ReactNode;
  categoryName: string;
}) {
  const router = useRouter();
  const [testResult, setTestResult] = React.useState<TestResult | null>(null);

  const handleTestComplete = (results: {
    score: number;
    total: number;
    timeSpent: number;
  }) => {
    const breakdown = [
      {
        topic: "Legal Reasoning",
        correct: results.score,
        total: results.total,
      },
      {
        topic: "Reading Comprehension",
        correct: Math.max(0, results.score - 1),
        total: results.total,
      },
    ];

    const suggestions = [];
    if (results.score < results.total) {
      suggestions.push(
        "Focus on the 'Doctrine of Pith and Substance' as your understanding of legislative powers seems slightly incomplete.",
      );
      suggestions.push(
        `Try to improve your reading speed; you spent ${Math.floor(results.timeSpent / 60)}m ${results.timeSpent % 60}s which is slightly above the target for this passage.`,
      );
    } else {
      suggestions.push(
        `Excellent speed! You finished in ${Math.floor(results.timeSpent / 60)}m ${results.timeSpent % 60}s.`,
      );
      suggestions.push(
        "Your deductive reasoning is sharp. Keep practicing with 'Hard' difficulty passages.",
      );
    }

    const newResult: TestResult = {
      ...results,
      id: Math.random().toString(36).substr(2, 9),
      category: categoryName,
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      topicBreakdown: breakdown,
      suggestions,
    };

    setTestResult(newResult);
    
    // Save to history
    const saved = localStorage.getItem("clat_test_history");
    const history = saved ? JSON.parse(saved) : [];
    const newHistory = [newResult, ...history];
    localStorage.setItem("clat_test_history", JSON.stringify(newHistory));
  };

  if (testResult) {
    return (
      <div className="p-4 md:p-8">
        <FeedbackScreen
          result={testResult}
          onBack={() => router.push("/gk/testing")}
        />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      {children(handleTestComplete)}
    </div>
  );
}
