'use client';

import React, { useState } from 'react';

// Dynamic Slider Data matching image_ce8d05 and image_cff1a8
const testimonialData = [
  {
    id: 'mindbody',
    logoText: 'mindbody',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150', 
    quote: '“With Stripe, we have a global technology partner to help our customers—from Canadian yoga studios to British boxing classes—keep growing and evolving in a new wellness world.”',
    author: 'Kurtis Moyer',
    role: 'Lead Product Manager of Payments, Mindbody',
  },
  {
    id: 'jobber',
    logoText: 'JOBBER',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
    quote: '“Jobber uses Stripe to help home service professionals run more efficient businesses, capture payments faster on the job, and access capital easily.”',
    author: 'Sam Pillar',
    role: 'CEO & Co-founder, Jobber',
  },
  {
    id: 'substack',
    logoText: 'substack',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150',
    quote: '“Substack relies on Stripe to build a powerful subscription engine for independent writers and creators around the globe, making recurring revenue flawless.”',
    author: 'Chris Best',
    role: 'Co-founder and CEO, Substack',
  },
  {
    id: 'lightspeed',
    logoText: 'lightspeed',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    quote: '“Stripe offers an enterprise-grade infrastructure that puts our customers on the cutting edge of modern payments technology. The combination of Terminal and Connect is a powerful integrated solution.”',
    author: 'Dax Dasilva',
    role: 'Founder and CEO, Lightspeed',
  },
];

