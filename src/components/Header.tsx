'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Logo size="md" />
            <span className="font-display text-2xl font-bold text-chocolate">
              Atelier del Gelato
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-chocolate hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="#products" className="text-chocolate hover:text-primary transition-colors font-medium">
              Our Products
            </Link>
            <Link href="#desserts" className="text-chocolate hover:text-primary transition-colors font-medium">
              Desserts
            </Link>
            <Link href="#gallery" className="text-chocolate hover:text-primary transition-colors font-medium">
              Gallery
            </Link>
            <Link href="#menu" className="text-chocolate hover:text-primary transition-colors font-medium">
              Menu
            </Link>
            <Link href="#contact" className="text-chocolate hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>


          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-chocolate hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#home"
                className="text-chocolate hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#products"
                className="text-chocolate hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Products
              </Link>
              <Link
                href="#desserts"
                className="text-chocolate hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Desserts
              </Link>
              <Link
                href="#gallery"
                className="text-chocolate hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#menu"
                className="text-chocolate hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="#contact"
                className="text-chocolate hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
