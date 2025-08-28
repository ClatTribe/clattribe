"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fjswchcothephgtzqbgq.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4",
)

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  meta_title: string;
  metades: string;
  keywords?: string;
  img?: string;
  published: boolean;
  created_at: string;
}

export default function BlogsPreview() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("blogs_data")
        .select("*")
        .eq("published", true) // only published
        .order("created_at", { ascending: false })
        .limit(5); // 👈 only 5 latest blogs

      if (!error && data) setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
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
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
          Our Blogs
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {post.img && (
                <div className="aspect-[16/10] relative">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-slate-900 line-clamp-2 mb-3">
                  <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h3>
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(post.created_at)}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blogs button */}
        <div className="mt-10 flex justify-center">
          <Link href="/blogs">
            <button className="bg-[#024687] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#C82333] transition-colors duration-200">
              View All Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
