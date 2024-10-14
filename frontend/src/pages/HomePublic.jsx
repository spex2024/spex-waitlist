import React from 'react';
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Cta from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";
import Partner from "../components/Partner.jsx";
import Pilot from "../components/Pilot.jsx";
import ApproachSection from "../components/OurApproach.jsx";
import {Toaster} from "react-hot-toast";
import Action from "../components/Action.jsx";
import Plans from "@/components/Plans.jsx";



function HomePublic(props) {
    return (
        <div className={'min-h-screen max-w-full bg-center bg-cover ' }   >
          <Hero/>
            <About />
            <ApproachSection />
            <Plans/>
            <Cta />
            <Pilot />
            <Partner />
            <Action />
            <Footer />
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    );
}

export default HomePublic;