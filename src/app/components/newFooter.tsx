import React from "react";
import { Instagram, Youtube } from "lucide-react";

const NewFooter = () => {
  const whatsappNumber = '918303865139';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    // Changed to #000000 for maximum darkness
    <footer className="py-12" style={{ backgroundColor: "#000000" }}>
      <div className="container mx-auto px-6">
        
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo + text */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <img 
                src="/heading.png" 
                alt="Clat Tribe Logo" 
                width={180} 
                height={180} 
                className="rounded brightness-90 hover:brightness-100 transition-all" 
              />
            </div>
            {/* Slightly darker text to blend with background */}
            <p className="text-sm mt-3 font-medium tracking-wide" style={{ color: "#64748b" }}>
              Master General Knowledge. Conquer CLAT.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 items-center">
            <button 
              onClick={handleWhatsApp}
              className="transition-all group"
              style={{ color: "#94a3b8" }}
              aria-label="WhatsApp"
            >
              <div className="w-6 h-6 hover:scale-110 transition-transform">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-full h-full group-hover:text-[#25D366]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
            </button>

            <a 
              href="https://www.instagram.com/clattribe/" 
              className="transition-all"
              style={{ color: "#94a3b8" }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 hover:scale-110 transition-transform hover:text-[#f59e0b]" />
            </a>

            <a 
              href="https://www.youtube.com/@CLATribe" 
              className="transition-all"
              style={{ color: "#94a3b8" }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 hover:scale-110 transition-transform hover:text-[#f59e0b]" />
            </a>
          </div>

        </div>

        {/* DIVIDER - Darker border to match new background */}
        <div
          className="my-10"
          style={{ borderBottom: "1px solid #111827" }}
        ></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between text-xs tracking-wider">
          <p style={{ color: "#475569" }}>
            © {new Date().getFullYear()} ClatTribe Education. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-6 mt-6 md:mt-0 items-center">
            <a href="/contact" className="transition-colors hover:text-[#f59e0b]" style={{ color: "#64748b" }}>
              Contact Us
            </a>
            <a href="#" className="transition-colors hover:text-[#f59e0b]" style={{ color: "#64748b" }}>
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-[#f59e0b]" style={{ color: "#64748b" }}>
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default NewFooter;