'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-montserrat font-bold text-charcoal">
            <span className="text-gold">Skönhets</span>Klinik
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8 font-montserrat">
          <Link href="/" className="text-charcoal hover:text-gold transition-colors">
            Hem
          </Link>
          <Link href="/tjanster" className="text-charcoal hover:text-gold transition-colors">
            Tjänster
          </Link>
          <Link href="/boka-tid" className="text-charcoal hover:text-gold transition-colors">
            Boka Tid
          </Link>
          <Link href="/om-oss" className="text-charcoal hover:text-gold transition-colors">
            Om Oss
          </Link>
          <Link href="/kontakta-oss" className="text-charcoal hover:text-gold transition-colors">
            Kontakta Oss
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-charcoal focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4 font-montserrat">
            <Link 
              href="/" 
              className="text-charcoal hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hem
            </Link>
            <Link 
              href="/tjanster" 
              className="text-charcoal hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tjänster
            </Link>
            <Link 
              href="/boka-tid" 
              className="text-charcoal hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Boka Tid
            </Link>
            <Link 
              href="/om-oss" 
              className="text-charcoal hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Om Oss
            </Link>
            <Link 
              href="/kontakta-oss" 
              className="text-charcoal hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakta Oss
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar; 