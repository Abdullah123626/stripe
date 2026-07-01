"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

export default function StripeBackboneGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // "sticks" here after hover/click
  const [isGraphHovered, setIsGraphHovered] = useState(false);
  const [themeIndex, setThemeIndex] = useState(2); // start on "Daytime"
  const autoCycleRef = useRef(null);

  const metrics = [
    { value: "135+", label: "currencies and payment methods supported" },
    { value: "$1.9T", label: "in payments volume processed in 2025" },
    { value: "99.999%", label: "historical uptime for Stripe services" },
    { value: "200M+", label: "active subscriptions managed on Stripe Billing" },
  ];

  const themes = [
    { name: "Pre-dawn", ray: "#6366F1", node: "#818CF8", glowA: "#6366F1", glowB: "#312E81", core: ["#C4B5FD", "#818CF8", "#4338CA"] },
    { name: "Sunrise", ray: "#8B5CF6", node: "#A78BFA", glowA: "#A78BFA", glowB: "#F0ABFC", core: ["#FDE68A", "#F472B6", "#7C3AED"] },
    { name: "Daytime", ray: "#3B82F6", node: "#60A5FA", glowA: "#93C5FD", glowB: "#3B82F6", core: ["#FBBF24", "#F59E0B", "#EA580C"] },
    { name: "Dusk", ray: "#2563EB", node: "#60A5FA", glowA: "#60A5FA", glowB: "#1D4ED8", core: ["#FCD34D", "#FB923C", "#2563EB"] },
    { name: "Sunset", ray: "#D946EF", node: "#F0ABFC", glowA: "#F472B6", glowB: "#FB923C", core: ["#FDE68A", "#FB7185", "#C026D3"] },
    { name: "Night", ray: "#4F46E5", node: "#818CF8", glowA: "#312E81", glowB: "#1E1B4B", core: ["#A5B4FC", "#4F46E5", "#1E1B4B"] },
  ];

  const theme = themes[themeIndex];

  useEffect(() => {
    autoCycleRef.current = setInterval(() => {
      setThemeIndex((i) => (i + 1) % themes.length);
    }, 3200);
    return () => clearInterval(autoCycleRef.current);
  }, []);

  const restartAutoCycle = () => {
    clearInterval(autoCycleRef.current);
    autoCycleRef.current = setInterval(() => {
      setThemeIndex((i) => (i + 1) % themes.length);
    }, 3200);
  };

  const totalSpikes = 140;
  const linesArray = useMemo(() => Array.from({ length: totalSpikes }), []);

  const spikeData = useMemo(() => {
    return linesArray.map((_, index) => {
      const angleRange = Math.PI;
      const angleStep = angleRange / (totalSpikes - 1);
      const angle = Math.PI + index * angleStep;
      const lengthFactor = 120 + Math.random() * 140;
      return { angle, lengthFactor };
    });
  }, [linesArray]);

  // The metric that's currently "lit up" — hover always wins over the sticky click state
  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  // Colorful accent gradient used for the indicator bars that frame the active metric
  const indicatorGradient = "linear-gradient(90deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)";

  return (
    <div className="w-full max-w-7xl mx-auto bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm select-none box-border font-sans my-6">
      {/* =========================================================
          TOP SECTION: Header Title & Metrics Matrix Row
         ========================================================= */}
      <div className="pt-16 pb-12 px-6 md:px-12 text-center border-b border-slate-100">
        <h2 className="text-[32px] md:text-[38px] font-bold text-[#0F172A] tracking-tight leading-tight mb-16">
          The backbone <br className="sm:hidden" /> of global commerce
        </h2>

        <div
          className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-6xl mx-auto text-left lg:text-center pl-4 lg:pl-0"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Gradient indicator bar — ABOVE the active metric, slides to whichever is active */}
          <motion.div
            className="hidden lg:block absolute -top-3 h-[2px] rounded-full pointer-events-none"
            style={{ background: indicatorGradient }}
            animate={{
              left: `${(displayIndex * 100) / 4}%`,
              width: `${100 / 4}%`,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.7 }}
          />

          {/* Gradient indicator bar — BELOW the active metric, mirrors the top one */}
          <motion.div
            className="hidden lg:block absolute -bottom-5 h-[2px] rounded-full pointer-events-none"
            style={{ background: indicatorGradient }}
            animate={{
              left: `${(displayIndex * 100) / 4}%`,
              width: `${100 / 4}%`,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.7 }}
          />

          {metrics.map((item, idx) => {
            const isActive = displayIndex === idx;
            return (
              <div
                key={idx}
                className="relative space-y-1.5 group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onClick={() => {
                  setActiveIndex(idx);
                  setHoveredIndex(idx);
                }}
              >
                {/* Mobile indicator — same gradient, single top line per item */}
                <span
                  className="lg:hidden absolute -top-3 left-0 h-[2px] w-10 rounded-full transition-opacity duration-300"
                  style={{
                    background: indicatorGradient,
                    opacity: isActive ? 1 : 0,
                  }}
                />

                <div
                  className={`text-[28px] md:text-[34px] font-bold tracking-tight transition-colors duration-300 group-hover:scale-105 inline-block transform ${
                    isActive ? "text-[#0A0E1A]" : "text-slate-300"
                  }`}
                >
                  {item.value}
                </div>
                <p
                  className={`text-[11px] md:text-[12px] font-medium leading-normal max-w-[180px] lg:mx-auto transition-colors duration-300 ${
                    isActive ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          BOTTOM SECTION: Dynamic Sunburst Network Canvas Area
         ========================================================= */}
      <div
        className="relative w-full h-[420px] flex items-end justify-center overflow-hidden cursor-pointer transition-colors duration-[1600ms]"
        style={{
          background: `linear-gradient(to bottom, #ffffff 0%, ${theme.glowA}14 45%, ${theme.glowB}22 100%)`,
        }}
        onMouseEnter={() => setIsGraphHovered(true)}
        onMouseLeave={() => setIsGraphHovered(false)}
      >
        <motion.div
          className="absolute bottom-[-10px] w-[500px] h-[220px] rounded-full blur-[100px] mix-blend-multiply pointer-events-none"
          animate={{ backgroundColor: theme.core[1] }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          style={{ opacity: 0.28 }}
        />
        <motion.div
          className="absolute bottom-[-40px] w-[650px] h-[300px] rounded-full blur-[120px] pointer-events-none"
          animate={{ backgroundColor: theme.glowA }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          style={{ opacity: 0.22 }}
        />

        <svg
          className="w-full max-w-5xl h-[360px] z-10 overflow-visible"
          viewBox="0 0 1000 360"
          fill="none"
        >
          <g transform="translate(500, 360)">
            {spikeData.map(({ angle, lengthFactor }, index) => {
              const startRadius = 15;
              const x1 = Math.cos(angle) * startRadius;
              const y1 = Math.sin(angle) * startRadius;

              const targetLength = isGraphHovered ? lengthFactor * 1.25 : lengthFactor;
              const x2 = Math.cos(angle) * targetLength;
              const y2 = Math.sin(angle) * targetLength;

              const isAccentColor = index % 3 === 0;
              const strokeWidth = index % 5 === 0 ? 1.5 : 0.8;

              return (
                <g key={index}>
                  <motion.line
                    initial={{ x2: x1, y2: y1 }}
                    animate={{
                      x2,
                      y2,
                      stroke: isAccentColor ? theme.node : theme.ray,
                    }}
                    transition={{
                      x2: {
                        type: "spring",
                        stiffness: isGraphHovered ? 90 : 120,
                        damping: 18,
                        mass: 0.6,
                        delay: (index % 8) * 0.004,
                      },
                      y2: {
                        type: "spring",
                        stiffness: isGraphHovered ? 90 : 120,
                        damping: 18,
                        mass: 0.6,
                        delay: (index % 8) * 0.004,
                      },
                      stroke: { duration: 1.6, ease: "easeInOut" },
                    }}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    opacity={index % 2 === 0 ? 0.75 : 0.9}
                  />

                  {index % 2 === 0 && (
                    <motion.circle
                      initial={{ cx: x1, cy: y1 }}
                      animate={{
                        cx: x2,
                        cy: y2,
                        fill: isAccentColor ? theme.node : theme.ray,
                      }}
                      transition={{
                        cx: {
                          type: "spring",
                          stiffness: isGraphHovered ? 90 : 120,
                          damping: 18,
                          mass: 0.6,
                          delay: (index % 8) * 0.004,
                        },
                        cy: {
                          type: "spring",
                          stiffness: isGraphHovered ? 90 : 120,
                          damping: 18,
                          mass: 0.6,
                          delay: (index % 8) * 0.004,
                        },
                        fill: { duration: 1.6, ease: "easeInOut" },
                      }}
                      r={index % 6 === 0 ? 2.5 : 1.5}
                      opacity={0.95}
                    />
                  )}
                </g>
              );
            })}

            <motion.circle
              cx="0"
              cy="0"
              animate={{ r: isGraphHovered ? 40 : 32 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              fill="url(#core-gradient)"
            />
          </g>

          <defs>
            <radialGradient id="core-gradient" cx="50%" cy="50%" r="50%">
              <motion.stop
                offset="0%"
                animate={{ stopColor: theme.core[0] }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                stopOpacity={1}
              />
              <motion.stop
                offset="60%"
                animate={{ stopColor: theme.core[1] }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                stopOpacity={0.8}
              />
              <motion.stop
                offset="100%"
                animate={{ stopColor: theme.core[2] }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                stopOpacity={0}
              />
            </radialGradient>
          </defs>
        </svg>

        {/* =====================================================
            Direct sun-phase switcher — always-visible row of dots,
            one per theme, replaces the old gear+dropdown menu
           ===================================================== */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-4">
          {themes.map((t, i) => {
            const isActiveTheme = themeIndex === i;
            return (
              <button
                key={t.name}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setThemeIndex(i);
                  restartAutoCycle();
                }}
                aria-label={`Switch to ${t.name} theme`}
                className="group relative flex flex-col items-center"
              >
                {/* Tooltip label */}
                <span
                  className={`absolute -top-7 whitespace-nowrap text-[10px] font-semibold text-slate-500 bg-white/90 border border-slate-100 rounded-full px-2 py-0.5 shadow-sm transition-opacity duration-200 ${
                    isActiveTheme ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {t.name}
                </span>

                <motion.span
                  className="block rounded-full shadow-md ring-1 ring-black/5"
                  animate={{
                    width: isActiveTheme ? 14 : 9,
                    height: isActiveTheme ? 14 : 9,
                    opacity: isActiveTheme ? 1 : 0.55,
                  }}
                  whileHover={{ opacity: 0.9, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    background: `radial-gradient(circle at 35% 30%, ${t.core[0]}, ${t.core[1]} 55%, ${t.core[2]})`,
                    boxShadow: isActiveTheme ? `0 0 0 3px rgba(255,255,255,0.9), 0 0 12px ${t.glowA}` : "none",
                  }}
                />
              </button>
            );
          })}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-slate-200/80 z-20" />
      </div>
    </div>
  );
}
