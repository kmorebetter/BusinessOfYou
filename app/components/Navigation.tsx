'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-[#009A9C]/10">
      {/* Desktop Navigation */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="hidden lg:flex items-center justify-center h-20">
          <div className="max-w-[851px] w-full flex justify-center space-x-8">
            <Link href="/" className={`${ptSans.className} text-[#202329] hover:text-[#009A9C] transition-colors duration-200`}>
              Home
            </Link>
            <Link href="/substack" className={`${ptSans.className} text-[#202329] hover:text-[#009A9C] transition-colors duration-200`}>
              Substack
            </Link>
            <span className={`${ptSans.className} text-[#202329]`}>02 Rhythm</span>
            <span className={`${ptSans.className} text-[#202329]`}>03 Balance</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 text-[#202329] p-2"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="pt-24 px-6">
          <div className="flex flex-col space-y-6">
            <Link 
              href="/" 
              className={`${ptSans.className} text-lg text-[#202329] hover:text-[#009A9C] transition-colors duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/substack" 
              className={`${ptSans.className} text-lg text-[#202329] hover:text-[#009A9C] transition-colors duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Substack
            </Link>
            <span className={`${ptSans.className} text-lg text-[#202329]`}>02 Rhythm</span>
            <span className={`${ptSans.className} text-lg text-[#202329]`}>03 Balance</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;