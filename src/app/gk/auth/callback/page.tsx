"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { gkSupabase } from "@/lib/gk-supabase";

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState("Signing you in...");

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Handle PKCE flow (code in query params)
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (code) {
          const { data, error } =
            await gkSupabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
          if (data.session?.user) {
            const user = data.session.user;
            await gkSupabase.from("gk_users").upsert(
              {
                email: user.email,
                name:
                  user.user_metadata?.full_name ||
                  user.user_metadata?.name ||
                  "",
                avatar_url: user.user_metadata?.avatar_url || "",
                last_login: new Date().toISOString(),
              },
              { onConflict: "email" },
            );
            setStatus("Login successful! Redirecting...");
          }
        } else {
          // Handle implicit flow (tokens in hash fragment)
          const hash = window.location.hash;
          if (hash && hash.includes("access_token")) {
            const {
              data: { session },
            } = await gkSupabase.auth.getSession();
            if (session?.user) {
              await gkSupabase.from("gk_users").upsert(
                {
                  email: session.user.email,
                  name: session.user.user_metadata?.full_name || "",
                  avatar_url: session.user.user_metadata?.avatar_url || "",
                  last_login: new Date().toISOString(),
                },
                { onConflict: "email" },
              );
              setStatus("Login successful! Redirecting...");
            }
          } else {
            // Check if already have a session
            const {
              data: { session },
            } = await gkSupabase.auth.getSession();
            if (session?.user) {
              setStatus("Already signed in! Redirecting...");
            } else {
              setStatus("Login failed. Redirecting...");
            }
          }
        }
      } catch (err) {
        console.error("Auth callback error:", err);
        setStatus("Login failed. Redirecting...");
      } finally {
        setTimeout(() => router.replace("/gk/dashboard"), 1000);
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className="min-h-screen bg-[#060818] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-[#F59E0B] border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-white text-lg font-medium">{status}</p>
      </div>
    </div>
  );
}
