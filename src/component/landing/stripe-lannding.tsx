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
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div 
        className="rounded-sm p-6 sm:p-12 lg:p-20 relative min-h-[600px] sm:min-h-[720px] lg:min-h-[800px] flex items-center justify-center overflow-visible bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.stripeassets.com/fzn2n1nzq965/5dQAw5oJf3TOO1Jt6IKDRH/f391594c11f38d821259acdd3412a7a6/platform-graphic-background_2x.png?w=1632&fm=webp&q=90')`
        }}
      >
        
        {/* MAIN BROWSER WINDOW CONTAINER */}
        <div className="bg-white rounded-sm shadow-2xl w-full max-w-4xl border border-gray-200/80 relative z-10 flex flex-col overflow-hidden">
          
          {/* Browser Top URL/Control Bar */}
          <div className="flex items-center p-4 border-b border-gray-100 bg-white relative">
            <div className="flex gap-1.5 absolute left-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
            </div>
            <div className="text-[11px] sm:text-xs text-gray-400 mx-auto bg-gray-50 px-8 py-1 rounded-md border border-gray-200/60 w-44 sm:w-64 text-center truncate font-sans">
              dashboard.zenflow.com
            </div>
          </div>

          {/* Inner Dashboard Grid Application Layout */}
          <div className="grid grid-cols-12 min-h-[440px]">
            
            {/* Sidebar (Zenflow Core Brand Column) */}
            <div className="col-span-3 bg-[#4a154b] p-5 text-white space-y-6 hidden sm:block text-left">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-[#e33fa1] rounded-full flex items-center justify-center text-[10px] font-bold">Z</div>
                <span className="font-bold text-sm tracking-wide">Zenflow</span>
              </div>
              <nav className="space-y-3.5 text-xs font-medium text-[#adbdcc]">
                <div className="hover:text-white cursor-pointer transition-colors">Home</div>
                <div className="text-[#ff66c4] font-semibold cursor-pointer border-l-2 border-[#ff66c4] pl-2.5 -ml-2.5">Payments</div>
                <div className="hover:text-white cursor-pointer transition-colors">Reporting</div>
                <div className="hover:text-white cursor-pointer transition-colors">Settings</div>
              </nav>
            </div>

            {/* Main Dashboard Interaction Hub */}
            <div className="col-span-12 sm:col-span-9 p-6 sm:p-8 bg-gray-50/40 space-y-5 text-left">
              <h2 className="text-base font-semibold text-[#e33fa1]">Hello, Daybreak Yoga</h2>
              
              {/* Dynamic Action Banner Notification */}
              <div className="bg-white border border-pink-100 rounded-xl p-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-sm">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e33fa1]"></span>
                    <span className="text-[10px] font-bold text-[#e33fa1] uppercase tracking-wider">Action required</span>
                  </div>
                  <p className="text-[11px] text-gray-600 font-medium">To make sure your business is supportable, we need to collect additional information.</p>
                </div>
                <button className="bg-[#fff0fa] hover:bg-[#ffe2f5] text-[#e33fa1] text-[11px] font-bold px-3.5 py-1.5 rounded-lg border border-pink-200/60 transition-colors shrink-0">
                  Add information
                </button>
              </div>

              {/* Functional Information Display Split Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Total Account Balances Block */}
                <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col justify-between min-h-[135px]">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-semibold tracking-wide uppercase">Total balance</span>
                    <span className="text-2xl font-bold text-gray-800 mt-0.5 block">$820.56</span>
                    <span className="text-[10px] text-gray-400 block mt-1">Available to pay out <span className="text-[#e33fa1] font-semibold">$341.80</span></span>
                  </div>
                  <button className="mt-3 w-full bg-[#fff0fa] hover:bg-[#ffe2f5] text-[#e33fa1] text-[11px] font-bold py-1.5 rounded-lg border border-pink-100 transition-colors">
                    Pay out
                  </button>
                </div>

                {/* Capital/Financing Status Display Block */}
                <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col justify-between min-h-[135px]">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-semibold tracking-wide uppercase">Expires on Jan 12</span>
                    <h3 className="text-[11px] font-bold text-gray-800 mt-1 leading-normal">You're pre-qualified for up to $37,000 in financing</h3>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-normal">If approved, you'll receive funds in as little as one to two business days.</p>
                  </div>
                  <button className="mt-3 w-full bg-[#fff0fa] hover:bg-[#ffe2f5] text-[#e33fa1] text-[11px] font-bold py-1.5 rounded-lg border border-pink-100 transition-colors">
                    Start application
                  </button>
                </div>
              </div>

              {/* Real-time Ledger Content Preview Area */}
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <h4 className="text-xs font-bold text-gray-700 mb-3">Payments</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-[11px] text-left text-gray-500 min-w-[400px]">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 font-medium">
                        <th className="pb-2 font-semibold">Amount</th>
                        <th className="pb-2 font-semibold">Status</th>
                        <th className="pb-2 font-semibold">Payment Method</th>
                        <th className="pb-2 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 font-medium">
                      <tr>
                        <td className="py-2.5 text-gray-800 font-bold">$150.00</td>
                        <td className="py-2.5"><span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-md text-[10px] font-semibold border border-emerald-100">Succeeded</span></td>
                        <td className="py-2.5 text-gray-600">Mastercard ••••1234</td>
                        <td className="py-2.5 text-gray-500">Single class</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-gray-800 font-bold">$85.00</td>
                        <td className="py-2.5"><span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-[10px] font-semibold border border-gray-200">Disputed</span></td>
                        <td className="py-2.5 text-gray-600">Visa ••••4010</td>
                        <td className="py-2.5 text-gray-500">Single class</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* FLOATING BLUEPRINT BADGES (Shifted Outside for Global Stack Layering) */}
        
        {/* 1. Notification Banner Overlap - Top Right over Browser Window border */}
        <div className="hidden lg:block absolute top-[6%] right-[6%] bg-white p-4 rounded-xl shadow-2xl border border-gray-200/80 max-w-[410px] z-30 text-left">
          <p className="font-bold text-gray-800 text-[12px]">Notification banner</p>
          <p className="text-[10px] text-gray-500 mt-0.5">Show a banner listing required actions for risk and onboarding.</p>
          <code className="block mt-2 text-[10.5px] bg-[#f8fafc] p-2 rounded-lg font-mono whitespace-nowrap border border-gray-100">
            <span className="text-[#1e293b]">stripeConnectInstance.</span>
            <span className="text-[#2563eb]">create</span>
            <span className="text-[#1e293b]">(</span>
            <span className="text-[#16a34a]">'notification-banner'</span>
            <span className="text-[#1e293b]">);</span>
          </code>
        </div>

        {/* 2. Payouts Context Overlap - Mid Left overlapping the sidebar & balance */}
        <div className="hidden lg:block absolute top-[40%] left-[4%] bg-white p-4 rounded-xl shadow-2xl border border-gray-200/80 max-w-[410px] z-30 text-left">
          <p className="font-bold text-gray-800 text-[12px]">Payouts</p>
          <p className="text-[10px] text-gray-500 mt-0.5">Show total balance and allow a connected account to initiate payouts.</p>
          <code className="block mt-2 text-[10.5px] bg-[#f8fafc] p-2 rounded-lg font-mono whitespace-nowrap border border-gray-100">
            <span className="text-[#1e293b]">stripeConnectInstance.</span>
            <span className="text-[#2563eb]">create</span>
            <span className="text-[#1e293b]">(</span>
            <span className="text-[#16a34a]">'payouts'</span>
            <span className="text-[#1e293b]">);</span>
          </code>
        </div>

        {/* 3. Payments Ledger Overlap - Bottom Left near table sidebar boundary */}
        <div className="hidden lg:block absolute bottom-[14%] left-[3%] bg-white p-4 rounded-xl shadow-2xl border border-gray-200/80 max-w-[410px] z-30 text-left">
          <p className="font-bold text-gray-800 text-[12px]">Payments</p>
          <p className="text-[10px] text-gray-500 mt-0.5">Show a list of payments with export, refund, and dispute capabilities.</p>
          <code className="block mt-2 text-[10.5px] bg-[#f8fafc] p-2 rounded-lg font-mono whitespace-nowrap border border-gray-100">
            <span className="text-[#1e293b]">stripeConnectInstance.</span>
            <span className="text-[#2563eb]">create</span>
            <span className="text-[#1e293b]">(</span>
            <span className="text-[#16a34a]">'payments'</span>
            <span className="text-[#1e293b]">);</span>
          </code>
        </div>

        {/* 4. Capital Financing Promotion Overlap - Lower Right Area */}
        <div className="hidden lg:block absolute bottom-[32%] right-[4%] bg-white p-4 rounded-xl shadow-2xl border border-gray-200/80 max-w-[410px] z-30 text-left">
          <p className="font-bold text-gray-800 text-[12px]">Capital financing promotion</p>
          <p className="text-[10px] text-gray-500 mt-0.5">Show a connected account's financing offer and allow them to apply.</p>
          <code className="block mt-2 text-[10.5px] bg-[#f8fafc] p-2 rounded-lg font-mono whitespace-nowrap border border-gray-100">
            <span className="text-[#1e293b]">stripeConnectInstance.</span>
            <span className="text-[#2563eb]">create</span>
            <span className="text-[#1e293b]">(</span>
            <span className="text-[#16a34a]">'capital-financing-promotion'</span>
            <span className="text-[#1e293b]">);</span>
          </code>
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