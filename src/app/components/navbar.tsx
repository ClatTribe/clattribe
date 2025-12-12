"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full shadow-sm transition-all duration-300 ${
        isScrolled ? "bg-[#0E162A] shadow-xl" : "bg-[#0E162A]/90 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-20 items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/heading.png" alt="Clat Tribe Logo" width={180} height={180} className="rounded" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-lg ml-auto">
          <Link href="/" className="font-medium text-[#F59E0B] hover:text-[#FB923C] transition-colors">
            Home
          </Link>
          {/* <Link href="/about" className="font-medium text-slate-300 hover:text-[#F59E0B] transition-colors">
            About
          </Link> */}
          {/* <Link href="/blogs" className="font-medium text-slate-300 hover:text-[#F59E0B] transition-colors">
            Blogs
          </Link> */}
          {/* <Link href="/contact" className="font-medium text-slate-300 hover:text-[#F59E0B] transition-colors">
            Contact
          </Link> */}
          {/* <Link href="/courses" className="font-medium text-slate-300 hover:text-[#F59E0B] transition-colors">
            Courses
          </Link> */}
        </nav>

        <div className="flex items-center md:hidden">
          <motion.button
            className="z-50 text-[#F59E0B]"
            onClick={() => setIsOpen(!isOpen)}
            animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-lg z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%", borderRadius: "50% 0 0 50%" }}
              animate={{ x: "0%", borderRadius: "0" }}
              exit={{ x: "-100%", borderRadius: "50% 0 0 50%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-4/5 h-screen bg-[#0E162A] backdrop-blur-md shadow-lg flex flex-col items-center justify-center text-lg z-50 border-r border-slate-800"
            >
              <motion.div>
                <Link href="/" className="text-3xl font-bold text-white mb-6" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center gap-2">
                    <Image src="/heading.png" alt="Clat Tribe Logo" width={40} height={40} className="rounded" />
                    <span className="text-[#F59E0B]">Clat Tribe</span>
                  </div>
                </Link>
              </motion.div>

              <nav className="flex flex-col items-center space-y-6">
                {/* Home */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href="/"
                    className="text-white hover:text-[#F59E0B] text-xl font-semibold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>

                {/* About */}
                {/* <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href="/about"
                    className="text-white hover:text-[#F59E0B] text-xl font-semibold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </motion.div> */}

                {/* Blogs */}
                {/* <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href="/blogs"
                    className="text-white hover:text-[#F59E0B] text-xl font-semibold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Blogs
                  </Link>
                </motion.div> */}

                {/* Contact */}
                {/* <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.65,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href="/contact"
                    className="text-white hover:text-[#F59E0B] text-xl font-semibold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div> */}

                {/* Courses */}
                {/* <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href="/courses"
                    className="text-white hover:text-[#F59E0B] text-xl font-semibold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Courses
                  </Link>
                </motion.div> */}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}