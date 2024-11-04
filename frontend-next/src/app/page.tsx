import Image from "next/image";
import Hero from "./ui-comps/hero";
import SmartPackExchangeSection from "./ui-comps/about";
import Problem from "./ui-comps/problem";
import Solution from "./ui-comps/solution";
import ApproachSection from "./ui-comps/approach";
import Plans from "./ui-comps/plans";
import CTA from "@/app/ui-comps/cta";
import Pilot from "@/app/ui-comps/pilot";
import Partners from "@/app/ui-comps/Partners";
import Vendor from "@/app/ui-comps/form";
import Footer from "@/app/ui-comps/footer";

export default function Home() {
  return (
    <div className=" w-full grid grid-cols-1 items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)] ">

       <Hero/>
        <SmartPackExchangeSection/>
        <Problem/>
        <Solution/>
        <ApproachSection/>
        <Plans/>
        <CTA/>
        <Pilot/>
        <Partners/>
        <Vendor/>
        <Footer/>
    </div>
  );
}
