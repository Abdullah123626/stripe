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


    .pfgAurora1{
    animation:pfgAuroraMove1 16s ease-in-out infinite;
    will-change:transform;
}

.pfgAurora2{
    animation:pfgAuroraMove2 18s ease-in-out infinite;
    will-change:transform;
}

.pfgAurora3{
    animation:pfgAuroraMove3 14s ease-in-out infinite;
    will-change:transform;
}


/* ============================
   Stripe Inspired Text Reveal
============================ */

@keyframes pfgRevealMask{

0%{
clip-path:inset(0 100% 0 0);
opacity:0;
}

15%{
opacity:1;
}

100%{
clip-path:inset(0 0 0 0);
opacity:1;
}

}

@keyframes pfgCursor{

0%,45%{
opacity:1;
}

50%,100%{
opacity:0;
}

}

.pfgUserText{

display:inline-block;

animation:
pfgRevealMask .9s cubic-bezier(.22,.61,.36,1) forwards;

}

.pfgAssistantText{

display:inline-block;

animation:
pfgRevealMask 1.2s cubic-bezier(.22,.61,.36,1) .7s both;

position:relative;

}

.pfgAssistantText::after{

content:"";

position:absolute;

right:-3px;

top:2px;

width:2px;

height:80%;

background:#64748B;

animation:pfgCursor .8s infinite;

}

.pfgBuyText{

display:inline-block;

animation:
pfgRevealMask .7s ease 2s both;

}


@keyframes pfgProductFloat {

0%{
transform:translateY(0px);
}

50%{
transform:translateY(-4px);
}

100%{
transform:translateY(0px);
}

}

.pfgProductThumb{

animation:pfgProductFloat 4s ease-in-out infinite;

transition:transform .35s ease;

}


/* ===========================
   Stripe Inspired Chat Motion
=========================== */

@keyframes pfgChatFloat {

  0%{
    transform:translateY(10px);
    opacity:0;
  }

  20%{
    transform:translateY(0);
    opacity:1;
  }

  80%{
    transform:translateY(0);
    opacity:1;
  }

  100%{
    transform:translateY(-2px);
    opacity:1;
  }

}

@keyframes pfgCardReveal{

0%,60%{

opacity:0;

transform:
translateY(18px)
scale(.96);

}

100%{

opacity:1;

transform:
translateY(0)
scale(1);

}

}

.pfgCardOne{

animation:
pfgCardReveal
6s ease infinite;

}

.pfgCardTwo{

animation:
pfgCardReveal
6s ease .25s infinite both;

}

@keyframes pfgProductAppear{

0%{
opacity:0;
transform:translateY(30px) scale(.96);
}

35%{
opacity:0;
}

60%{
opacity:1;
transform:translateY(0) scale(1);
}

100%{
opacity:1;
transform:translateY(0) scale(1);
}

}

@keyframes pfgButtonGlow{

0%,100%{
box-shadow:0 0 0 rgba(37,99,235,0);
}

50%{
box-shadow:
0 0 25px rgba(37,99,235,.20);
}

}

.pfgChat1{

animation:pfgChatFloat 5s ease infinite;

}

.pfgChat2{

animation:pfgChatFloat 5s ease infinite .7s both;

}

.pfgProducts{

animation:pfgProductAppear 5s ease infinite;

}

.pfgBuyBtn{

animation:pfgButtonGlow 3s ease infinite;

}

@keyframes pfgLightSweep{

0%{
transform:translateX(-140%) rotate(28deg);
opacity:0;
}

15%{
opacity:.35;
}

40%{
opacity:.8;
}

60%{
opacity:.45;
}

100%{
transform:translateX(230%) rotate(28deg);
opacity:0;
}

}

.pfgLightSweep{

animation:pfgLightSweep 8s linear infinite;

will-change:transform;

}




/* ===========================
   Stripe Network Nodes
=========================== */

