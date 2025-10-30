"use client"
import { useState, useEffect } from "react"
import { 
  Search, 
  Download, 
  RefreshCw, 
  Mail, 
  Phone, 
  User, 
  Calendar,
  Filter,
  X,
  Loader2,
  AlertCircle
} from "lucide-react"

interface Enquiry {
  id: string
  name: string
  email: string
  phone: string
  created_at: string
}

export default function AdminEnquiryPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [filteredEnquiries, setFilteredEnquiries] = useState<Enquiry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [dateFilter, setDateFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  // Fetch enquiries from API
  const fetchEnquiries = async () => {
    setIsLoading(true)
    setError("")
    
    try {
      const response = await fetch('/api/admin/enquiries')
      
      if (!response.ok) {
        throw new Error('Failed to fetch enquiries')
      }
      
      const data = await response.json()
      setEnquiries(data)
      setFilteredEnquiries(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Error fetching enquiries:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchEnquiries()
  }, [])

  // Filter enquiries based on search and date
  useEffect(() => {
    let filtered = [...enquiries]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(enquiry => 
        enquiry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enquiry.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enquiry.phone?.includes(searchTerm)
      )
    }

    // Date filter
    if (dateFilter !== "all") {
      const now = new Date()
      filtered = filtered.filter(enquiry => {
        const enquiryDate = new Date(enquiry.created_at)
        const diffTime = now.getTime() - enquiryDate.getTime()
        const diffDays = diffTime / (1000 * 60 * 60 * 24)

        switch(dateFilter) {
          case "today":
            return diffDays < 1
          case "week":
            return diffDays < 7
          case "month":
            return diffDays < 30
          default:
            return true
        }
      })
    }

    setFilteredEnquiries(filtered)
  }, [searchTerm, dateFilter, enquiries])

  // Export to CSV
  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Date"]
    const rows = filteredEnquiries.map(e => [
      e.name,
      e.email,
      e.phone,
      new Date(e.created_at).toLocaleString()
    ])

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `enquiries_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Enquiry Management</h1>
              <p className="text-gray-600 mt-1">View and manage workshop registrations</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={fetchEnquiries}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={exportToCSV}
                disabled={filteredEnquiries.length === 0}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#054380] text-white rounded-lg hover:bg-[#043060] transition-colors disabled:opacity-50"
              >
                <Download className="h-4 w-4" />
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Enquiries</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{enquiries.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Filtered Results</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{filteredEnquiries.length}</p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <Filter className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Todays Enquiries</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {enquiries.filter(e => {
                    const diff = new Date().getTime() - new Date(e.created_at).getTime()
                    return diff / (1000 * 60 * 60 * 24) < 1
                  }).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#054380] focus:border-[#054380] outline-none"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Date Filter */}
            <div className="sm:w-48">
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#054380] focus:border-[#054380] outline-none"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center border border-gray-200">
            <Loader2 className="h-12 w-12 text-[#054380] animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading enquiries...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Error Loading Enquiries</h3>
              <p className="text-red-700">{error}</p>
              <button
                onClick={fetchEnquiries}
                className="mt-3 text-sm font-medium text-red-600 hover:text-red-700 underline"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Enquiries Table */}
        {!isLoading && !error && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {filteredEnquiries.length === 0 ? (
              <div className="p-12 text-center">
                <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg font-medium">No enquiries found</p>
                <p className="text-gray-500 text-sm mt-1">
                  {searchTerm || dateFilter !== "all" 
                    ? "Try adjusting your filters" 
                    : "Enquiries will appear here once submitted"}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date & Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredEnquiries.map((enquiry, index) => (
                      <tr key={enquiry.id || index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#054380] flex items-center justify-center text-white font-semibold">
                              {enquiry.name?.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{enquiry.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Mail className="h-4 w-4 text-gray-400" />
                              <a href={`mailto:${enquiry.email}`} className="hover:text-[#054380]">
                                {enquiry.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="h-4 w-4 text-gray-400" />
                              <a href={`tel:${enquiry.phone}`} className="hover:text-[#054380]">
                                {enquiry.phone}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            {formatDate(enquiry.created_at)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}