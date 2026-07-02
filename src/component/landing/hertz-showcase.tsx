import React from 'react';
import Image from 'next/image';

export default function HertzShowcase() {
  return (
    <div className="w-full max-w-[1140px] mx-auto bg-white p-6 font-sans">
      {/* Top Header Section */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-4">
          {/* Hertz Logo Container */}
          <div className="bg-[#FFCC00] w-[34px] h-[34px] flex items-center justify-center rounded-[4px] shrink-0">
            <span className="text-black font-black italic text-xl tracking-tighter select-none">
              H
            </span>
          </div>
          {/* Heading Text */}
          <h2 className="text-[#0A2540] text-lg sm:text-xl font-semibold tracking-tight">
            Hertz unifies commerce with Stripe.
          </h2>
        </div>

        {/* Action Button */}
        <button className="group flex items-center gap-1 bg-white border border-[#E6E6E6] hover:border-[#CCCCCC] text-[#635BFF] hover:text-[#0A2540] text-sm font-medium py-1.5 px-4 rounded-full transition-all duration-200 shadow-sm">
          <span>Read the story</span>
          <svg 
            className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Main Image Banner */}
      <div className="relative w-full aspect-[1632/900] rounded-xl overflow-hidden shadow-sm mb-6">
        <Image
          src="https://images.stripeassets.com/fzn2n1nzq965/24BNV3GGtvCprFLrYovyaa/b2eac20a1d5ec75e4bff3888b998d163/enterprise-accordion-hertz.png?w=1632&fm=webp&q=90"
          alt="Hertz aerial road crossing view"
          fill
          priority
          className="object-cover"
          unoptimized // Stripe's URL already optimized via queries
        />
      </div>

      {/* Bottom Stats & Info Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-[#425466] text-sm sm:text-[15px]">
        {/* Stat 1 */}
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-[#0A2540]">160</span>
          <span>countries</span>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center gap-1.5 md:justify-center">
          <span className="font-bold text-[#0A2540]">11K+</span>
          <span>locations globally</span>
        </div>

        {/* Products List */}
        <div className="md:text-right leading-relaxed">
          <span className="font-bold text-[#0A2540]">Products used </span>
          <span className="text-[#425466]">
            Payments, Terminal, Connect, Radar, and Stripe Sigma
          </span>
        </div>
      </div>
    </div>
  );
}