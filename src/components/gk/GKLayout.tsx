"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  ChevronDown,
  LayoutDashboard,
  FileText,
  Zap,
  Brain,
  BookMarked,
  CalendarDays,
  Search,
  X,
  Menu,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { gkSupabase } from "@/lib/gk-supabase";
interface GKLayoutProps {
  children: React.ReactNode;
  userName?: string;
  userEmail?: string;
}
interface SearchResult {
  id: string;
  title: string;
  type: "editorial" | "vault" | "flashcard";
  tab: string;
}
export default function GKLayout({
  children,
  userName = "Student",
  userEmail = "",
}: GKLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const activeTab = pathname.split("/").pop() || "dashboard";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");
  const [toast, setToast] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const searchRef = React.useRef<HTMLDivElement>(null);
  const initials =
    userName
      .split(" ")
      .filter(Boolean)
      .map((w) => w[0].toUpperCase())
      .join("")
      .substring(0, 2) || "ST";
  const firstName = userName.split(" ")[0] || "Student";
  React.useEffect(() => {
    setMounted(true);
    const saved = (
      typeof window !== "undefined"
        ? window.localStorage
        : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).getItem("gk_theme") as "light" | "dark" | null;
    if (saved) setTheme(saved);
  }, []);
  React.useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).setItem("gk_theme", theme);
  }, [theme, mounted]); /* Close search on outside click */
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []); /* Debounced search across Supabase */
  React.useEffect(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const timer = setTimeout(async () => {
      try {
        const SUPABASE_URL = "https://fjswchcothephgtzqbgq.supabase.co";
        const SUPABASE_KEY =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
          "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0." +
          "AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4";
        const results: SearchResult[] = []; /* Search editorials */
        const editResp = await fetch(
          `${SUPABASE_URL}/rest/v1/gk_editorials?title=ilike.*${encodeURIComponent(searchQuery)}*&select=id,title&limit=5`,
          {
            headers: {
              apikey: SUPABASE_KEY,
              Authorization: `Bearer ${SUPABASE_KEY}`,
            },
          },
        );
        if (editResp.ok) {
          const editRows: any[] = await editResp.json();
          editRows.forEach((r) =>
            results.push({
              id: r.id,
              title: r.title,
              type: "editorial",
              tab: "editorial",
            }),
          );
        } /* Search flashcards */
        const flashResp = await fetch(
          `${SUPABASE_URL}/rest/v1/flashcard?front=ilike.*${encodeURIComponent(searchQuery)}*&select=id,front&limit=5`,
          {
            headers: {
              apikey: SUPABASE_KEY,
              Authorization: `Bearer ${SUPABASE_KEY}`,
            },
          },
        );
        if (flashResp.ok) {
          const flashRows: any[] = await flashResp.json();
          flashRows.forEach((r) =>
            results.push({
              id: r.id,
              title: r.front,
              type: "flashcard",
              tab: "flashcards",
            }),
          );
        }
        setSearchResults(results);
      } catch {
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    showToast(`Switched to ${newTheme} mode`);
  };
  const handleSignOut = async () => {
    setIsProfileOpen(false);
    showToast("Signing out…");
    await gkSupabase.auth.signOut();
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).removeItem("gk_userName");
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).removeItem("gk_userEmail");
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).removeItem("gk_isSubscribed");
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).removeItem("gk_registrationDate");
    setTimeout(() => router.replace("/gk/login"), 800);
  };
  const handleSearchSelect = (result: SearchResult) => {
    router.push(`/gk/${result.tab}`); /* Store pending search target so the tab can deep-link if needed */
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).setItem(
      "gk_pendingSearch",
      JSON.stringify({ id: result.id, title: result.title, type: result.type }),
    );
    setSearchQuery("");
    setShowSearch(false);
  };
  const navLinks = [
    { id: "dashboard", name: "Dashboard", icon: LayoutDashboard, badge: null },
    { id: "editorial", name: "Editorials", icon: FileText, badge: "NEW" },
    { id: "flashcards", name: "Flashcards", icon: Zap, badge: null },
    { id: "testing", name: "Testing Engine", icon: Brain, badge: "NEW" },
    { id: "vault", name: "GK Vault", icon: BookMarked, badge: null },
    {
      id: "monthly-summary",
      name: "Monthly Summary",
      icon: CalendarDays,
      badge: null,
    },
  ];
  return (
    <div
      className={`flex flex-col gk-portal${theme === "dark" ? " dark" : ""} min-h-screen bg-white dark:bg-[#060818] font-sans text-[#060818] dark:text-white transition-colors duration-300 relative`}
    >
      {" "}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-auto z-[100] bg-[#060818] dark:bg-[#F59E0B] text-white dark:text-[#060818] px-6 py-3 rounded-2xl font-bold shadow-2xl border border-white/10 text-center"
        >
          {" "}
          {toast}{" "}
        </motion.div>
      )}{" "}
      {/* clattribe.com header */}{" "}
      <header className="sticky top-0 z-[60] bg-[#060818]/80 backdrop-blur-md border-b border-white/[0.08] shadow-[0_1px_24px_rgba(0,0,0,0.45)]">
        {" "}
        <div className="mx-auto px-4 py-3 flex items-center justify-between">
          {" "}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white/70 hover:text-white transition-colors"
            >
              <Menu size={24} />
            </button>
            <a
              href="https://www.clattribe.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="https://www.clattribe.com/heading.png"
                alt="CLAT Tribe"
                className="h-8 md:h-9 w-auto"
              />{" "}
            </a>{" "}
          </div>
          <div className="hidden md:flex items-center gap-5 text-[13px] text-white/75">
            {" "}
            <a
              href="https://www.clattribe.com"
              className="hover:text-white transition-colors"
            >
              Home
            </a>{" "}
            <div className="relative group">
              {" "}
              <button className="flex items-center gap-1 hover:text-white transition-colors bg-transparent border-0 cursor-pointer text-[13px] text-white/75">
                {" "}
                About Us <ChevronDown className="w-3 h-3" />{" "}
              </button>{" "}
              <div className="absolute top-full left-0 mt-2 w-44 bg-[#0d1235] border border-white/10 rounded-lg shadow-xl py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                {" "}
                <a
                  href="https://www.clattribe.com/our-team"
                  className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Our Team
                </a>{" "}
                <a
                  href="https://www.clattribe.com/our-courses"
                  className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Our Courses
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <a
              href="https://www.clattribe.com"
              className="hover:text-white transition-colors"
            >
              DSB Challenge
            </a>{" "}
            <a
              href="https://www.clattribe.com/clat-2027-starter-kit"
              className="hover:text-white transition-colors"
            >
              CLAT 2027 Starter Kit
            </a>{" "}
            <button
              onClick={() => router.push("/gk/flashcards")}
              className="hover:text-white transition-colors bg-transparent border-0 cursor-pointer text-[13px] text-white/75"
            >
              Flashcards
            </button>{" "}
            <a
              href="https://www.clattribe.com/blogs"
              className="hover:text-white transition-colors"
            >
              Blogs
            </a>{" "}
            <a
              href="https://www.clattribe.com/clat-gk-vault"
              className="hover:text-white transition-colors"
            >
              CLAT GK Vault
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      <div className="flex flex-1 overflow-hidden relative">
        {" "}
        {/* Sidebar Backdrop */}{" "}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#060818]/60 backdrop-blur-sm z-[70] md:hidden"
            />
          )}
        </AnimatePresence>
        <nav
          className={`fixed md:relative inset-y-0 left-0 z-[80] bg-white dark:bg-[#060818] border-r border-gray-100 dark:border-white/5 h-full flex flex-col overflow-y-auto w-64 md:w-56 shrink-0 transition-all duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          {/* Mobile Sidebar Close Button */}
          <div className="flex md:hidden items-center justify-between p-4 border-b border-gray-100 dark:border-white/10 mb-2">
            <img
              src="https://www.clattribe.com/heading.png"
              alt="CLAT Tribe"
              className="h-6 w-auto brightness-0 dark:brightness-100"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          {" "}
          {/* Search bar */}{" "}
          <div className="px-3 pt-4 pb-2" ref={searchRef}>
            {" "}
            <div className="relative">
              {" "}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 focus-within:border-[#F59E0B]/50 transition-colors">
                {" "}
                <Search size={14} className="text-gray-400 shrink-0" />{" "}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearch(true);
                  }}
                  onFocus={() => setShowSearch(true)}
                  placeholder="Search GK…"
                  className="bg-transparent text-xs font-medium text-gray-700 dark:text-gray-300 placeholder:text-gray-400 outline-none flex-1 min-w-0"
                />{" "}
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {" "}
                    <X size={12} />{" "}
                  </button>
                )}{" "}
              </div>{" "}
              {/* Search dropdown */}{" "}
              <AnimatePresence>
                {" "}
                {showSearch && searchQuery.length >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-[#0d1235] border border-gray-100 dark:border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
                  >
                    {" "}
                    {isSearching ? (
                      <div className="px-4 py-3 text-xs text-gray-400 font-medium text-center">
                        Searching…
                      </div>
                    ) : searchResults.length === 0 ? (
                      <div className="px-4 py-3 text-xs text-gray-400 font-medium text-center">
                        No results found
                      </div>
                    ) : (
                      <div className="py-1">
                        {" "}
                        {searchResults.map((r) => (
                          <button
                            key={`${r.type}-${r.id}`}
                            onClick={() => handleSearchSelect(r)}
                            className="w-full flex items-center gap-2.5 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left"
                          >
                            {" "}
                            <div
                              className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${r.type === "editorial" ? "bg-blue-100 text-blue-600" : r.type === "flashcard" ? "bg-amber-100 text-amber-600" : "bg-green-100 text-green-600"}`}
                            >
                              {" "}
                              {r.type === "editorial" ? (
                                <FileText size={10} />
                              ) : r.type === "flashcard" ? (
                                <Zap size={10} />
                              ) : (
                                <BookMarked size={10} />
                              )}{" "}
                            </div>{" "}
                            <div className="flex-1 min-w-0">
                              {" "}
                              <p className="text-xs font-semibold text-gray-800 dark:text-white truncate">
                                {r.title}
                              </p>{" "}
                              <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                                {r.type}
                              </p>{" "}
                            </div>{" "}
                          </button>
                        ))}{" "}
                      </div>
                    )}{" "}
                  </motion.div>
                )}{" "}
              </AnimatePresence>{" "}
            </div>{" "}
          </div>{" "}
          {/* Nav links */}{" "}
          <div className="flex flex-col gap-0.5 px-3 flex-1 pt-2 pb-4">
            {" "}
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <Link
                  href={`/gk/${link.id}`}
                  key={link.id}

                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${isActive ? "bg-amber-50 dark:bg-amber-500/10 text-amber-500" : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-800 dark:hover:text-white"}`}
                >
                  {" "}
                  <Icon size={18} className="shrink-0" />{" "}
                  <span className="text-sm font-medium leading-none flex-1">
                    {link.name}
                  </span>{" "}
                  {link.badge && !isActive && (
                    <span className="text-[8px] font-black bg-[#F59E0B] text-[#060818] px-1.5 py-0.5 rounded-full uppercase tracking-wide shrink-0">
                      {" "}
                      {link.badge}{" "}
                    </span>
                  )}{" "}
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  )}{" "}
                </Link>
              );
            })}{" "}
          </div>{" "}
          {/* Mobile: Additional Site Links */}{" "}
          <div className="md:hidden px-3 pt-2 pb-4 space-y-1">
            <div className="h-px bg-gray-100 dark:bg-white/10 my-4 mx-2" />
            <p className="px-3 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
              CLAT Tribe Sites
            </p>
            <a
              href="https://www.clattribe.com"
              className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="https://www.clattribe.com/blogs"
              className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Blogs
            </a>
          </div>
          {/* Profile footer */}{" "}
          <div className="px-3 pb-6 md:pb-4 pt-2 border-t border-gray-100 dark:border-white/10 mt-auto">
            {" "}
            <div
              onClick={() => router.push("/gk/profile")}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${activeTab === "profile" ? "bg-amber-50 text-amber-500" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"}`}
            >
              {" "}
              <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                {" "}
                <User size={13} />{" "}
              </div>{" "}
              <div className="flex flex-col min-w-0 flex-1 leading-tight">
                {" "}
                <span className="text-xs font-semibold text-gray-800 dark:text-white truncate">
                  {userName}
                </span>{" "}
                <span className="text-[10px] text-gray-400 truncate">
                  {userEmail}
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </nav>{" "}
        <main className="flex-1 overflow-auto w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            {children}
          </div>
        </main>{" "}
      </div>{" "}
    </div>
  );
}
