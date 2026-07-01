"use client";

import { motion } from "framer-motion";

export default function EmbedPayments() {
  const accounts = [
    { name: "Vital Flow", country: "Canada", balance: "$8,348.00", volume: "$71,562.98", initial: "V", color: "bg-blue-100 text-blue-600" },
    { name: "Daybreak Yoga", country: "United States", balance: "$1,502.00", volume: "$8,879.00", initial: "D", color: "bg-purple-100 text-purple-600" },
    { name: "Sacred Space", country: "UK", balance: "$1,247.00", volume: "$24,569.09", initial: "S", color: "bg-amber-100 text-amber-600" },
    { name: "Jackson Hot Yoga", country: "Australia", balance: "$3,660.00", volume: "$12,691.00", initial: "J", color: "bg-orange-100 text-orange-600" },
    { name: "Harmony Flow", country: "United States", balance: "$30,930.00", volume: "$294,669.65", initial: "H", color: "bg-emerald-100 text-emerald-600" },
    { name: "Balance at Brunch", country: "Canada", balance: "$335.00", volume: "$3,650.36", initial: "B", color: "bg-sky-100 text-sky-600" },
    { name: "Breathline Studio", country: "United States", balance: "$2,245.00", volume: "$8,608.00", initial: "B", color: "bg-cyan-100 text-cyan-600" },
    { name: "Quiet Fire Yoga", country: "UK", balance: "$388.00", volume: "$1,596.37", initial: "Q", color: "bg-rose-100 text-rose-600" },
    { name: "Zenith Zen", country: "Australia", balance: "$660.00", volume: "$1,643.30", initial: "Z", color: "bg-indigo-100 text-indigo-600" },
    { name: "M.E. Yoga", country: "Canada", balance: "$4,424.00", volume: "$6,709.60", initial: "M", color: "bg-pink-100 text-pink-600" },
  ];

  return (
    <div className="w-full flex flex-col items-center py-6 px-4">
      {/* =========================================================
          1. TOP CARD: Embed payments in your platform
         ========================================================= */}
      <div 
        className="w-full max-w-7xl relative overflow-hidden bg-white rounded-3xl min-h-[520px] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 md:p-12 items-center group"
        style={{
          backgroundImage: `url('https://images.stripeassets.com/fzn2n1nzq965/1j4wM9h2bBsyRFvTv6Wsn0/07f4b9b1e1e17fdc509d9087454dd8bc/ConnectBentoBackground.jpg?w=1242&fm=webp&q=90')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        {/* Background Image Container with Content Header inside */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Content Header Column (Aapka original flex-row structure) */}
          <div className="flex lg:col-span-4 relative z-10 flex-row justify-between items-center ml-5 mt-5 w-[94%] pointer-events-auto">        
            <h2 className="text-[28px] md:text-[30px] font-bold tracking-tight text-[#0A0E1A] leading-[1.15] max-w-xs ">
              Embed payments in your platform
            </h2>
            <button className="absolute top-[-40px] right-0 lg:static lg:mt-6 self-start p-1.5 text-purple-600 bg-purple-50/80 backdrop-blur-sm rounded-md shadow-sm border border-purple-100/30">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Platform Mockup Overlays Column */}
        <div className="lg:col-span-8 relative z-10 w-full flex flex-col md:flex-row items-center justify-end gap-6 pt-6 lg:pt-0 ml-75 mt-5">
          
          {/* Popup Receipt Card */}
          <motion.div 
            initial={{ y: 15, opacity: 0.9 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full md:w-[300px] h-[50vh] bg-white rounded-2xl shadow-2xl border border-slate-100/80 p-5 space-y-4 flex-shrink-0 relative z-20 md:translate-x-12 md:translate-y-8"
          >
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-xs shadow-sm">J</div>
              <span className="font-bold text-slate-900 text-xs tracking-tight">Jackson Hot Yoga</span>
            </div>

            <div className="text-[10px] leading-relaxed text-slate-500 font-medium">
              <p className="font-bold text-slate-900 text-[11px] mb-0.5">Thank you!</p>
              <p>Your payment was successful.</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-[10px] font-medium">
              <div className="flex justify-between"><span className="text-slate-400">Order number</span><span className="text-slate-800 font-mono">#2945467</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Date</span><span className="text-slate-800">Feb 25</span></div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Payment method</span>
                <span className="bg-indigo-900 text-white px-1 rounded text-[7px] font-extrabold tracking-wider py-0.5">STRIPE</span>
              </div>
              <div className="flex justify-between"><span className="text-slate-400">Your purchase</span><span className="text-slate-800">A$72.00 /year</span></div>
              <div className="flex justify-between items-center font-bold text-slate-900 text-[11px] border-t border-slate-100 pt-2.5 mt-1">
                <span>Total</span>
                <span>A$72.00</span>
              </div>
            </div>
          </motion.div>

          {/* Browser Container Workspace */}
          <div className="flex-1 w-full bg-white rounded-xl border border-slate-200/70 shadow-xl overflow-hidden min-w-[320px] md:min-w-[550px]">
            <div className="bg-[#F8FAFC] border-b border-slate-100 px-4 py-2 flex items-center relative">
              <div className="flex space-x-1 absolute left-4">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              </div>
              <div className="bg-slate-200/50 rounded-md mx-auto max-w-[180px] w-full text-[8px] text-slate-400 py-0.5 px-2 flex items-center justify-center space-x-1">
                <span>🔒</span><span className="text-slate-500 font-normal">dashboard.zenflow.com</span>
              </div>
            </div>

            <div className="p-4 bg-white">
              <div className="flex items-center space-x-1.5 mb-4 text-[10px] font-bold text-slate-800">
                <div className="w-4 h-4 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[8px]">💮</div>
                <span>Zenflow</span>
              </div>

              <p className="text-[11px] font-bold text-slate-900 mb-2.5">Connected Accounts</p>
              
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse text-[9px] font-medium">
                  <thead>
                    <tr className="text-slate-400 font-normal border-b border-slate-100 text-[8px]">
                      <th className="pb-1.5 font-normal">Accounts</th>
                      <th className="pb-1.5 font-normal">Account country</th>
                      <th className="pb-1.5 font-normal">Payment balance (USD)</th>
                      <th className="pb-1.5 font-normal">Volume (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-slate-600">
                    {accounts.map((row, idx) => (
                      <tr key={idx} className={`hover:bg-slate-50/50 transition-colors ${row.name === "Jackson Hot Yoga" ? "bg-slate-50/80 font-semibold" : ""}`}>
                        <td className="py-1.5 flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[7px] ${row.color}`}>{row.initial}</div>
                          <span className="text-slate-900 truncate max-w-[90px]">{row.name}</span>
                        </td>
                        <td className="py-1.5 text-slate-500">{row.country}</td>
                        <td className="py-1.5 text-slate-700">{row.balance}</td>
                        <td className="py-1.5 text-slate-900 font-medium">{row.volume}</td>
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
     <div className="w-full max-w-7xl relative overflow-hidden mt-3 bg-white border border-slate-200/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
      
      {/* ─── EXACT IMAGE MATCH CORNER MESH GRADIENT LAYER ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        
        {/* Main Gradient Wrapper - strictly locked to the right side */}
        <div className="absolute right-0 top-0 bottom-0 w-[380px] h-full overflow-hidden">
          
          {/* Bottom Right - Warm Sunset Orange */}
          <div className="absolute right-[-40px] bottom-[-50px] w-[260px] h-[180px] bg-[#ff9432] opacity-95 rounded-full blur-[30px]" />
          
          {/* Center Right Core - Smooth Fuchsia Pink */}
          <motion.div 
            animate={{ 
              x: [0, -12, 6, 0], 
              y: [0, 6, -6, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[10px] top-[15px] w-[240px] h-[190px] bg-[#ec4899] opacity-80 rounded-full blur-[35px] mix-blend-multiply"
          />

          {/* Top Right Corner - Royal Purple/Violet */}
          <div className="absolute right-[-40px] top-[-40px] w-[250px] h-[160px] bg-[#8b5cf6] opacity-85 rounded-full blur-[30px]" />
        </div>

        {/* PERFECT CURVED MASK - Jo left side par exact image jaisa soft curve cut banata hai */}
        <div className="absolute right-[220px] md:right-[260px] top-[-50px] bottom-[-50px] w-[200px] bg-white rounded-r-[120px] blur-[20px] z-10" />
        <div className="absolute left-0 top-0 bottom-0 right-[300px] bg-white z-10" />
      </div>

      {/* ─── CONTENT SECTION ─── */}
      <div className="relative z-20 text-center md:text-left leading-relaxed">
        <p className="text-[15px] md:text-[17px] text-slate-500 font-medium">
          <span className="text-slate-900 font-bold">Not sure where to start?</span>{" "}
          Tell us about your business <br className="hidden md:inline" /> to get personalized Stripe product recommendations.
        </p>
      </div>

      {/* ─── CTA BUTTON SECTION ─── */}
      <div className="relative z-20 flex-shrink-0">
        <button className="bg-[#635BFF] hover:bg-[#5346E0] text-white font-semibold rounded-md text-xs py-2.5 px-5 shadow-md flex items-center space-x-1.5 transition-all duration-150">
          <span>Find what's right for you</span>
          <span className="text-[10px] font-bold">❯</span>
        </button>
      </div>

    </div>
      {/* =========================================================
          3. NEW BOTTOM HERO BANNER: Stripe Sessions AI Infrastructure
         ========================================================= */}
      <div 
  className="w-full max-w-7xl relative overflow-hidden rounded-3xl min-h-[360px] shadow-lg flex flex-col justify-between p-8 md:p-12 group border border-slate-950 mt-2"
  style={{
    backgroundImage: `url('https://images.stripeassets.com/fzn2n1nzq965/2YFdgdFPeIiDpmQbhHPAx8/186752498bf713fea245f31bcec84f8a/sessions-2026-on-demand-bg.png?w=1632&fm=webp&q=90')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  
  {/* Dark Overlay to maintain text readability over the image */}
  <div className="absolute inset-0 bg-black/15 pointer-events-none z-0" />

  {/* Content Layer */}
  <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full my-auto">
    
    {/* Text & Button Trigger Left Column */}
    <div className="md:col-span-7 space-y-6">
      <h1 className="text-3xl md:text-[40px] font-bold tracking-tight text-white leading-[1.1] max-w-xl drop-shadow-sm">
        Building the economic infrastructure for AI
      </h1>
      <button className="bg-white hover:bg-slate-50 text-[#635BFF] font-semibold rounded-xl text-xs py-3 px-5 shadow-md flex items-center space-x-2 transition-all duration-150">
        <span>Watch now</span>
        <span className="text-[9px] font-bold">❯</span>
      </button>
    </div>

    {/* Presenter Visual Placeholder Right Column */}
    <div className="md:col-span-5 relative h-full min-h-[180px] flex items-end justify-center md:justify-end">
      <div className="absolute bottom-0 right-10 md:right-24 w-32 h-56 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent rounded-full blur-sm pointer-events-none" />
      <div className="text-white/10 absolute bottom-4 right-8 font-black text-7xl select-none hidden lg:block">LIVE</div>
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
  );
}