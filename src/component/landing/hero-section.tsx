"use client";

import { useEffect, useRef } from "react";

/* ─── Logo data (doubled for seamless infinite scroll) ─── */
const LOGOS = [
  {
    name: "amazon",
    el: (
      <svg viewBox="0 0 110 36" width="88" height="28" fill="none">
        <text x="0" y="25" fontSize="23" fontWeight="700" fill="#221F1F" fontFamily="Arial,sans-serif">amazon</text>
        <path d="M6 31 Q50 40 96 31" stroke="#FF9900" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "nvidia",
    el: (
      <svg viewBox="0 0 100 30" width="86" height="26">
        <rect x="0" y="3" width="20" height="20" fill="#76b900" rx="2"/>
        <rect x="5" y="8" width="10" height="10" fill="white" rx="1"/>
        <text x="26" y="22" fontSize="13" fontWeight="800" fill="#221F1F" fontFamily="Arial,sans-serif" letterSpacing="0.5">NVIDIA</text>
      </svg>
    ),
  },
  {
    name: "ford",
    el: (
      <svg viewBox="0 0 80 40" width="68" height="34">
        <ellipse cx="40" cy="20" rx="37" ry="17" fill="#003478"/>
        <text x="40" y="26" textAnchor="middle" fontSize="17" fontWeight="700" fill="white" fontFamily="Georgia,serif" fontStyle="italic">Ford</text>
      </svg>
    ),
  },
  {
    name: "coinbase",
    el: (
      <svg viewBox="0 0 120 30" width="96" height="28">
        <circle cx="14" cy="15" r="13" fill="#0052FF"/>
        <rect x="8.5" y="9.5" width="11" height="11" rx="5.5" fill="white"/>
        <text x="32" y="22" fontSize="15" fontWeight="600" fill="#1e2022" fontFamily="Arial,sans-serif">coinbase</text>
      </svg>
    ),
  },
  {
    name: "google",
    el: (
      <svg viewBox="0 0 88 30" width="74" height="28">
        <text x="0" y="24" fontSize="22" fontWeight="400" fontFamily="Arial,sans-serif">
          <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "shopify",
    el: (
      <svg viewBox="0 0 106 30" width="86" height="28">
        <circle cx="12" cy="14" r="11" fill="#96BF48"/>
        <rect x="8" y="8" width="8" height="12" rx="4" fill="white"/>
        <text x="28" y="22" fontSize="15" fontWeight="600" fill="#222" fontFamily="Arial,sans-serif">shopify</text>
      </svg>
    ),
  },
  {
    name: "mindbody",
    el: (
      <svg viewBox="0 0 106 30" width="86" height="28">
        <text x="0" y="22" fontSize="14.5" fontWeight="500" fill="#222" fontFamily="Arial,sans-serif">mindbody</text>
      </svg>
    ),
  },
];

/* ─── Infinite Logo Ticker ───────────────────────────────── */
function LogoTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef   = useRef(0);
  const rafRef   = useRef<number>(0);
  const pausedRef = useRef(false);
  const SPEED = 0.45;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current -= SPEED;
        const half = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= half) posRef.current = 0;
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
  <div
  className="relative z-30 w-full overflow-hidden border-t border-[#e9eaec] 
             mt-6 md:mt-12 lg:mt-30 
             px-4 sm:px-6 md:px-8 
             h-auto min-h-[10vh] md:h-[13vh]"
  onMouseEnter={() => { pausedRef.current = true; }}
  onMouseLeave={() => { pausedRef.current = false; }}
>
      <div className="flex h-full items-center" ref={trackRef} style={{ willChange: "transform", width: "max-content" }}>
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex items-center justify-center px-10 h-full hover:opacity-90 transition-opacity duration-200 flex-shrink-0"
          >
            {logo.el}
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-screen h-px bg-[#e9eaec]" />
    </div>
  );
}

