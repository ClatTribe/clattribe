import { useEffect, useRef, useState } from "react";
import {
  Users,
  TrendingUp,
  HeartPulse,
  Flag,
  Play,
  Pause,
  StepBack,
  StepForward,
  X,
  LucideIcon,
} from "lucide-react";

/* ---------------- CONSTANTS ---------------- */

const ACCENT = "#f9a01b";

/* ---------------- TYPES ---------------- */

type AudioLog = {
  id: number;
  title: string;
  duration: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  audio: string;
};

/* ---------------- DATA ---------------- */

const audioLogs: AudioLog[] = [
  {
    id: 1,
    title: "Managing Parental Expectations",
    duration: "1:42",
    description:
      "That conversation where I explained why mock scores matter more than perfect attendance.",
    icon: Users,
    tags: ["Family Pressure", "Communication", "Boundaries"],
    audio: "/audio/CLAT - Parental expectations.m4a",
  },
//   {
//     id: 2,
//     title: "The February Motivation Dip",
//     duration: "5:48",
//     description:
//       "Woke up today and just stared at my books. The exact self-talk I used.",
//     icon: TrendingUp,
//     tags: ["Burnout", "Self-Motivation", "Recovery"],
//     audio: "/audio/CLAT - Exam day.m4a",
//   },
  {
    id: 2,
    title: "One Week Before D-Day",
    duration: "1:10",
    description:
      "Should I study more or rest? My exact checklist for the final 7 days.",
    icon: HeartPulse,
    tags: ["Anxiety", "Last Week", "Mental Prep"],
    audio: "/audio/CLAT - One week before exam.m4a",
  },
  {
    id: 3,
    title: "From Home to Exam Hall",
    duration: "1:18",
    description:
      "Minute-by-minute: What I ate, when I left, and exam-day nerves.",
    icon: Flag,
    tags: ["Exam Day", "Routine", "Peak Performance"],
    audio: "/audio/CLAT - Exam day.m4a",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function MindJournalsSection() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentLog =
    currentIndex !== null ? audioLogs[currentIndex] : null;

  /* ---------------- AUDIO CONTROLS ---------------- */

  const playAudio = (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentIndex(index);
    setProgress(0);

    audio.src = audioLogs[index].audio;
    audio.load();

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((err: Error) => {
        console.error("Playback failed:", err);
        setIsPlaying(false);
      });
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentIndex === null) {
      playAudio(0);
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err: Error) =>
          console.error("Playback failed:", err)
        );
    }
  };

  const next = () => {
    if (currentIndex === null) return;
    playAudio((currentIndex + 1) % audioLogs.length);
  };

  const prev = () => {
    if (currentIndex === null) return;
    playAudio(
      (currentIndex - 1 + audioLogs.length) % audioLogs.length
    );
  };

  const closePlayer = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setCurrentIndex(null);
    setIsPlaying(false);
    setProgress(0);
  };

  /* ---------------- EFFECTS ---------------- */

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress(
          (audio.currentTime / audio.duration) * 100
        );
      }
    };

    const handleEnded = () => {
      const nextIdx =
        currentIndex !== null
          ? (currentIndex + 1) % audioLogs.length
          : 0;
      playAudio(nextIdx);
    };

    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, [currentIndex]);

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-slate-950 px-4 pb-32">
      <div className="max-w-4xl mx-auto pt-10">
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-6">
            <span className="bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Unfiltered Voice Notes
            </span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm">
            Raw audio clips from AIR 1's private prep diary.
          </p>
        </div>

        <div className="space-y-4">
          {audioLogs.map((log, index: number) => {
            const Icon = log.icon;
            const active = currentIndex === index;

            return (
              <div
                key={log.id}
                onClick={() => playAudio(index)}
                className={`cursor-pointer rounded-2xl border p-6 transition-all ${
                  active
                    ? "border-orange-500/50 bg-slate-900/50"
                    : "border-slate-800/50 hover:border-slate-700 hover:bg-slate-900/40"
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: active
                        ? ACCENT
                        : `${ACCENT}20`,
                      color: active ? "#000" : ACCENT,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold ${
                        active
                          ? "text-orange-400"
                          : "text-white"
                      }`}
                    >
                      {log.title}
                    </h3>
                  </div>

                  <span className="px-4 py-1 rounded-full text-xs font-black bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    {log.duration}
                  </span>
                </div>

                <p className="text-slate-400 mb-4">
                  {log.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {log.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-bold rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PLAYER */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-slate-900/95 border-t border-slate-800 transition-transform ${
          currentLog ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="h-1" style={{ width: `${progress}%`, background: ACCENT }} />

        <div className="max-w-4xl mx-auto flex items-center gap-4 px-4 py-4">
          <button onClick={closePlayer}>
            <X />
          </button>

          <div className="flex-1">
            <p className="font-bold text-white">{currentLog?.title}</p>
            <p className="text-sm text-orange-400">
              {isPlaying ? "Now Playing" : "Paused"}
            </p>
          </div>

          <button onClick={prev}>
            <StepBack />
          </button>

          <button
            onClick={togglePlay}
            style={{ backgroundColor: ACCENT }}
            className="p-4 rounded-full"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <button onClick={next}>
            <StepForward />
          </button>
        </div>
      </div>

      <audio ref={audioRef} preload="metadata" />
    </div>
  );
}
