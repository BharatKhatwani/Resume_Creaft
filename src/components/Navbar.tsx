'use client'
import { useState } from "react";
import { FaHome, FaCloudUploadAlt, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo / Brand */}
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          ResumeCraft
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <FaHome className="text-lg" />
            <span>Home</span>
          </Link>
          <Link
            href="/upload"
            className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <FaCloudUploadAlt className="text-lg" />
            <span>Upload Resume</span>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-4 px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200">
            <a
              href="#/"
              className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </a>
            <a
              href="#/upload"
              className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              <FaCloudUploadAlt className="text-lg" />
              <span>Upload Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}