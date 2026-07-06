import React from 'react';
// Note: Make sure to install lucide-react if you haven't already: npm i lucide-react
import { Plus, LayoutGrid, Users, HelpCircle, ArrowRight } from 'lucide-react';

export default function StripeExpertSection() {
  // Accordion data for the top part
  const caseStudies = [
    {
      logo: "URBN", // You can replace this text with an actual SVG logo if needed
      text: "URBN consolidates $5 billion in online and in-store revenue onto Stripe."
    },
    {
      logo: "Instacart",
      text: "Instacart powers online grocery delivery with Stripe."
    },
    {
      logo: "Le Monde",
      text: "Le Monde improves local and international payments with Stripe."
    }
  ];

  // Cards data for the bottom part
  const services = [
    {
      icon: <LayoutGrid className="w-5 h-5 text-indigo-600" />,
      title: "Professional services.",
      description: "Get tailored guidance from Stripe on implementation, complex integrations, or major migrations.",
      linkText: "View services"
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      title: "Stripe-certified experts.",
      description: "Work with a Stripe consulting partner that can integrate and deploy Stripe solutions on your behalf.",
      linkText: "View partners"
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-indigo-600" />,
      title: "Support plans.",
      description: "Receive ongoing assistance and day-to-day support for technical questions with tiered plans based on your needs.",
      linkText: "View plans"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 font-sans bg-white text-[#0a2540]">
      
      {/* Top Section: Case Studies List */}
      <div className="border-t border-dashed border-slate-200 divide-y divide-dashed divide-slate-200 mb-20">
        {caseStudies.map((study, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between py-5 group cursor-pointer hover:bg-slate-50/50 transition-colors px-2 rounded-lg -mx-2"
          >
            <div className="flex items-center gap-4">
              {/* Placeholder for Logo */}
              <div className="w-8 h-8 bg-slate-900 text-white rounded flex items-center justify-center font-bold text-xs tracking-wider">
                {study.logo.substring(0, 2).toUpperCase()}
              </div>
              <p className="text-[17px] font-medium text-[#0a2540] tracking-tight">
                {study.text}
              </p>
            </div>
            
            {/* Plus Button */}
            <div className="w-8 h-8 rounded-md bg-[#edf2f7] flex items-center justify-center text-indigo-600 group-hover:bg-indigo-50 transition-colors">
              <Plus className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section: Heading + Grid Cards */}
      <div>
        <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#0a2540] mb-12">
          Realize value faster with dedicated experts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col justify-between">
              <div>
                {/* Icon Container */}
                <div className="w-9 h-9 border border-slate-200/80 rounded-lg flex items-center justify-center shadow-sm mb-5 bg-white">
                  {item.icon}
                </div>
                
                {/* Text content */}
                <p className="text-[15px] leading-relaxed text-slate-600">
                  <span className="font-semibold text-[#0a2540]">{item.title}</span>{" "}
                  {item.description}
                </p>
              </div>

              {/* Link */}
              <a 
                href="#" 
                className="mt-4 flex items-center gap-1 text-[15px] font-semibold text-indigo-600 hover:text-[#0a2540] transition-colors group"
              >
                {item.linkText}
                <span className="transform translate-x-0 group-hover:translate-x-0.5 transition-transform text-[12px]">
                  ➔
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}