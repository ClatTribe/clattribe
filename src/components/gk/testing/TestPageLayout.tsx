"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FeedbackScreen from "./FeedbackScreen";
import { TestResult, MockQuestion } from "./constants";

export default function TestPageLayout({
  children,
  categoryName,
}: {
  children: (onComplete: (res: { 
    score: number; 
    total: number; 
    timeSpent: number;
    answers: (number | null)[];
    questions: MockQuestion[];
    timePerQuestion?: number[];
  }) => void) => React.ReactNode;
  categoryName: string;
}) {
  const router = useRouter();
  const [testResult, setTestResult] = React.useState<TestResult | null>(null);

  const handleTestComplete = (results: {
    score: number;
    total: number;
    timeSpent: number;
    answers: (number | null)[];
    questions: MockQuestion[];
    timePerQuestion?: number[];
  }) => {
    // Group by actual sections
    const sections: Record<string, { correct: number; total: number }> = {};
    
    // Define expected sections for specific exams to ensure "all options" (sections) are shown
    const expectedSections: Record<string, string[]> = {
      MHCET: [
        "Legal Aptitude & Reasoning",
        "GK & Current Affairs",
        "Logical Reasoning",
        "English",
        "Basic Mathematics"
      ],
      NLAT: [
        "Legal Reasoning",
        "Verbal Reasoning",
        "Logical Reasoning",
        "GK & Current Affairs",
        "Quantitative Techniques"
      ],
      CLAT: [
        "Legal Reasoning",
        "Current Affairs",
        "English Language",
        "Logical Reasoning",
        "Quantitative Techniques"
      ]
    };

    // Initialize with expected sections if category matches
    const examType = categoryName.split(' ')[0] as keyof typeof expectedSections;
    if (expectedSections[examType]) {
      expectedSections[examType].forEach(s => {
        sections[s] = { correct: 0, total: 0 };
      });
    }

    results.questions.forEach((q, i) => {
      const section = q.section || "General";
      if (!sections[section]) sections[section] = { correct: 0, total: 0 };
      sections[section].total++;
      if (results.answers[i] === q.correct) {
        sections[section].correct++;
      }
    });

    const breakdown = Object.entries(sections)
      .filter(([_, stats]) => stats.total > 0) // Only show sections that have questions in this mock
      .map(([topic, stats]) => ({
        topic,
        ...stats,
      }));
    
    // If user wants to see "ALL" even if 0, we can remove the filter.
    // The user said "show all options which is in exam", so I'll remove the filter but maybe sort them.
    const fullBreakdown = Object.entries(sections).map(([topic, stats]) => ({
      topic,
      ...stats,
    }));

    const suggestions = [];
    if (results.score < results.total) {
      suggestions.push(
        "Focus on the 'Doctrine of Pith and Substance' as your understanding of legislative powers seems slightly incomplete.",
      );
      suggestions.push(
        `Try to improve your reading speed; you spent ${Math.floor(results.timeSpent / 60)}m ${results.timeSpent % 60}s which is slightly above the target for this test.`,
      );
    } else {
      suggestions.push(
        `Excellent speed! You finished in ${Math.floor(results.timeSpent / 60)}m ${results.timeSpent % 60}s.`,
      );
      suggestions.push(
        "Your deductive reasoning is sharp. Keep practicing with 'Hard' difficulty mocks.",
      );
    }

    const newResult: TestResult & { timePerQuestion?: number[] } = {
      ...results,
      id: Math.random().toString(36).substr(2, 9),
      category: categoryName,
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      topicBreakdown: fullBreakdown,
      suggestions,
      timePerQuestion: results.timePerQuestion,
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
