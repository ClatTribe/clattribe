"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// Remove Next.js Image import
// import Image from "next/image";
import { Calendar } from "lucide-react";
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
  content: string;
  img?: string;
  publish: boolean;
  created_at: string;
}

// Optimized Image Component for preview cards
const OptimizedPreviewImage = React.memo(({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  if (imageError || !src) {
    return (
      <div className={`bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-gray-500 ${className}`}>
        <div className="text-center">
          <div className="text-2xl mb-1">📚</div>
          <div className="text-sm">GK Post</div>
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

OptimizedPreviewImage.displayName = 'OptimizedPreviewImage';

export default function GkPreview() {
  const [posts, setPosts] = useState<GK[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("gk")
        .select("*")
        .eq("publish", true) // ✅ only published
        .order("created_at", { ascending: false })
        .limit(5); // ✅ only 5 latest GK posts

      if (!error && data) setPosts(data);
    } catch (err) {
      console.error("Error fetching GK posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
            The GK Corner
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {Array(5).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="aspect-[16/10] bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse"></div>
                <div className="p-5">
                  <div className="h-4 bg-slate-200 rounded animate-pulse mb-3"></div>
                  <div className="h-3 bg-slate-200 rounded animate-pulse w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!loading && posts.length === 0) {
    return (
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
            The GK Corner
          </h2>
          <p className="text-center py-10 text-gray-600">No GK posts available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
          The GK Corner
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {post.img && (
                <div className="aspect-[16/10] relative">
                  <OptimizedPreviewImage
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-slate-900 line-clamp-2 mb-3 hover:text-[#024687] transition-colors">
                  <Link href={`/gk/${post.slug}`}>{post.title}</Link>
                </h3>
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(post.created_at)}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All GK button */}
        <div className="mt-10 flex justify-center">
          <Link href="/gk">
            <button className="bg-[#024687] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#012a51] transition-colors duration-200">
              View All GK
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}