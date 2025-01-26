'use client';

import React from 'react';
import { PT_Sans_Narrow, PT_Sans } from 'next/font/google';
import Footer from '../Footer';
import Navigation from '../components/Navigation';

const ptSansNarrow = PT_Sans_Narrow({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

const ptSans = PT_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

const SubstackPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Navigation />
      <main className="flex-grow pt-[240px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          {/* Header Section */}
          <header className="max-w-[851px] mx-auto px-4 sm:px-6 mb-20">
            <h1 className={`${ptSansNarrow.className} text-4xl lg:text-6xl font-bold text-[#202329] mb-4 leading-tight`}>
              Substack <i>Writing</i>
            </h1>
            <p className={`${ptSans.className} text-base lg:text-lg text-[#40434A] leading-[1.8] font-bold italic mb-12`}>
              <i>A collection of thoughts on business, technology, and the intersection of both.</i>
            </p>
          </header>

          {/* Main Content */}
          <div className="max-w-[851px] mx-auto px-4 sm:px-6">
            <div className="space-y-16 mb-20">
              <section>
                <h2 className={`${ptSansNarrow.className} uppercase text-xl lg:text-2xl font-bold text-[#202329] mb-6 tracking-wide`}>Latest Video</h2>
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
                <p className={`${ptSans.className} text-base lg:text-lg text-[#40434A] leading-[1.8] font-normal mb-12`}>
                  Watch the latest discussion on <span className="text-[#009A9C]">emerging trends</span> in technology and their impact on <span className="border-b border-[#009A9C]">modern business strategy</span>.
                </p>
              </section>

              <section>
                <h2 className={`${ptSansNarrow.className} uppercase text-xl lg:text-2xl font-bold text-[#202329] mb-6 tracking-wide`}>Featured Article</h2>
                <p className={`${ptSans.className} text-base lg:text-lg text-[#40434A] leading-[1.8] font-normal mb-12`}>
                  The intersection of business strategy and technological innovation creates unique opportunities for modern entrepreneurs.
                </p>
              </section>

              <section>
                <h2 className={`${ptSansNarrow.className} uppercase text-xl lg:text-2xl font-bold text-[#202329] mb-6 tracking-wide`}>Newsletter</h2>
                <p className={`${ptSans.className} text-base lg:text-lg text-[#40434A] leading-[1.8] font-normal mb-12`}>
                  Join the conversation about the future of business and technology. Subscribe to receive regular insights and analysis.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubstackPage;
