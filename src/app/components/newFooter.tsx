import React from "react";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const NewFooter: React.FC = () => {
  return (
    <footer className="py-14" style={{ backgroundColor: "#020617" }}>
      <div className="container mx-auto px-6">
        
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo + text */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold" style={{ color: "#f59e0b" }}>
              ClatTribe
            </h2>
            <p className="text-sm" style={{ color: "#94a3b8" }}>
              Master General Knowledge. Conquer CLAT.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-6">
            <a href="https://www.instagram.com/clattribe/" className="transition-colors"
               style={{ color: "#cbd5e1" }}>
              <Instagram className="w-5 h-5 hover:scale-110 transition-transform hover:text-[#f59e0b]" />
            </a>

            {/* <a href="#" className="transition-colors"
               style={{ color: "#cbd5e1" }}>
              <Twitter className="w-5 h-5 hover:scale-110 transition-transform hover:text-[#f59e0b]" />
            </a> */}

            <a href="https://www.youtube.com/@CLATribe" className="transition-colors"
               style={{ color: "#cbd5e1" }}>
              <Youtube className="w-5 h-5 hover:scale-110 transition-transform hover:text-[#f59e0b]" />
            </a>
          </div>

        </div>

        {/* DIVIDER */}
        <div
          className="my-10"
          style={{ borderBottom: "1px solid #1e293b" }}
        ></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between text-sm">
          <p style={{ color: "#64748b" }}>
            © 2025 ClatTribe Education. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="transition-colors" style={{ color: "#94a3b8" }}>
              Privacy Policy
            </a>
            <a href="#" className="transition-colors" style={{ color: "#94a3b8" }}>
              Terms of Service
            </a>
            <a href="#" className="transition-colors" style={{ color: "#94a3b8" }}>
              Contact Yash Ji
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default NewFooter;
