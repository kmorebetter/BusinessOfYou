'use client';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button - visible on mobile only */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 sm:hidden"
      >
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 sm:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="pt-20 px-8">
          <h4 className="uppercase text-sm tracking-widest mb-6" style={{fontFamily: 'Crimson Text, serif'}}>Structure</h4>
          <ul className="space-y-6" style={{fontFamily: 'Crimson Text, serif'}}>
            <li className="leading-none text-lg">01 Contrast</li>
            <li className="leading-none text-lg">02 Rhythm</li>
            <li className="leading-none text-lg">03 Balance</li>
          </ul>
        </nav>
      </div>

      {/* Desktop menu */}
      <nav className="hidden sm:block">
        <div className="h-[158px]"></div> {/* Micro-adjusted for pixel-perfect alignment */}
        <h4 className="uppercase text-sm tracking-widest mb-6" style={{fontFamily: 'Crimson Text, serif'}}>Structure</h4>
        <ul className="space-y-6" style={{fontFamily: 'Crimson Text, serif'}}>
          <li className="leading-none">01 Contrast</li>
          <li className="leading-none">02 Rhythm</li>
          <li className="leading-none">03 Balance</li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation; 