"use client";

import React from "react";
import { User } from "lucide-react";
import GKSubscriptionModal from "@/components/gk/SubscriptionModal";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  const [showSubModal, setShowSubModal] = React.useState(false);

  const [accuracy, setAccuracy] = React.useState<string | null>(null);
  const [readingSpeed, setReadingSpeed] = React.useState<string | null>(null);
  const [quizzesTaken, setQuizzesTaken] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setUserName(window.localStorage.getItem("gk_userName") || "");
      setUserEmail(window.localStorage.getItem("gk_userEmail") || "");
      setIsSubscribed(
        window.localStorage.getItem("gk_isSubscribed") === "true",
      );

      setAccuracy(window.localStorage.getItem("gk_accuracy"));
      setReadingSpeed(window.localStorage.getItem("gk_readingSpeed"));
      setQuizzesTaken(window.localStorage.getItem("gk_quizzesTaken"));
    }
  }, []);

  const handleSubscribe = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("gk_isSubscribed", "true");
    }
    setIsSubscribed(true);
    setShowSubModal(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-24 h-24 bg-[#060818] dark:bg-white/10 rounded-full mb-6 flex items-center justify-center text-white dark:text-gray-400 border-4 border-[#F59E0B]/20">
          <User className="text-[#F59E0B]" size={40} />
        </div>

        <h2 className="text-3xl font-black mb-2 text-[#060818] dark:text-white">
          {userName || "Student"}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">
          {userEmail}
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-8 font-bold uppercase tracking-widest text-xs">
          CLAT 2025 Aspirant • {isSubscribed ? "Premium Member" : "Free Trial"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
              Accuracy
            </p>
            <p className="text-4xl font-black text-[#060818] dark:text-white">
              {accuracy && accuracy !== "0" ? `${accuracy}%` : "--"}
            </p>
          </div>

          <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
              Reading Speed
            </p>
            <p className="text-4xl font-black text-[#060818] dark:text-white">
              {readingSpeed && readingSpeed !== "0"
                ? `${readingSpeed} wpm`
                : "--"}
            </p>
          </div>

          <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
              Quizzes Taken
            </p>
            <p className="text-4xl font-black text-[#060818] dark:text-white">
              {quizzesTaken || "0"}
            </p>
          </div>
        </div>

        {!isSubscribed && (
          <button
            onClick={() => setShowSubModal(true)}
            className="mt-12 bg-[#F59E0B] text-[#060818] px-10 py-4 rounded-2xl font-black shadow-xl hover:scale-[1.02] transition-all"
          >
            Upgrade to Premium
          </button>
        )}
      </div>

      {showSubModal && (
        <GKSubscriptionModal
          onSubscribe={handleSubscribe}
          onClose={() => setShowSubModal(false)}
        />
      )}
    </>
  );
}
