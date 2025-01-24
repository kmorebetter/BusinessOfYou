import React from 'react';
import Navigation from './components/Navigation';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 px-4 sm:px-8">
      <main className="grid sm:grid-cols-12 gap-8 pt-16 sm:pt-24">
        <aside className="sm:col-span-3">
          <div className="bg-yellow-400 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold mb-8">
            1.
          </div>
          <Navigation />
        </aside>

        <div className="sm:col-span-9">
          <header className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-6xl mb-4 sm:mb-8 leading-tight tracking-tight font-[800]">
              The Digital Form
            </h1>
            <p className="text-xl sm:text-2xl font-semibold leading-snug" style={{fontFamily: 'Crimson Text, serif'}}>
              Typography must communicate clearly. The perfect page creates visual rhythm through asymmetric balance and purposeful contrast.
            </p>
          </header>

          <article className="space-y-8 sm:space-y-12">
            <section>
              <h2 className="uppercase text-base sm:text-lg tracking-widest mb-4 font-bold" style={{fontFamily: 'Crimson Text, serif'}}>On Form</h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{fontFamily: 'Crimson Text, serif'}}>
                Typography must <span className="bg-yellow-400 text-black px-1">communicate clearly</span>. The perfect page creates visual rhythm through <span className="border-b-2 border-yellow-400">asymmetric balance</span> and purposeful contrast.
              </p>
            </section>
            
            <section>
              <h2 className="uppercase text-base sm:text-lg tracking-widest mb-4 font-bold" style={{fontFamily: 'Crimson Text, serif'}}>Space + Structure</h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{fontFamily: 'Crimson Text, serif'}}>
                Modern typography demands intentional use of white space. Grid systems provide structure while allowing for dynamic composition.
              </p>
            </section>
            
            <blockquote className="pl-4 border-l-2 border-black my-8 sm:my-12 text-base sm:text-lg italic" style={{fontFamily: 'Crimson Text, serif'}}>
              "Typography must be clear. Clarity is the highest goal."
            </blockquote>
          </article>
        </div>
      </main>
    </div>
  );
};

export default HomePage;