export default function StripeSection() {
  // Default selected tab is 'lightspeed'
  const [activeTab, setActiveTab] = useState('lightspeed');
  const currentTestimonial = testimonialData.find((item) => item.id === activeTab) || testimonialData[3];

  return (
    <div className="w-full bg-white text-[#425466] font-sans antialiased overflow-x-hidden selection:bg-indigo-100">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] tracking-tight leading-[1.1] max-w-xl">
              Make your SaaS platform a complete financial operating system
            </h1>
            <div className="mt-6">
              <a 
                href="#" 
                className="inline-flex items-center gap-1 bg-gradient-to-r from-[#635bff] to-[#5433ff] text-white px-5 py-2 rounded-full font-medium text-sm shadow-sm hover:translate-y-[-1px] hover:brightness-110 transition-all duration-150"
              >
                Stripe for platforms <span className="text-xs">➔</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-base sm:text-lg text-[#425466] leading-relaxed">
              From the Fortune 100 to the Forbes Cloud 100, vertical SaaS platforms use Stripe to expand their product offerings with embedded payments and financial services.
            </p>
          </div>
        </div>
      </section>

      {/* 2. GRAPHIC PORTION (Mobile par floating text boxes hidden honge) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div 
          className="rounded-3xl p-6 sm:p-12 lg:p-24 relative min-h-[380px] sm:min-h-[550px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-cover bg-center shadow-sm"
          style={{
            backgroundImage: `url('https://images.stripeassets.com/fzn2n1nzq965/5dQAw5oJf3TOO1Jt6IKDRH/f391594c11f38d821259acdd3412a7a6/platform-graphic-background_2x.png?w=1632&fm=webp&q=90')`
          }}
        >
          
          {/* Main Simulated UI Window */}
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl border border-gray-100/80 p-4 sm:p-6 relative z-10 transition-all duration-300">
            
            {/* Fake Browser Window Top Bar */}
            <div className="flex items-center gap-1.5 mb-4 border-b border-gray-100 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
              <span className="text-[10px] sm:text-xs text-gray-400 ml-4 bg-gray-50 px-3 py-0.5 rounded border border-gray-100/60 w-36 sm:w-56 truncate">
                dashboard.yourplatform.com
              </span>
            </div>

            {/* Dashboard Mock Content */}
            <div className="grid grid-cols-12 gap-4">
              <div className="hidden sm:block col-span-3 space-y-3 pr-2 border-r border-gray-50/50">
                <div className="h-5 w-16 bg-indigo-100/70 rounded"></div>
                <div className="h-3 w-full bg-indigo-50/50 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-50 rounded"></div>
              </div>
              <div className="col-span-12 sm:col-span-9 space-y-4">
                <div className="h-5 w-32 bg-gray-100 rounded"></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-indigo-50 rounded-lg p-2.5 bg-indigo-50/10">
                    <span className="text-[9px] uppercase text-gray-400 block font-bold">Balances</span>
                    <span className="text-sm font-bold text-gray-700">$820.58</span>
                  </div>
                  <div className="border border-gray-100 rounded-lg p-2.5">
                    <span className="text-[9px] uppercase text-gray-400 block font-bold">Financing</span>
                    <span className="text-xs font-semibold text-indigo-600">Pre-qualified</span>
                  </div>
                </div>
                <div className="border border-gray-100 rounded-lg p-3 space-y-2">
                  <div className="h-3.5 w-24 bg-gray-100 rounded"></div>
                  <div className="h-2.5 w-full bg-gray-50 rounded"></div>
                </div>
              </div>
            </div>

            {/* FLOATING TEXT DIVS (Hidden on mobile/tablet via `hidden md:block`) */}
            
            {/* Box 1: Notification Banner (Top Right) */}
            <div className="hidden md:block absolute -top-10 -right-8 lg:-right-12 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs z-20 text-xs transition-all hover:scale-[1.02]">
              <p className="font-bold text-[#0a2540] text-[13px]">Notification banner</p>
              <p className="text-gray-500 mt-1 leading-relaxed">Show a banner listing required actions for risk and onboarding.</p>
              <code className="block mt-3 text-[11px] text-indigo-600 bg-indigo-50/60 p-2 rounded-lg font-mono">
                stripe.components.create("notification-banner");
              </code>
            </div>

            {/* Box 2: Payouts (Middle Left) */}
            <div className="hidden md:block absolute top-1/4 -left-12 lg:-left-16 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs z-20 text-xs transition-all hover:scale-[1.02]">
              <p className="font-bold text-[#0a2540] text-[13px]">Payouts</p>
              <p className="text-gray-500 mt-1 leading-relaxed">Show available balances and allow account connected users to initiate payouts.</p>
              <code className="block mt-3 text-[11px] text-indigo-600 bg-indigo-50/60 p-2 rounded-lg font-mono">
                stripe.components.create("payouts");
              </code>
            </div>

            {/* Box 3: Capital Financing Promotion (Bottom Right) */}
            <div className="hidden md:block absolute -bottom-10 -right-6 lg:-right-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs z-20 text-xs transition-all hover:scale-[1.02]">
              <p className="font-bold text-[#0a2540] text-[13px]">Capital financing promotion</p>
              <p className="text-gray-500 mt-1 leading-relaxed">Show a customized amount of financing offer and allow users to apply.</p>
              <code className="block mt-3 text-[11px] text-indigo-600 bg-indigo-50/60 p-2 rounded-lg font-mono">
                stripe.components.create("capital-financing");
              </code>
            </div>

            {/* Box 4: Payments (Bottom Left) */}
            <div className="hidden md:block absolute -bottom-14 -left-8 lg:-left-12 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs z-20 text-xs transition-all hover:scale-[1.02]">
              <p className="font-bold text-[#0a2540] text-[13px]">Payments</p>
              <p className="text-gray-500 mt-1 leading-relaxed">Show a list of payments with export, refund, and dispute capabilities.</p>
              <code className="block mt-3 text-[11px] text-indigo-600 bg-indigo-50/60 p-2 rounded-lg font-mono">
                stripe.components.create("payments");
              </code>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THREE COLUMN FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          <div>
            <div className="w-9 h-9 text-indigo-600 bg-indigo-50 flex items-center justify-center rounded-lg mb-4 font-bold text-base shadow-sm">🚀</div>
            <h3 className="text-base font-bold text-[#0a2540] mb-2">Get to market faster</h3>
            <p className="text-[14px] text-[#425466] leading-relaxed mb-3">
              Launch and scale payments products with lower operational overhead using embedded components and no-code tools.
            </p>
            <a href="#" className="text-sm font-semibold text-[#635bff] hover:text-[#5433ff] inline-flex items-center gap-1">
              Read the guide <span className="text-xs">&rarr;</span>
            </a>
          </div>

          <div>
            <div className="w-9 h-9 text-indigo-600 bg-indigo-50 flex items-center justify-center rounded-lg mb-4 font-bold text-base shadow-sm">📈</div>
            <h3 className="text-base font-bold text-[#0a2540] mb-2">Grow new lines of revenue</h3>
            <p className="text-[14px] text-[#425466] leading-relaxed mb-3">
              Monetize platform transactions—including payments, card interchange, and financing fees.
            </p>
            <a href="#" className="text-sm font-semibold text-[#635bff] hover:text-[#5433ff] inline-flex items-center gap-1">
              Read the guide <span className="text-xs">&rarr;</span>
            </a>
          </div>

          <div>
            <div className="w-9 h-9 text-indigo-600 bg-indigo-50 flex items-center justify-center rounded-lg mb-4 font-bold text-base shadow-sm">🛡️</div>
            <h3 className="text-base font-bold text-[#0a2540] mb-2">Manage platform risk</h3>
            <p className="text-[14px] text-[#425466] leading-relaxed mb-3">
              Stay ahead of global regulations with tools for compliance, credit risk, fraud prevention, and account security.
            </p>
            <a href="#" className="text-sm font-semibold text-[#635bff] hover:text-[#5433ff] inline-flex items-center gap-1">
              Read the guide <span className="text-xs">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC SLIDER TESTIMONIAL SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center border-t border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden ring-4 ring-indigo-50/70 shadow-sm transition-all duration-300">
            <img 
              className="w-full h-full object-cover" 
              src={currentTestimonial.avatar} 
              alt={currentTestimonial.author}
            />
          </div>
        </div>
        
        <div className="min-h-[140px] sm:min-h-[100px] flex items-center justify-center max-w-3xl mx-auto">
          <blockquote className="text-lg sm:text-xl font-medium text-[#0a2540] leading-relaxed transition-all duration-300">
            {currentTestimonial.quote}
          </blockquote>
        </div>

        <div className="mt-4 text-sm transition-all duration-300">
          <p className="font-bold text-[#0a2540] text-base">{currentTestimonial.author}</p>
          <p className="text-gray-400 text-xs mt-0.5">{currentTestimonial.role}</p>
        </div>
        
        <div className="mt-6">
          <a href="#" className="text-sm font-semibold text-[#635bff] hover:text-[#5433ff] inline-flex items-center gap-1">
            Read the story <span className="text-xs">&rarr;</span>
          </a>
        </div>

        {/* Dynamic Logo Navigation Tabs */}
        <div className="mt-16 border-t border-gray-100 w-full grid grid-cols-4 relative">
          {testimonialData.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="pt-6 pb-4 flex flex-col items-center justify-start relative group focus:outline-none cursor-pointer"
              >
                {/* Stripe Active State Purple Top Line */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                    isActive ? 'bg-[#635bff] opacity-100' : 'bg-transparent opacity-0 group-hover:bg-gray-200 group-hover:opacity-50'
                  }`}
                />
                
                {/* Logo Typography Styling */}
                <span 
                  className={`text-xs sm:text-sm md:text-base font-bold tracking-tight transition-all duration-200 uppercase ${
                    isActive 
                      ? 'text-[#0a2540] opacity-100' 
                      : 'text-gray-400 opacity-60 group-hover:opacity-90 group-hover:text-gray-600'
                  }`}
                  style={{
                    fontFamily: tab.id === 'substack' ? 'serif' : 'sans-serif',
                    letterSpacing: tab.id === 'jobber' ? '0.1em' : 'normal'
                  }}
                >
                  {tab.logoText}
                </span>
              </button>
            );
          })}
        </div>
      </section>

    </div>
  );
}