"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import DefaultLayout from "../../defaultlayout"
import Image from "next/image"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fjswchcothephgtzqbgq.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4",
)

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  meta_title: string
  metades: string
  keywords?: string
  img?: string
  published: boolean
  created_at: string
}

interface Comment {
  id: string
  post_id: string
  user: string
  text: string
  isApproved: boolean
  isReply: boolean
  created_at: string
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [mobile, setMobile] = useState("desktop")
  const [comments, setComments] = useState<Comment[]>([])
  const [commentData, setCommentData] = useState({ name: "", comment: "" })
  const [estimatedReadTime, setEstimatedReadTime] = useState("5 min read")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fetchPost = async (slug: string) => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("blogs_data")
        .select("*")
        .eq("slug", slug)
        .eq("published", true) // Only show published posts
        .single()

      if (error) {
        console.error("Error fetching post:", error)
        setPost(null)
      } else {
        setPost(data)
      }
    } catch (error) {
      console.error("Error fetching post:", error)
      setPost(null)
    } finally {
      setLoading(false)
    }
  }

  const fetchComments = async (postId: string) => {
    const { data } = await supabase.from("comments").select("*").eq("post_id", postId).eq("isApproved", true)

    setComments((data as Comment[]) || [])
  }

  const addComment = async () => {
    if (!commentData.name.trim() || !commentData.comment.trim()) {
      alert("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    const newComment = {
      post_id: post?.id,
      user: commentData.name.trim(),
      text: commentData.comment.trim(),
      isApproved: false,
      isReply: false,
      created_at: new Date().toISOString(),
    }

    const { data, error } = await supabase.from("comments").insert(newComment).select()

    if (data && data[0]) {
      setCommentData({ name: "", comment: "" })
      alert("Comment submitted successfully! It will appear after admin approval.")
    } else {
      alert("Error submitting comment. Please try again.")
    }
    setIsSubmitting(false)
  }

  const handleShare = (platform: string) => {
    const url = `${window.location.origin}/blog/${post?.slug}`
    const title = `${post?.title} | CLAT Tribe`
    const description = post?.metades || post?.title || "Expert CLAT preparation insights"

    switch (platform) {
      case "twitter":
        const twitterText = `${title}\n\n${description}\n\n#CLAT #LawEntrance #CLATTribe`
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(url)}`,
          "_blank",
        )
        break
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`,
          "_blank",
        )
        break
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
          "_blank",
        )
        break
      case "whatsapp":
        const whatsappText = `*${title}*\n\n${description}\n\n${url}\n\n_Shared from CLAT Tribe_`
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappText)}`, "_blank")
        break
      case "copy":
        navigator.clipboard
          .writeText(url)
          .then(() => {
            alert("Link copied to clipboard! 📋")
          })
          .catch(() => {
            const textArea = document.createElement("textarea")
            textArea.value = url
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand("copy")
            document.body.removeChild(textArea)
            alert("Link copied to clipboard! 📋")
          })
        break
    }
  }

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const renderContent = (content: string) => {
    // Simple markdown-like rendering for demo
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900">
            {line.replace("# ", "")}
          </h1>
        )
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-gray-900">
            {line.replace("## ", "")}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-medium mt-4 mb-2 text-gray-900">
            {line.replace("### ", "")}
          </h3>
        )
      }
      if (line.trim() === "") {
        return <br key={index} />
      }
      if (line.includes("**")) {
        const parts = line.split("**")
        return (
          <p key={index} className="mb-4 leading-relaxed text-gray-700 text-lg">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i} className="text-gray-900">
                  {part}
                </strong>
              ) : (
                part
              ),
            )}
          </p>
        )
      }
      return (
        <p key={index} className="mb-4 leading-relaxed text-gray-700 text-lg">
          {line}
        </p>
      )
    })
  }

  useEffect(() => {
    function setWidth() {
      if (window.innerWidth < 768) {
        setMobile("mobile")
      } else if (window.innerWidth < 968) {
        setMobile("tablet")
      } else {
        setMobile("desktop")
      }
    }

    if (post && post.content) {
      const wordsPerMinute = 200
      const wordCount = post.content.split(/\s+/).length
      const readTime = Math.ceil(wordCount / wordsPerMinute)
      setEstimatedReadTime(`${readTime} min read`)
    }

    const progressBar = document.getElementById("reading-progress")
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100
      if (progressBar) progressBar.style.width = `${scrollPercentage}%`
    }

    window.addEventListener("scroll", updateProgress)
    window.addEventListener("resize", setWidth)
    window.addEventListener("load", setWidth)
    setWidth()

    return () => {
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", setWidth)
      window.removeEventListener("load", setWidth)
    }
  }, [post])

  useEffect(() => {
    if (slug) {
      fetchPost(slug)
    }
  }, [slug])

  useEffect(() => {
    if (post) {
      fetchComments(post.id)
    }
  }, [post])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="fixed top-0 left-0 z-[9999] w-full h-1 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-[#014688] to-blue-600 transition-all duration-300"
            style={{ width: "0%" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-muted rounded w-3/4 mb-6"></div>
            <div className="h-64 sm:h-96 bg-muted rounded mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-12 text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/blogs">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#014688] text-white hover:bg-[#014688]/90 h-10 px-4 py-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <DefaultLayout>
      <div className="fixed top-0 left-0 z-[9999] w-full h-1 bg-gray-200">
        <div
          id="reading-progress"
          className="h-full bg-gradient-to-r from-[#014688] to-blue-600 transition-all duration-300"
          style={{ width: "0%" }}
        ></div>
      </div>

      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-12 mt-4 sm:mt-8 shadow-2xl">
            <div className="relative">
              <Image
                src={post?.img || "/placeholder.svg?height=600&width=1200&query=CLAT preparation blog hero image"}
                alt={post?.meta_title || post?.title || "Blog post image"}
                width={1200}
                height={600}
                className="w-full h-auto min-h-[200px] sm:min-h-[400px] md:h-[500px] lg:h-[600px] sm:object-cover object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Share this post</h2>
            <div className="flex justify-center items-center gap-6">
              <button
                onClick={() => handleShare("facebook")}
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Share on Facebook"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              <button
                onClick={() => handleShare("whatsapp")}
                className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Share on WhatsApp"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                </svg>
              </button>

              <button
                onClick={() => handleShare("twitter")}
                className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Share on Twitter/X"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>

              <button
                onClick={() => handleShare("linkedin")}
                className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>

              <button
                onClick={() => handleShare("copy")}
                className="w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Copy link"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <nav className="flex py-4 text-sm text-gray-500 mb-6 overflow-x-auto" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 whitespace-nowrap">
              <li>
                <Link href="/" className="hover:text-[#014688] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link href="/blogs" className="ml-1 hover:text-[#014688] transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1 text-gray-700 truncate max-w-[150px] sm:max-w-xs">{post.title}</span>
              </li>
            </ol>
          </nav>

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(post.created_at)}
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {estimatedReadTime}
              </div>
            </div>
          </div>

          {post?.keywords && (
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
              {post.keywords.split(",").map((keyword, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-[#014688] text-xs sm:text-sm font-medium px-3 py-2 sm:px-4 rounded-full border border-blue-200"
                >
                  #{keyword.trim()}
                </span>
              ))}
            </div>
          )}

          <div id="main-content" className="max-w-none mb-12 sm:mb-16">
            {renderContent(post.content)}
          </div>

          <div className="mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Comments ({comments?.length || 0})
            </h2>
            {comments && comments.length > 0 ? (
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {comments
                  .filter((i: Comment) => i.isApproved === true && !i.isReply)
                  .map((item: Comment, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                      <div className="flex items-start">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#014688] text-white flex items-center justify-center font-semibold flex-shrink-0 text-sm sm:text-lg">
                          {item?.user
                            ? item.user
                                .split(" ")
                                .map((i: string) => i.substring(0, 1))
                                .join("")
                            : ""}
                        </div>
                        <div className="ml-3 sm:ml-4 flex-1">
                          <p className="font-semibold text-gray-900 text-base sm:text-lg">{item.user}</p>
                          <p className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed">{item.text}</p>
                          <p className="text-xs sm:text-sm text-gray-500 mt-3">{formatDate(item.created_at)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12 bg-gray-50 rounded-lg mb-8 sm:mb-12">
                <svg
                  className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <p className="text-gray-500 text-base sm:text-lg">
                  No comments yet. Be the first to share your thoughts!
                </p>
              </div>
            )}

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 sm:p-6 lg:p-8 mt-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Leave a Comment</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="comment-name" className="block text-sm font-medium text-gray-700 mb-3">
                    Your Name *
                  </label>
                  <input
                    id="comment-name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-4 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#014688] focus:border-[#014688] transition-all duration-200 text-base sm:text-lg bg-gray-50 focus:bg-white"
                    value={commentData.name}
                    onChange={(e) => setCommentData((prev) => ({ ...prev, name: e.target.value }))}
                    autoComplete="name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="comment-text" className="block text-sm font-medium text-gray-700 mb-3">
                    Your Comment *
                  </label>
                  <textarea
                    id="comment-text"
                    placeholder="Share your thoughts about this article... Feel free to write as much as you'd like!"
                    rows={mobile === "mobile" ? 6 : 8}
                    className="w-full px-4 py-4 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#014688] focus:border-[#014688] resize-y transition-all duration-200 text-base sm:text-lg bg-gray-50 focus:bg-white min-h-[120px] sm:min-h-[150px]"
                    value={commentData.comment}
                    onChange={(e) => setCommentData((prev) => ({ ...prev, comment: e.target.value }))}
                    autoComplete="off"
                    disabled={isSubmitting}
                  />
                  <div className="mt-2 text-sm text-gray-500">{commentData.comment.length} characters</div>
                </div>
                <button
                  onClick={addComment}
                  disabled={isSubmitting || !commentData.name.trim() || !commentData.comment.trim()}
                  className="w-full sm:w-auto bg-[#014688] hover:bg-[#014688]/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200 text-base sm:text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Comment"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
