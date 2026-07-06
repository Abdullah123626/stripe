'use client';

import React, { useState } from 'react';

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

export default function StripeLanding() {
  const [activeTab, setActiveTab] = useState('lightspeed');
  const currentTestimonial = testimonialData.find((item) => item.id === activeTab) || testimonialData[3];

  return (
    <div className="w-full bg-white text-[#425466] font-sans antialiased overflow-x-hidden selection:bg-indigo-100">
      
      {/* ======================================================================
          SECTION 1: HERO HEADER SECTION
         ====================================================================== */}
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

      {/* ======================================================================
          SECTION 2: GRAPHIC PORTION (Mobile par floating boxes hidden hain)
         ====================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div 
          className="rounded-3xl p-6 sm:p-12 lg:p-24 relative min-h-[380px] sm:min-h-[550px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-cover bg-center shadow-sm"
          style={{
            backgroundImage: `url('https://images.stripeassets.com/fzn2n1nzq965/5dQAw5oJf3TOO1Jt6IKDRH/f391594c11f38d821259acdd3412a7a6/platform-graphic-background_2x.png?w=1632&fm=webp&q=90')`
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl border border-gray-100/80 p-4 sm:p-6 relative z-10">
            <div className="flex items-center gap-1.5 mb-4 border-b border-gray-100 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
              <span className="text-[10px] sm:text-xs text-gray-400 ml-4 bg-gray-50 px-3 py-0.5 rounded border border-gray-100/60 w-36 sm:w-56 truncate">
                dashboard.yourplatform.com
              </span>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="hidden sm:block col-span-3 space-y-3 pr-2 border-r border-gray-50/50">
                <div className="h-5 w-16 bg-indigo-100/70 rounded"></div>
                <div className="h-3 w-full bg-indigo-50/50 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
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

            {/* FLOATING BOXES: Mobile par hidden (`hidden md:block`) */}
            <div className="hidden md:block absolute -top-10 -right-8 lg:-right-12 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs z-20 text-xs">
              <p className="font-bold text-[#0a2540] text-[13px]">Notification banner</p>
              <code className="block mt-2 text-[11px] text-indigo-600 bg-indigo-50/60 p-2 rounded-lg font-mono">
                stripe.components.create("notification-banner");
              </code>
            </div>
            <div className="hidden md:block absolute top-1/4 -left-12 lg:-left-16 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs z-20 text-xs">
              <p className="font-bold text-[#0a2540] text-[13px]">Payouts</p>
              <code className="block mt-2 text-[11px] text-indigo-600 bg-indigo-50/60 p-2 rounded-lg font-mono">
                stripe.components.create("payouts");
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 3: THREE COLUMN FEATURES
         ====================================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          <div>
            <div className="w-9 h-9 text-indigo-600 bg-indigo-50 flex items-center justify-center rounded-lg mb-4 font-bold shadow-sm">🚀</div>
            <h3 className="text-base font-bold text-[#0a2540] mb-2">Get to market faster</h3>
            <p className="text-[14px] text-[#425466] leading-relaxed mb-3">Launch and scale payments products with lower operational overhead.</p>
          </div>
          <div>
            <div className="w-9 h-9 text-indigo-600 bg-indigo-50 flex items-center justify-center rounded-lg mb-4 font-bold shadow-sm">📈</div>
            <h3 className="text-base font-bold text-[#0a2540] mb-2">Grow new lines of revenue</h3>
            <p className="text-[14px] text-[#425466] leading-relaxed mb-3">Monetize platform transactions—including payments and interchange fees.</p>
          </div>
          <div>
            <div className="w-9 h-9 text-indigo-600 bg-indigo-50 flex items-center justify-center rounded-lg mb-4 font-bold shadow-sm">🛡️</div>
            <h3 className="text-base font-bold text-[#0a2540] mb-2">Manage platform risk</h3>
            <p className="text-[14px] text-[#425466] leading-relaxed mb-3">Stay ahead of global regulations with built-in tools for compliance.</p>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 4: DYNAMIC SLIDER TESTIMONIAL SECTION
         ====================================================================== */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center border-t border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden ring-4 ring-indigo-50/70 shadow-sm">
            <img className="w-full h-full object-cover" src={currentTestimonial.avatar} alt={currentTestimonial.author} />
          </div>
        </div>
        <div className="min-h-[120px] flex items-center justify-center max-w-3xl mx-auto">
          <blockquote className="text-lg sm:text-xl font-medium text-[#0a2540] leading-relaxed">{currentTestimonial.quote}</blockquote>
        </div>
        <div className="mt-4 text-sm">
          <p className="font-bold text-[#0a2540] text-base">{currentTestimonial.author}</p>
          <p className="text-gray-400 text-xs mt-0.5">{currentTestimonial.role}</p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="mt-16 border-t border-gray-100 w-full grid grid-cols-4 relative">
          {testimonialData.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="pt-6 pb-4 flex flex-col items-center justify-start relative group focus:outline-none cursor-pointer">
                <div className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${isActive ? 'bg-[#635bff] opacity-100' : 'bg-transparent opacity-0 group-hover:bg-gray-200 group-hover:opacity-50'}`} />
                <span className={`text-xs sm:text-sm font-bold tracking-tight uppercase ${isActive ? 'text-[#0a2540] opacity-100' : 'text-gray-400 opacity-60'}`}>{tab.logoText}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ======================================================================
          NEW SECTION 5: DARK INFRASTRUCTURE SECTION (image_d0571c.png)
         ====================================================================== */}
      <section className="w-full bg-[#0a2540] text-[#adbdcc] py-24 px-6 sm:px-8 lg:px-12 transition-all">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Area */}
          <div className="border-b border-gray-800 pb-16">
            <span className="text-[#635bff] font-semibold text-sm uppercase tracking-wider block mb-3">Reliable, extensible infrastructure</span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight max-w-xl">
                  Adapt Stripe to your business needs with flexible integration options.
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-wrap gap-4 lg:justify-end">
                <a href="#" className="bg-[#635bff] text-white font-medium text-sm px-4 py-2 rounded-full hover:bg-[#5433ff] transition-all inline-flex items-center gap-1 shadow-sm">
                  View developer docs <span className="text-xs">&rarr;</span>
                </a>
                <a href="#" className="bg-transparent text-white border border-gray-700 font-medium text-sm px-4 py-2 rounded-full hover:border-gray-500 transition-all inline-flex items-center gap-1">
                  View Libraries on GitHub <span className="text-xs">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sub-section 1: Connect to existing systems */}
          <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gray-800">
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-white font-bold text-lg">Connect to existing systems.</h3>
              <p className="text-sm leading-relaxed">
                Orchestrate payments across multiple processors, build custom workflows, and connect to third parties using APIs, partner apps, or prebuilt integrations.
              </p>
            </div>
            
            {/* Visual Architecture Representation Box (Responsive Diagram Mockup) */}
            <div className="lg:col-span-8 bg-[#0d2e50] rounded-2xl p-6 sm:p-8 border border-gray-800 flex items-center justify-center relative overflow-hidden min-h-[220px]">
              <div className="w-full max-w-md grid grid-cols-3 gap-4 text-center text-[10px] sm:text-xs font-mono text-white relative z-10">
                <div className="bg-[#1a3f66] border border-gray-700 p-3 rounded-xl shadow-sm flex flex-col justify-center items-center">
                  <span className="text-[#635bff] text-base mb-1">🔌</span> Third Party Apps
                </div>
                <div className="bg-[#635bff] p-3 rounded-xl shadow-md flex flex-col justify-center items-center font-bold">
                  <span className="text-white text-base mb-1">💳</span> Stripe API
                </div>
                <div className="bg-[#1a3f66] border border-gray-700 p-3 rounded-xl shadow-sm flex flex-col justify-center items-center">
                  <span className="text-emerald-400 text-base mb-1">📊</span> Workflows
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#635bff]/5 to-transparent blur-xl pointer-events-none" />
            </div>
          </div>

          {/* Sub-section 2: Scale with confidence & Metrics */}
          <div className="py-16 space-y-12 border-b border-gray-800">
            <div className="max-w-2xl space-y-3">
              <h3 className="text-white font-bold text-lg">Scale with confidence.</h3>
              <p className="text-sm leading-relaxed">
                Handle thousands of transactions per second with consistent speed and reliability, even during peak traffic periods.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
              <div className="border-l-2 border-[#635bff] pl-6 space-y-1">
                <p className="text-white font-bold text-3xl sm:text-4xl tracking-tight">500M+</p>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">API requests per day</p>
              </div>
              <div className="border-l-2 border-[#635bff] pl-6 space-y-1">
                <p className="text-white font-bold text-3xl sm:text-4xl tracking-tight">10K+</p>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">API requests per second</p>
              </div>
              <div className="border-l-2 border-[#635bff] pl-6 space-y-1">
                <p className="text-white font-bold text-3xl sm:text-4xl tracking-tight">150K+</p>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Integrations per minute</p>
              </div>
            </div>
          </div>

          {/* Sub-section 3: Choose an integration path */}
          <div className="pt-16 space-y-10">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-white font-bold text-lg">Choose an integration path.</h3>
              <p className="text-sm leading-relaxed">
                With AI-powered support, rich documentation, and built-in debugging tools, you can quickly get started with the best option for your business.
              </p>
            </div>

            {/* Cards Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-[#0d2e50] border border-gray-800/60 p-6 rounded-2xl flex flex-col justify-between hover:border-gray-700 transition-all min-h-[200px]">
                <div>
                  <h4 className="text-white font-bold text-sm mb-2">Don't code?</h4>
                  <p className="text-xs leading-relaxed text-gray-400">
                    Get up and running layout checkout instantly, or share a payment link right from the Stripe Dashboard, no code required.
                  </p>
                </div>
                <a href="#" className="text-xs font-semibold text-[#635bff] hover:text-[#5433ff] inline-flex items-center gap-1 mt-6">
                  Explore no-code <span className="text-[10px]">&rarr;</span>
                </a>
              </div>

              {/* Card 2 */}
              <div className="bg-[#0d2e50] border border-gray-800/60 p-6 rounded-2xl flex flex-col justify-between hover:border-gray-700 transition-all min-h-[200px]">
                <div>
                  <h4 className="text-white font-bold text-sm mb-2">Use a pre-integrated platform.</h4>
                  <p className="text-xs leading-relaxed text-gray-400">
                    Browse our extensive directory of ecosystems that integrate natively with Stripe to configure websites or online stores instantly.
                  </p>
                </div>
                <a href="#" className="text-xs font-semibold text-[#635bff] hover:text-[#5433ff] inline-flex items-center gap-1 mt-6">
                  See directory <span className="text-[10px]">&rarr;</span>
                </a>
              </div>

              {/* Card 3 */}
              <div className="bg-[#0d2e50] border border-gray-800/60 p-6 rounded-2xl flex flex-col justify-between hover:border-gray-700 transition-all min-h-[200px]">
                <div>
                  <h4 className="text-white font-bold text-sm mb-2">Build your own integration.</h4>
                  <p className="text-xs leading-relaxed text-gray-400">
                    Use our flexible client SDKs, multi-environment APIs, and AI-driven assistant tools to build custom products.
                  </p>
                </div>
                <a href="#" className="text-xs font-semibold text-[#635bff] hover:text-[#5433ff] inline-flex items-center gap-1 mt-6">
                  Get started <span className="text-[10px]">&rarr;</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}