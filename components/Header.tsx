'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white w-full px-4 sm:px-6 lg:px-[200px] py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Selena Sketches Logo"
            width={150}
            height={60}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-text hover:text-accent transition-colors font-medium text-sm">
            Home
          </Link>
          <Link href="/about" className="text-text hover:text-accent transition-colors font-medium text-sm">
            About
          </Link>
          <Link href="/contact" className="text-text hover:text-accent transition-colors font-medium text-sm">
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu Button (Mobile/Tablet) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile/Tablet Menu - Full Page */}
      <div
        className={`lg:hidden fixed inset-0 bg-background transition-all duration-300 z-50 overflow-hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full max-h-screen">
          {/* Menu Header with Close Button */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-300 flex-shrink-0">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/logo.png"
                alt="Selena Sketches Logo"
                width={120}
                height={48}
                className="h-auto w-auto"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-text"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 flex items-center px-4 sm:px-6 overflow-y-auto">
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-text hover:text-accent transition-colors font-serif text-2xl"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-text hover:text-accent transition-colors font-serif text-2xl"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Social Icons at Bottom */}
          <div className="px-4 sm:px-6 py-6 flex-shrink-0 flex items-center gap-4">
            <a
              href="mailto:selenasketches@gmail.com"
              className="w-10 h-10 rounded-full bg-text flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-background"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/selenasketches"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#E1306C] flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

