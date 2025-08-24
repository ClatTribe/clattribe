"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { Edit, Plus, Trash2, X, Eye } from "lucide-react"
import React from "react"
import Link from "next/link"

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fjswchcothephgtzqbgq.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4",
)

interface BlogPost {
  id?: string
  title: string
  slug: string
  content: string
  meta_title: string
  metades: string // Changed from meta_description to metades
  keywords?: string
  img?: string // Changed from image_url to img
  published: boolean // Changed from is_published to published
  created_at?: string
}

interface Toast {
  id: string
  title: string
  description: string
  variant?: "default" | "destructive"
}

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }
    setToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-lg shadow-lg max-w-sm ${
              toast.variant === "destructive" ? "bg-red-500 text-white" : "bg-white border border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{toast.title}</h4>
                <p className="text-sm opacity-90">{toast.description}</p>
              </div>
              <button onClick={() => removeToast(toast.id)} className="ml-2 opacity-70 hover:opacity-100">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

const ToastContext = React.createContext<{
  addToast: (toast: Omit<Toast, "id">) => void
}>({
  addToast: () => {},
})

const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within ToastProvider")
  }
  return { toast: context.addToast }
}

const Button = ({
  children,
  onClick,
  variant = "default",
  size = "default",
  disabled = false,
  type = "button",
  style,
  className = "",
  ...props
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm"
  disabled?: boolean
  type?: "button" | "submit"
  style?: React.CSSProperties
  className?: string
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-blue-500",
  }

  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
  }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Input = ({
  value,
  onChange,
  placeholder,
  className = "",
  ...props
}: {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      {...props}
    />
  )
}

const Textarea = ({
  value,
  onChange,
  placeholder,
  rows = 3,
  className = "",
  id,
  ...props
}: {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  rows?: number
  className?: string
  id?: string
}) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${className}`}
      {...props}
    />
  )
}

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>{children}</div>
}

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>
}

const Badge = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode
  variant?: "default" | "secondary" | "destructive"
}) => {
  const variantClasses = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    destructive: "bg-red-100 text-red-800",
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}

const Switch = ({
  checked,
  onCheckedChange,
}: {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}) => {
  return (
    <button
      type="button"
      onClick={() => onCheckedChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        checked ? "bg-blue-600" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )
}

const Dialog = ({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}) => {
  return (
    <>
      {children}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => onOpenChange(false)} />
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {React.Children.toArray(children).find((child: any) => child.type === DialogContent)}
          </div>
        </div>
      )}
    </>
  )
}

const DialogTrigger = ({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) => {
  return <>{children}</>
}

const DialogContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-6">{children}</div>
}

const DialogHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-6">{children}</div>
}

const DialogTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-xl font-semibold text-gray-900">{children}</h2>
}

const Skeleton = ({ className = "" }: { className?: string }) => {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
}

// Simple rich text editor component
const RichTextEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  const [isPreview, setIsPreview] = useState(false)

  const insertFormatting = (format: string) => {
    const textarea = document.getElementById("content-editor") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)

    let newText = ""
    switch (format) {
      case "bold":
        newText = `**${selectedText}**`
        break
      case "italic":
        newText = `*${selectedText}*`
        break
      case "heading":
        newText = `## ${selectedText}`
        break
      case "link":
        newText = `[${selectedText}](url)`
        break
      default:
        newText = selectedText
    }

    const newValue = value.substring(0, start) + newText + value.substring(end)
    onChange(newValue)
  }

  return (
    <div className="border border-gray-300 rounded-lg">
      <div className="flex items-center gap-2 p-2 border-b bg-gray-50">
        <Button type="button" variant="ghost" size="sm" onClick={() => insertFormatting("bold")}>
          <strong>B</strong>
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => insertFormatting("italic")}>
          <em>I</em>
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => insertFormatting("heading")}>
          H2
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => insertFormatting("link")}>
          Link
        </Button>
        <div className="ml-auto">
          <Button type="button" variant="ghost" size="sm" onClick={() => setIsPreview(!isPreview)}>
            {isPreview ? "Edit" : "Preview"}
          </Button>
        </div>
      </div>

      {isPreview ? (
        <div className="p-4 min-h-[200px] prose max-w-none">
          {value.split("\n").map((line, index) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={index} className="text-xl font-bold mt-4 mb-2">
                  {line.replace("## ", "")}
                </h2>
              )
            }
            if (line.includes("**") && line.includes("**")) {
              const parts = line.split("**")
              return (
                <p key={index} className="mb-2">
                  {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
                </p>
              )
            }
            return (
              <p key={index} className="mb-2">
                {line}
              </p>
            )
          })}
        </div>
      ) : (
        <Textarea
          id="content-editor"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-[200px] border-0 focus:ring-0"
          placeholder="Write your blog content here..."
        />
      )}
    </div>
  )
}

