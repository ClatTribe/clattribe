"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { createClient } from "@supabase/supabase-js"
import { Edit, Plus, Trash2, X } from "lucide-react"
import React from "react"

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fjswchcothephgtzqbgq.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4",
)

// CLOUDINARY CONFIG - Replace with your values
const CLOUDINARY_CLOUD_NAME = "daetdadtt" // e.g., "dxxxxxxxx"
const CLOUDINARY_UPLOAD_PRESET = "blog_images" // Create an unsigned preset in Cloudinary

interface GK {
  id?: string
  title: string
  slug: string
  content: string
  img?: string
  publish: boolean
  created_at?: string
}

interface Toast {
  id: string
  title: string
  description: string
  variant?: "default" | "destructive"
}

const ToastContext = React.createContext<{
  addToast: (toast: Omit<Toast, "id">) => void
}>({
  addToast: () => {},
})

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }
    setToasts((prev) => [...prev, newToast])
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 5000)
  }

  const removeToast = (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id))

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

const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) throw new Error("useToast must be used within ToastProvider")
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
  title,
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm"
  disabled?: boolean
  type?: "button" | "submit"
  style?: React.CSSProperties
  className?: string
  title?: string
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
      title={title}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
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
}: {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
  />
)

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>{children}</div>
)

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
)

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
  } as const

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}

const Switch = ({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: (checked: boolean) => void }) => (
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

const Dialog = ({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}) => (
  <>
    {children}
    {open && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => onOpenChange(false)} />
        <div className="relative bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto">
          {React.Children.toArray(children)
            .filter((child): child is React.ReactElement => React.isValidElement(child))
            .find((child) => child.type === DialogContent)}
        </div>
      </div>
    )}
  </>
)

const DialogTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>

const DialogContent = ({ children }: { children: React.ReactNode }) => <div className="p-6">{children}</div>

const DialogHeader = ({ children }: { children: React.ReactNode }) => <div className="mb-6">{children}</div>

const DialogTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold text-gray-900">{children}</h2>
)

const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
)

