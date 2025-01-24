'use client';

import React, { useState } from 'react';
import { Playfair_Display, Lora } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['800']
});
const lora = Lora({ subsets: ['latin'] });

const HomePage = () => {
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
        <div className="relative -mt-[75px] lg:flex lg:justify-center">
          {/* Left Navigation - Hidden on mobile */}
          <div className="hidden lg:block lg:fixed lg:left-[calc(50%-600px)] lg:top-[465px] w-[150px]">
            <h4 className="text-[#009A9C] uppercase text-sm mb-6 border-b border-[#009A9C]">Structure</h4>
            <ul className="space-y-4 text-[#40434A]">
              <li className={lora.className}>01 Contrast</li>
              <li className={lora.className}>02 Rhythm</li>
              <li className={lora.className}>03 Balance</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl px-4 sm:px-6 lg:px-0">
            <h1 className={`${playfair.className} text-4xl lg:text-6xl font-extrabold text-[#202329] mb-4 leading-tight`}>
              The Business of <i>You</i>
            </h1>
            <p className={`${lora.className} text-xl lg:text-2xl text-[#40434A] mb-[67px] leading-[1.6] font-bold italic`}>
              <i>Typography must communicate clearly. The perfect page creates visual rhythm through asymmetric balance and purposeful contrast.</i>
            </p>

            <div className="space-y-12">
              <section>
                <h2 className={`${playfair.className} uppercase text-2xl lg:text-3xl font-normal text-[#202329] mb-6 tracking-wide`}>On Form</h2>
                <p className={`${lora.className} text-xl lg:text-2xl text-[#40434A] leading-[1.6] font-normal`}>
                  Typography must <span className="text-[#009A9C]">communicate clearly</span>. The perfect page creates visual rhythm through <span className="border-b border-[#009A9C]">asymmetric balance</span> and purposeful contrast.
                </p>
              </section>

              <section>
                <h2 className={`${playfair.className} uppercase text-2xl lg:text-3xl font-normal text-[#202329] mb-6 tracking-wide`}>Space + Structure</h2>
                <p className={`${lora.className} text-xl lg:text-2xl text-[#40434A] leading-[1.6] font-normal`}>
                  Modern typography demands intentional use of white space. Grid systems provide structure while allowing for dynamic composition.
                </p>
              </section>

              <blockquote className="pl-4 border-l-2 border-black my-8 sm:my-12 text-base sm:text-lg italic" style={{fontFamily: 'Crimson Text, serif'}}>
                "Typography must be clear. Clarity is the highest goal."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;