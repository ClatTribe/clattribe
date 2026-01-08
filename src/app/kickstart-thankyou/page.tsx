"use client";

import React from 'react';
import { PartyPopper, ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Navbar - Consistent with main page */}
      <nav className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <Link href="/">
            <Image 
              src="/heading.png" 
              alt="Clat Tribe Logo" 
              width={160} 
              height={160} 
              className="rounded cursor-pointer" 
            />
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-2xl w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative z-10">
          <div className="w-20 h-20 bg-[#F59E0B]/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <PartyPopper className="w-10 h-10 text-[#F59E0B]" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Thank <span className="text-[#F59E0B]">You !!</span>
          </h1>
          
          <div className="space-y-4 mb-10">
            <p className="text-[#F59E0B] text-lg sm:text-xl font-semibold leading-tight">
              Thank you for choosing us today
            </p>
            <p className="text-slate-300 text-base sm:text-lg">
              We've received your details.<br />
              Our Executive will get back to you shortly.
            </p>
          </div>

          <div className="space-y-6">
            <Link 
              href="/our-courses"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#F59E0B] text-slate-950 rounded-xl font-bold hover:bg-[#F59E0B]/90 transition-all hover:scale-[1.02] shadow-lg group text-lg"
            >
              <span>Explore Our Courses</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex items-center justify-center gap-2 text-slate-400">
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <p className="text-sm">
                For Quick Assistance call us on: 
                <span className="text-white font-bold ml-1">+91 8303865139</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-slate-900 text-center">
        <p className="text-slate-500 text-sm">
          &copy; 2026 CLAT Tribe. Master the Facts. Rule the Law.
        </p>
      </footer>
    </div>
  );
};

export default ThankYouPage;