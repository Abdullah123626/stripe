import FlexibleSolution from "@/src/component/landing/flexible-solutions";
import HeroSection from "@/src/component/landing/hero-section";
import HertzShowcase from "@/src/component/landing/hertz-showcase";
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
         {/* <StripePlatformGrid/>
          <StripeBackboneGrid/> */}

          {/* <div className="w-full text-left flex justify-start ml-10 mt-5">
        <p className="text-[#6B7280] text-[24px] leading-7 max-w-[700px]">
          <span className="font-[600] text-slate-800">
            Powering businesses of all sizes.{" "}
          </span>
          <span className="font-[500] ">
          Run your business on a reliable platform that adapts to your needs.
          </span>
        </p>
      </div>

         < div className="w-full h-[1px] bg-[#E5E7EB] mt-8">
          </div> */}

 {/* hertzshow case 
      <HertzShowcase/> */}

      </div>

     
    </div>
  );
}