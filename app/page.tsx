import FlexibleSolution from "@/src/component/landing/flexible-solutions";
import HeroSection from "@/src/component/landing/hero-section";
import StripeBackboneGrid from "@/src/component/landing/stripe-backbone";
import PremiumFeatureGrid from "@/src/component/landing/stripe-feature";
import StripePlatformGrid from "@/src/component/landing/stripe-platform";
import Navbar from "@/src/layout/navbar";
export default function Home() {
  return (
    <div >
      <div className="max-w-[95%] mx-auto border-t border-b border-t-[#E5E7EB] border-b-[#E5E7EB] border-l border-l-[#E5E7EB] border-r border-r-[#E5E7EB] rounded-xl overflow-hidden  py-6 flex flex-col items-center gap-6"> 
          <Navbar />
          <HeroSection />
          <FlexibleSolution/>
          <PremiumFeatureGrid/>
          <StripePlatformGrid/>
          <StripeBackboneGrid/>
      </div>
    </div>
  );
}