const OptimizedImage = React.memo(({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imageError, setImageError] = useState(false)
  
  if (imageError || !src) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center text-gray-500 text-xs ${className}`}>
        No Image
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
      loading="lazy"
      style={{ objectFit: 'cover' }}
    />
  )
})

OptimizedImage.displayName = 'OptimizedImage'

// Jodit Editor Component with Cloudinary Upload
const JoditEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  const editorRef = useRef<HTMLTextAreaElement>(null)
  const joditInstance = useRef<any>(null)
  const [isReady, setIsReady] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/jodit/3.24.5/jodit.min.css'
    link.id = 'jodit-css'
    if (!document.getElementById('jodit-css')) {
      document.head.appendChild(link)
    }

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jodit/3.24.5/jodit.min.js'
    script.id = 'jodit-script'
    script.async = true
    
    script.onload = () => {
      setIsReady(true)
    }

    if (!document.getElementById('jodit-script')) {
      document.body.appendChild(script)
    } else if ((window as any).Jodit) {
      setIsReady(true)
    }

    return () => {
      if (joditInstance.current) {
        joditInstance.current.destruct()
        joditInstance.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!isReady || !editorRef.current || joditInstance.current) return

    // Upload to Cloudinary instead of Supabase
    const uploadImageToCloudinary = async (file: File): Promise<string> => {
      try {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: formData
          }
        )

        if (!response.ok) {
          throw new Error('Upload failed')
        }

        const data = await response.json()
        return data.secure_url
      } catch (error) {
        console.error('Cloudinary upload error:', error)
        throw error
      }
    }

    const config = {
      readonly: false,
      toolbar: true,
      spellcheck: true,
      language: 'en',
      toolbarButtonSize: 'middle',
      toolbarAdaptive: false,
      showCharsCounter: true,
      showWordsCounter: true,
      showXPathInStatusbar: false,
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      defaultActionOnPaste: 'insert_as_html',
      height: 500,
      minHeight: 400,
      processPasteHTML: true,
      cleanHTML: {
        timeout: 300,
        removeEmptyElements: false,
        fillEmptyParagraph: true,
        replaceNBSP: true,
        replaceOldTags: {
          i: 'em',
          b: 'strong',
        },
      },
      buttons: [
        'source', '|',
        'bold', 'italic', 'underline', 'strikethrough', '|',
        'ul', 'ol', '|',
        'outdent', 'indent', '|',
        'font', 'fontsize', 'brush', 'paragraph', '|',
        'image', 'table', 'link', '|',
        'align', 'undo', 'redo', '|',
        'hr', 'eraser', 'copyformat', '|',
        'fullsize', 'preview'
      ],
      uploader: {
        insertImageAsBase64URI: false,
        imagesExtensions: ['jpg', 'png', 'jpeg', 'gif', 'svg', 'webp'],
      },
      events: {
        beforeImageUpload: async (files: FileList) => {
          const file = files[0]
          if (!file) return false

          try {
            toast({
              title: 'Uploading',
              description: 'Uploading image to Cloudinary...'
            })
            
            const url = await uploadImageToCloudinary(file)
            joditInstance.current.selection.insertImage(url, null, 250)
            
            toast({
              title: 'Success',
              description: 'Image uploaded to Cloudinary successfully'
            })
          } catch (error) {
            toast({
              title: 'Upload Failed',
              description: 'Failed to upload image to Cloudinary. Check your config.',
              variant: 'destructive'
            })
          }
          return false
        },
      },
    }

    const editor = new (window as any).Jodit(editorRef.current, config)
    editor.value = value

    editor.events.on('change', (newValue: string) => {
      onChange(newValue)
    })

    joditInstance.current = editor

    return () => {
      if (joditInstance.current) {
        joditInstance.current.destruct()
        joditInstance.current = null
      }
    }
  }, [isReady, onChange, toast])

  useEffect(() => {
    if (joditInstance.current && joditInstance.current.value !== value) {
      joditInstance.current.value = value
    }
  }, [value])

  return (
    <div className="w-full">
      {!isReady && (
        <div className="border border-gray-300 rounded-lg p-4 min-h-[500px] flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading editor...</p>
          </div>
        </div>
      )}
      <textarea
        ref={editorRef}
        style={{ display: isReady ? 'block' : 'none' }}
        defaultValue={value}
      />
    </div>
  )
}

const GKEditor = () => {
  const [items, setItems] = useState<GK[]>([])
  const [loading, setLoading] = useState(true)
  const [editingItem, setEditingItem] = useState<GK | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const perPage = 10

  const { toast } = useToast()

  const [imageFile, setImageFile] = useState<File | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const [formData, setFormData] = useState<GK>({
    title: "",
    slug: "",
    content: "",
    img: "",
    publish: false,
  })

  const fetchItems = useCallback(
    async (page = 1) => {
      if (loading && items.length > 0) return
      
      setLoading(true)
      const from = (page - 1) * perPage
      const to = from + perPage - 1

      const { data, error, count } = await supabase
        .from("blogs")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false })
        .range(from, to)

      if (error) {
        toast({
          title: "Error",
          description: "Failed to fetch GK entries",
          variant: "destructive",
        })
      } else {
        setItems(data || [])
        setTotalPages(Math.ceil((count || 0) / perPage))
      }
      setLoading(false)
    },
    [perPage, toast, loading, items.length],
  )

  // Upload image to Cloudinary
  const uploadImageToCloudinary = async (file: File): Promise<string | null> => {
    setUploadingImage(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      )

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      
      toast({
        title: "Success",
        description: "Image uploaded to Cloudinary successfully",
      })
      
      return data.secure_url
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Failed to upload image to Cloudinary. Check your config.",
        variant: "destructive",
      })
      return null
    } finally {
      setUploadingImage(false)
    }
  }

  const saveGK = async () => {
    if (!formData.title || !formData.content) {
      toast({
        title: "Error",
        description: "Title and content are required",
        variant: "destructive",
      })
      return
    }

    if (!formData.slug) {
      formData.slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
    }

    let resolvedImg = formData.img || ""
    if (imageFile) {
      const uploaded = await uploadImageToCloudinary(imageFile)
      if (!uploaded) return
      resolvedImg = uploaded
    }

    const dataToSave: Partial<GK> = {
      title: formData.title,
      slug: formData.slug,
      content: formData.content,
      img: resolvedImg,
      publish: formData.publish,
    }

    let result
    if (editingItem?.id) {
      result = await supabase.from("blogs").update(dataToSave).eq("id", editingItem.id)
    } else {
      result = await supabase.from("blogs").insert([dataToSave])
    }

    if (result.error) {
      toast({
        title: "Database Error",
        description: "Failed to save GK entry. Check your 'gk' table and policies.",
        variant: "destructive",
      })
    } else {
      toast({
        title: "Success",
        description: editingItem?.id ? "GK entry updated" : "GK entry created",
      })
      setIsDialogOpen(false)
      resetForm()
      if (currentPage === 1 || !editingItem?.id) {
        fetchItems(1)
        setCurrentPage(1)
      } else {
        fetchItems(currentPage)
      }
    }
  }

  const deleteGK = async (id: string) => {
    if (!confirm('Are you sure you want to delete this entry?')) return
    
    const { error } = await supabase.from("blogs").delete().eq("id", id)
    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete entry",
        variant: "destructive",
      })
    } else {
      toast({ title: "Deleted", description: "GK entry deleted" })
      fetchItems(currentPage)
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      content: "",
      img: "",
      publish: false,
    })
    setEditingItem(null)
    setImageFile(null)
    setUploadingImage(false)
  }

  const openEditDialog = (item: GK) => {
    setEditingItem(item)
    setFormData({
      id: item.id,
      title: item.title,
      slug: item.slug,
      content: item.content,
      img: item.img || "",
      publish: item.publish,
      created_at: item.created_at,
    })
    setImageFile(null)
    setIsDialogOpen(true)
  }

  const openNewDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  useEffect(() => {
    fetchItems(currentPage)
  }, [currentPage])

  const ItemSkeleton = () => (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-16 w-24 rounded" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <div className="flex space-x-2">
              <Skeleton className="h-6 w-20 rounded-full" />
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Blogs Editor</h1>
              {/* <p className="text-gray-600">Cloudinary-powered (Free Supabase friendly)</p> */}
            </div>
            <div className="flex space-x-3">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger>
                  <Button onClick={openNewDialog} style={{ backgroundColor: "#024687" }} className="hover:opacity-90">
                    <Plus className="w-4 h-4 mr-2" />
                    New GK
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{editingItem?.id ? "Edit GK" : "Create New GK"}</DialogTitle>
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
                          placeholder="Enter GK title"
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
                      <label className="block text-sm font-medium mb-2">Featured Image (Upload to Cloudinary)</label>
                      <div className="space-y-3">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              setImageFile(file)
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
                        <div className="text-center text-gray-500">or paste Cloudinary URL</div>
                        <Input
                          value={formData.img || ""}
                          onChange={(e) => {
                            setFormData({ ...formData, img: e.target.value })
                            if (e.target.value) setImageFile(null)
                          }}
                          placeholder="https://res.cloudinary.com/..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3">
                        Content * <span className="text-gray-500 font-normal">(Images upload to Cloudinary)</span>
                      </label>
                      <JoditEditor
                        value={formData.content}
                        onChange={(value) => setFormData({ ...formData, content: value })}
                      />
                    </div>

                    <div className="flex items-center space-x-2 pt-4">
                      <Switch
                        checked={formData.publish}
                        onCheckedChange={(checked) => setFormData({ ...formData, publish: checked })}
                      />
                      <label className="text-sm font-medium">Publish</label>
                    </div>

                    <div className="flex justify-end space-x-2 pt-4 border-t">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button
                        onClick={saveGK}
                        style={{ backgroundColor: "#024687" }}
                        className="hover:opacity-90"
                        disabled={uploadingImage}
                        title={uploadingImage ? "Uploading image..." : undefined}
                      >
                        {uploadingImage ? "Uploading..." : editingItem?.id ? "Update GK" : "Create GK"}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="space-y-4">
            {Array(perPage)
              .fill(0)
              .map((_, index) => (
                <ItemSkeleton key={index} />
              ))}
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    {item.img && (
                      <OptimizedImage
                        src={item.img}
                        alt={item.title}
                        className="w-24 h-16 rounded object-cover"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{item.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant={item.publish ? "default" : "secondary"}>
                          {item.publish ? "Published" : "Draft"}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {item.created_at && new Date(item.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2 flex-shrink-0">
                      <Button variant="outline" size="sm" onClick={() => openEditDialog(item)} title="Edit GK">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => item.id && deleteGK(item.id)}
                        title="Delete GK"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {items.length === 0 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No GK entries yet</h3>
                    <p className="text-gray-600 mb-4">Get started by creating your first GK entry with Cloudinary-powered images.</p>
                    <Button onClick={openNewDialog} style={{ backgroundColor: "#024687" }} className="hover:opacity-90">
                      <Plus className="w-4 h-4 mr-2" />
                      Create First GK
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              title="Previous Page"
            >
              Previous
            </Button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    style={currentPage === pageNum ? { backgroundColor: "#024687" } : undefined}
                  >
                    {pageNum}
                  </Button>
                )
              })}
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              title="Next Page"
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
      <GKEditor />
    </ToastProvider>
  )
}