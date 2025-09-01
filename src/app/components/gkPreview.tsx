"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

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
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!loading && posts.length === 0) {
    return <p className="text-center py-10">No GK posts available.</p>;
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
              View All 
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
