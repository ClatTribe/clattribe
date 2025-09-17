"use client"

import { useState, useEffect } from "react"
import { Search, Calendar, Newspaper } from "lucide-react"
import Link from "next/link"
import { createClient } from "@supabase/supabase-js"
import DefaultLayout from "../defaultlayout"
// Remove Next.js Image import
// import Image from "next/image"
import React from "react"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fjswchcothephgtzqbgq.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4",
)

interface GK {
  id: string
  title: string
  slug: string
  content: string
  img?: string
  publish: boolean
  created_at: string
}

// Optimized Image Component
const OptimizedImage = React.memo(({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  if (imageError || !src) {
    return (
      <div className={`bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-gray-500 text-sm ${className}`}>
        No Image
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
        style={{ objectFit: 'cover' }}
      />
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </div>
  )
})

OptimizedImage.displayName = 'OptimizedImage'

export default function GK() {
  const [posts, setPosts] = useState<GK[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPosts, setFilteredPosts] = useState<GK[]>([])

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.from("gk").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching posts:", error)
        setPosts([])
      } else {
        setPosts(data || [])
      }
    } catch (error) {
      console.error("Error fetching posts:", error)
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  // Filter posts based on search term and publication status
  useEffect(() => {
    let filtered = posts

    // Filter by publication status
    filtered = filtered.filter((post) => post.publish)

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.content.toLowerCase().includes(term),          
      )
    }

    setFilteredPosts(filtered)
  }, [searchTerm, posts])

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const truncateContent = (content: string, maxLength = 150) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + "..."
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="relative bg-gradient-to-r from-[#014688] to-[#0369a1] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Newspaper className="w-8 h-8 text-blue-200" />
                  <span className="text-blue-200 font-medium">The GK Corner</span>
                </div>
                <h1 className="text-5xl font-bold leading-tight"> EVERYTHING IN ONE PLACE</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse"></div>
                  <div className="p-8">
                    <div className="h-4 bg-slate-200 rounded-full animate-pulse mb-4"></div>
                    <div className="h-6 bg-slate-200 rounded-full animate-pulse mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded-full animate-pulse mb-6 w-3/4"></div>
                    <div className="h-4 bg-slate-200 rounded-full animate-pulse w-24"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="relative bg-gradient-to-r from-[#014688] to-[#0369a1] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Newspaper className="w-8 h-8 text-blue-200" />
                  <span className="text-blue-200 font-medium">The GK Corner</span>
                </div>
                <h1 className="text-5xl font-bold leading-tight"> EVERYTHING IN ONE PLACE</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search posts by title, content, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#014688] focus:ring-2 focus:ring-[#014688]/20 transition-all duration-200 text-slate-900 placeholder:text-slate-500"
                />
              </div>
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-[#014688]/10 hover:-translate-y-1 transition-all duration-300"
                >
                  {post.img && (
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <OptimizedImage
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                          post.publish ? "bg-[#014688] text-white" : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {post.publish ? "Publish" : "Draft"}
                      </span>
                      <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(post.created_at)}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-4 line-clamp-2 text-slate-900 group-hover:text-[#014688] transition-colors duration-200">
                      <Link href={`/gk/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>

                    <Link href={`/gk/${post.slug}`}>
                      <button className="inline-flex items-center text-[#014688] font-semibold hover:text-[#0369a1] transition-colors duration-200 group/btn">
                        Read more
                        <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-16 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Newspaper className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">No posts found</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {searchTerm
                    ? `No posts match your search for "${searchTerm}"`
                    : "No publish posts available yet"}
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="bg-[#014688] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0369a1] transition-colors duration-200"
                  >
                    Clear search
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  )
}