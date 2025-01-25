'use client';

import React from 'react';
import { Playfair_Display, Lora } from 'next/font/google';
import Footer from './Footer';
import Navigation from './components/Navigation';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['800']
});
const lora = Lora({ subsets: ['latin'] });

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Navigation />
      <main className="flex-grow pt-[240px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          {/* Header Section */}
          <header className="max-w-[851px] mx-auto px-4 sm:px-6 mb-20">
            <h1 className={`${playfair.className} text-4xl lg:text-6xl font-extrabold text-[#202329] mb-4 leading-tight`}>
              The Business of <i>You</i>
            </h1>
            <p className={`${lora.className} text-base lg:text-lg text-[#40434A] leading-[1.8] font-bold italic mb-12`}>
              <i>Typography must communicate clearly. The perfect page creates visual rhythm through asymmetric balance and purposeful contrast.</i>
            </p>
          </header>

          {/* Main Content */}
          <div className="max-w-[851px] mx-auto px-4 sm:px-6">
            <div className="space-y-16 mb-20">
              <section>
                <h2 className={`${playfair.className} uppercase text-xl lg:text-2xl font-normal text-[#202329] mb-6 tracking-wide`}>On Form</h2>
                <p className={`${lora.className} text-base lg:text-lg text-[#40434A] leading-[1.8] font-normal mb-12`}>
                  Typography must <span className="text-[#009A9C]">communicate clearly</span>. The perfect page creates visual rhythm through <span className="border-b border-[#009A9C]">asymmetric balance</span> and purposeful contrast.
                </p>
              </section>

              <section>
                <h2 className={`${playfair.className} uppercase text-xl lg:text-2xl font-normal text-[#202329] mb-6 tracking-wide`}>Space + Structure</h2>
                <p className={`${lora.className} text-base lg:text-lg text-[#40434A] leading-[1.8] font-normal mb-12`}>
                  Modern typography demands intentional use of white space. Grid systems provide structure while allowing for dynamic composition.
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

export default HomePage;