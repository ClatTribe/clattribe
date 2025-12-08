import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BarChart3, FileText, Video, TrendingUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const sidebarItems = [
    { 
      href: '#', 
      label: 'NLU Predictor', 
      icon: <BarChart3 className="w-5 h-5" />
    },
    // { 
    //   href: '', 
    //   label: 'Written Analysis', 
    //   icon: <FileText className="w-5 h-5" />
    // },
    // { 
    //   href: '/video-analysis', 
    //   label: 'Video Analysis', 
    //   icon: <Video className="w-5 h-5" />
    // },
    // { 
    //   href: '/my-performance', 
    //   label: 'My CLAT Performance', 
    //   icon: <TrendingUp className="w-5 h-5" />
    // }
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image 
                src="/heading.png" 
                alt="Clat Tribe Logo" 
                width={180} 
                height={180} 
                className="rounded cursor-pointer" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/#capsules" className="hover:text-white transition-colors">
              Capsules
            </Link>
            <Link href="/#flashcards" className="hover:text-white transition-colors">
              Flashcards
            </Link>
            <Link href="/#blogs" className="hover:text-white transition-colors">
              Blogs
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
              {/* Main Nav Links */}
              <Link 
                href="/" 
                className="text-white hover:text-[#F59E0B] transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/#capsules" 
                className="text-white hover:text-[#F59E0B] transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Capsules
              </Link>
              <Link 
                href="/#flashcards" 
                className="text-white hover:text-[#F59E0B] transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Flashcards
              </Link>
              <Link 
                href="/#blogs" 
                className="text-white hover:text-[#F59E0B] transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </Link>

              {/* Divider */}
              <div className="border-t border-slate-700 my-2"></div>

              {/* Sidebar Items in Mobile */}
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-4 py-2">
                Analysis Tools
              </div>
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-[#F59E0B] text-white'
                      : 'text-slate-300 hover:text-[#F59E0B] hover:bg-white/5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed left-0 top-[73px] h-[calc(100vh-73px)] w-64 bg-slate-900/95 backdrop-blur-md border-r border-white/5 z-40">
        <div className="p-6 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 px-3">
            Analysis Tools
          </div>
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? 'bg-[#F59E0B] text-white shadow-lg shadow-[#F59E0B]/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 pt-[73px]">
        {children}
      </main>
    </div>
  );
};

export default Layout;