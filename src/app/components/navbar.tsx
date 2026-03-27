'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  scrollToSection?: (sectionId: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleFlashcardsClick = () => {
    setMobileMenuOpen(false);
    
    if (pathname === '/') {
      if (scrollToSection) {
        scrollToSection('flashcards');
      } else {
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
      router.push('/#flashcards');
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
          
          <Link 
            href="https://dsbchallenge.clattribe.com/" 
            target="_blank"
            className="text-brand-gold hover:text-white transition-colors font-semibold"
          >
            DSB Challenge
          </Link>

          {/* About Us Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-white transition-colors cursor-default">
              About Us
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-48 bg-[#0F172B] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 overflow-hidden">
              <Link 
                href="/our-team" 
                className="block px-5 py-3 hover:bg-white/5 hover:text-white transition-colors"
              >
                Our Team
              </Link>
              <Link 
                href="/our-courses" 
                className="block px-5 py-3 hover:bg-white/5 hover:text-white transition-colors"
              >
                Our Courses
              </Link>
            </div>
          </div>

          <Link href="/clat-2027-starter-kit" className="hover:text-white transition-colors">
            CLAT 2027 Starter Kit
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
        <div className="md:hidden bg-[#0F172B] border-t border-white/10 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            <Link 
              href="/" 
              className="text-white py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              href="https://dsbchallenge.clattribe.com/" 
              target="_blank"
              className="text-brand-gold py-3 px-4 rounded-lg hover:bg-white/5 font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              DSB Challenge
            </Link>

            {/* Mobile About Us Sub-menu */}
            <div className="py-2 px-4">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-2 font-bold">About Us</p>
              <div className="flex flex-col gap-1 border-l-2 border-white/10 ml-1">
                <Link 
                  href="/our-team" 
                  className="text-white py-2 px-4 hover:text-brand-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link 
                  href="/our-courses" 
                  className="text-white py-2 px-4 hover:text-brand-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Courses
                </Link>
              </div>
            </div>

            <Link 
              href="/clat-2027-starter-kit" 
              className="text-white py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              CLAT 2027 Starter Kit
            </Link>
            
            <button 
              onClick={handleFlashcardsClick}
              className="text-white py-3 px-4 rounded-lg hover:bg-white/5 text-left font-medium"
            >
              Flashcards
            </button>
            
            <Link 
              href="/blogs" 
              className="text-white py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            
            <Link 
              href="/clat-gk-vault" 
              className="text-white py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
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