function BlogEditor() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const postsPerPage = 10

  const { toast } = useToast()

  const [formData, setFormData] = useState<BlogPost>({
    title: "",
    slug: "",
    content: "",
    meta_title: "",
    metades: "",
    keywords: "",
    img: "",
    published: false,
  })

  const [imageFile, setImageFile] = useState<File | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)

  // Fetch posts from Supabase
  const fetchPosts = async (page = 1) => {
    setLoading(true)
    const from = (page - 1) * postsPerPage
    const to = from + postsPerPage - 1

    const { data, error, count } = await supabase
      .from("blogs_data")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to)

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch posts",
        variant: "destructive",
      })
    } else {
      setPosts(data || [])
      setTotalPages(Math.ceil((count || 0) / postsPerPage))
    }
    setLoading(false)
  }

  // Save or update post
  const savePost = async () => {
    if (!formData.title || !formData.content) {
      toast({
        title: "Error",
        description: "Title and content are required",
        variant: "destructive",
      })
      return
    }

    let imageUrl = formData.img
    if (imageFile) {
      console.log("[v0] Starting image upload...")
      const uploadedUrl = await uploadImage(imageFile)
      if (uploadedUrl) {
        imageUrl = uploadedUrl
        console.log("[v0] Image uploaded successfully:", uploadedUrl)
      } else {
        console.log("[v0] Image upload failed, continuing without image")
        toast({
          title: "Image Upload Failed",
          description: "Post will be saved without the uploaded image. You can edit later to add an image URL.",
          variant: "destructive",
        })
        imageUrl = "" // Clear the image URL if upload failed
      }
    }

    // Auto-generate slug from title if empty
    if (!formData.slug) {
      formData.slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
    }

    // Auto-generate meta title if empty
    if (!formData.meta_title) {
      formData.meta_title = formData.title
    }

    const postData = {
      title: formData.title,
      slug: formData.slug,
      content: formData.content,
      meta_title: formData.meta_title,
      metades: formData.metades,
      keywords: formData.keywords,
      img: imageUrl,
      published: formData.published,
    }

    let result
    if (editingPost?.id) {
      result = await supabase.from("blogs_data").update(postData).eq("id", editingPost.id)
    } else {
      result = await supabase.from("blogs_data").insert([postData])
    }

    if (result.error) {
      console.log("[v0] Database error:", result.error)
      toast({
        title: "Database Error",
        description:
          "Please disable Row Level Security (RLS) on the blogs_data table in Supabase dashboard: Go to Authentication > Policies > blogs_data table > Disable RLS",
        variant: "destructive",
      })
    } else {
      toast({
        title: "Success",
        description: editingPost?.id ? "Post updated successfully" : "Post created successfully",
      })
      setIsDialogOpen(false)
      resetForm()
      setImageFile(null)
      fetchPosts(currentPage)
    }
  }

  // Delete post
  const deletePost = async (id: string) => {
    const { error } = await supabase.from("blogs_data").delete().eq("id", id)

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      })
    } else {
      toast({
        title: "Success",
        description: "Post deleted successfully",
      })
      fetchPosts(currentPage)
    }
  }

  // Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      content: "",
      meta_title: "",
      metades: "",
      keywords: "",
      img: "",
      published: false,
    })
    setEditingPost(null)
    setImageFile(null)
  }

  // Open edit dialog
  const openEditDialog = (post: BlogPost) => {
    setEditingPost(post)
    setFormData(post)
    setIsDialogOpen(true)
  }

  // Open new post dialog
  const openNewDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  useEffect(() => {
    fetchPosts()
  }, [currentPage])

  const PostSkeleton = () => (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-16 w-24 rounded" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <div className="flex space-x-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-32 rounded-full" />
            </div>
          </div>
          <div className="flex space-x-2">
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const uploadImage = async (file: File): Promise<string | null> => {
    setUploadingImage(true)
    try {
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = fileName // Use simple filename, not nested path

      console.log("[v0] Uploading file:", fileName, "to bucket: blog-images")

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false, // Don't overwrite existing files
        })

      if (uploadError) {
        console.error("[v0] Upload error:", uploadError)

        // More specific error messages
        if (uploadError.message.includes("Bucket not found")) {
          toast({
            title: "Storage Bucket Missing",
            description: "Please create a 'blog-images' storage bucket in your Supabase dashboard and make it public.",
            variant: "destructive",
          })
        } else if (uploadError.message.includes("RLS") || uploadError.message.includes("policy")) {
          toast({
            title: "Storage Policy Required",
            description: "Please set up storage policies for the blog-images bucket to allow uploads.",
            variant: "destructive",
          })
        } else {
          toast({
            title: "Upload Failed",
            description: uploadError.message || "Failed to upload image. Please try again.",
            variant: "destructive",
          })
        }
        return null
      }

      console.log("[v0] Upload successful:", uploadData)

      const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(filePath)

      if (!urlData?.publicUrl) {
        console.error("[v0] Failed to get public URL")
        toast({
          title: "URL Generation Failed",
          description: "Image uploaded but failed to generate public URL.",
          variant: "destructive",
        })
        return null
      }

      console.log("[v0] Public URL:", urlData.publicUrl)
      return urlData.publicUrl
    } catch (error) {
      console.error("[v0] Upload error:", error)
      toast({
        title: "Upload Error",
        description: "An unexpected error occurred during upload. Please try again.",
        variant: "destructive",
      })
      return null
    } finally {
      setUploadingImage(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Clat Tribe Blog Editor</h1>
              <p className="text-gray-600">Manage your blog posts</p>
            </div>
            <div className="flex space-x-3">
              <Link href="/blogs">
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  View Blog
                </Button>
              </Link>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={openNewDialog} style={{ backgroundColor: "#024687" }} className="hover:opacity-90">
                    <Plus className="w-4 h-4 mr-2" />
                    New Post
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{editingPost?.id ? "Edit Post" : "Create New Post"}</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Title *</label>
                        <Input
                          value={formData.title}
                          onChange={(e) => {
                            const newTitle = e.target.value
                            setFormData({
                              ...formData,
                              title: newTitle,
                              slug: newTitle
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, "-")
                                .replace(/(^-|-$)/g, ""),
                            })
                          }}
                          placeholder="Enter post title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Slug</label>
                        <Input
                          value={formData.slug}
                          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                          placeholder="Auto-generated from title"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Featured Image</label>
                      <div className="space-y-3">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              setImageFile(file)
                              // Clear existing URL if file is selected
                              setFormData({ ...formData, img: "" })
                            }
                          }}
                          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {imageFile && (
                          <div className="flex items-center space-x-2 text-sm text-green-600">
                            <span>Selected: {imageFile.name}</span>
                            <button
                              type="button"
                              onClick={() => setImageFile(null)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                        <div className="text-center text-gray-500">or</div>
                        <Input
                          value={formData.img || ""}
                          onChange={(e) => {
                            setFormData({ ...formData, img: e.target.value })
                            // Clear file if URL is entered
                            if (e.target.value) setImageFile(null)
                          }}
                          placeholder="Enter image URL"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Meta Title</label>
                      <Input
                        value={formData.meta_title}
                        onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                        placeholder="SEO title (auto-filled from title)"
                      />
                      <p className="text-xs text-gray-500 mt-1">{formData.meta_title.length}/60 characters</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Meta Description</label>
                      <Textarea
                        value={formData.metades}
                        onChange={(e) => setFormData({ ...formData, metades: e.target.value })}
                        placeholder="SEO description"
                        rows={3}
                      />
                      <p className="text-xs text-gray-500 mt-1">{formData.metades.length}/160 characters</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Keywords</label>
                      <Input
                        value={formData.keywords || ""}
                        onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                        placeholder="SEO keywords (comma separated)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Content *</label>
                      <RichTextEditor
                        value={formData.content}
                        onChange={(value) => setFormData({ ...formData, content: value })}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.published}
                        onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                      />
                      <label className="text-sm font-medium">Publish immediately</label>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button
                        onClick={savePost}
                        disabled={uploadingImage}
                        style={{ backgroundColor: "#024687" }}
                        className="hover:opacity-90"
                      >
                        {uploadingImage ? "Uploading..." : editingPost?.id ? "Update Post" : "Create Post"}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="space-y-4">
            {Array(postsPerPage)
              .fill(0)
              .map((_, index) => (
                <PostSkeleton key={index} />
              ))}
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    {post.img && (
                      <img
                        src={post.img || "/placeholder.svg"}
                        alt={post.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant={post.published ? "default" : "secondary"}>
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                        {post.meta_title && (
                          <Badge
                            variant={
                              post.meta_title.length >= 20 && post.meta_title.length <= 60 ? "default" : "destructive"
                            }
                          >
                            Meta Title:{" "}
                            {post.meta_title.length >= 20 && post.meta_title.length <= 60 ? "Good" : "Needs Work"}
                          </Badge>
                        )}
                        {post.metades && (
                          <Badge variant={post.metades.length >= 120 ? "default" : "destructive"}>
                            Meta Desc: {post.metades.length >= 120 ? "Good" : "Too Short"}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => openEditDialog(post)}>
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => post.id && deletePost(post.id)}>
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {posts.length === 0 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
                  <p className="text-gray-600 mb-4">Get started by creating your first blog post.</p>
                  <Button onClick={openNewDialog} style={{ backgroundColor: "#024687" }} className="hover:opacity-90">
                    <Plus className="w-4 h-4 mr-2" />
                    Create First Post
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="flex items-center px-4 py-2 text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <BlogEditor />
    </ToastProvider>
  )
}
