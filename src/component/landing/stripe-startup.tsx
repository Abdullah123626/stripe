"use client";




import React, { useRef } from 'react';
// Make sure lucide-react is installed: npm i lucide-react
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function StripeStartupSection() {
const scrollRef = useRef<HTMLDivElement | null>(null);

  // All 8 images you provided with matching content placeholder text
  const startupStories = [
    {
      id: 1,
      img: "https://images.stripeassets.com/fzn2n1nzq965/1CBkJePR5Cwf2QNIVCia1I/c0a702cec7a3814c69f21f86b89ed718/lovable.png?w=432&fm=webp&q=90",
      company: "Lovable",
      desc: "Lovable grows into a vibe-coding juggernaut with Stripe.",
      link: "Read Lovable's story"
    },
    {
      id: 2,
      img: "https://images.stripeassets.com/fzn2n1nzq965/2QjRFO1cRvocACDtyA7g9e/44245671788d6e086ab7d82b37937450/Gamma.png?w=432&fm=webp&q=90",
      company: "Gamma",
      desc: "Gamma expands to $100M ARR and 70 million users with Stripe.",
      link: "Read Gamma's story"
    },
    {
      id: 3,
      img: "https://images.stripeassets.com/fzn2n1nzq965/6fpvaTP1TZWXKWVMewABjV/4412b9ca2940d89d3834ac65c1fc329d/Runway.png?w=432&fm=webp&q=90",
      company: "Runway",
      desc: "Runway protects developer time with no-code solutions from Stripe.",
      link: "Read Runway's story"
    },
    {
      id: 4,
      img: "https://images.stripeassets.com/fzn2n1nzq965/7fM8bvEbivprOMM1zyow9N/3cad3cc826f96e4038b4ea88d81ebe3b/Supabase.png?w=432&fm=webp&q=90",
      company: "Supabase",
      desc: "Supabase delivers its backend service to 150 countries with Stripe.",
      link: "Read Supabase's story"
    },
    {
      id: 5,
      img: "https://images.stripeassets.com/fzn2n1nzq965/4b8Ubw7N2kYwb7QZl3Ogri/422cc19f725aa68e647d90ce2833c8d0/linear.png?w=432&fm=webp&q=90",
      company: "Linear",
      desc: "Linear streamlines global software subscription payments globally via Stripe.",
      link: "Read Linear's story"
    },
    {
      id: 6,
      img: "https://images.stripeassets.com/fzn2n1nzq965/JK7aZoMzWA3uUbLb35kxx/dea1444a0aee29751c0c7098ffb33534/Eleven_Labs.png?w=432&fm=webp&q=90",
      company: "ElevenLabs",
      desc: "ElevenLabs scales audio AI generation subscriptions seamlessly.",
      link: "Read ElevenLabs' story"
    },
    {
      id: 7,
      img: "https://images.stripeassets.com/fzn2n1nzq965/1NiQJZA0rKbwXZ7mD4BCrM/0abdaba77e564f858a33241a9aab0939/browserbase.png?w=432&fm=webp&q=90",
      company: "Browserbase",
      desc: "Browserbase automates developer browser setups with billing flexibility.",
      link: "Read Browserbase's story"
    },
    {
      id: 8,
      img: "https://images.stripeassets.com/fzn2n1nzq965/1hreJwxuVJ5ucPtuA7pRKH/3c5630387bca898d01ae17fc7ae2890a/decagon.png?w=432&fm=webp&q=90",
      company: "Decagon",
      desc: "Decagon powers enterprise customer service AI infrastructure with Stripe.",
      link: "Read Decagon's story"
    }
  ];

  // Scroll function for buttons
 const handleScroll = (direction: 'left' | 'right') => {
  if (!scrollRef.current) return;

  const { scrollLeft, clientWidth } = scrollRef.current;

  const scrollTo =
    direction === 'left'
      ? scrollLeft - clientWidth * 0.75
      : scrollLeft + clientWidth * 0.75;

  scrollRef.current.scrollTo({
    left: scrollTo,
    behavior: 'smooth',
  });
};

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 py-16 font-sans bg-white text-[#0a2540] overflow-hidden">
      
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-10">
        <div className="md:col-span-6">
          <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight leading-[1.15] text-[#0a2540] mb-6">
            Build a foundation for your startup that enables faster growth
          </h2>
          <button className="bg-[#635bff] hover:bg-[#0a2540] text-white text-[15px] font-semibold py-2 px-4 rounded-md transition-colors inline-flex items-center gap-1 shadow-sm">
            Stripe for startups
            <span className="text-[12px]">➔</span>
          </button>
        </div>
        
        <div className="md:col-span-5 md:col-start-8 flex flex-col justify-between h-full pt-1">
          <p className="text-[16px] text-slate-600 leading-relaxed">
            From stablecoin pioneers to 78% of the Forbes AI 50, Stripe helps startups build what's next on easy-to-integrate financial infrastructure.
          </p>
          
          {/* Slider Controls (Stripe Style) */}
          <div className="hidden md:flex items-center gap-2 mt-8 md:mt-12 justify-end">
            <button 
              onClick={() => handleScroll('left')}
              className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0a2540] hover:border-slate-400 transition-colors bg-white"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0a2540] hover:border-slate-400 transition-colors bg-white"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Images List */}
      <div 
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 -mx-4 px-4 mask-gradient"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {startupStories.map((story) => (
          <div 
            key={story.id} 
            className="flex-shrink-0 w-[265px] snap-start group cursor-pointer"
          >
            {/* Image Container with Exact Stripe Aspect Ratio & Rounded Corners */}
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-slate-100 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
              <img 
                src={story.img} 
                alt={story.company}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Description Text */}
            <p className="mt-4 text-[14px] leading-relaxed text-[#0a2540] font-normal min-h-[40px]">
              {story.desc}
            </p>
            
            {/* Animated Link */}
            <a 
              href="#" 
              className="mt-2 inline-flex items-center gap-1 text-[14px] font-semibold text-[#635bff] hover:text-[#0a2540] transition-colors"
            >
              {story.link}
              <span className="text-[11px] transform group-hover:translate-x-0.5 transition-transform">➔</span>
            </a>
          </div>
        ))}
      </div>

      {/* Bottom Banners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        
        {/* Banner 1: Stripe Startups program */}
        <div className="relative overflow-hidden rounded-lg bg-[#f8f9fa] border border-slate-100 p-8 flex flex-col justify-between min-h-[180px] group cursor-pointer">
          <div className="z-10 max-w-[65%]">
            <p className="text-[14px] leading-relaxed text-slate-600">
              <span className="font-semibold text-[#0a2540]">Stripe Startups program.</span> Access financial benefits, a focused community, and expert resources to help you grow your business.
            </p>
          </div>
          <a href="#" className="z-10 text-[14px] font-semibold text-[#635bff] mt-6 block">
            Apply now <span className="text-[11px]">➔</span>
          </a>
          {/* Soft Purple/Pink Abstract Gradient background matching image */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-tr from-purple-500/20 via-pink-500/30 to-purple-600/40 blur-xl opacity-80 pointer-events-none transform translate-x-10 translate-y-10 rounded-full"></div>
          <div className="absolute -right-4 -bottom-10 w-[180px] h-[150px] bg-gradient-to-l from-[#e2d5ff] to-transparent transform rotate-12 opacity-70"></div>
        </div>

        {/* Banner 2: Stripe Atlas */}
        <div className="relative overflow-hidden rounded-lg bg-[#f8f9fa] border border-slate-100 p-8 flex flex-col justify-between min-h-[180px] group cursor-pointer">
          <div className="z-10 max-w-[65%]">
            <p className="text-[14px] leading-relaxed text-slate-600">
              <span className="font-semibold text-[#0a2540]">Stripe Atlas.</span> Incorporate and get everything you need to fundraise, bank, and accept payments in two business days.
            </p>
          </div>
          <a href="#" className="z-10 text-[14px] font-semibold text-[#635bff] mt-6 block">
            Start your company <span className="text-[11px]">➔</span>
          </a>
          {/* Orange/Yellow Geometric Stripe style accent corner */}
          <div className="absolute right-0 bottom-0 w-[160px] h-[160px] bg-gradient-to-br from-amber-400 to-orange-500 clip-path-stripe opacity-95"></div>
        </div>

      </div>

    </div>
  );
}