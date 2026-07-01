import FlexibleSolution from "@/src/component/landing/flexible-solutions";
import HeroSection from "@/src/component/landing/hero-section";
import StripeBackboneGrid from "@/src/component/landing/stripe-backbone";
import PremiumFeatureGrid from "@/src/component/landing/stripe-feature";
import StripePlatformGrid from "@/src/component/landing/stripe-platform";
import Navbar from "@/src/layout/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      
      {/* Outer Border Box (Iske andar ka saara data mx-auto ki wajah se center rahega) */}
      <div className="max-w-[95%] mx-auto border-t border-b border-t-[#E5E7EB] border-b-[#E5E7EB] border-l border-l-[#E5E7EB] border-r border-r-[#E5E7EB] rounded-xl overflow-hidden  py-6 flex flex-col items-center gap-6">
        
        {/* Navbar Wrapper (Iski width humne 95% rakhi hai taake thoda gap rahe) */}
   
          <Navbar />
       

        {/* HeroSection Wrapper (Iski width humne 90% rakhi hai, aap ise alag se kam/zyada kar sakte hain) */}
          <HeroSection />
          <FlexibleSolution/>
          <PremiumFeatureGrid/>
          <StripePlatformGrid/>
          <StripeBackboneGrid/>

      </div>

    </div>
  );
}