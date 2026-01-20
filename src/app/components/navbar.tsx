'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollToSection?: (sectionId: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleFlashcardsClick = () => {
    setMobileMenuOpen(false);
    
    // Check if we're on the homepage
    if (pathname === '/') {
      // If on homepage, scroll to flashcards section
      if (scrollToSection) {
        scrollToSection('flashcards');
      } else {
        // Fallback if scrollToSection is not provided
        const element = document.getElementById('flashcards');
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    } else {
      // If on another page, navigate to homepage with hash
      router.push('/#flashcards');
      
      // After navigation, scroll to section
      setTimeout(() => {
        const element = document.getElementById('flashcards');
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-900/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image src="/heading.png" alt="Clat Tribe Logo" width={180} height={180} className="rounded" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/clat-2027-starter-kit" className="hover:text-white transition-colors">
            CLAT 2027 Starter Kit
          </Link>
          <Link href="/our-team" className="hover:text-white transition-colors">
            Our Team
          </Link>
          <Link href="/our-courses" className="hover:text-white transition-colors">
            Our Courses
          </Link>
          <button 
            onClick={handleFlashcardsClick} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Flashcards
          </button>
          <Link href="/blogs" className="hover:text-white transition-colors">
            Blogs
          </Link>
          <Link href="/clat-gk-vault" className="hover:text-white transition-colors">
            CLAT GK Vault
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
              href="/clat-2027-starter-kit" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              CLAT 2027 Starter Kit
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
            <button 
              onClick={handleFlashcardsClick}
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 text-left font-medium"
            >
              Flashcards
            </button>
            <Link 
              href="/blogs" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link 
              href="/clat-gk-vault" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              CLAT GK Vault
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}