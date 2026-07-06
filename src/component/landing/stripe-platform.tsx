"use client";

import { motion } from "framer-motion";

const StyleSheet = () => (
  <style>{`/* ===========================
Stripe Browser Animation
=========================== */

@keyframes pfgBrowserFloat{

0%{

transform:
translateY(0px);

}

50%{

transform:
translateY(-8px);

}

100%{

transform:
translateY(0px);

}

}

@keyframes pfgBrowserGlow{

0%,100%{

opacity:.20;

transform:
translateX(-50%)
scale(1);

}

50%{

opacity:.35;

transform:
translateX(-50%)
scale(1.15);

}

}

@keyframes pfgRowReveal{

from{

opacity:0;

transform:
translateY(10px);

}

to{

opacity:1;

transform:
translateY(0);

}

}




.pfgBrowserFloat{

animation:
pfgBrowserFloat 7s ease-in-out infinite;

}

.pfgBrowserGlow{

background:
radial-gradient(circle,
rgba(99,91,255,.20),
transparent 70%);

animation:
pfgBrowserGlow 8s ease-in-out infinite;

}


.pfgRowReveal{

animation:
pfgRowReveal .45s ease forwards;

}




`}</style>
);

export default function EmbedPayments() {
  const accounts = [
    {
      name: "Vital Flow",
      country: "Canada",
      balance: "$8,348.00",
      volume: "$71,562.98",
      initial: "V",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Daybreak Yoga",
      country: "United States",
      balance: "$1,502.00",
      volume: "$8,879.00",
      initial: "D",
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Sacred Space",
      country: "UK",
      balance: "$1,247.00",
      volume: "$24,569.09",
      initial: "S",
      color: "bg-amber-100 text-amber-600",
    },
    {
      name: "Jackson Hot Yoga",
      country: "Australia",
      balance: "$3,660.00",
      volume: "$12,691.00",
      initial: "J",
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Harmony Flow",
      country: "United States",
      balance: "$30,930.00",
      volume: "$294,669.65",
      initial: "H",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      name: "Balance at Brunch",
      country: "Canada",
      balance: "$335.00",
      volume: "$3,650.36",
      initial: "B",
      color: "bg-sky-100 text-sky-600",
    },
    {
      name: "Breathline Studio",
      country: "United States",
      balance: "$2,245.00",
      volume: "$8,608.00",
      initial: "B",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      name: "Quiet Fire Yoga",
      country: "UK",
      balance: "$388.00",
      volume: "$1,596.37",
      initial: "Q",
      color: "bg-rose-100 text-rose-600",
    },
    {
      name: "Zenith Zen",
      country: "Australia",
      balance: "$660.00",
      volume: "$1,643.30",
      initial: "Z",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "M.E. Yoga",
      country: "Canada",
      balance: "$4,424.00",
      volume: "$6,709.60",
      initial: "M",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <>
      <StyleSheet />

      <div className="w-full flex flex-col items-center py-6 px-4">
        {/* =========================================================
          1. TOP CARD: Embed payments in your platform
         ========================================================= */}
        <div
          className="w-full max-w-7xl relative overflow-hidden bg-white rounded-md sm:rounded-3xl min-h-[520px] lg:min-h-[520px] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-5 sm:p-8 md:p-10 lg:p-12 items-start lg:items-center group"
          style={{
            backgroundImage: `url('https://images.stripeassets.com/fzn2n1nzq965/1j4wM9h2bBsyRFvTv6Wsn0/07f4b9b1e1e17fdc509d9087454dd8bc/ConnectBentoBackground.jpg?w=1242&fm=webp&q=90')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Background Image Container with Content Header inside */}
          <div  className="absolute inset-0 pointer-events-none z-10 overflow-hidden px-5 pt-5 sm:px-8 sm:pt-8 lg:px-10 lg:pt-10">
            {/* Content Header Column (Aapka original flex-row structure) */}
            <div  className="relative flex items-start justify-between w-full pointer-events-auto">
              <h2 className="text-[26px] sm:text-[30px] lg:text-[30px] font-bold tracking-tight text-[#0A0E1A] leading-[1.1] max-w-[260px] sm:max-w-xs">
                Embed payments in your platform
              </h2>
              <button className="flex-shrink-0 p-2 text-purple-600 bg-purple-50/80 backdrop-blur-sm rounded-md shadow-sm border border-purple-100/30 lg:absolute lg:top-0 lg:right-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Platform Mockup Overlays Column */}
          <div className="lg:col-span-8 relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-end gap-5 lg:gap-6 pt-6 lg:pt-0 lg:ml-40 xl:ml-72 mt-4 lg:mt-5">
            {/* Popup Receipt Card */}
            <motion.div
              initial={{ y: 15, opacity: 0.9 }}
              animate={{
                y: [0, -8, 0],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-[320px] lg:w-[300px] h-auto lg:h-[50vh] bg-white rounded-2xl shadow-2xl border border-slate-100/80 p-5 space-y-4 flex-shrink-0 relative z-20 lg:translate-x-12 lg:translate-y-8"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                  J
                </div>
                <span className="font-bold text-slate-900 text-xs tracking-tight">
                  Jackson Hot Yoga
                </span>
              </div>

              <div className="text-[10px] leading-relaxed text-slate-500 font-medium">
                <p className="font-bold text-slate-900 text-[11px] mb-0.5">
                  Thank you!
                </p>
                <p>Your payment was successful.</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-[10px] font-medium">
                <div className="flex justify-between">
                  <span className="text-slate-400">Order number</span>
                  <span className="text-slate-800 font-mono">#2945467</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Date</span>
                  <span className="text-slate-800">Feb 25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Payment method</span>
                  <span className="bg-indigo-900 text-white px-1 rounded text-[7px] font-extrabold tracking-wider py-0.5">
                    STRIPE
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Your purchase</span>
                  <span className="text-slate-800">A$72.00 /year</span>
                </div>
                <div className="flex justify-between items-center font-bold text-slate-900 text-[11px] border-t border-slate-100 pt-2.5 mt-1">
                  <span>Total</span>
                  <span>A$72.00</span>
                </div>
              </div>
            </motion.div>

            {/* Browser Container Workspace */}
            <div className="flex-1 w-full max-w-full bg-white rounded-xl border border-slate-200/70 shadow-xl overflow-hidden min-w-0 lg:min-w-[550px] pfgBrowserFloat">
              <div className="bg-gradient-to-r from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-slate-100 px-4 py-2 flex items-center relative">
                <div className="flex space-x-1 absolute left-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                </div>
                <div className="bg-slate-200/50 rounded-md mx-auto max-w-[180px] w-full text-[8px] text-slate-400 py-0.5 px-2 flex items-center justify-center space-x-1">
                  <span>🔒</span>
                  <span className="text-slate-500 font-normal">
                    dashboard.zenflow.com
                  </span>
                </div>
              </div>

              <div className="relative p-3 sm:p-4 lg:p-4 bg-white">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="pfgBrowserGlow absolute -top-20 left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full blur-[90px]" />
                </div>
                <div className="flex items-center space-x-1.5 mb-3 sm:mb-4 text-[10px] sm:text-[11px] font-bold text-slate-800">
                  <div className="w-4 h-4 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[8px]">
                    💮
                  </div>
                  <span>Zenflow</span>
                </div>

                <p className="text-[12px] sm:text-[13px] font-bold text-slate-900 mb-3">
                  Connected Accounts
                </p>

                <div className="w-full overflow-x-auto scrollbar-hide">
                  <table className="min-w-[620px] lg:min-w-full w-full text-left border-collapse text-[9px] sm:text-[10px] font-medium">
                    {" "}
                    <thead>
                      <tr className="text-slate-400 font-normal border-b border-slate-100 text-[8px]">
                        <th className="pb-1.5 font-normal">Accounts</th>
                        <th className="pb-1.5 font-normal">Account country</th>
                        <th className="pb-1.5 font-normal">
                          Payment balance (USD)
                        </th>
                        <th className="pb-1.5 font-normal">Volume (USD)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-slate-600">
                      {accounts.map((row, idx) => (
                        <tr
                          key={idx}
                          style={{
                            animation: `pfgRowReveal .45s ease forwards ${idx * 0.08}s`,
                            opacity: 0,
                          }}
                          className={`hover:bg-slate-50/50 transition-colors ${row.name === "Jackson Hot Yoga" ? "bg-slate-50/80 font-semibold" : ""}`}
                        >
                          <td className="py-2 flex items-center space-x-2">
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center text-[7px] ${row.color}`}
                            >
                              {row.initial}
                            </div>
                            <span className="text-slate-900 truncate max-w-[110px]">
                              {row.name}
                            </span>
                          </td>
                          <td className="py-1.5 text-slate-500">
                            {row.country}
                          </td>
                          <td className="py-1.5 text-slate-700">
                            {row.balance}
                          </td>
                          <td className="py-1.5 text-slate-900 font-medium">
                            {row.volume}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
          2. MIDDLE PANEL: Personalized Recommendations CTA Panel
         ========================================================= */}
        <div className="w-full max-w-7xl relative overflow-hidden mt-3 bg-white border border-slate-200/50 rounded-2xl sm:rounded-3xl px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10 shadow-sm">
          {/* ─── EXACT IMAGE MATCH CORNER MESH GRADIENT LAYER ─── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
            {/* Main Gradient Wrapper - strictly locked to the right side */}
            <div className="absolute right-0 top-0 bottom-0 w-[180px] sm:w-[260px] lg:w-[380px] h-full overflow-hidden">
              {/* Bottom Right - Warm Sunset Orange */}
              <div className="absolute right-[-30px] bottom-[-30px] w-[140px] h-[140px] sm:w-[200px] sm:h-[160px] lg:w-[260px] lg:h-[180px]" />

              {/* Center Right Core - Smooth Fuchsia Pink */}
              <motion.div
                animate={{
                  x: [0, -12, 6, 0],
                  y: [0, 6, -6, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[0px] top-[10px] w-[140px] h-[120px] sm:w-[180px] sm:h-[150px] lg:w-[240px] lg:h-[190px]"
              />

              {/* Top Right Corner - Royal Purple/Violet */}
              <div className="absolute right-[-25px] top-[-20px] w-[150px] h-[110px] sm:w-[190px] sm:h-[130px] lg:w-[250px] lg:h-[160px]" />
            </div>

            {/* PERFECT CURVED MASK - Jo left side par exact image jaisa soft curve cut banata hai */}
            <div className="absolute right-[220px] md:right-[260px] top-[-50px] bottom-[-50px] w-[200px] bg-white rounded-r-[120px] blur-[20px] z-10" />
            <div className="absolute left-0 top-0 bottom-0 right-[300px] bg-white z-10" />
          </div>

          {/* ─── CONTENT SECTION ─── */}
          <div className="relative z-20 w-full lg:w-auto text-left">
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-slate-500 font-medium leading-7 max-w-[580px]">
              <span className="text-slate-900 font-bold">
                Not sure where to start?
              </span>{" "}
              Tell us about your business <br className="hidden lg:block" /> to
              get personalized Stripe product recommendations.
            </p>
          </div>

          {/* ─── CTA BUTTON SECTION ─── */}
          <div className="relative z-20 w-full lg:w-auto flex justify-start lg:justify-end">
            <button className="group bg-[#635BFF] hover:bg-[#5346E0] text-white font-semibold rounded-lg text-[13px] py-3 px-5 shadow-md flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.03]">
              <span>Find what's right for you</span>
              <span className="text-[10px] font-bold transition-transform duration-300 group-hover:translate-x-1">
                ❯
              </span>
            </button>
          </div>
        </div>
        {/* =========================================================
          3. NEW BOTTOM HERO BANNER: Stripe Sessions AI Infrastructure
         ========================================================= */}
        <div
          className="w-full max-w-7xl relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] shadow-lg flex flex-col justify-between px-5 py-6 sm:px-8 sm:py-8 lg:p-12 group border border-slate-950 mt-3"
          style={{
            backgroundImage: `url('https://images.stripeassets.com/fzn2n1nzq965/2YFdgdFPeIiDpmQbhHPAx8/186752498bf713fea245f31bcec84f8a/sessions-2026-on-demand-bg.png?w=1632&fm=webp&q=90')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark Overlay to maintain text readability over the image */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none z-0" />

          {/* Content Layer */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center h-full my-auto">
            {/* Text & Button Trigger Left Column */}
            <div className="lg:col-span-7 space-y-5 lg:space-y-6">
              <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-white leading-[1.08] max-w-[620px] drop-shadow-sm">
                Building the economic infrastructure for AI
              </h1>
              <button className="group w-fit bg-white hover:bg-slate-50 text-[#635BFF] font-semibold rounded-xl text-[13px] py-3 px-5 shadow-md flex items-center space-x-2 transition-all duration-300 hover:scale-[1.03]">
                <span>Watch now</span>
                <span className="text-[9px] font-bold transition-transform duration-300 group-hover:translate-x-1">
                  ❯
                </span>
              </button>
            </div>

            {/* Presenter Visual Placeholder Right Column */}
            <div className="lg:col-span-5 relative h-full min-h-[120px] lg:min-h-[180px] flex items-end justify-center lg:justify-end">
              <div className="absolute bottom-0 right-10 md:right-24 w-32 h-56 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent rounded-full blur-sm pointer-events-none" />
              <div className="text-white/10 absolute bottom-4 right-8 font-black text-7xl select-none hidden lg:block">
                LIVE
              </div>
            </div>
          </div>

          {/* Branding Footer Layer */}
          <div className="relative z-10 w-full flex justify-end border-t border-white/10 pt-4 mt-4">
            <div className="flex items-center space-x-1 text-white text-sm font-bold tracking-tight">
              <span className="opacity-70 font-medium">stripe</span>
              <span>sessions</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
