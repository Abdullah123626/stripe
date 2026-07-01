"use client";

import React, { useMemo, useState } from "react";

/* ============================================================
   Shared keyframes + small helpers
   ============================================================ */
const StyleSheet = () => (
  <style>{`
    @keyframes pfg-blobPulse {
      0%, 100% { transform: translate(0,0) scale(1); opacity: 0.9; }
      50% { transform: translate(10px,-10px) scale(1.12); opacity: 1; }
    }
    @keyframes pfg-blobDriftA {
      0%   { transform: translate(-15px, 20px) rotate(0deg) scale(1); }
      50%  { transform: translate(15px, -20px) rotate(6deg) scale(1.12); }
      100% { transform: translate(-15px, 20px) rotate(0deg) scale(1); }
    }
    @keyframes pfg-blobDriftB {
      0%   { transform: translate(20px, -10px) scale(1); }
      50%  { transform: translate(-20px, 10px) scale(1.08); }
      100% { transform: translate(20px, -10px) scale(1); }
    }
    @keyframes pfg-cardFloat {
      0%, 100% { transform: translateY(0) rotate(-1deg); }
      50%      { transform: translateY(-12px) rotate(1deg); }
    }
    @keyframes pfg-badgeFloat {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-7px); }
    }
    @keyframes pfg-dotFloat {
      0%   { transform: translate(0,0) scale(1); opacity: 0.5; }
      33%  { transform: translate(3px,-6px) scale(1.2); opacity: 0.9; }
      66%  { transform: translate(-3px,6px) scale(0.8); opacity: 0.4; }
      100% { transform: translate(0,0) scale(1); opacity: 0.5; }
    }
    @keyframes pfg-bubbleFloat {
      0%   { transform: translate(0,0) scale(1); opacity: 0.7; }
      33%  { transform: translate(4px,-4px) scale(1.15); opacity: 1; }
      66%  { transform: translate(-4px,4px) scale(0.9); opacity: 0.6; }
      100% { transform: translate(0,0) scale(1); opacity: 0.7; }
    }
    @keyframes pfg-dash {
      to { stroke-dashoffset: -40; }
    }
    @keyframes pfg-fadeUp {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .pfg-card {
      transition: box-shadow 300ms ease, transform 300ms ease;
    }
    .pfg-card:hover {
      box-shadow: 0 20px 45px -15px rgba(15,23,42,0.18);
      transform: translateY(-4px);
    }
    .pfg-icon-btn {
      transition: background-color 200ms ease, transform 200ms ease, color 200ms ease;
    }
    .pfg-card:hover .pfg-icon-btn {
      background-color: #7c3aed;
      color: #ffffff;
      transform: rotate(90deg);
    }
  `}</style>
);

function ExpandIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
      />
    </svg>
  );
}

/* ============================================================
   CARD 1 — Monetize through agentic commerce
   Soft blurred blob glow behind a chat + product-card mockup
   ============================================================ */
