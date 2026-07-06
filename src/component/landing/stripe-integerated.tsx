'use client';

import React, { useState, useRef, useEffect } from 'react';

// Stripe original slider items with content and beautiful unsplash fallback graphics
const stripeFeatures = [
  {
    id: 0,
    tag: "Annual letter 2025",
    title: "Businesses on Stripe generated $1.0T in 2025.",
    description: "Our annual letter explores the trends defining the internet economy—including steeper growth for newer businesses, faster international expansion, stablecoin progress, agentic commerce, and more.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    btnText: "Read the letter →",
    isExternal: true,
    
  },
  {
    id: 1,
    tag: "tidemark",
    title: "Tidemark's vertical and SMB SaaS benchmark report.",
    description: "Learn what's driving growth in vertical SaaS in 2026—going multi-product, embedding fintech, and integrating AI into workflow management strategies seamlessly.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
    btnText: "Get the data →",
    isExternal: false
  },
  {
    id: 2,
    tag: "Spotify",
    title: "Shopify's Tobi Lütke sits down with John Collison.",
    description: "Hear them discuss the product choices that matter, how Stripe helps optimize checkouts globally, and advice for founders navigation platform building blocks.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    btnText: "Watch video →",
    isExternal: false
  },
  {
    id: 3,
    tag: "New Tools",
    title: "New tools to process payments outside app stores.",
    description: "New regulations mean now platforms can help you tap into a new global customer base by letting customers pay with alternative methods instantly.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
    btnText: "Learn more →",
    isExternal: false
  },
  {
    id: 4,
    tag: "crypto.com",
    title: "Crypto.com partners with Stripe to enable crypto payments.",
    description: "Learn how the partnership can help you tap into a new tech-savvy audience base by letting users checkout with fiat or native web3 balances effortlessly.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=600",
    btnText: "View announcement →",
    isExternal: false
  },
   {
    id: 4,
    tag: "crypto.com",
    title: "Crypto.com partners with Stripe to enable crypto payments.",
    description: "Learn how the partnership can help you tap into a new tech-savvy audience base by letting users checkout with fiat or native web3 balances effortlessly.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
    btnText: "View announcement →",
    isExternal: false
  },
   {
    id: 4,
    tag: "crypto.com",
    title: "Crypto.com partners with Stripe to enable crypto payments.",
    description: "Learn how the partnership can help you tap into a new tech-savvy audience base by letting users checkout with fiat or native web3 balances effortlessly.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
    btnText: "View announcement →",
    isExternal: false
  }
];
const repeatedFeatures = [...stripeFeatures, ...stripeFeatures];

export default function StripeIntegerated() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Sync index on internal container scroll triggers
  const handleScrollSync = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const cardWidth = 158; // 142px width + 16px gap matching mobile sizing layouts
    const calculatedIndex = Math.round(scrollLeft / cardWidth);
    if (calculatedIndex >= 0 && calculatedIndex < stripeFeatures.length) {
      setActiveIndex(calculatedIndex);
    }
  };

  const navigateSlider = (direction: 'prev' | 'next') => {
    let nextIndex = activeIndex;
    if (direction === 'prev') {
      nextIndex = activeIndex > 0 ? activeIndex - 1 : stripeFeatures.length - 1;
    } else {
      nextIndex = activeIndex < stripeFeatures.length - 1 ? activeIndex + 1 : 0;
    }
    
    setActiveIndex(nextIndex);

    if (trackRef.current) {
      const targetElement = trackRef.current.children[nextIndex] as HTMLElement;
      if (targetElement) {
        trackRef.current.scrollTo({
          left: targetElement.offsetLeft - 24, // Padding offset adjustment
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-8 lg:px-12 font-sans antialiased selection:bg-indigo-100">
      <div className="max-w-8xl mx-auto">
        
        {/* --- Top Header with Layout Navigation Buttons --- */}
        <div className="flex justify-between items-end mb-8">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540] tracking-tight">
              What's happening
            </h2>
            <p className="text-sm sm:text-base text-[#425466]">
              See the latest from Stripe.
            </p>
          </div>
          
          {/* Action Navigation Pill Arrows */}
          <div className="flex items-center gap-1.5">
            <button 
              onClick={() => navigateSlider('prev')}
              className="w-7 h-7 rounded bg-[#7a73ff]/10 text-[#635bff] hover:bg-[#635bff] hover:text-white transition-all flex items-center justify-center font-bold text-sm focus:outline-none select-none active:scale-95"
            >
              ‹
            </button>
            <button 
              onClick={() => navigateSlider('next')}
              className="w-7 h-7 rounded bg-[#7a73ff]/10 text-[#635bff] hover:bg-[#635bff] hover:text-white transition-all flex items-center justify-center font-bold text-sm focus:outline-none select-none active:scale-95"
            >
              ›
            </button>
          </div>
        </div>

        {/* --- Horizontal Track Slider Row Container --- */}
        <div className="relative w-full overflow-hidden">
          <div 
            ref={trackRef}
            onScroll={handleScrollSync}
  className="flex gap-2 overflow-x-auto pb-6 scroll-smooth scrollbar-none items-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
    {repeatedFeatures.map((item, index) => {
const originalIndex = index % stripeFeatures.length;
const isSelected = activeIndex === originalIndex;
              return (
                <div 
                  key={item.id}
                  onClick={() => {
setActiveIndex(originalIndex);
                    if (trackRef.current) {
                      const target = trackRef.current.children[index] as HTMLElement;
                      trackRef.current.scrollTo({ left: target.offsetLeft - 24, behavior: 'smooth' });
                    }
                  }}
                 className={`
relative
h-[230px]
rounded-[10px]
overflow-hidden
cursor-pointer
transition-all
duration-500
ease-in-out
flex-shrink-0
${
  isSelected
    ? "w-[520px] border border-[#635BFF]"
    : "w-[95px] hover:w-[105px]"
}
`}
                >
                  {/* Card Background Graphic Asset */}
                 <img
  src={item.image}
  alt={item.title}
  className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
/>
                  
                  {/* Shading Radial Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />                  
                  {/* Badge Text placed directly onto the cards overlay stack */}
                 <div className="absolute left-5 bottom-5 right-5">
  <p
    className={`text-white font-semibold transition-all duration-500 ${
      isSelected
        ? "text-[18px]"
        : "text-[13px] rotate-[-90deg] origin-left whitespace-nowrap absolute bottom-0 left-0"
    }`}
  >
    {item.tag}
  </p>
</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Dynamic Segment Content Info Container (Changes reactively based on selection) --- */}
        <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-start transition-all duration-200">
          
          <div className="md:col-span-8 space-y-2">
            <h3 className="text-sm font-bold text-[#0a2540] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635bff]" />
{stripeFeatures[activeIndex].description || "Businesses on Stripe generated revenue."}
            </h3>
            <p className="text-xs sm:text-[13.5px] text-[#425466] leading-relaxed max-w-3xl">
              {stripeFeatures[activeIndex].description}
            </p>
          </div>

          <div className="md:col-span-4 md:text-right pt-2 md:pt-0">
            <a 
              href="#" 
              className="inline-flex items-center gap-1 bg-white border border-gray-200 hover:border-indigo-200 text-[#635bff] font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-50/40 transition-all duration-150 active:scale-98"
            >
              {stripeFeatures[activeIndex].btnText}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}