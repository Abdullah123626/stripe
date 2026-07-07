"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type NewsItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  action: string;
  image?: string;
  accent?: string;
};

const stripeNews: NewsItem[] = [
  {
    id: "annual-letter",
    tag: "Annual letter 2025",
    title: "Businesses on Stripe generated $1.9T in 2025.",
    description:
      "Our annual letter explores the trends defining the internet economy, including steeper growth for newer businesses, faster international expansion, stablecoin progress, agentic commerce, and more.",
    action: "Read the letter",
    accent:
      "radial-gradient(circle at 88% 86%, rgba(255,255,255,.5) 0 7%, transparent 8%), linear-gradient(135deg, #8b5cf6 0%, #7c3aed 32%, #b116f2 70%, #f472d0 100%)",
  },
  {
    id: "best-day",
    tag: "Best day ever",
    title: "150K+ users have their best day ever on Stripe.",
    description:
      "From Black Friday through Cyber Monday 2025, Stripe processed more than $40B for businesses while maintaining 99.9999% uptime.",
    action: "See the numbers",
    image:
      "https://images.unsplash.com/photo-1605142859862-978be7eba909?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "tidemark",
    tag: "Tidemark",
    title: "Tidemark's vertical and SMB SaaS benchmark report.",
    description:
      "Learn what is driving growth in vertical SaaS in 2025, from going multiproduct to embedding fintech and integrating AI into core products.",
    action: "Get the data",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "shopify",
    tag: "Shopify",
    title: "Shopify's Tobi Lutke sits down with John Collison.",
    description:
      "Hear them discuss the choices that shaped Shopify and Stripe, the future of commerce, and their advice for founders.",
    action: "Watch video",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "app-stores",
    tag: "New tools",
    title: "New tools to process payments outside app stores.",
    description:
      "New regulations mean new opportunities for companies that want more control over mobile payments and revenue growth.",
    action: "Learn how",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "crypto",
    tag: "Crypto.com",
    title: "Crypto.com partners with Stripe to enable better crypto payments.",
    description:
      "The partnership helps businesses reach a global customer base by letting customers pay directly with their crypto balance.",
    action: "View announcement",
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "agentic-commerce",
    tag: "Agentic commerce",
    title: "Make your products shoppable through AI platforms.",
    description:
      "Agentic commerce lets businesses accept purchases from AI platforms without requiring major technical changes.",
    action: "Read more",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "retail",
    tag: "Retail",
    title: "How leading retailers unify customer experiences and drive growth.",
    description:
      "Get insights into how brands unify online and in-store experiences while optimizing checkout for smoother shopping.",
    action: "Get the report",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=900",
  },
];

export default function StripeIntegerated() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = stripeNews[activeIndex];

  const moveSlide = (direction: "prev" | "next") => {
    setActiveIndex((current) => {
      if (direction === "prev") {
        return current === 0 ? stripeNews.length - 1 : current - 1;
      }

      return current === stripeNews.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-14 sm:py-16 font-sans antialiased">
      <div className="w-full max-w-[1160px] mx-auto">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <h2 className="text-[24px] sm:text-[28px] leading-none font-semibold tracking-tight text-[#0a2540]">
              What&apos;s happening
            </h2>
            <p className="mt-1 text-[22px] sm:text-[26px] leading-none font-medium text-[#53657d]">
              See the latest from Stripe.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 pt-1">
            <button
              type="button"
              aria-label="Previous story"
              onClick={() => moveSlide("prev")}
              className="w-8 h-8 rounded-[2px] bg-[#f0efff] text-[#635bff] hover:bg-[#635bff] hover:text-white transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next story"
              onClick={() => moveSlide("next")}
              className="w-8 h-8 rounded-[2px] bg-[#f0efff] text-[#635bff] hover:bg-[#635bff] hover:text-white transition-colors flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-3 h-[255px] sm:h-[305px] overflow-x-auto overflow-y-hidden pb-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]">
          {stripeNews.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={item.id}
                type="button"
                aria-label={item.title}
                onClick={() => setActiveIndex(index)}
                className={`relative h-full rounded-[4px] overflow-hidden shrink-0 snap-start text-left transition-[width,filter,opacity] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#635bff] ${
                  isActive
                    ? "w-[78vw] sm:w-[640px] lg:w-[735px]"
                    : "w-[86px] sm:w-[120px] lg:w-[138px] hover:brightness-105"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: item.accent || `url(${item.image})`,
                  }}
                />
                {item.id === "annual-letter" && (
                  <>
                    <div className="absolute inset-0 opacity-35 bg-[repeating-linear-gradient(130deg,transparent_0_12px,rgba(255,255,255,.22)_13px_15px)]" />
                    <div className="absolute right-7 bottom-7 w-8 h-6 bg-white skew-x-[-14deg]" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <div
                  className={`absolute transition-all duration-500 ${
                    isActive
                      ? "left-7 bottom-7 max-w-[260px]"
                      : "left-1/2 bottom-6 -translate-x-1/2 w-[190px] rotate-[-90deg] origin-center"
                  }`}
                >
                  <p
                    className={`text-white font-semibold leading-none drop-shadow-sm ${
                      isActive ? "text-[28px] sm:text-[34px]" : "text-[17px]"
                    }`}
                  >
                    {item.tag}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-start">
          <p className="text-[16px] leading-[1.25] text-[#53657d] max-w-[760px]">
            <span className="font-semibold text-[#0a2540]">
              {activeItem.title}
            </span>{" "}
            {activeItem.description}
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 border border-[#a7a2ff] text-[#635bff] hover:border-[#635bff] hover:bg-[#f6f8ff] text-[13px] font-semibold px-5 py-3 rounded-[3px] transition-colors min-w-[150px]"
          >
            {activeItem.action}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="sm:hidden mt-5 flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous story"
            onClick={() => moveSlide("prev")}
            className="w-9 h-9 rounded-[3px] bg-[#f0efff] text-[#635bff] flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Next story"
            onClick={() => moveSlide("next")}
            className="w-9 h-9 rounded-[3px] bg-[#f0efff] text-[#635bff] flex items-center justify-center"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
