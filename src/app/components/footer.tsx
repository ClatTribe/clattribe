"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-r from-[#001220] via-[#011627] to-[#023059] text-white py-10 relative overflow-hidden mt-auto">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-y-0 relative z-10">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.jpg"
            alt="Clat Tribe Logo"
            width={160}
            height={160}
            className="rounded"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white font-medium text-lg">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="hover:text-gray-200 transition-all duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-5">
          {[
            { href: "#", icon: <Facebook size={24} />, label: "Facebook" },
            { href: "#", icon: <Instagram size={24} />, label: "Instagram" },
            { href: "#", icon: <Twitter size={24} />, label: "Twitter" },
            { href: "#", icon: <Linkedin size={24} />, label: "LinkedIn" },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-200 hover:text-white transition-all duration-300"
              aria-label={label}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-200 text-sm mt-8 border-t border-gray-400/30 pt-4 relative z-10">
        &copy; {year ?? ""} Clat Tribe. All rights reserved.
      </div>
    </footer>
  );
}
