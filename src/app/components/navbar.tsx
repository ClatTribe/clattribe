// src/components/navbar.tsx
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-2xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.jpg"   // ✅ Now it comes from public
            alt="Clat Tribe Logo"
            width={200}
            height={200}
            className="rounded"
          />
          {/* <span className="font-extrabold text-xl text-gray-900">Clat Tribe</span> */}
        </div>

        {/* Menu Options */}
        <ul className="hidden md:flex space-x-10 font-semibold text-lg text-gray-800">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-blue-600 transition">
              Courses
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col space-y-1">
          <span className="block h-0.5 w-6 bg-gray-800"></span>
          <span className="block h-0.5 w-6 bg-gray-800"></span>
          <span className="block h-0.5 w-6 bg-gray-800"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
