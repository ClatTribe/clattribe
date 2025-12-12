"use client"

import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import DefaultLayout from "../../defaultlayout"
import { createClient } from "@supabase/supabase-js"
import React from "react"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fjswchcothephgtzqbgq.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4",
)

type GK = {
  id: string
  title: string
  slug: string
  content: string
  img?: string
  publish: boolean
  created_at: string
}

// Optimized Hero Image Component
const OptimizedHeroImage = React.memo(({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  if (imageError || !src) {
    return (
      <div className={`bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-slate-400 text-lg ${className}`}>
        <div className="text-center">
          <div className="text-4xl mb-2">📄</div>
          <div>GK Article</div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {!imageLoaded && (
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse ${className}`}></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
        style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
      />
    </div>
  )
})

OptimizedHeroImage.displayName = 'OptimizedHeroImage'

export default function GKPage() {
  const params = useParams()
  const slug = params.slug as string

  const [post, setPost] = useState<GK | null>(null)
  const [loading, setLoading] = useState(true)
  const [estimatedReadTime, setEstimatedReadTime] = useState("")
  const [recentPosts, setRecentPosts] = useState<GK[]>([])

  // fetch single post
  const fetchPost = async (slugValue: string) => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slugValue)
        .eq("publish", true)
        .single()
      if (error) {
        console.error("[gkpage] Error fetching post:", error)
        setPost(null)
      } else {
        setPost((data as GK) || null)
      }
    } catch (err) {
      console.error("[gkpage] Unexpected error:", err)
      setPost(null)
    } finally {
      setLoading(false)
    }
  }

  // fetch recent posts
  const fetchRecentPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("title,slug")
        .eq("publish", true)
        .order("created_at", { ascending: false })
        .limit(5)
      if (!error && data) setRecentPosts(data as GK[])
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (slug) fetchPost(slug)
  }, [slug])

  useEffect(() => {
    fetchRecentPosts()
  }, [])

  // Strip HTML for word count
  const stripHtml = (html: string) => {
    const tmp = document.createElement("div")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  }

  // reading progress + read time
  useEffect(() => {
    if (post?.content) {
      const wordsPerMinute = 200
      const text = stripHtml(post.content)
      const words = text.trim().split(/\s+/).length
      const minutes = Math.max(1, Math.ceil(words / wordsPerMinute))
      setEstimatedReadTime(`${minutes} min read`)
    } else {
      setEstimatedReadTime("")
    }

    const progressBar = document.getElementById("reading-progress")
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      if (progressBar) progressBar.style.width = `${percent}%`
    }
    window.addEventListener("scroll", updateProgress)
    updateProgress()
    return () => window.removeEventListener("scroll", updateProgress)
  }, [post])

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="fixed top-0 left-0 z-[9999] w-full h-1 bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FB923C] transition-all duration-300"
            style={{ width: "0%" }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-800 rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-slate-800 rounded w-3/4 mb-6"></div>
            <div className="h-64 sm:h-96 bg-slate-800 rounded mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-800 rounded"></div>
              <div className="h-4 bg-slate-800 rounded w-5/6"></div>
              <div className="h-4 bg-slate-800 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="rounded-lg border border-slate-800 bg-slate-900 text-white shadow-sm p-12 text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-slate-400 mb-6">
              The GK post you are looking for does not exist or is not published.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <DefaultLayout>
      <div className="fixed top-0 left-0 z-[9999] w-full h-1 bg-slate-800">
        <div
          id="reading-progress"
          className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FB923C] transition-all duration-300"
          style={{ width: "0%" }}
        />
      </div>

      <div className="min-h-screen bg-slate-950">
        {/* Background decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl sm:w-[600px] sm:h-[600px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl sm:w-[800px] sm:h-[800px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* HERO IMAGE */}
          <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-12 border border-slate-800 bg-slate-900/50">
            <div className="relative w-full">
              <OptimizedHeroImage
                src={post.img || ""}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Breadcrumb */}
          <nav className="flex py-4 text-sm text-slate-400 mb-6 overflow-x-auto" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 whitespace-nowrap">
              <li>
                <Link href="/" className="hover:text-[#F59E0B] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link href="/gk" className="ml-1 hover:text-[#F59E0B] transition-colors">
                  GK
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1 text-slate-300 truncate max-w-[150px] sm:max-w-xs">{post.title}</span>
              </li>
            </ol>
          </nav>

          {/* GRID with Blog + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* MAIN BLOG */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6 text-sm sm:text-base text-slate-400">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {formatDate(post.created_at)}
                  </div>
                  {estimatedReadTime && (
                    <div className="flex items-center">
                      <svg className="h-5 w-5 mr-2 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {estimatedReadTime}
                    </div>
                  )}
                </div>
              </div>

              {/* HTML CONTENT RENDERING */}
              <div id="main-content" className="max-w-none mb-12 sm:mb-16">
                {/* Global styles for HTML content */}
                <style jsx global>{`
                  #main-content {
                    line-height: 1.8;
                    color: #cbd5e1 !important;
                  }
                  #main-content * {
                    color: #cbd5e1 !important;
                  }
                  #main-content p {
                    margin-bottom: 1.25rem;
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: #cbd5e1 !important;
                  }
                  #main-content span {
                    color: #cbd5e1 !important;
                  }
                  #main-content div {
                    color: #cbd5e1 !important;
                  }
                  #main-content h1 {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-top: 2.5rem;
                    margin-bottom: 1.25rem;
                    color: #f1f5f9 !important;
                    line-height: 1.3;
                  }
                  #main-content h2 {
                    font-size: 1.75rem;
                    font-weight: 600;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: #f1f5f9 !important;
                    line-height: 1.3;
                  }
                  #main-content h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-top: 1.75rem;
                    margin-bottom: 0.875rem;
                    color: #f1f5f9 !important;
                    line-height: 1.4;
                  }
                  #main-content h4 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                    color: #f1f5f9 !important;
                  }
                  #main-content ul,
                  #main-content ol {
                    margin: 1.5rem 0;
                    padding-left: 2rem;
                  }
                  #main-content li {
                    margin-bottom: 0.75rem;
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: #cbd5e1 !important;
                  }
                  #main-content ul li {
                    list-style-type: disc;
                  }
                  #main-content ol li {
                    list-style-type: decimal;
                  }
                  #main-content strong,
                  #main-content b {
                    font-weight: 600;
                    color: #f1f5f9 !important;
                  }
                  #main-content em,
                  #main-content i {
                    font-style: italic;
                    color: #cbd5e1 !important;
                  }
                  #main-content a {
                    color: #F59E0B !important;
                    text-decoration: underline;
                  }
                  #main-content a:hover {
                    color: #FB923C !important;
                  }
                  #main-content img {
                    max-width: 100%;
                    height: auto;
                    margin: 2rem 0;
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
                  }
                  #main-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 2rem 0;
                    font-size: 1rem;
                  }
                  #main-content table th,
                  #main-content table td {
                    border: 1px solid #334155;
                    padding: 0.75rem 1rem;
                    text-align: left;
                  }
                  #main-content table th {
                    background-color: #1e293b;
                    font-weight: 600;
                    color: #f1f5f9;
                  }
                  #main-content table tr:nth-child(even) {
                    background-color: #1e293b;
                  }
                  #main-content blockquote {
                    border-left: 4px solid #F59E0B;
                    padding-left: 1.5rem;
                    margin: 1.5rem 0;
                    font-style: italic;
                    color: #94a3b8;
                  }
                  #main-content code {
                    background-color: #1e293b;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.25rem;
                    font-family: monospace;
                    font-size: 0.95em;
                    color: #F59E0B;
                  }
                  #main-content pre {
                    background-color: #0f172a;
                    color: #e2e8f0;
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    overflow-x: auto;
                    margin: 1.5rem 0;
                    border: 1px solid #334155;
                  }
                  #main-content pre code {
                    background-color: transparent;
                    padding: 0;
                    color: inherit;
                  }
                  #main-content hr {
                    border: none;
                    border-top: 2px solid #334155;
                    margin: 2rem 0;
                  }
                  
                  @media (min-width: 640px) {
                    #main-content p,
                    #main-content li {
                      font-size: 1.125rem;
                    }
                    #main-content h1 {
                      font-size: 2.25rem;
                    }
                    #main-content h2 {
                      font-size: 1.875rem;
                    }
                    #main-content h3 {
                      font-size: 1.5rem;
                    }
                  }
                  
                  @media (min-width: 1024px) {
                    #main-content p,
                    #main-content li {
                      font-size: 1.125rem;
                    }
                    #main-content h1 {
                      font-size: 2.5rem;
                    }
                    #main-content h2 {
                      font-size: 2rem;
                    }
                    #main-content h3 {
                      font-size: 1.75rem;
                    }
                  }
                `}</style>
                
                {/* Render HTML content directly */}
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-5 sticky top-24">
                <h2 className="text-xl font-semibold text-[#F59E0B] mb-4 border-b border-slate-800 pb-2">
                  Recently Published
                </h2>
                <ul className="space-y-3">
                  {recentPosts.length > 0 ? (
                    recentPosts.map((rp) => (
                      <li key={rp.slug}>
                        <Link
                          href={`/gk/${rp.slug}`}
                          className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800/50 hover:text-[#F59E0B] transition-colors duration-200"
                        >
                          {rp.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="text-slate-500 text-sm px-3 py-2">No recent posts</li>
                  )}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}