"use client";
import React, { useState } from 'react';
import Hero from './components/Hero';
import CapsuleSystem from './components/CapsuleSystem';
import Flashcards from './components/Flashcards';
import NewFooter from './components/newFooter';
import ContactButton from './components/ContactButton';
import Link from 'next/link';
import Image from "next/image"
// import TrendingBlogs from "../components/TrendingBlogs"
import TrendingBlogs from './components/trendingBlogs';
import { GraduationCap, ArrowRight, CheckCircle, X } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [showErrorPopup, setShowErrorPopup] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

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
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
        }),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setShowSuccessPopup(true)
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
      })

      setTimeout(() => {
        setShowSuccessPopup(false)
      }, 3000)
    } catch (error) {
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
    <>
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="relative max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center border border-gray-200">
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-50 p-3">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Success!</h3>
            <p className="text-gray-600 mb-6">
              Your data has been saved successfully. We&apos;ll get back to you soon!
            </p>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="relative max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center border border-gray-200">
            <button
              onClick={() => setShowErrorPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-red-50 p-3">
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

      {/* Lead Form Section */}
      {/* Lead Form Section */}
<section className="py-20 bg-[#0F172B]">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold mb-4">Start Your CLAT Journey Today</h2>
        <p className="text-slate-300 text-lg">Join thousands of aspirants who trust ClatTribe for their preparation</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Get Started Now</h3>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-lg border-1 border-[#0F172B] bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
              required
            />
          </div>
          
          <div>
            <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full rounded-lg border-1 border-[#0F172B] bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-lg border-1 border-[#0F172B] bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-lg border-1 border-[#0F172B] bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-gold text-brand-900 font-semibold py-3 rounded-lg bg-[#0F172B] hover:bg-yellow-400 transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Get Started
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-900 text-white font-sans selection:bg-brand-gold selection:text-brand-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-900/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
                    <Image src="/heading.png" alt="Clat Tribe Logo" width={180} height={180} className="rounded" />
                  </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Capsules</a>
            <a href="#" className="hover:text-white transition-colors">Flashcards</a>
            <a href="#" className="hover:text-white transition-colors">Blogs</a>
            <Link href="/nlu-predictor" className="hover:text-white transition-colors">NLU Predictor</Link>
            <button className="px-5 py-2 bg-white text-brand-900 rounded-full font-bold hover:bg-brand-gold transition-colors">
              Login
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <CapsuleSystem />
        <Flashcards />
        
        {/* Blog Teaser Section */}
        <TrendingBlogs />

        <LeadForm />
      </main>
      <ContactButton />
      <NewFooter />
    </div>
  );
};

export default App;