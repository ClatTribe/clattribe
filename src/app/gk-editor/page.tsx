"use client"

import { useEffect, useState, useCallback } from "react"
import { createClient } from "@supabase/supabase-js"
import { Edit, Plus, Trash2, X } from "lucide-react"
import React from "react"
import Image from "next/image"
import type { JSX } from "react/jsx-runtime"

// Supabase client (kept same URL and anon key fallbacks as provided)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fjswchcothephgtzqbgq.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4",
)

interface GK {
  id?: string
  title: string
  slug: string
  content: string
  img?: string
  publish: boolean
  created_at?: string
}

// Toast primitives (unchanged, kept minimal)
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

// Simple UI primitives (unchanged)
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
}) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    {...props}
  />
)

const Textarea = ({
  value,
  onChange,
  placeholder,
  rows = 3,
  className = "",
  id,
  onPaste,
  ...props
}: {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  rows?: number
  className?: string
  id?: string
  onPaste?: (e: React.ClipboardEvent<HTMLTextAreaElement>) => void
}) => (
  <textarea
    id={id}
    value={value}
    onChange={onChange}
    onPaste={onPaste}
    placeholder={placeholder}
    rows={rows}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${className}`}
    {...props}
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
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => onOpenChange(false)} />
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
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

// Simple markdown-like editor (enhanced with paste handling)
const RichTextEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  const [isPreview, setIsPreview] = useState(false)

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault()

    const textarea = e.currentTarget
    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    // Get both plain text and HTML from clipboard
    const clipboardData = e.clipboardData
    const htmlData = clipboardData.getData("text/html")
    const plainData = clipboardData.getData("text/plain")

    let processedText = plainData

    // If HTML data exists and contains formatting, convert it to markdown
    if (
      htmlData &&
      (htmlData.includes("<b>") ||
        htmlData.includes("<strong>") ||
        htmlData.includes("<table>") ||
        htmlData.includes("<i>") ||
        htmlData.includes("<em>") ||
        htmlData.includes("font-weight") ||
        htmlData.includes("<ul>") ||
        htmlData.includes("<ol>") ||
        htmlData.includes("mso-") || // Microsoft Office specific
        htmlData.includes("class=") ||
        htmlData.includes("style="))
    ) {
      try {
        processedText = convertHtmlToMarkdown(htmlData)

        // If conversion resulted in empty or whitespace-only text, fallback to plain text
        if (!processedText.trim()) {
          processedText = plainData
        }
      } catch (error) {
        console.warn("HTML to markdown conversion failed, using plain text:", error)
        processedText = plainData
      }
    }

    // Insert the processed text at cursor position
    const newValue = value.substring(0, start) + processedText + value.substring(end)
    onChange(newValue)

    // Set cursor position after the pasted content
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + processedText.length, start + processedText.length)
    }, 0)
  }

  const convertHtmlToMarkdown = (html: string): string => {
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = html

    // Convert HTML elements to markdown with improved handling
    let markdown = html

    // Remove Microsoft Office specific tags and attributes that can interfere
    markdown = markdown.replace(/<o:p[^>]*>.*?<\/o:p>/gi, "")
    markdown = markdown.replace(/<\/o:p>/gi, "")
    markdown = markdown.replace(/<!--\[if[^>]*>.*?<!\[endif\]-->/gi, "")
    markdown = markdown.replace(/mso-[^;]*;?/gi, "")

    // Enhanced bold text handling: Support multiple formats including Word's complex styling
    // Standard bold tags
    markdown = markdown.replace(/<(b|strong)[^>]*>(.*?)<\/(b|strong)>/gi, "**$2**")

    // Word document bold via font-weight in style attribute (various formats)
    markdown = markdown.replace(
      /<span[^>]*style[^>]*font-weight\s*:\s*(bold|700|800|900|bolder)[^>]*>(.*?)<\/span>/gi,
      "**$2**",
    )

    // Word document bold via class or other attributes
    markdown = markdown.replace(/<span[^>]*class[^>]*font-weight[^>]*>(.*?)<\/span>/gi, "**$1**")

    // Handle nested spans with bold formatting
    markdown = markdown.replace(
      /<span[^>]*style[^>]*font-weight[^>]*bold[^>]*>([^<]*(?:<[^>]*>[^<]*<\/[^>]*>[^<]*)*)<\/span>/gi,
      "**$1**",
    )

    // Enhanced italic text: <i>, <em>, <span style="font-style:italic"> -> *text*
    markdown = markdown.replace(/<(i|em)[^>]*>(.*?)<\/(i|em)>/gi, "*$2*")
    markdown = markdown.replace(/<span[^>]*style[^>]*font-style\s*:\s*italic[^>]*>(.*?)<\/span>/gi, "*$1*")

    // Underline text: <u> -> __text__
    markdown = markdown.replace(/<u[^>]*>(.*?)<\/u>/gi, "__$1__")

    // Headings: <h1-6> -> # text
    markdown = markdown.replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n")
    markdown = markdown.replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n")
    markdown = markdown.replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n")
    markdown = markdown.replace(/<h4[^>]*>(.*?)<\/h4>/gi, "#### $1\n\n")
    markdown = markdown.replace(/<h5[^>]*>(.*?)<\/h5>/gi, "##### $1\n\n")
    markdown = markdown.replace(/<h6[^>]*>(.*?)<\/h6>/gi, "###### $1\n\n")

    // Paragraphs: <p> -> text with line breaks
    markdown = markdown.replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")

    // Line breaks: <br> -> \n
    markdown = markdown.replace(/<br[^>]*\/?>/gi, "\n")

    // Enhanced Unordered lists: <ul><li> -> - item
    markdown = markdown.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, content) => {
      const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || []
      return (
        items
          .map((item: string) => {
            let text = item.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "$1").trim()
            // Preserve formatting within list items but clean up HTML
            text = text.replace(/<(b|strong)[^>]*>(.*?)<\/(b|strong)>/gi, "**$2**")
            text = text.replace(/<(i|em)[^>]*>(.*?)<\/(i|em)>/gi, "*$2*")
            text = text.replace(/<[^>]*>/g, "")
            return `- ${text}`
          })
          .join("\n") + "\n\n"
      )
    })

    // Enhanced Ordered lists: <ol><li> -> 1. item
    markdown = markdown.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, content) => {
      const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || []
      return (
        items
          .map((item: string, index: number) => {
            let text = item.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "$1").trim()
            // Preserve formatting within list items but clean up HTML
            text = text.replace(/<(b|strong)[^>]*>(.*?)<\/(b|strong)>/gi, "**$2**")
            text = text.replace(/<(i|em)[^>]*>(.*?)<\/(i|em)>/gi, "*$2*")
            text = text.replace(/<[^>]*>/g, "")
            return `${index + 1}. ${text}`
          })
          .join("\n") + "\n\n"
      )
    })

    // Enhanced Tables: Convert HTML tables to markdown tables with better formatting
    markdown = markdown.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (match, content) => {
      return convertTableToMarkdown(content)
    })

    // Blockquotes: <blockquote> -> > text
    markdown = markdown.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, "> $1\n\n")

    // Links: <a href="url">text</a> -> [text](url)
    markdown = markdown.replace(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")

    // Code blocks: <pre><code> -> \`\`\`
    markdown = markdown.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, "```\n$1\n```\n")

    // Inline code: <code> -> `code`
    markdown = markdown.replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`")

    // Remove remaining HTML tags but preserve content
    markdown = markdown.replace(/<[^>]*>/g, "")

    // Decode HTML entities
    markdown = markdown.replace(/&nbsp;/g, " ")
    markdown = markdown.replace(/&amp;/g, "&")
    markdown = markdown.replace(/&lt;/g, "<")
    markdown = markdown.replace(/&gt;/g, ">")
    markdown = markdown.replace(/&quot;/g, '"')
    markdown = markdown.replace(/&#39;/g, "'")
    markdown = markdown.replace(/&rsquo;/g, "'")
    markdown = markdown.replace(/&lsquo;/g, "'")
    markdown = markdown.replace(/&rdquo;/g, '"')
    markdown = markdown.replace(/&ldquo;/g, '"')

    // Clean up extra whitespace and line breaks
    markdown = markdown.replace(/\n{3,}/g, "\n\n")
    markdown = markdown.replace(/^\s+|\s+$/g, "")

    return markdown
  }

  const convertTableToMarkdown = (tableHtml: string): string => {
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = tableHtml

    // Remove Word-specific table formatting
    const cleanedHtml = tableHtml.replace(/mso-[^;]*;?/gi, "").replace(/class="[^"]*"/gi, "")
    tempDiv.innerHTML = cleanedHtml

    // Handle both thead/tbody structure and simple tr structure
    let allRows = tempDiv.querySelectorAll("tr")

    // If no rows found, try to find them in nested structures
    if (allRows.length === 0) {
      allRows = tempDiv.querySelectorAll("tbody tr, thead tr")
    }

    if (allRows.length === 0) {
      console.warn("No table rows found")
      return "\n| No table data found |\n| --- |\n\n"
    }

    let markdownTable = "\n"
    let hasHeader = false

    allRows.forEach((row, rowIndex) => {
      const cells = row.querySelectorAll("td, th")
      if (cells.length === 0) return

      const cellTexts = Array.from(cells).map((cell) => {
        // Preserve formatting within cells and handle Word document formatting
        let cellContent = cell.innerHTML

        // Handle bold formatting in cells
        cellContent = cellContent.replace(/<(b|strong)[^>]*>(.*?)<\/(b|strong)>/gi, "**$2**")
        cellContent = cellContent.replace(
          /<span[^>]*style[^>]*font-weight\s*:\s*(bold|700|800|900)[^>]*>(.*?)<\/span>/gi,
          "**$2**",
        )

        // Handle italic formatting in cells
        cellContent = cellContent.replace(/<(i|em)[^>]*>(.*?)<\/(i|em)>/gi, "*$2*")
        cellContent = cellContent.replace(/<span[^>]*style[^>]*font-style\s*:\s*italic[^>]*>(.*?)<\/span>/gi, "*$1*")

        // Remove remaining HTML tags
        cellContent = cellContent.replace(/<[^>]*>/g, "")

        // Clean up whitespace and decode entities
        cellContent = cellContent
          .replace(/&nbsp;/g, " ")
          .replace(/\s+/g, " ")
          .trim()

        return cellContent || ""
      })

      // Add table row
      markdownTable += "| " + cellTexts.join(" | ") + " |\n"

      // Add header separator after first row (or if we detect th elements)
      if (rowIndex === 0 || (row.querySelector("th") && !hasHeader)) {
        markdownTable += "| " + cellTexts.map(() => "---").join(" | ") + " |\n"
        hasHeader = true
      }
    })

    markdownTable += "\n"
    return markdownTable
  }

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
      case "heading3":
        newText = `### ${selectedText}`
        break
      case "link":
        newText = `[${selectedText}](url)`
        break
      case "bullet":
        newText = `- ${selectedText}`
        break
      case "number":
        newText = `1. ${selectedText}`
        break
      case "quote":
        newText = `> ${selectedText}`
        break
      default:
        newText = selectedText
    }

    const newValue = value.substring(0, start) + newText + value.substring(end)
    onChange(newValue)

    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + newText.length, start + newText.length)
    }, 0)
  }

  const parseMarkdown = (text: string) => {
    const lines = text.split("\n")
    const elements: JSX.Element[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]

      if (line.trim() === "") {
        elements.push(<br key={i} />)
        i++
        continue
      }

      // Check for table
      if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
        const tableResult = parseTable(lines, i)
        elements.push(tableResult.element)
        i = tableResult.nextIndex
        continue
      }

      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-lg font-bold mt-3 mb-2">
            {parseInlineFormatting(line.replace("### ", ""))}
          </h3>,
        )
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-xl font-bold mt-4 mb-2">
            {parseInlineFormatting(line.replace("## ", ""))}
          </h2>,
        )
      } else if (line.startsWith("# ")) {
        elements.push(
          <h1 key={i} className="text-2xl font-bold mt-4 mb-3">
            {parseInlineFormatting(line.replace("# ", ""))}
          </h1>,
        )
      } else if (line.startsWith("- ") || line.startsWith("* ")) {
        elements.push(
          <ul key={i} className="list-disc list-inside mb-2">
            <li>{parseInlineFormatting(line.replace(/^[-*] /, ""))}</li>
          </ul>,
        )
      } else if (/^\d+\. /.test(line)) {
        elements.push(
          <ol key={i} className="list-decimal list-inside mb-2">
            <li>{parseInlineFormatting(line.replace(/^\d+\. /, ""))}</li>
          </ol>,
        )
      } else if (line.startsWith("> ")) {
        elements.push(
          <blockquote key={i} className="border-l-4 border-gray-300 pl-4 italic mb-2 text-gray-600">
            {parseInlineFormatting(line.replace("> ", ""))}
          </blockquote>,
        )
      } else {
        elements.push(
          <p key={i} className="mb-2 leading-relaxed">
            {parseInlineFormatting(line)}
          </p>,
        )
      }
      i++
    }
    return elements
  }

  const parseTable = (lines: string[], startIndex: number) => {
    const tableLines = []
    let i = startIndex

    // Collect all table lines
    while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
      tableLines.push(lines[i])
      i++
    }

    if (tableLines.length === 0) {
      return { element: <div key={startIndex}></div>, nextIndex: startIndex + 1 }
    }

    // Parse table structure
    const headerRow = tableLines[0]
    const separatorRow = tableLines[1] // Usually contains ---
    const dataRows = tableLines.slice(separatorRow && separatorRow.includes("---") ? 2 : 1)

    const parseRow = (row: string) => {
      return row
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim())
    }

    const headerCells = parseRow(headerRow)
    const dataRowCells = dataRows.map(parseRow)

    const tableElement = (
      <div key={startIndex} className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              {headerCells.map((cell, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {parseInlineFormatting(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRowCells.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                    {parseInlineFormatting(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )

    return { element: tableElement, nextIndex: i }
  }

  const parseInlineFormatting = (text: string) => {
    const parts: (string | JSX.Element)[] = []
    let currentIndex = 0

    text.replace(/\*\*(.*?)\*\*/g, (match, content, offset) => {
      if (offset > currentIndex) parts.push(text.substring(currentIndex, offset))
      parts.push(<strong key={offset}>{content}</strong>)
      currentIndex = offset + match.length
      return match
    })

    if (currentIndex < text.length) parts.push(text.substring(currentIndex))

    const processedParts: (string | JSX.Element)[] = []
    parts.forEach((part, index) => {
      if (typeof part === "string") {
        const italicParts: (string | JSX.Element)[] = []
        let currentIdx = 0
        part.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, (match, content, offset) => {
          if (offset > currentIdx) italicParts.push(part.substring(currentIdx, offset))
          italicParts.push(<em key={`${index}-${offset}`}>{content}</em>)
          currentIdx = offset + match.length
          return match
        })
        if (currentIdx < part.length) italicParts.push(part.substring(currentIdx))
        processedParts.push(...(italicParts.length > 0 ? italicParts : [part]))
      } else {
        processedParts.push(part)
      }
    })
    return processedParts.length > 0 ? processedParts : text
  }

  return (
    <div className="border border-gray-300 rounded-lg">
      <div className="flex items-center gap-1 p-2 border-b bg-gray-50 flex-wrap">
        <Button type="button" variant="ghost" size="sm" onClick={() => insertFormatting("bold")} title="Bold">
          <strong>B</strong>
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => insertFormatting("italic")} title="Italic">
          <em>I</em>
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => insertFormatting("heading")} title="Heading 2">
          H2
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => insertFormatting("heading3")} title="Heading 3">
          H3
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => insertFormatting("bullet")} title="Bullet List">
          •
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertFormatting("number")}
          title="Numbered List"
        >
          1.
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => insertFormatting("quote")} title="Quote">
          &quot;
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => insertFormatting("link")} title="Link">
          Link
        </Button>
        <div className="ml-auto">
          <Button type="button" variant="ghost" size="sm" onClick={() => setIsPreview(!isPreview)}>
            {isPreview ? "Edit" : "Preview"}
          </Button>
        </div>
      </div>
      {isPreview ? (
        <div className="p-4 min-h-[200px] prose max-w-none">{parseMarkdown(value)}</div>
      ) : (
        <div className="relative">
          <Textarea
            id="content-editor"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onPaste={handlePaste}
            className="min-h-[200px] border-0 focus:ring-0 resize-none"
            placeholder={`Write your GK content here...

Use markdown formatting:
**bold text** for bold
*italic text* for italic  
## Heading 2
### Heading 3
- Bullet point
1. Numbered list
> Quote text

You can also paste formatted content from Word or other applications!`}
          />
        </div>
      )}
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

  // Image upload states
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const [formData, setFormData] = useState<GK>({
    title: "",
    slug: "",
    content: "",
    img: "",
    publish: false, // renamed
  })

  // Fetch GK rows
  const fetchItems = useCallback(
    async (page = 1) => {
      setLoading(true)
      const from = (page - 1) * perPage
      const to = from + perPage - 1

      const { data, error, count } = await supabase
        .from("gk")
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
    [perPage, toast],
  )

  // Save or update GK
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

    // Upload file if chosen; otherwise use existing URL
    let resolvedImg = formData.img || ""
    if (imageFile) {
      const uploaded = await uploadImage(imageFile)
      if (!uploaded) {
        return
      }
      resolvedImg = uploaded
    }

    const dataToSave: Partial<GK> = {
      title: formData.title,
      slug: formData.slug,
      content: formData.content,
      img: resolvedImg,
      publish: formData.publish, // use 'publish'
    }

    let result
    if (editingItem?.id) {
      result = await supabase.from("gk").update(dataToSave).eq("id", editingItem.id)
    } else {
      result = await supabase.from("gk").insert([dataToSave])
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
      fetchItems(currentPage)
    }
  }

  // Delete GK
  const deleteGK = async (id: string) => {
    const { error } = await supabase.from("gk").delete().eq("id", id)
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
      publish: item.publish, //
      created_at: item.created_at,
    })
    setImageFile(null) // clear any previously selected file
    setIsDialogOpen(true)
  }

  const openNewDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  useEffect(() => {
    fetchItems(currentPage)
  }, [currentPage, fetchItems])

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

  const uploadImage = async (file: File): Promise<string | null> => {
    setUploadingImage(true)
    try {
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = fileName

      console.log("[v0] Uploading file:", fileName, "to bucket: blog-images")

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file, { cacheControl: "3600", upsert: false })

      if (uploadError) {
        console.error("[v0] Upload error:", uploadError)
        toast({
          title: "Upload Failed",
          description:
            uploadError.message ||
            "Failed to upload image. Ensure the 'blog-images' bucket exists, is public, and has proper policies.",
          variant: "destructive",
        })
        return null
      }

      console.log("[v0] Upload successful:", uploadData)
      const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(filePath)
      if (!urlData?.publicUrl) {
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
        description: "An unexpected error occurred during image upload.",
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
              <h1 className="text-3xl font-bold text-gray-900">GK Editor</h1>
              <p className="text-gray-600">Manage your General Knowledge entries</p>
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
                      <label className="block text-sm font-medium mb-2">Featured Image</label>
                      <div className="space-y-3">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              setImageFile(file)
                              setFormData({ ...formData, img: "" }) // clear URL when selecting a file
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
                            if (e.target.value) setImageFile(null) // clear file when typing URL
                          }}
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
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
                        checked={formData.publish}
                        onCheckedChange={(checked) => setFormData({ ...formData, publish: checked })}
                      />
                      <label className="text-sm font-medium">Publish</label>
                    </div>

                    <div className="flex justify-end space-x-2">
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
                        {editingItem?.id ? "Update GK" : "Create GK"}
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
                      <Image
                        src={item.img || "/placeholder.svg?height=64&width=96&query=gk%20thumbnail"}
                        alt={item.title}
                        width={96}
                        height={64}
                        className="w-24 h-16 object-cover rounded"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant={item.publish ? "default" : "secondary"}>
                          {item.publish ? "Published" : "Draft"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => openEditDialog(item)} title="Edit GK">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => item.id && deleteGK(item.id)}
                        title="Delete GK"
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No GK entries yet</h3>
                  <p className="text-gray-600 mb-4">Get started by creating your first GK entry.</p>
                  <Button onClick={openNewDialog} style={{ backgroundColor: "#024687" }} className="hover:opacity-90">
                    <Plus className="w-4 h-4 mr-2" />
                    Create First GK
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
              title="Previous Page"
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

export default function Page() {
  return (
    <ToastProvider>
      <GKEditor />
    </ToastProvider>
  )
}
