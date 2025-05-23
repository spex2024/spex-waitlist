import Hero from "@/components/page-ui/hero";
import SmartPackExchangeSection from "@/components/page-ui/about";
import Problem from "@/components/page-ui/problem";
import Solution from "@/components/page-ui/solution";
import ApproachSection from "@/components/page-ui/approach";
import Plans from "@/components/page-ui/plans";
import CTA from "@/components/page-ui/cta";
import Pilot from "@/components/page-ui/pilot";
import Partners from "@/components/page-ui/partners";
import Vendor from "@/components/page-ui/vendor";
import Footer from "@/components/page-ui/footer";
import FAQSection from "@/components/page-ui/faq";
import {Navbar} from "@/components/page-ui/nav";


export default function Home() {
  return (
      <div className=" w-full overflow-x-hidden font-[family-name:var(--font-geist-sans)] ">
        <Navbar />
        <Hero/>
        <SmartPackExchangeSection/>
        <Problem/>
        <Solution/>
        <ApproachSection/>
        <Plans/>
          <FAQSection/>
        <CTA/>
        <Pilot/>
        <Partners/>
        <Vendor/>
        <Footer/>
      </div>
  );
}
