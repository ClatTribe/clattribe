"use client"
import {
  Target,
  Brain,
  TrendingUp,
  Users,
  BookOpen,
  Calendar,
  Clock,
  MapPin, 
  UserCheck,
  ChevronDown,
  CheckCircle,
  X,
  Award,
  Zap,
  ArrowRight,
  AlertTriangle,
  FileQuestion,
  // Lightbulb,
} from "lucide-react"
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
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        }),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setShowSuccessPopup(true)
      
      setFormData({
        name: "",
        phone: "",
        email: "",
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
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
        <div className="w-full">
                <img
                  src="https://res.cloudinary.com/daetdadtt/image/upload/v1759915238/Your_paragraph_text_6_lvbjma.png"
                  alt="Study Abroad Fair Banner"
                  className="w-full h-auto shadow-lg"
                />
              </div>
      <section>
        {/* Subtle Background Pattern */}
        {/* <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-sm font-semibold text-white uppercase tracking-wide">
              CLAT Tribe Presents
            </p>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
            The Ultimate GK Therapy Session
          </h1>
          
          <p className="mb-6 text-xl md:text-2xl text-white/95 font-semibold">
            Master Current Affairs &  GK with India&apos;s Top CLAT Mentors - Now in your city LUCKNOW!
          </p>
          
          <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl leading-relaxed">
            Doubts can ruin your preparation, but we can clear your doubts 
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Award className="h-5 w-5" />
              </div>
              <span className="font-semibold">Expert Mentors</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <span className="font-semibold">3-Hour Intensive</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-semibold">Study Material</span>
            </div>
          </div>
        </div> */}
      </section>

      {/* Enquiry Section */}
      <section className="px-4 py-16 sm:px-6 md:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-start">
          {/* Left Side - Workshop Details */}
          <div className="space-y-6">
            <div>
              <div className="inline-block mb-3 px-3 py-1 bg-[#054380] text-white text-xs font-bold uppercase tracking-wide rounded">
                Limited Seats
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Join the Ultimate GK Workshop
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fill in your details and reserve your seat for the exclusive offline session led by top CLAT mentors.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border-l-4 border-[#054380] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#054380]/10 flex items-center justify-center flex-shrink-0">
                  <UserCheck className="h-5 w-5 text-[#054380]" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-1">For Whom</p>
                  <p className="text-gray-600">Open to all CLAT 2026/2027 Aspirants</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border-l-4 border-[#054380] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#054380]/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-[#054380]" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-1">Date</p>
                  <p className="text-gray-600">7th November 2026</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border-l-4 border-[#054380] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#054380]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#054380]" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-1">Time</p>
                  <p className="text-gray-600">2 PM - 5 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border-l-4 border-[#054380] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#054380]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#054380]" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-1">Venue</p>
                  <p className="text-gray-600">
                    IPM Careers, Dube Chambers, Sapru Marg, above Mr. Brown Bakery, Lucknow
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enquiry Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200 sticky top-8">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Registration Form</h3>
            
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
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#054380] focus:ring-2 focus:ring-[#054380]/20 outline-none transition-all"
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
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#054380] focus:ring-2 focus:ring-[#054380]/20 outline-none transition-all"
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
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#054380] focus:ring-2 focus:ring-[#054380]/20 outline-none transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#054380] text-white font-semibold py-3 rounded-lg hover:bg-[#043060] transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* Problem Section */}
      <section className="px-4 py-16 sm:px-6 md:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-50 rounded-full border border-green-200">
              <AlertTriangle className="h-4 w-4 text-green-600" />
              <p className="text-sm font-bold text-green-600 uppercase tracking-wide">Common Challenges</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-3">
              Is GK Holding Back Your CLAT Score?
            </h2>
            <p className="text-lg text-gray-600">Common challenges faced by CLAT aspirants</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: BookOpen, text: "Feeling overwhelmed by the vast, unpredictable syllabus?" },
              { icon: Brain, text: "Struggling to retain current affairs and  GK?" },
              { icon: FileQuestion, text: "Finding it hard to apply knowledge to MCQs effectively?" },
              { icon: TrendingUp, text: "Worried about missing important topics and trends?" },
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border-l-4 border-green-500 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-[#054380] to-[#0a5fa3] rounded-xl shadow-lg">
              <p className="text-xl text-white font-semibold max-w-4xl">
                You&apos;re not alone. Most CLAT aspirants struggle with GK - but it doesn&apos;t have to be that way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 py-16 sm:px-6 md:px-8 bg-gradient-to-br from-[#054380] to-[#0a5fa3]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-block mb-4 p-3 bg-white/10 rounded-lg">
            <Zap className="h-10 w-10 text-white" />
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl leading-tight">
            Transform Your GK Preparation in Just One Day
          </h2>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-white/95 leading-relaxed">
            This intensive workshop is specifically designed to give you the clarity, strategy, and confidence you need
            to dominate the General Knowledge section of CLAT.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 sm:px-6 md:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-3">
              What You&apos;ll Gain From This Workshop
            </h2>
            <p className="text-lg text-gray-600">Comprehensive learning outcomes designed for success</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "The CLAT GK Blueprint",
                desc: "Learn exactly what to study and what to ignore. Get insider knowledge of important topics, recurring patterns, and frequently asked areas.",
              },
              {
                icon: Brain,
                title: "Smart Retention Techniques",
                desc: "Move beyond rote learning. Discover powerful methods to remember current affairs, dates, events, and  GK effectively.",
              },
              {
                icon: TrendingUp,
                title: "MCQ Mastery Strategy",
                desc: "Learn proven techniques to analyze questions, eliminate wrong options, and solve GK questions accurately under time pressure.",
              },
              {
                icon: Users,
                title: "Direct Mentor Interaction",
                desc: "Get your specific doubts cleared and receive personalized guidance from the Directors who have mentored hundreds of CLAT success stories.",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Study Material",
                desc: "Receive specially curated GK notes and practice sets designed specifically for this workshop.",
              },
              {
                icon: Award,
                title: "Success Milestone",
                desc: "Mark your learning journey with an official milestone celebrating your growth.",
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
                >
                  <div className="mb-4 w-12 h-12 rounded-lg bg-[#054380]/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#054380]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:px-6 md:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-3">What Our Students Say</h2>
            <p className="text-lg text-gray-600">Real success stories from CLAT achievers</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                batch: "CLAT 2025",
                text: "The personalized attention and strategic approach helped me tackle GK with confidence. Highly recommend this workshop!",
              },
              {
                name: "Rohan Kapoor",
                batch: "CLAT 2025",
                text: "The retention techniques taught here are incredible. I can now remember facts and dates effortlessly. Worth every penny!",
              },
              {
                name: "Ishita Malhotra",
                batch: "CLAT 2025",
                text: "From feeling lost to feeling confident - that's what this workshop did for me. The mentors truly understand CLAT GK inside out.",
              },
              {
                name: "Arjun Patel",
                batch: "CLAT 2025",
                text: "Best investment for my CLAT preparation! The strategies are practical and the mentors are incredibly supportive.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
                <p className="mb-4 text-gray-700 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-[#054380] font-semibold">{testimonial.batch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 md:px-8 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Everything you need to know</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                id: "item-1",
                question: "Is this workshop suitable for complete beginners?",
                answer: "Absolutely! We start with fundamental concepts and build up to advanced strategies, making it perfect for students at all levels. Whether you&apos;re just starting your CLAT preparation or looking to refine your GK strategy, this workshop has something valuable for everyone."
              },
              {
                id: "item-2",
                question: "What should I bring to the workshop?",
                answer: "Just bring a notebook and pen to take notes. We&apos;ll provide all the study material, practice sets, and handouts you need. Come with an open mind and eagerness to learn!"
              },
              
              {
                id: "item-4",
                question: "Can I ask personal doubts during the workshop?",
                answer: "Definitely! We have dedicated Q&A sessions where you can ask specific doubts. Our mentors will provide personalized guidance based on your preparation level and challenges."
              },
              {
                id: "item-5",
                question: "Will I get study material after the workshop?",
                answer: "Yes! All participants will receive comprehensive study material including GK notes, current affairs compilation, and practice MCQ sets that you can use for your ongoing preparation."
              },
            ].map((faq) => (
              <div
                key={faq.id}
                className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="flex w-full items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#054380] flex-shrink-0 transition-transform duration-300 ${
                      openAccordion === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordion === faq.id && (
                  <div className="border-t border-gray-200 bg-gray-50 p-5">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 sm:px-6 md:px-8 bg-gradient-to-br from-[#054380] to-[#0a5fa3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-bold uppercase">
            Limited Seats Available
          </div>
          
          <h2 className="mb-6 text-3xl md:text-5xl font-bold text-white leading-tight">
            Register Now & Secure Your Spot
          </h2>
          
          <p className="mb-8 text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
            Don&apos;t let GK be the reason you miss your dream NLU. This is your opportunity to learn directly from the experts and get ahead of the competition.
          </p>

          <button 
            onClick={() => document.getElementById('name')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-white text-[#054380] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Register for the Workshop
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-3xl font-bold text-white mb-1">500+</p>
              <p className="text-white/90 text-sm">Students Trained</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-3xl font-bold text-white mb-1">95%</p>
              <p className="text-white/90 text-sm">Success Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-3xl font-bold text-white mb-1">4.9★</p>
              <p className="text-white/90 text-sm">Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">CLAT Tribe</p>
          <p className="text-gray-400">Your Path to CLAT Success</p>
          <p className="text-gray-500 text-sm mt-4">© 2026 CLAT Tribe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}