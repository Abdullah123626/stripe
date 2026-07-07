import FlexibleSolution from "@/src/component/landing/flexible-solutions";
import HeroSection from "@/src/component/landing/hero-section";
import HertzShowcase from "@/src/component/landing/hertz-showcase";
import StripeBackboneGrid from "@/src/component/landing/stripe-backbone";
import StripeBook from "@/src/component/landing/stripe-book";
import StripeClone from "@/src/component/landing/footer";
import StripeExpertSection from "@/src/component/landing/stripe-expert";
import PremiumFeatureGrid from "@/src/component/landing/stripe-feature";
import StripeIntegrated from "@/src/component/landing/stripe-integerated";
import StripeLanding from "@/src/component/landing/stripe-lannding";
import StripePlatformGrid from "@/src/component/landing/stripe-platform";
import StripeResponsiveHero from "@/src/component/landing/stripe-section";
import StripePerfectResponsive from "@/src/component/landing/stripe-section";
import StripeSection from "@/src/component/landing/stripe-section";
import StripeStartupSection from "@/src/component/landing/stripe-startup";
import Navbar from "@/src/layout/navbar";
import Footer from "@/src/component/landing/footer";
import { GlobeCdn } from "@/src/component/landing/checking";
export default function Home() {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto border-y border-gray-200/80 sm:border-x sm:rounded-2xl overflow-hidden py-6 sm:py-10 md:py-14 flex flex-col items-center gap-6 md:gap-8 bg-white px-4 sm:px-8">
        {" "}
        {/* 1st nav bar  */}
        <Navbar />
        {/*2nd  hero section */}
        <HeroSection />
        {/*3rd floexible solution */}
        <FlexibleSolution />
        {/* 4th premium feature */}
        <PremiumFeatureGrid />
        {/*5th stripe plateform */}
        <StripePlatformGrid />
        {/*6th stripe backbone */}
        <StripeBackboneGrid />
        {/* text */}
        <div className="w-full flex justify-start px-5 sm:px-8 md:px-10 lg:px-12 mt-5 sm:mt-6">
          <p className="text-[#6B7280] text-[17px] sm:text-[20px] lg:text-[24px] leading-7 sm:leading-8 max-w-full lg:max-w-[700px]">
            <span className="font-semibold text-slate-800">
              Powering businesses of all sizes.{" "}
            </span>
            <span className="font-medium">
              Run your business on a reliable platform that adapts to your
              needs.
            </span>
          </p>
        </div>
        {/*7th hertzshow case  */}
        <HertzShowcase />
        {/*8th stripe expect section */}
        <StripeExpertSection />
        {/*9th stripe startup section  */}
        <StripeStartupSection />
        {/*10th stripe lannding */}
        <StripeLanding />
        {/*11th stripe integerated  */}
        <StripeIntegrated />
        {/*12th stripe book component  */}
        <StripeBook />
        {/* stripe clone  */}
        <Footer />
<GlobeCdn/>
        
      </div>
    </div>
  );
}