@keyframes pfgNodePulse{

0%,100%{

transform:scale(1);

opacity:.7;

}

50%{

transform:scale(1.8);

opacity:1;

}

}

.pfgNode1{

animation:pfgNodePulse 2.5s ease infinite;

transform-origin:center;

}

.pfgNode2{

animation:pfgNodePulse 3s ease .5s infinite;

transform-origin:center;

}

.pfgNode3{

animation:pfgNodePulse 2.8s ease 1s infinite;

transform-origin:center;

}

.pfgNode4{

animation:pfgNodePulse 3.2s ease 1.5s infinite;

transform-origin:center;

}



/* ===========================
Stripe Payment Badge
=========================== */

@keyframes pfgBadgeFloat{

0%{

transform:
translateY(0px)
scale(1);

}

50%{

transform:
translateY(-10px)
scale(1.03);

}

100%{

transform:
translateY(0px)
scale(1);

}

}

@keyframes pfgReflection{

0%{

transform:
translateX(-180px)
rotate(28deg);

}

100%{

transform:
translateX(260px)
rotate(28deg);

}

}

.pfgPaymentBadge{

animation:
pfgBadgeFloat 5s ease-in-out infinite;

}

.pfgReflection{

animation:
pfgReflection 6s linear infinite;

}


/* ===========================
Stripe Conversation Timeline
=========================== */

@keyframes pfgUserAppear{

0%{
opacity:0;
transform:translateY(16px);
}

10%{
opacity:1;
transform:translateY(0);
}

100%{
opacity:1;
transform:translateY(0);
}

}

@keyframes pfgAssistantAppear{

0%,18%{
opacity:0;
transform:translateY(18px);
}

35%{
opacity:1;
transform:translateY(0);
}

100%{
opacity:1;
transform:translateY(0);
}

}

@keyframes pfgProductsReveal{

0%,40%{
opacity:0;
transform:translateY(24px) scale(.96);
}

60%{
opacity:1;
transform:translateY(0) scale(1);
}

100%{
opacity:1;
transform:translateY(0) scale(1);
}

}

@keyframes pfgBuyReveal{

0%,65%{
opacity:0;
transform:translateY(10px);
}

80%{
opacity:1;
transform:translateY(0);
}

100%{
opacity:1;
transform:translateY(0);
}

}

.pfgChatUser{

animation:pfgUserAppear 7s ease infinite;

}

.pfgChatAssistant{

animation:pfgAssistantAppear 7s ease infinite;

}

.pfgProductsReveal{

animation:pfgProductsReveal 7s ease infinite;

}

.pfgBuyReveal{

animation:pfgBuyReveal 7s ease infinite;

}


/* ===================================
   Stripe Network Line Animation
=================================== */

@keyframes pfgDashMove{

0%{

stroke-dashoffset:120;

}

100%{

stroke-dashoffset:0;

}

}

.pfgBorderPath{

animation:
pfgDashMove 6s linear infinite;

}

