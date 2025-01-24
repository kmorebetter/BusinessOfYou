'use client';

import React, { useState } from 'react';
import { Playfair_Display, Lora } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['800']
});
const lora = Lora({ subsets: ['latin'] });

const SubstackPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative">
      {/* Hamburger Menu Button - Only visible on mobile */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-8 left-8 z-50 text-[#202329]"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden transition-transform duration-300 ease-in-out`}>
        <div className="pt-20 px-8">
          <h4 className="text-[#009A9C] uppercase text-sm mb-6 border-b border-[#009A9C]">Structure</h4>
          <ul className="space-y-4 text-[#40434A]">
            <li className={lora.className}>01 Contrast</li>
            <li className={lora.className}>02 Rhythm</li>
            <li className={lora.className}>03 Balance</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-[200px]">
        {/* Header Section */}
        <header className="max-w-3xl lg:ml-[240px] px-4 sm:px-6 mb-20">
          <h1 className={`${playfair.className} text-4xl lg:text-6xl font-extrabold text-[#202329] mb-4 leading-tight`}>
            Substack <i>Writing</i>
          </h1>
          <p className={`${lora.className} text-xl lg:text-2xl text-[#40434A] leading-[1.6] font-bold italic`}>
            <i>A collection of thoughts on business, technology, and the intersection of both.</i>
          </p>
        </header>

        {/* Main Content Area with Navigation */}
        <div className="relative flex">
          {/* Left Navigation - Hidden on mobile */}
          <div className="hidden lg:block w-[200px] fixed" style={{ left: 'max(calc((100% - 1400px) / 2 + 40px), 40px)' }}>
            <h4 className="text-[#009A9C] uppercase text-sm mb-6 border-b border-[#009A9C]">Structure</h4>
            <ul className="space-y-4 text-[#40434A]">
              <li className={lora.className}>01 Contrast</li>
              <li className={lora.className}>02 Rhythm</li>
              <li className={lora.className}>03 Balance</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="lg:ml-[240px] max-w-3xl px-4 sm:px-6">
            <div className="space-y-12">
              <section>
                <h2 className={`${playfair.className} uppercase text-2xl lg:text-3xl font-normal text-[#202329] mb-6 tracking-wide`}>Latest Video</h2>
                <div className="relative w-full aspect-video mb-6 bg-[#202329]/5 rounded-lg overflow-hidden">
                  {/* YouTube Video Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#009A9C] flex items-center justify-center cursor-pointer hover:bg-[#007F81] transition-colors">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Thumbnail Overlay - Replace src with actual thumbnail */}
                  <img 
                    src="/video-thumbnail-placeholder.jpg" 
                    alt="Video thumbnail" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <p className={`${lora.className} text-xl lg:text-2xl text-[#40434A] leading-[1.6] font-normal`}>
                  Watch the latest discussion on <span className="text-[#009A9C]">emerging trends</span> in technology and their impact on <span className="border-b border-[#009A9C]">modern business strategy</span>.
                </p>
              </section>

              <section>
                <h2 className={`${playfair.className} uppercase text-2xl lg:text-3xl font-normal text-[#202329] mb-6 tracking-wide`}>Featured Article</h2>
                <p className={`${lora.className} text-xl lg:text-2xl text-[#40434A] leading-[1.6] font-normal`}>
                  The intersection of business strategy and technological innovation creates unique opportunities for modern entrepreneurs.
                </p>
              </section>

              <section>
                <h2 className={`${playfair.className} uppercase text-2xl lg:text-3xl font-normal text-[#202329] mb-6 tracking-wide`}>Newsletter</h2>
                <p className={`${lora.className} text-xl lg:text-2xl text-[#40434A] leading-[1.6] font-normal`}>
                  Join the conversation about the future of business and technology. Subscribe to receive regular insights and analysis.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubstackPage;