/* ─── Floating Wave Image with canvas shimmer ────────────── */
function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef   = useRef<HTMLDivElement>(null);

  /* 1. New Dynamic Floating + Breathing Scale Animation Loop for Image */
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let raf: number;
    let t = 0;

    const animate = () => {
      const y = Math.sin(t * 0.0008) * 20; 
      const x = Math.cos(t * 0.0005) * 12; 
      const scale = 1 + Math.sin(t * 0.0006) * 0.025; 
      const rotate = Math.cos(t * 0.0004) * 1.5; 

      wrap.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotate}deg)`;
      t++;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* 2. Complementary Parallax Floating Loop for Canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let raf: number;
    let t = 0;

    const animateCanvasMovement = () => {
      const y = Math.cos(t * 0.0009) * -15; 
      const x = Math.sin(t * 0.0007) * -10;
      const scale = 1 + Math.cos(t * 0.0005) * 0.015; 
      
      canvas.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      t++;
      raf = requestAnimationFrame(animateCanvasMovement);
    };
    raf = requestAnimationFrame(animateCanvasMovement);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* 3. SET CANVAS PORTION: Non-stop Continuous Shimmer Physics Loop */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    let t = 0;

    const resize = () => {
      const width = canvas.offsetWidth || window.innerWidth * 0.68;
      const height = canvas.offsetHeight || window.innerHeight;
      
      canvas.width  = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    resize();
    window.addEventListener("resize", resize);

    const blobs = [
      { cx: 0.55, cy: 0.20, rx: 0.35, ry: 0.20, color: "rgba(255,255,255,0.12)", sp: 0.0006 },
      { cx: 0.80, cy: 0.50, rx: 0.28, ry: 0.16, color: "rgba(255,255,255,0.09)", sp: -0.0008 },
      { cx: 0.65, cy: 0.75, rx: 0.30, ry: 0.18, color: "rgba(255,220,160,0.08)", sp: 0.0004 },
      { cx: 0.90, cy: 0.30, rx: 0.22, ry: 0.14, color: "rgba(200,180,255,0.09)", sp: 0.0010 },
    ];

    const draw = () => {
      const W = canvas.offsetWidth || window.innerWidth * 0.68;
      const H = canvas.offsetHeight || window.innerHeight;
      
      // Infinite clean frame refresh
      ctx.clearRect(0, 0, W, H);
      
      blobs.forEach((b, i) => {
        const angle = t * b.sp + i * 1.3;
        const cx = (b.cx + Math.sin(angle) * 0.035) * W;
        const cy = (b.cy + Math.cos(angle) * 0.035) * H;
        
        ctx.save();
        ctx.translate(cx, cy);
        
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, b.rx * W);
        g.addColorStop(0, b.color);
        g.addColorStop(1, "rgba(255,255,255,0)");
        
        ctx.beginPath();
        ctx.ellipse(0, 0, b.rx * W, b.ry * H, angle * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
      });

      // Unlimited loop recursion state tracking
      t++;
      raf = requestAnimationFrame(draw);
    };
    
    // Smooth initial rendering trigger
    raf = requestAnimationFrame(draw);
    
    return () => { 
      cancelAnimationFrame(raf); 
      window.removeEventListener("resize", resize); 
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Wave Image Component Wrapper */}
      <div
        ref={wrapRef}
        className="absolute transition-transform duration-500 ease-out"
        style={{
          top: "20px",
          right: "-130px",
          width: "78%",
          height: "calc(100% + 180px)",
          willChange: "transform",
        }}
      >
        <img
          src="https://images.stripeassets.com/fzn2n1nzq965/115d4Vd5LVAsqFGDR1ClAv/0ceb2c44a7a7182cd624262420af7544/wave-fallback-desktop.png?w=1392&fm=webp&q=60"
          alt=""
          aria-hidden="true"
          className="w-full h-[85vh] object-cover object-left select-none relative z-20"
          draggable={false}
        />
      </div>

      {/* Canvas element with sync animation */}
      <canvas
        ref={canvasRef}
        className="absolute transition-transform duration-500 ease-out pointer-events-none z-20"
        style={{
          top: "-5px",
          right: "-40px",
          width: "70%",
          height: "100%",
          willChange: "transform"
        }}
      />
    </div>
  );
}

/* ─── Main Hero Section ──────────────────────────────────── */
export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      
      <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* Background Image + Floating Shimmer Canvas */}
        <WaveBackground />

        {/* Content */}
        <div className="relative z-20 w-full max-w-[1250px] mx-auto px-8 lg:px-20"
          style={{ paddingTop: "clamp(100px, 14vh, 160px)", paddingBottom: "60px" }}
        >
          {/* GDP Ticker */}
          <p className="flex items-center gap-2  text-[13px] leading-none mb-5">
            <span className="text-black font-normal">Global GDP running on Stripe:</span>
            <span className="text-[#8898aa] font-bold tabular-nums tracking-tight">1.66946844%</span>
          </p>

          {/* Headline */}
          <h1
            className="font-bold leading-[1.1] tracking-[-0.025em] text-[#0a2540] mb-1 whitespace-nowrap"
            style={{ fontSize: "clamp(28px, 2.7vw, 52px)" }}
          >
            Financial infrastructure to grow{" "}
            <span className="text-[#635bff]">your revenue.</span>
          </h1>

          {/* Description */}
          <p className="text-[25px] leading-[1.7] text-[#425466] mb-10 font-normal max-w-[800px]">
            Accept payments, offer financial services, and implement custom revenue models-from your first transaction to your billionth.
            Accept payments, offer financial services, and implement custom revenue.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-[13px] bg-[#635bff] text-white text-[12px] font-semibold rounded-[4px] no-underline transition-all duration-200 hover:bg-[#4f46e5] hover:-translate-y-[2px] active:translate-y-0 shadow-[0_4px_16px_rgba(99,91,255,0.38)] hover:shadow-[0_8px_24px_rgba(99,91,255,0.48)]"
            >
              Get started
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-[9px] px-5 py-[12px] bg-white/90 text-[#635bff] font-[600] text-[13px] rounded-[4px] border border-[#635bff] no-underline transition-all duration-200 hover:border-[#bbc0cc] hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:-translate-y-[1px] active:translate-y-0"
            >
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#0364ff"/>
                <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.02-3.7H.96v2.34A9 9 0 0 0 9 18z" fill="#34A853"/>
                <path d="M3.98 10.72A5.41 5.41 0 0 1 3.7 9c0-.6.1-1.17.28-1.72V4.94H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.06l3.02-2.34z" fill="#FBBC05"/>
                <path d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.94L3.98 7.28C4.68 5.16 6.66 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Sign up with Google
            </a>
          </div>
        </div>

        {/* Logo Ticker Wrapper */}
        <div className="relative z-20 mt-auto right-22 w-full max-w-[1180px] mx-auto h-[82px] ">
          <LogoTicker />
        </div>

      </section>
    </div>
  );
}