'use client';

import React from 'react';
import { PT_Sans_Narrow, PT_Sans } from 'next/font/google';
import Link from 'next/link';

const ptSansNarrow = PT_Sans_Narrow({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

const ptSans = PT_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Top Navigation */}
      <nav className="fixed w-full top-0 z-50 py-8">
        <div className="max-w-[640px] mx-auto px-6 flex justify-between items-center">
          <Link href="/" className={`${ptSansNarrow.className} text-2xl font-bold text-[#202329]`}>
            LOGO
          </Link>
          <div className="flex gap-6">
            <Link href="/campfire" className={`${ptSans.className} text-[#202329]`}>
              Campfire
            </Link>
            <Link href="/writebook" className={`${ptSans.className} text-[#202329]`}>
              Writebook
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-[120px] pb-20">
        <div className="max-w-[640px] mx-auto px-6">
          {/* Main Content */}
          <article className="space-y-8">
            {/* Opening Statement */}
            <p className={`${ptSans.className} font-normal text-xl text-[#202329] leading-relaxed mb-16`}>
              Something happened to business software.
            </p>

            {/* First Section */}
            <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed mb-8`}>
              You used to pay for it <span className="font-bold">once</span>, install it, and run it. Whether on someone's computer, or a server for everyone, it felt like you owned it. And you did.
            </p>

            <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed mb-8`}>
              Today, most software is a service. Not owned, but rented. Buying it enters you into a perpetual landlord–tenant agreement. Every month you pay for essentially the same thing you had last month. And if you stop paying, the software stops working. Boom, you're evicted.
            </p>

            <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed mb-8`}>
              For nearly two decades, the SaaS model benefitted landlords handsomely. With routine prayers — and payers — to the Church of Recurring Revenue, valuations shot to the moon on the backs of businesses subscribed at luxury prices for commodity services they had little control over.
            </p>

            <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed mb-8`}>
              Add up your SaaS subscriptions last year. You should own that shit by now.
            </p>

            <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed mb-8`}>
              SaaS still makes sense for many products, but its grip will slip. Installation and administration used to be hopelessly complicated, but self–hosting tech is simpler now and vastly improved. Plus, IT departments are hungry to run their own IT again, tired of being subservient to Big Tech's reign clouds.
            </p>

            <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed mb-8`}>
              <span className="font-bold">Once</span> upon a time you owned what you paid for, you controlled what you depended on, and your privacy and security were your own business. We think it's that time again.
            </p>

            {/* Product Introduction */}
            <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed mb-24`}>
              Introducing <span className="font-bold">ONCE</span>, a new line of software products from <Link href="https://37signals.com" className="underline">37signals</Link>.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-24">
              <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed`}>— Pay one time, own forever.</p>
              <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed`}>— We write the code, you get to see it.</p>
              <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed`}>— We give you the software, you get to host it.</p>
              <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed`}>— Simple and straightforward, not enterprisey and bloated.</p>
              <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed`}>— For one fixed price. <span className="font-bold">Once</span>.</p>
            </div>

            {/* Product Links */}
            <div className="mb-24">
              <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed mb-4`}>So far there are two ONCE products:</p>
              <div className="space-y-2">
                <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed`}>
                  — <Link href="/campfire" className="underline">Campfire</Link>: A group chat system similar to Slack or Teams, but simpler.
                </p>
                <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed`}>
                  — <Link href="/writebook" className="underline">Writebook</Link>: The easiest way on earth to publish a book online.
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-8 mb-24">
              <Link href="/campfire" className={`${ptSans.className} text-lg text-[#202329] underline`}>
                Campfire
              </Link>
              <Link href="/writebook" className={`${ptSans.className} text-lg text-[#202329] underline`}>
                Writebook
              </Link>
            </div>

            {/* Launch Info */}
            <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed mb-8`}>
              In the early 2000s, we were among the early pioneers leading the industry into the SaaS revolution. Now, 20 years later, we intend to help lead the way out. The post–SaaS era is just around the corner.
            </p>

            <p className={`${ptSans.className} font-normal text-lg text-[#202329] leading-relaxed mb-24`}>
              Stay tuned.
            </p>

            {/* Contact */}
            <p className={`${ptSans.className} font-normal text-lg text-[#202329] mb-24`}>
              <a href="mailto:jason@37signals.com" className="underline">jason@37signals.com</a>
            </p>

            {/* Footer */}
            <footer className={`${ptSans.className} font-normal text-sm text-[#202329] leading-relaxed`}>
              ONCE™ products are designed, built, and backed by 37signals™. Copyright 37signals LLC. All rights reserved. Anyone buying, using, or receiving a ONCE™ product is subject to our <Link href="/license" className="underline">software license agreement</Link>.
            </footer>
          </article>
        </div>
      </main>
    </div>
  );
};

export default HomePage;