function CardAgenticCommerce() {
  return (
    <div className="pfg-card relative overflow-hidden bg-white border border-slate-100 rounded-3xl p-7 flex flex-col justify-between min-h-[520px] shadow-sm">
      {/* Soft ambient blob background (matches reference: gentle glow, not particles) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(244,114,182,0.45) 0%, rgba(192,132,252,0.35) 45%, transparent 75%)",
            animation: "pfg-blobPulse 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-10 -right-10 w-[220px] h-[220px] rounded-full blur-2xl"
          style={{
            background: "radial-gradient(circle, rgba(253,186,116,0.35) 0%, transparent 70%)",
            animation: "pfg-blobPulse 9s ease-in-out infinite 1s",
          }}
        />
      </div>

      {/* Title header */}
      <div className="relative z-10 flex justify-between items-start">
        <h3 className="text-[24px] font-medium tracking-tight text-[#0F172A] max-w-[220px] leading-tight">
          Monetize through <br />
          agentic commerce
        </h3>
        <button className="pfg-icon-btn p-1.5 text-purple-600 bg-purple-50/80 backdrop-blur-sm rounded-md shadow-sm">
          <ExpandIcon />
        </button>
      </div>

      {/* Chat + product mockup */}
      <div className="relative z-10 mt-5 space-y-3">
        {/* User message — dark bubble */}
        <div className="bg-[#0F172A] rounded-2xl rounded-bl-sm p-3 shadow-md max-w-[86%] text-[11px] text-white leading-relaxed font-medium">
          I'm refreshing my wardrobe. Can you recommend some cozy, comfortable basics in size M?
        </div>

        {/* Assistant reply — light bubble */}
        <div className="bg-slate-100 rounded-2xl rounded-br-sm p-3 shadow-sm max-w-[86%] ml-auto text-[11px] text-slate-700 leading-relaxed font-medium">
          Absolutely. Here are a few comfy essentials that pair well and could be a good starting point:
        </div>

        {/* Product card block */}
        <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 space-y-3.5">
          <div className="grid grid-cols-2 gap-3 text-[10px]">
            <div className="border border-slate-100 rounded-xl p-2.5 bg-[#F8FAFC]">
              <div className="h-20 w-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-lg flex items-center justify-center text-white text-2xl mb-2 shadow-sm">
                👕
              </div>
              <p className="font-bold text-slate-900 text-[11px]">Deluxe Shirt</p>
              <p className="text-slate-400 font-medium text-[9px] mt-0.5">Blue · Medium</p>
              <p className="font-extrabold text-slate-900 mt-2 text-[11px]">$28.00</p>
              <p className="text-[8px] text-slate-400 font-normal mt-0.5">Cartsy</p>
            </div>
            <div className="border border-slate-100 rounded-xl p-2.5 bg-[#F8FAFC]">
              <div className="h-20 w-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-lg flex items-center justify-center text-white text-2xl mb-2 shadow-sm">
                🧥
              </div>
              <p className="font-bold text-slate-900 text-[11px]">Essential Hoodie</p>
              <p className="text-slate-400 font-medium text-[9px] mt-0.5">Navy · Medium</p>
              <p className="font-extrabold text-slate-900 mt-2 text-[11px]">$48.00</p>
              <p className="text-[8px] text-slate-400 font-normal mt-0.5">Cartsy</p>
            </div>
          </div>
          <button className="w-full bg-[#EBF2FE] hover:bg-[#2563EB] text-[#2563EB] hover:text-white rounded-xl py-2.5 text-center font-bold text-[11px] transition-all duration-200">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CARD 2 — Create a card issuing program
   Vivid mesh gradient background + a floating, gently
   rotating physical card
   ============================================================ */
function CardIssuing() {
  return (
    <div className="pfg-card relative overflow-hidden bg-white border border-slate-100 rounded-3xl p-7 flex flex-col justify-between min-h-[520px] shadow-sm">
      {/* Vivid mesh background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-12 -right-16 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(253,186,116,0.55) 0%, rgba(251,146,60,0.35) 40%, transparent 72%)",
            animation: "pfg-blobDriftA 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-40 -left-20 w-[340px] h-[340px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.45) 0%, rgba(244,114,182,0.35) 50%, transparent 75%)",
            animation: "pfg-blobDriftB 12s ease-in-out infinite",
          }}
        />
      </div>

      {/* Title header */}
      <div className="relative z-10 flex justify-between items-start">
        <h3 className="text-[24px] font-medium tracking-tight text-[#0F172A] max-w-[220px] leading-tight">
          Create a card <br />
          issuing program
        </h3>
        <button className="pfg-icon-btn p-1.5 text-purple-600 bg-purple-50/80 backdrop-blur-sm rounded-md shadow-sm">
          <ExpandIcon />
        </button>
      </div>

      {/* Floating physical card */}
      <div className="relative z-10 my-auto flex items-center justify-center pt-6">
        <div
          className="w-[215px] h-[310px] rounded-[26px] p-5 shadow-2xl relative border border-white/70 flex flex-col justify-between overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #F9A8D4 0%, #C084FC 55%, #FDBA74 100%)",
            animation: "pfg-cardFloat 5s ease-in-out infinite",
          }}
        >
          <div className="absolute inset-0 bg-white/10 rounded-[26px] pointer-events-none mix-blend-overlay" />

          {/* Chip + contactless icon */}
          <div className="flex justify-between items-center relative z-10 mt-10">
            <div className="w-9 h-7 bg-gradient-to-br from-amber-100 to-amber-200 rounded-md border border-amber-400/30 shadow-inner flex p-1">
              <div className="grid grid-cols-3 gap-[2px] w-full h-full opacity-50">
                <div className="border-r border-b border-amber-700/40" />
                <div className="border-r border-b border-amber-700/40" />
                <div className="border-b border-amber-700/40" />
                <div className="border-r border-amber-700/40" />
                <div className="border-r border-amber-700/40" />
                <div className="border-amber-700/40" />
              </div>
            </div>
            <div className="text-white/95">
              <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M12 12h.008v.008H12V12z"
                />
              </svg>
            </div>
          </div>

          {/* Brand */}
          <div className="flex justify-end relative z-10 mb-1">
            <span className="text-white font-black italic tracking-wider text-xl select-none drop-shadow-sm">
              VISA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CARD 3 — Access borderless money movement with
   stablecoins and crypto
   Dense wave of dots + connecting arcs, floating amount badge
   ============================================================ */
function CardBorderless() {
  // Freeze random values once so the layout doesn't reshuffle on re-render
  const dots = useMemo(() => {
    const colors = ["#4F46E5", "#3B82F6", "#6366F1", "#EC4899", "#A855F7"];
    return Array.from({ length: 90 }).map((_, i) => {
      const factor = i / 90;
      const waveX = factor * 100;
      const waveY = 150 + Math.sin(factor * Math.PI * 2.5) * 55 + (Math.random() * 40 - 20);
      const size = Math.random() * 5.5 + 2;
      return {
        id: i,
        left: waveX,
        top: waveY,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 3,
      };
    });
  }, []);

  return (
    <div className="pfg-card relative overflow-hidden bg-white border border-slate-100 rounded-3xl p-7 flex flex-col justify-between min-h-[520px] shadow-sm">
      {/* Dense dotted wave / globe-style background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-end justify-center">
        <div className="absolute bottom-0 w-[120%] h-[280px] bg-gradient-to-t from-[#6366F1]/10 via-[#D946EF]/5 to-transparent rounded-t-[100%]" />

        <div className="absolute bottom-[-50px] w-[110%] h-[320px]">
          {dots.map((d) => (
            <div
              key={d.id}
              className="absolute rounded-full"
              style={{
                width: `${d.size}px`,
                height: `${d.size}px`,
                left: `${d.left}%`,
                top: `${d.top}px`,
                backgroundColor: d.color,
                animation: `pfg-dotFloat ${d.duration}s ease-in-out ${d.delay}s infinite`,
              }}
            />
          ))}

          {/* Connecting arcs */}
          <svg className="w-full h-full absolute inset-0 opacity-60" viewBox="0 0 400 320" fill="none">
            <defs>
              <linearGradient id="pfg-globe-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
            <path
              d="M 15,220 Q 180,20 360,200"
              stroke="url(#pfg-globe-gradient)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              style={{ animation: "pfg-dash 6s linear infinite" }}
            />
            <path d="M 40,190 Q 210,70 330,230" stroke="url(#pfg-globe-gradient)" strokeWidth="0.75" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Title header */}
      <div className="relative z-10 flex justify-between items-start">
        <h3 className="text-[24px] font-medium tracking-tight text-[#0F172A] max-w-[260px] leading-tight">
          Access borderless money movement with <br />
          stablecoins and crypto
        </h3>
        <button className="pfg-icon-btn p-1.5 text-purple-600 bg-purple-50/80 backdrop-blur-sm rounded-md shadow-sm">
          <ExpandIcon />
        </button>
      </div>

      {/* Floating amount badge */}
      <div className="relative z-10 mt-auto w-full flex justify-end pr-2 pb-14">
        <div
          className="bg-white border border-slate-200/80 rounded-xl p-2.5 flex items-center space-x-2.5 shadow-xl text-[10px] font-bold text-slate-900"
          style={{ animation: "pfg-badgeFloat 4s ease-in-out infinite" }}
        >
          <div className="w-5 h-5 rounded-full bg-[#4F46E5] flex items-center justify-center text-white text-[9px] font-black shadow-md">
            ⬦
          </div>
          <span className="tracking-tight font-extrabold text-slate-800">$631.50</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Root export
   ============================================================ */
export default function PremiumFeatureGrid() {
  return (
    <div className="w-full bg-white px-6 md:px-10 py-10 box-border select-none">
      <StyleSheet />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CardAgenticCommerce />
        <CardIssuing />
        <CardBorderless />
      </div>
    </div>
  );
}
