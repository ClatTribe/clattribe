"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import React from "react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface BLOGS {
  id: string;
  title: string;
  slug: string;
  publish: boolean;
  img?: string;
}

// Optimized Image Component for thumbnails
const OptimizedThumbnail = React.memo(({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  if (imageError || !src) {
    return (
      <div className={`bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-gray-400 text-xs ${className}`}>
        <div className="text-center">
          <div className="text-lg">📝</div>
          <div className="text-xs">Blog</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-700 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-300 ${
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

export default function TrendingBlogs() {
  const [posts, setPosts] = useState<BLOGS[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("id, title, slug, publish, img")
        .eq("publish", true)
        .order("created_at", { ascending: false })
        .limit(4);

      if (!error && data) setPosts(data);
    } catch (err) {
      console.error("Error fetching trending Blog posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="block bg-[#0F172A] p-6 shadow-lg">
        <h2 className="mb-4 pb-2 text-3xl md:text-5xl font-serif font-bold text-white text-center">
          Trending Blogs
        </h2>
        <p className="text-slate-400">Loading...</p>
      </div>
    );
  }

  if (!loading && posts.length === 0) {
    return (
      <div className="block bg-[#0F172A] p-6 shadow-lg">
        <h2 className="mb-4 pb-2 text-3xl md:text-5xl font-serif font-bold text-white text-center">
          Trending Blogs
        </h2>
        <p className="text-slate-400">No trending posts available.</p>
      </div>
    );
  }

  return (
    <div className="block bg-[#0F172A] p-6 shadow-lg">
      <h2 className="mb-6 pb-2 text-3xl md:text-5xl font-serif font-bold text-white text-center">
        Trending Blogs
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/blogs/${post.slug}`} className="block group">
            <div className="flex flex-col">
              {post?.img && (
                <div className="overflow-hidden rounded-lg">
                  <OptimizedThumbnail
                    src={post.img}
                    alt={post.title}
                    className="w-full h-32 md:h-40 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <span className="mt-2 font-semibold text-sm md:text-base text-white line-clamp-2">
                {post.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}