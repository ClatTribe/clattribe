"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface GK {
  id: string;
  title: string;
  slug: string;
  publish: boolean;
  img?: string;
}

export default function TrendingGk() {
  const [post, setPost] = useState<GK | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("gk")
        .select("id, title, slug, publish, img")
        .eq("publish", true)
        .order("created_at", { ascending: false })
        .limit(1) // ✅ only 1 latest blog
        .single(); // ✅ return a single object instead of array

      if (!error && data) setPost(data);
    } catch (err) {
      console.error("Error fetching trending GK post:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (loading) {
    return (
      <div className="block rounded-2xl bg-white p-6 shadow-lg transition-all duration-300">
        <h2 className="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-800">
          Trending #1
        </h2>
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!loading && !post) {
    return (
      <div className="block rounded-2xl bg-white p-6 shadow-lg transition-all duration-300">
        <h2 className="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-800">
          Trending #1
        </h2>
        <p className="text-gray-500">No trending posts available.</p>
      </div>
    );
  }

  return (
    <div className="block rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h2 className="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-800">
        Trending #1
      </h2>
      <Link href={`/gk/${post!.slug}`} className="flex items-center gap-4">
        {post?.img && (
          <Image
            src={post.img}
            alt={post.title}
            width={80}
            height={80}
            className="rounded-lg object-cover w-20 h-20"
          />
        )}
        <span className="font-bold text-xl text-gray-800 hover:text-[#0360b9]">
          {post?.title}
        </span>
      </Link>
    </div>
  );
}
