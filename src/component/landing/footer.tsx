import React from "react";
import { ArrowRight, DollarSign, Terminal, Globe } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full bg-[#f8fbfd] font-sans text-[#425466] selection:bg-[#635bff]/20">
      {/* 1. CTA SECTION: Ready to get started? */}
      <section className="max-w-[1080px] mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Main heading and CTA buttons */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0a2540] tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-[15px] text-[#425466] max-w-[420px] leading-relaxed">
              Create an account instantly, or contact us to design a custom
              package for your business.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="inline-flex items-center justify-center gap-1 bg-[#635bff] hover:bg-[#0a2540] text-white text-[14px] font-semibold py-[7px] px-4 rounded-full transition-colors duration-200 group">
                Start now
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="inline-flex items-center justify-center border border-[#d9e2ec] hover:border-[#0a2540] bg-white text-[#0a2540] text-[14px] font-semibold py-[7px] px-4 rounded-full transition-colors duration-200">
                Contact sales
              </button>
            </div>
          </div>

          {/* Right side sub-features */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="space-y-2.5">
              <div className="w-6 h-6 border border-[#635bff]/30 rounded flex items-center justify-center text-[#635bff] bg-white shadow-sm">
                <DollarSign className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-[14px] font-bold text-[#0a2540]">
                See what you'll pay
              </h4>
              <p className="text-[13px] text-[#425466] leading-relaxed">
                Integrated per-transaction pricing with no hidden fees.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-0.5 text-[13px] font-semibold text-[#635bff] hover:text-[#0a2540] group"
              >
                Pricing details
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Feature 2 */}
            <div className="space-y-2.5">
              <div className="w-6 h-6 border border-[#635bff]/30 rounded flex items-center justify-center text-[#635bff] bg-white shadow-sm">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-[14px] font-bold text-[#0a2540]">
                Start building
              </h4>
              <p className="text-[13px] text-[#425466] leading-relaxed">
                Get up and running with Stripe in as little as 10 minutes.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-0.5 text-[13px] font-semibold text-[#635bff] hover:text-[#0a2540] group"
              >
                Integration options
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DITTO STRIPE MULTI-COLUMN FOOTER WITH VERTICAL DASHED LINES */}
      <footer className="relative max-w-[1080px] mx-auto px-6 border-t border-[#e3e8ee] pt-16 ">
        {/* Exact Multi-column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 relative">
          {/* Column 1: Products and pricing */}
          <div className="space-y-4 relative z-10 md:pr-4">
            <h5 className="font-bold text-[#0a2540] text-[13px]">
              Products and pricing
            </h5>
            <ul className="space-y-2 text-[13px] text-[#425466]">
              {[
                "Pricing",
                "Atlas",
                "Authorization Boost",
                "Billing",
                "Capital",
                "Capital for platforms",
                "Checkout",
                "Climate",
                "Connect",
                "Crypto",
                "Crypto Onramp",
                "Data Pipeline",
                "Elements",
                "Financial Connections",
                "Global Payouts",
                "Identity",
                "Invoicing",
                "Issuing",
                "Link",
                "Managed Payments",
                "Payment links",
                "Payment methods",
                "Payments",
                "Radar",
                "Revenue Recognition",
                "Stripe Sigma",
                "Subscriptions",
                "Tax",
                "Terminal",
                "Treasury",
                "Treasury for platforms",
                "Usage-based billing",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#0a2540] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Solutions & Developers */}
          <div className="space-y-12 relative z-10 md:px-4">
            <div className="space-y-4">
              <h5 className="font-bold text-[#0a2540] text-[13px]">
                Solutions
              </h5>
              <ul className="space-y-2 text-[13px] text-[#425466]">
                {[
                  "Enterprise",
                  "Startups",
                  "Agentic commerce",
                  "Crypto",
                  "Ecommerce",
                  "Embedded finance",
                  "Finance automation",
                  "Global businesses",
                  "In-app payments",
                  "Marketplaces",
                  "Platforms",
                  "SaaS",
                  "AI companies",
                  "Creator economy",
                  "Hospitality, travel, and leisure",
                  "Insurance",
                  "Media and entertainment",
                  "Nonprofits",
                  "Public sector",
                  "Retail",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#0a2540] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-bold text-[#0a2540] text-[13px]">
                Developers
              </h5>
              <ul className="space-y-2 text-[13px] text-[#425466]">
                {[
                  "Documentation",
                  "API reference",
                  "API status",
                  "API changelog",
                  "Libraries and SDKs",
                  "Developer blog",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#0a2540] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Integrations and custom solutions & Resources */}
          <div className="space-y-12 relative z-10 md:px-4">
            <div className="space-y-4">
              <h5 className="font-bold text-[#0a2540] text-[13px]">
                Integrations and custom solutions
              </h5>
              <ul className="space-y-2 text-[13px] text-[#425466]">
                {[
                  "Stripe App Marketplace",
                  "Stripe Partner ecosystem",
                  "Professional services",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#0a2540] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-bold text-[#0a2540] text-[13px]">
                Resources
              </h5>
              <ul className="space-y-2 text-[13px] text-[#425466]">
                {[
                  "Product roadmap",
                  "Guides",
                  "Customer stories",
                  "Blog",
                  "Community",
                  "Sessions annual conference",
                  "Privacy and terms",
                  "Prohibited and restricted businesses",
                  "Licenses",
                  "Sitemap",
                  "Cookie settings",
                  "Your privacy choices",
                  "More resources",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#0a2540] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Company & Support */}
          <div className="space-y-12 relative z-10 md:pl-4">
            <div className="space-y-4">
              <h5 className="font-bold text-[#0a2540] text-[13px]">Company</h5>
              <ul className="space-y-2 text-[13px] text-[#425466]">
                {["Jobs", "Newsroom", "Stripe Press", "Contact sales"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-[#0a2540] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-bold text-[#0a2540] text-[13px]">Support</h5>
              <ul className="space-y-2 text-[13px] text-[#425466]">
                {[
                  "Get support",
                  "Managed support plans",
                  "CA residents: +1 888 926 2269",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#0a2540] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-0.5 text-[13px] font-semibold text-[#635bff] hover:text-[#0a2540] group"
                >
                  Sign in
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Vertical Dashed Borders Layer (Hidden on Mobile, Visible on Desktop like image) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <div className="w-full h-full grid grid-cols-4">
              <div className="border-r border-dashed border-gray-200/80 h-full" />
              <div className="border-r border-dashed border-gray-200/80 h-full" />
              <div className="border-r border-dashed border-gray-200/80 h-full" />
              <div className="h-full" />
            </div>
          </div>
        </div>

        {/* Bottom copyright & Region Bar */}
        <div className="mt-16 pt-6 border-t border-[#e3e8ee] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-gray-400 font-medium">
          <div className="space-y-1">
            <button className="flex items-center gap-1.5 text-[#635bff] hover:text-[#0a2540] font-semibold transition-colors">
              <Globe className="w-3.5 h-3.5" />
              United States (English)
            </button>
            <p className="pl-5 text-gray-400">© 2026 Stripe, Inc.</p>
          </div>
          {/* Tiny bottom right accent matching image corner asset */}
          <div className="w-8 h-6 bg-[#0a2540] rounded-tl-sm self-end sm:self-auto hidden md:block opacity-90" />
        </div>
      </footer>
    </div>
  );
}
