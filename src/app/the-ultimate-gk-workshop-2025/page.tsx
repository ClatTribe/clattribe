"use client"
import Footer from "../components/footer"
import type React from "react"

import { Target, Brain, TrendingUp, Users, BookOpen, CheckCircle, X } from "lucide-react"
import { useState } from "react"

export default function WorkshopPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const [formData, setFormData] = useState({ 
    name: "",
    phone: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [showErrorPopup, setShowErrorPopup] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const toggleAccordion = (value: string) => {
    setOpenAccordion(openAccordion === value ? null : value)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        }),
      })

      if (!response.ok) throw new Error("Failed to submit")

      setShowSuccessPopup(true)

      setFormData({
        name: "",
        phone: "",
        email: "",
      })

      setTimeout(() => {
        setShowSuccessPopup(false)
      }, 3000)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error submitting form:", error)
        setErrorMessage(error.message)
      } else {
        console.error("Unexpected error:", error)
        setErrorMessage("Failed to submit form. Please try again.")
      }
      setShowErrorPopup(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Success!</h3>
            <p className="text-gray-600 mb-6">{"Your data has been saved successfully. We'll get back to you soon!"}</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {showErrorPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
            <button
              onClick={() => setShowErrorPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-red-100 p-3">
                <X className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Oops!</h3>
            <p className="text-gray-600 mb-6">{errorMessage}</p>
            <button
              onClick={() => setShowErrorPopup(false)}
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="px-4 py-16 sm:px-6 md:px-8 md:py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #014688 0%, #759EE8 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <p className="mb-4 text-xl font-semibold text-white md:text-2xl">CLAT Tribe presents:</p>
          <h1 className="mb-6 text-balance text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            The Ultimate GK Workshop 2025
          </h1>
          <p className="mb-8 text-balance text-xl text-white md:text-2xl font-semibold">
            {"Master Current Affairs & Static GK with India's Top CLAT Mentors"}
          </p>
          <p className="mx-auto max-w-3xl text-balance text-lg text-white md:text-xl font-medium">
            {
              "Join our exclusive offline workshop led by YOUR CHIA MA'AM and the Directors of Clat Tribe and transform your General Knowledge preparation"
            }
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Is GK Holding Back Your CLAT Score?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Feeling overwhelmed by the vast, unpredictable syllabus?",
              "Struggling to retain current affairs and static GK?",
              "Finding it hard to apply knowledge to MCQs effectively?",
              "Worried about missing important topics and trends?",
            ].map((problem, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300"
              >
                <p className="text-lg text-gray-700 font-medium">{problem}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xl text-gray-700 font-semibold">
            {"You're not alone. Most CLAT aspirants struggle with GK - but it doesn't have to be that way."}
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            Transform Your GK Preparation in Just One Day
          </h2>
          <p className="mx-auto max-w-3xl text-balance text-lg text-gray-700 md:text-xl leading-relaxed">
            This intensive workshop is specifically designed to give you the clarity, strategy, and confidence you need
            to dominate the General Knowledge section of CLAT.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl">
            {"What You'll Gain From This Workshop"}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                <Target className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">The CLAT GK Blueprint</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn exactly what to study and what to ignore. Get insider knowledge of important topics, recurring
                patterns, and frequently asked areas.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                <Brain className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Smart Retention Techniques</h3>
              <p className="text-gray-700 leading-relaxed">
                Move beyond rote learning. Discover powerful methods to remember current affairs, dates, events, and
                static GK effectively.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <TrendingUp className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">MCQ Mastery Strategy</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn proven techniques to analyze questions, eliminate wrong options, and solve GK questions accurately
                under time pressure.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                <Users className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Direct Mentor Interaction</h3>
              <p className="text-gray-700 leading-relaxed">
                Get your specific doubts cleared and receive personalized guidance from the Directors who have mentored
                hundreds of CLAT success stories.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                <BookOpen className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Comprehensive Study Material</h3>
              <p className="text-gray-700 leading-relaxed">
                Receive specially curated GK notes and practice sets designed specifically for this workshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Students Say
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">Real Success Stories</p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                batch: "CLAT 2025",
                text: "Before joining, GK was my weakest section. The teaching method completely changed my approach. My score improved from 30 to 85 in just 2 months!",
              },
              {
                name: "Saurabh Trivedi",
                batch: "CLAT 2025",
                text: "The way they simplify current affairs and connect dots between different events is remarkable. This workshop is a game-changer!",
              },
              {
                name: "Ananya Verma",
                batch: "CLAT 2026",
                text: "The personalized attention and strategic approach helped me tackle GK with confidence. Highly recommend this workshop!",
              },
              {
                name: "Rohan Kapoor",
                batch: "CLAT 2025",
                text: "The retention techniques taught here are incredible. I can now remember facts and dates effortlessly. Worth every penny!",
              },
              {
                name: "Ishita Malhotra",
                batch: "CLAT 2026",
                text: "From feeling lost to feeling confident - that's what this workshop did for me. The mentors truly understand CLAT GK inside out.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-gray-700 leading-relaxed italic">{`"${testimonial.text}"`}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.batch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="px-4 py-16 sm:px-6 md:px-8 md:py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #014688 0%, #759EE8 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="mb-6 text-balance text-3xl font-bold text-white md:text-4xl">
            Limited Seats Available - Register Now!
          </h2>
          <p className="mb-8 text-balance text-lg text-white md:text-xl font-semibold leading-relaxed">
            {
              "Don't let GK be the reason you miss your dream NLU. This is your opportunity to learn directly from the experts and get ahead of the competition."
            }
          </p>
          <button className="rounded-xl bg-red-500 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:scale-105 shadow-2xl">
            Register for the Workshop Now!
          </button>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}
