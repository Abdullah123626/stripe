"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Products", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Developers", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveItem(null);
      }}
      /* Niche border-b aur background transitions apply kar di hain */
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
        isHovered || scrolled
          ? "bg-white border-black/[0.06] shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
          : "bg-white/0 backdrop-blur-lg border-black/[.04]"
      }`}
    >
      <div className="max-w-[1250px] mx-auto px-8 h-[64px] flex items-center gap-3 ">

        {/* Stripe Logo */}
        <a href="#" className="flex items-center flex-shrink-0 mr-2">
         <span className="text-[#0A2540] text-[1.2rem] font-[800] tracking-tight leading-none mb-1">
  stripe
</span>
        </a>

        {/* Nav Links */}
        <ul className="flex items-center list-none m-0 p-0 gap-1">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveItem(item.label)}
            >
              <a
                href="#"
                className={`flex items-center gap-[5px] px-[6px] py-[6px] text-[11px] font-[500] rounded-[6px] no-underline transition-colors duration-150
                  ${activeItem === item.label
                    ? "text-[#0055de] bg-gray-100/70"
                    : "text-black hover:text-[#0055de] hover:bg-gray-100/40"
                  }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className={`transition-transform duration-200 ${activeItem === item.label ? "rotate-180 text-[#0055de]" : ""}`}
                    width="11" height="11" viewBox="0 0 12 12" fill="none"
                  >
                    <path d="M2.5 4.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider + Guide me */}
        <div className="flex items-center  ">
          <span className="w-px h-4 bg-black/25 mx-2" />
          <a href="#" className="flex items-center gap-[3px] px-3 py-2 text-[11px] font-medium text-black rounded-[6px] no-underline hover:text-[#0055de] hover:bg-gray-100/40 transition-colors duration-150">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l2 4h4l-3.3 2.4L11.9 12 8 9.3 4.1 12l1.2-4.6L2 5h4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
            </svg>
            Guide me
          </a>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-[5px] ml-auto">
          <a
            href="#"
            className="px-4 py-[7px] text-[11px] font-medium text-orange-500 font-[500] rounded-[6px] border border-grey-200 bg-white no-underline transition-all duration-150 hover:border-[#635bff] hover:text-[#635bff] hover:bg-white/90"
          >
            Sign in
          </a>
          <a
            href="#"
            className="flex items-center gap-[6px] px-4 py-[8px] text-[11px] font-semibold text-white bg-[#635bff] rounded-[6px] no-underline transition-all duration-200 hover:bg-[#4f46e5] hover:-translate-y-[1px] active:translate-y-0 shadow-[0_2px_10px_rgba(99,91,255,0.32)] hover:shadow-[0_4px_16px_rgba(99,91,255,0.42)]"
          >
            Contact sales
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5l7-7M9.5 9.5V2.5H2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}