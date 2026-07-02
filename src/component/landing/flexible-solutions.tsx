"use client";

import React from "react";
import { easeOut } from "framer-motion";
import { motion, type Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function FlexibleSolution() {
  return (
    <div className="w-full flex flex-col justify-start px-4 sm:px-6 lg:px-10 box-border bg-white overflow-x-hidden">
      {/* Header Text Section */}
      <div className="w-full text-left flex justify-start mb-2">
        <p className="text-[#6B7280] text-[15px] sm:text-[16px] lg:text-[17px] leading-6 sm:leading-7 max-w-full lg:max-w-lg">
          <span className="font-bold text-slate-800">
            Flexible solutions for every business model.{" "}
          </span>
          <span className="font-semibold">
            Grow your business through a comprehensive set of payments and
            financial tools—designed to work individually or together.
          </span>
        </p>
      </div>

      {/* CARDS SECTION */}
      <div
        className="w-full max-w-7xl mx-auto mt-8 sm:mt-10 grid
 grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-2"
      >
        {/* LEFT CARD (BADA CARD): WITH ORIGINAL BACKGROUND IMAGE */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-2 relative overflow-hidden bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col min-h-[520px] sm:min-h-[620px]"
        >
          {/* Main Background Image perfectly set */}
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: `url('https://images.stripeassets.com/fzn2n1nzq965/vYmk6v8n7oDAwbDpwhjV6/846f9b3e214549b8f14e2b8c8cfe9343/payment-bento-background.jpg')`,
            }}
          />

          {/* Card Header Title and Button */}
          <div className="relative z-10 flex justify-between items-start pt-6 sm:pt-8 lg:pt-10 px-5 sm:px-8 md:px-12 mb-6 gap-4">
            <h2 className="text-[22px] sm:text-2xl md:text-[26px] font-semibold tracking-tight text-slate-900 max-w-full sm:max-w-md leading-tight">
              Accept and optimize payments globally—online and in person
            </h2>
            <button className="p-1.5 sm:p-2 text-purple-600 bg-white/60 rounded-md shadow-inner backdrop-blur-sm flex-shrink-0">
              <svg
                className="w-6 h-6"
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

          {/* Visual Mockups Area */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-3 sm:gap-5 lg:gap-8 items-center lg:items-end mt-auto px-5 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12 overflow-hidden">
            {/* NEW BENTO TERMINAL HARDWARE DESIGN (With Expanded Top Bezel/Border) */}
            <div className="w-[180px] sm:w-[230px] h-[320px] sm:h-[425px] flex flex-col justify-between items-center flex-shrink-0 lg:translate-y-8 mx-auto">
              {/* Device Upper Body */}
              <div className="relative w-full h-[340px] sm:h-[460px] bg-[#FAF8FC] rounded-[34px] sm:rounded-[42px] p-[7px] sm:p-[8px]">
                {/* Black Glass Bezel */}
                {/* pt-7 adds a broader top border/bezel to reflect the actual hardware design */}
                <div className="w-full h-full bg-[#09090B] rounded-[30px] sm:rounded-[36px] pt-5 sm:pt-7 px-[7px] sm:px-[8px] pb-[7px] sm:pb-[8px] flex flex-col relative">
                  {/* Top Camera Sensor Dot */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1F1F23] rounded-full ring-1 ring-white/5"></div>

                  {/* High Contrast Inner Screen Display */}
                  <div className="w-full h-full bg-white rounded-[22px] sm:rounded-[28px] pt-6 sm:pt-8 px-3 sm:px-4 pb-3 sm:pb-4 flex flex-col justify-between overflow-hidden">
                    {/* Top Content (Payment Info) */}
                    <div className="flex flex-col items-center text-center mt-1">
                      {/* Contactless Wave Icon */}
                      <div className="text-[#1E2A38] mb-4 opacity-90">
                        <svg
                          width="24"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 14a5 5 0 0 1 0-8" />
                          <path d="M8 17a8 8 0 0 1 0-11" />
                          <path d="M11 20a11 11 0 0 1 0-14" />
                          <path d="M14 23a14 14 0 0 1 0-17" />
                          <path d="M16 10h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4" />
                        </svg>
                      </div>

                      <p className="text-[#4A5568] text-[11px] font-normal mb-0.5">
                        Pay{" "}
                        <span className="text-[#0A2540] font-semibold">
                          Showflix
                        </span>
                      </p>

                      <h1 className="text-[#0A2540] text-[22px] sm:text-[28px] font-bold tracking-tight mb-2">
                        $50.00
                      </h1>

                      <p className="text-[#A0AEC0] text-[10px] leading-snug max-w-[140px] font-medium">
                        Tap, insert, or swipe to pay
                      </p>
                    </div>

                    {/* Middle Breakdown */}
                    <div className="w-full mb-3 font-medium text-[11px] px-0.5">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100 text-[#4A5568]">
                        <span>Gift card</span>
                        <span className="text-[#2D3748] font-semibold">
                          $50.00
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 text-[#0A2540] font-bold text-[12px]">
                        <span>Total</span>
                        <span>$50.00</span>
                      </div>
                    </div>

                    {/* Purple Continue Button */}
                    <button className="w-full bg-[#9A65E6] hover:bg-[#864FE0] text-white text-[11px] sm:text-[12px] font-semibold py-2 sm:py-2.5 rounded-xl">
                      Continue
                    </button>
                  </div>
                </div>
              </div>

              {/* Terminal Base Base/Dock Section */}
              <div className="absolute bottom-0 w-[94%] h-[55px] bg-gradient-to-b from-[#EAE7F2] to-[#D5D0E3] rounded-b-[30px] rounded-t-[8px] shadow-[0_10px_20px_rgba(0,0,0,0.15)] border-t border-white/60 flex flex-col justify-end items-center pb-2 z-0">
                <div className="w-[80%] h-[4px] bg-[#C1BCD0] rounded-full opacity-60 shadow-inner"></div>
              </div>
            </div>

            {/* BROWSER PAGE & CHECKOUT CART */}
            <div className="w-full max-w-full lg:flex-1 bg-white rounded-t-2xl border-t border-x border-slate-200/80 shadow-xl overflow-hidden min-w-0 lg:min-w-[420px] block lg:translate-y-6">
              {" "}
              {/* Browser Control Top Bar */}
              <div className="bg-[#F9FAFB] border-b border-slate-200/60 px-3 sm:px-4 py-2 flex items-center relative">
                <div className="flex space-x-1 absolute left-4">
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                </div>
                <div className="bg-[#EDEDED]/60 border border-slate-200/30 rounded-md mx-auto max-w-[140px] sm:max-w-[200px] w-full text-[8px] sm:text-[9px] text-slate-400 py-0.5 px-2 flex items-center justify-center space-x-1 overflow-hidden">
                  <span>🔒</span>
                  <span className="text-slate-500 font-normal">
                    showflixapp.com/checkout
                  </span>
                </div>
              </div>
              {/* Main Site Container Split */}
              <div className="p-2 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 text-[9px] sm:text-[10px] bg-white">
                {/* Form Elements Input Column (7 Columns) */}
                <div className="lg:col-span-7 space-y-3">
                  <p className="font-extrabold text-slate-900 tracking-wider text-[11px]">
                    SHOWFLIX
                  </p>

                  <div>
                    <label className="text-[9px] text-slate-400 block mb-1">
                      Email address
                    </label>
                    <input
                      type="text"
                      disabled
                      defaultValue="taro.yamada@example.com"
                      className="w-full border border-slate-200 rounded px-2 py-1 text-slate-600 bg-white font-normal"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-[#00E575] text-white font-bold py-1.5 rounded text-[10px] flex items-center justify-center space-x-1 shadow-sm">
                      <span>▶</span>
                      <span>link</span>
                    </button>
                    <button className="bg-black text-white font-bold py-1.5 rounded text-[10px] flex items-center justify-center">
                       Pay
                    </button>
                  </div>

                  <div className="relative flex py-1 items-center justify-center">
                    <div className="flex-grow border-t border-slate-100"></div>
                    <span className="flex-shrink mx-2 text-[9px] text-slate-300 font-normal">
                      or
                    </span>
                    <div className="flex-grow border-t border-slate-100"></div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] text-slate-400 block font-normal">
                      Payment method
                    </label>

                    {/* Card Option */}
                    <div className="border border-purple-200 rounded p-1.5 bg-purple-50/10 flex items-center justify-between">
                      <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                        <span>💳</span> Card
                      </span>
                      <input
                        type="radio"
                        defaultChecked
                        className="accent-purple-600 w-3 h-3"
                      />
                    </div>
                    {/* Alternative Option 1 */}
                    <div className="border border-slate-200 rounded p-1.5 flex items-center justify-between bg-white text-slate-400">
                      <span className="flex items-center gap-1.5 font-normal">
                        <span>🅿️</span> PayPal
                      </span>
                      <input
                        type="radio"
                        disabled
                        className="w-3 h-3 opacity-20"
                      />
                    </div>
                    {/* Alternative Option 2 */}
                    <div className="border border-slate-200 rounded p-1.5 flex items-center justify-between bg-white text-slate-400">
                      <span className="flex items-center gap-1.5 font-normal">
                        <span>🏦</span> Bank Transfer
                      </span>
                      <input
                        type="radio"
                        disabled
                        className="w-3 h-3 opacity-20"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-[#A78BFA] text-white rounded py-1.5 font-bold mt-2 text-center text-[10px]">
                    Continue
                  </button>
                </div>

                {/* Cart Side Overview Column (5 Columns) */}
                <div className="lg:col-span-5 space-y-3 lg:pl-3 lg:border-l border-slate-100 border-t lg:border-t-0 pt-4 lg:pt-0">
                  <p className="text-slate-400 font-bold text-[9px] tracking-wide">
                    Order Summary
                  </p>

                  {/* Subscription Block row */}
                  <div className="flex items-start space-x-2 bg-white rounded">
                    <div className="w-7 h-7 bg-purple-600 rounded flex items-center justify-center text-white font-extrabold text-xs shadow-sm flex-shrink-0">
                      S
                    </div>
                    <div className="leading-tight">
                      <p className="font-bold text-slate-800 text-[9px]">
                        Monthly Streaming Subscription
                      </p>
                      <p className="text-slate-400 text-[8px] mt-0.5">$18.86</p>
                    </div>
                  </div>

                  {/* Calculations Sheet */}
                  <div className="space-y-1.5 pt-2 text-[9px] text-slate-400 font-normal border-t border-slate-100/60">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-slate-600">$18.86</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span className="text-slate-600">$1.89</span>
                    </div>

                    <div className="flex justify-between font-bold text-slate-900 text-[10px] border-t border-slate-200 pt-2 mt-2">
                      <span>Total</span>
                      <span>$20.75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD (CHOTA CARD): UNCHANGED WITH DEEP PREMIUM GRADIENT */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden border border-purple-500/20 rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between min-h-[500px] sm:min-h-[620px]"
        >
          {/* Custom Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-100 to-purple-800 pointer-events-none" />

          {/* Card Header */}
          <div className="relative z-10 flex justify-between items-start sm:items-center mb-2 gap-4 w-full">
            <h2 className="text-[20px] sm:text-xl md:text-[19px] font-semibold tracking-tight text-slate-900 leading-tight flex-1">
              Enable any billing model
            </h2>
            <button className="p-2 text-purple-900 hover:text-white bg-white/20 hover:bg-white/40 rounded-lg transition-colors shadow-sm flex-shrink-0">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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

          {/* Billing Widgets */}
          <div className="relative z-10 space-y-4 mt-auto pt-4 mb-0 sm:mb-20 lg:mb-34">
            {/* Pro Plan Widget */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-slate-100">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 text-[10px] sm:text-xs">
                  📍
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-800">
                    Pro Plan
                  </p>
                  <p className="text-[9px] text-slate-400">Billed monthly</p>
                </div>
              </div>
              <div className="text-[10px] space-y-2 text-black">
                <p>
                  Tokens: <br />{" "}
                  <span className="text-slate-700 font-medium">
                    $0.01 per 1,000 units
                  </span>
                </p>

                {/* usage text addd */}
                <p className="text-black font-bold">Usage meter</p>

                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 w-[75%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Chart Widget */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-slate-100">
              <div className="mb-2">
                <p className="text-[9px] font-medium text-slate-400">
                  Tokens used in the last 30 days
                </p>
                <p className="text-sm font-bold text-slate-800">
                  2,010,569,010
                </p>
              </div>
              {/* Dynamic Bar Chart Elements */}
              <div className="h-16 sm:h-20 flex items-end justify-between pt-2 gap-[1px]">
                {[
                  30, 45, 35, 55, 65, 40, 32, 50, 48, 70, 42, 53, 58, 95, 52,
                  45, 38, 50, 62, 75, 68, 85, 78, 65, 60,
                ].map((height, i) => (
                  <div
                    key={i}
                    style={{ height: `${height}%` }}
                    className="flex-1 bg-purple-500/80 rounded-t-[1px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