.pfgBorderPath2{

animation:
pfgDashMove 8s linear reverse infinite;

opacity:.45;

}

  `
  
  }</style>
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
    <div className="pfg-card relative overflow-hidden transition-all duration-500 bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[400px] sm:min-h-[430px] shadow-sm">
      {/* Soft ambient blob background (matches reference: gentle glow, not particles) */}
   {/* Stripe-inspired Aurora Background */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Base */}
  <div className="absolute inset-0 bg-[#FFFDFB]" />

  {/* Aurora 1 */}
  <div
    className="absolute -top-36 -left-20 w-[520px] h-[520px] rounded-full blur-[90px] opacity-80 pfgAurora1"
    style={{
      background:
        "radial-gradient(circle at center,#F472B6 0%,#C084FC 38%,transparent 72%)",
    }}
  />

  {/* Aurora 2 */}
  <div
    className="absolute -bottom-40 right-[-120px] w-[500px] h-[500px] rounded-full blur-[95px] opacity-80 pfgAurora2"
    style={{
      background:
        "radial-gradient(circle at center,#FDE68A 0%,#FB7185 40%,transparent 72%)",
    }}
  />

  {/* Purple wash */}
  <div
    className="absolute left-1/2 top-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-60 pfgAurora3"
    style={{
      background:
        "radial-gradient(circle,#DDD6FE 0%,transparent 70%)",
    }}
  />

  {/* Noise Overlay */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "radial-gradient(#000 0.7px, transparent 0.7px)",
      backgroundSize: "22px 22px",
    }}
  />
</div>

{/* Glass Light Sweep */}
<div className="absolute inset-0 overflow-hidden">

  <div
    className="absolute
               top-[-40%]
               left-[-65%]
               w-[70%]
               h-[220%]
               rotate-[28deg]
               pfgLightSweep"
    style={{
      background:
        "linear-gradient(90deg,transparent 0%,rgba(255,255,255,.55) 48%,rgba(255,255,255,.18) 60%,transparent 100%)",
      filter: "blur(18px)",
    }}
  />

</div>
      {/* Title header */}
      <div className="relative z-10 flex justify-between items-start">
        <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-medium tracking-tight text-[#0F172A] max-w-full sm:max-w-[220px] leading-tight">
          Monetize through <br />
          agentic commerce
        </h3>
        <button className="pfg-icon-btn p-1.5 sm:p-2 text-purple-600 bg-purple-50/80 backdrop-blur-sm rounded-md shadow-sm flex-shrink-0">
          <ExpandIcon />
        </button>
      </div>

      {/* Chat + product mockup */}
      <div className="relative z-10 mt-4 sm:mt-5 space-y-2 sm:space-y-3 overflow-hidden">
        {/* User message — dark bubble */}
        <div 

  className="bg-[#0F172A] rounded-2xl rounded-bl-sm p-2.5 sm:p-3 shadow-md max-w-full sm:max-w-[86%] text-[10px] sm:text-[11px] text-white leading-relaxed font-medium pfgChatUser"
>
<span className="pfgUserText">
I'm refreshing my wardrobe. Can you recommend some cozy, comfortable basics in size M?
</span>        </div>

        {/* Assistant reply — light bubble */}
        <div 

  className="bg-slate-100 rounded-2xl rounded-br-sm p-2.5 sm:p-3 shadow-sm max-w-full sm:max-w-[86%] ml-auto text-[10px] sm:text-[11px] text-slate-700 leading-relaxed font-medium pfgChatAssistant"
>
<span className="pfgAssistantText">
  Absolutely. Here are a few comfy essentials that pair well and could be a good starting point:
</span>        </div>

        {/* Product card block */}
        <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 space-y-3.5 pfgProductsReveal">
          <div  className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[9px] sm:text-[10px]">
            <div className="border border-slate-100 rounded-xl pfgCardOne  p-2 sm:p-2.5 bg-[#F8FAFC]">
            <div className="relative h-16 sm:h-20 w-full pfgProductThumb rounded-lg overflow-hidden mb-2 shadow-sm bg-gradient-to-br from-[#EEF4FF] via-[#DCEBFF] to-[#BFD8FF]">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.9),transparent_55%)]" />

  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

    <div className="relative">

      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#2F6BFF] blur-md opacity-30 absolute left-1/2 -translate-x-1/2 top-5" />

      <div className="relative w-9 sm:w-10 h-8 bg-[#3B82F6] rounded-t-[12px] mx-auto" />

      <div className="relative w-12 sm:w-14 h-8 bg-[#2563EB] rounded-b-[14px] -mt-1" />

      <div className="absolute left-1/2 top-1 -translate-x-1/2 w-3 h-3 rounded-full border border-white/40" />

    </div>

  </div>

</div>
              <p className="font-bold text-slate-900 text-[10px] sm:text-[11px]">Deluxe Shirt</p>
              <p className="text-slate-400 font-medium text-[9px] mt-0.5">Blue · Medium</p>
              <p className="font-extrabold text-slate-900 mt-2 text-[10px] sm:text-[11px]">$28.00</p>
              <p className="text-[8px] text-slate-400 font-normal mt-0.5">Cartsy</p>
            </div>
            <div className="border border-slate-100 rounded-xl  pfgCardTwo p-2.5 bg-[#F8FAFC]">
           <div className="relative h-16 sm:h-20 w-full rounded-lg overflow-hidden mb-2 shadow-sm bg-gradient-to-br from-[#EEF2F7] via-[#D8E2EE] to-[#C7D3E5]">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.9),transparent_55%)]" />

  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

    <div className="relative">

      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-slate-900 blur-md opacity-25 absolute left-1/2 -translate-x-1/2 top-5" />

      <div className="relative w-9 sm:w-10 h-8 bg-[#1E293B] rounded-t-[12px] mx-auto" />

      <div className="relative w-12 sm:w-14 h-8 bg-[#0F172A] rounded-b-[14px] -mt-1" />

      <div className="absolute left-1/2 top-1 -translate-x-1/2 w-3 h-3 rounded-full border border-white/30" />

    </div>

  </div>

</div>
              <p className="font-bold text-slate-900 text-[11px]">Essential Hoodie</p>
              <p className="text-slate-400 font-medium text-[9px] mt-0.5">Navy · Medium</p>
              <p className="font-extrabold text-slate-900 mt-2 text-[11px]">$48.00</p>
              <p className="text-[8px] text-slate-400 font-normal mt-0.5">Cartsy</p>
            </div>
          </div>
<button className="w-full bg-[#EBF2FE] hover:bg-[#2563EB] text-[#2563EB] hover:text-white rounded-xl py-2 sm:py-2.5 text-center font-bold text-[10px] sm:text-[11px] transition-all duration-200 pfgBuyReveal">          <span className="pfgBuyText">
Buy now
</span>
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
    <div className="pfg-card relative overflow-hidden bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[400px] sm:min-h-[430px] shadow-sm">
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
        <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-medium tracking-tight text-[#0F172A] max-w-full sm:max-w-[220px] leading-tight">
          Create a card <br />
          issuing program
        </h3>
        <button className="pfg-icon-btn p-1.5 sm:p-2 text-purple-600 bg-purple-50/80 backdrop-blur-sm rounded-md shadow-sm flex-shrink-0">
          <ExpandIcon />
        </button>
      </div>

      {/* Floating physical card */}
      <div className="relative z-10 my-auto flex items-center justify-center pt-4 sm:pt-6">
        <div
          className="w-[170px] sm:w-[190px] lg:w-[215px] h-[245px] sm:h-[275px] lg:h-[310px] rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] p-4 sm:p-5 shadow-2xl relative border border-white/70 flex flex-col justify-between overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #F9A8D4 0%, #C084FC 55%, #FDBA74 100%)",
            animation: "pfg-cardFloat 5s ease-in-out infinite",
          }}
        >
          <div className="absolute inset-0 bg-white/10 rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] pointer-events-none mix-blend-overlay" />

          {/* Chip + contactless icon */}
          <div className="flex justify-between items-center relative z-10 mt-10">
            <div className="w-7 h-6 sm:w-8 sm:h-6 lg:w-9 lg:h-7 bg-gradient-to-br from-amber-100 to-amber-200 rounded-md">
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
            <span className="text-white font-black italic tracking-wider text-lg sm:text-xl select-none drop-shadow-sm">
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
    <div className="group pfg-card relative overflow-hidden bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[400px] sm:min-h-[430px] shadow-sm">
      {/* Dense dotted wave / globe-style background */}
      {/* Stripe Inspired Background */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Base */}
  <div className="absolute inset-0 bg-[#FCFCFD]" />

  {/* Aurora */}
  <div
    className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full blur-[90px] pfgBorderGlow1"
    style={{
      background:
        "radial-gradient(circle,#C4B5FD 0%,transparent 70%)",
    }}
  />

  <div
    className="absolute -bottom-28 -right-20 w-[420px] h-[420px] rounded-full blur-[90px] pfgBorderGlow2"
    style={{
      background:
        "radial-gradient(circle,#93C5FD 0%,transparent 70%)",
    }}
  />

  {/* Network SVG */}
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 600 420"
    fill="none"
  >

    <defs>

      <linearGradient id="borderGradient" x1="0%" y1="100%" x2="100%" y2="0%">

        <stop offset="0%" stopColor="#4F46E5"/>

        <stop offset="50%" stopColor="#8B5CF6"/>

        <stop offset="100%" stopColor="#EC4899"/>

      </linearGradient>

    </defs>

   <path
  d="M-40 330
  C120 180
  260 140
  420 250
  S650 240
  720 170"

  stroke="url(#borderGradient)"
  strokeWidth="2"
  strokeLinecap="round"

  strokeDasharray="8 10"

  className="pfgBorderPath"
/>

    <path

      d="M-20 360
      C160 250
      300 220
      470 300
      S650 270
      720 210"

      stroke="url(#borderGradient)"

      strokeOpacity=".45"

      strokeWidth="1"

      strokeLinecap="round"

      className="pfgBorderPath2"
      strokeDasharray="6 10"

    />

    {/* Glowing Nodes */}

<circle
  cx="120"
  cy="235"
  r="5"
  fill="#4F46E5"
  className="pfgNode1"
/>

<circle
  cx="245"
  cy="170"
  r="4"
  fill="#8B5CF6"
  className="pfgNode2"
/>

<circle
  cx="380"
  cy="230"
  r="5"
  fill="#EC4899"
  className="pfgNode3"
/>

<circle
  cx="520"
  cy="205"
  r="4"
  fill="#3B82F6"
  className="pfgNode4"
/>

  </svg>

</div>

      {/* Title header */}
      <div className="relative z-10 flex justify-between items-start">
        <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-medium tracking-tight text-[#0F172A] max-w-full sm:max-w-[260px] leading-tight">
          Access borderless money movement with <br />
          stablecoins and crypto
        </h3>
        <button className="pfg-icon-btn transition-all duration-300 group-hover:rotate-45 p-1.5 sm:p-2 text-purple-600 bg-purple-50/80 backdrop-blur-sm rounded-md shadow-sm flex-shrink-0">
          <ExpandIcon />
        </button>
      </div>

      {/* Floating amount badge */}
      {/* Glass Reflection */}

<div

className="absolute inset-0 rounded-2xl overflow-hidden"

>

<div

className="absolute
-top-8
-left-16
w-24
h-40
rotate-[28deg]
bg-white/40
blur-xl
pfgReflection"

/>

</div>
      <div className="relative z-10 mt-auto w-full flex justify-center sm:justify-end pr-0 sm:pr-2 pb-6 sm:pb-14">
      <div
  className="relative overflow-hidden transition-all duration-500 group-hover:scale-[1.03]  bg-white/75 backdrop-blur-xl border border-white/70 rounded-2xl p-2.5 sm:p-3 flex items-center space-x-2.5 shadow-[0_15px_40px_rgba(15,23,42,.12)] text-[9px] sm:text-[10px] font-bold text-slate-900 pfgPaymentBadge"
>
<div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white text-[9px] font-black shadow-lg shadow-indigo-500/30">            ⬦
          </div>
        <span className="tracking-tight font-extrabold text-slate-800 text-[10px] sm:text-[11px]">$631.50</span>
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
    <div  className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 box-border select-none overflow-x-hidden">
      <StyleSheet />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
        <CardAgenticCommerce />
        <CardIssuing />
        <CardBorderless />
      </div>
    </div>
  );
}
