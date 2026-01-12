'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollToSection?: (sectionId: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-900/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/heading.png" alt="Clat Tribe Logo" width={180} height={180} className="rounded" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/clat-starter-pack" className="hover:text-white transition-colors">
            CLAT Starter Pack
          </Link>
          <Link href="/our-team" className="hover:text-white transition-colors">
            Our Team
          </Link>
          <Link href="/our-courses" className="hover:text-white transition-colors">
            Our Courses
          </Link>
          {/* <button 
            onClick={() => handleScrollToSection('flashcards')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Flashcards
          </button> */}
          <Link href="/blogs" className="hover:text-white transition-colors">
            Blogs
          </Link>
          <Link href="/nlu-predictor" className="hover:text-white transition-colors">
            NLU Predictor
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172B] border-t border-white/10 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            <Link 
              href="/" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/clat-starter-pack" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              CLAT Starter Pack
            </Link>
            <Link 
              href="/our-team" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link 
              href="/our-courses" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Courses
            </Link>
            {/* <button 
              onClick={() => {
                handleScrollToSection('flashcards');
                setMobileMenuOpen(false);
              }}
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 text-left font-medium"
            >
              Flashcards
            </button> */}
            <Link 
              href="/blogs" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link 
              href="/nlu-predictor" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              NLU Predictor
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}