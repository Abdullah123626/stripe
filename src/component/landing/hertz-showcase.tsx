"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HertzShowcase() {
  return (
<div className="w-full max-w-7xl mx-auto bg-white   py-6 sm:py-8 font-sans lg:mt-10">
        {/* Top Header Section */}
<motion.div
initial={{opacity:0,y:25}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6}} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-7">
<div className="flex items-center gap-3 sm:gap-4">
            {/* Hertz Logo Container */}
          <div className="bg-[#FFCC00] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[4px] shrink-0">
            <span className="text-black font-black italic text-xl tracking-tighter select-none">
              H
            </span>
          </div>
          {/* Heading Text */}
          <h2 className="text-[#0A2540] text-[20px]
sm:text-[24px]
lg:text-[28px]
leading-tight font-medium tracking-tight">
            Hertz unifies commerce with Stripe.
          </h2>
        </div>

        {/* Action Button */}
        <button className="group inline-flex items-center gap-2 rounded-full border border-[#E4E7EC] bg-white px-4 py-2 text-[14px] font-medium text-[#635BFF] hover:bg-[#F6F9FC] transition-all duration-300">
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
      </motion.div>

      {/* Main Image Banner */}
       <motion.div
initial={{scale:1.05}}
whileInView={{scale:1}}
transition={{duration:1.2}}
className="relative w-full aspect-[1632/900] rounded-2xl overflow-hidden shadow-md mb-6">
        <Image
          src="https://images.stripeassets.com/fzn2n1nzq965/24BNV3GGtvCprFLrYovyaa/b2eac20a1d5ec75e4bff3888b998d163/enterprise-accordion-hertz.png?w=1632&fm=webp&q=90"
          alt="Hertz aerial road crossing view"
          fill
          priority
className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          unoptimized // Stripe's URL already optimized via queries
        />
     </motion.div>

      {/* Bottom Stats & Info Footer */}
      <motion.div
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{delay:.3,duration:.6}}
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 pt-4 text-[#425466] text-sm sm:text-[15px]"
>
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
        <div className="text-left  lg:text-right leading-relaxed">
                               
          <span className="font-bold text-[#0A2540]">Products used </span>
          <span className="text-[#425466]">
            Payments, Terminal, Connect, Radar, and Stripe Sigma
          </span>
        </div>
      </motion.div>
    </div> 
    );
}