"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// Remove Next.js Image import
// import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
import React from "react";

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

// Optimized Image Component for small thumbnails
const OptimizedThumbnail = React.memo(({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  if (imageError || !src) {
    return (
      <div className={`bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-gray-500 text-xs ${className}`}>
        <div className="text-center">
          <div className="text-lg">📄</div>
          <div className="text-xs">GK</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
});

OptimizedThumbnail.displayName = 'OptimizedThumbnail';

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
          <OptimizedThumbnail
            src={post.img}
            alt={post.title}
            className="rounded-lg w-20 h-20"
          />
        )}
        <span className="font-bold text-xl text-gray-800 hover:text-[#0360b9]">
          {post?.title}
        </span>
      </Link>
    </div>
  );
}