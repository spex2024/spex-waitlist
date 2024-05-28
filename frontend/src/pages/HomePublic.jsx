import React from 'react';
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Approach from "../components/Approach.jsx";
import Cta from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";
import Partner from "../components/Partner.jsx";


function HomePublic(props) {
    return (
        <div className={'min-h-screen max-w-full bg-center bg-cover ' }   >
          <Hero/>
            <About />
            <Approach />
            <Cta />
            <Partner />
            <Footer />
        </div>
    );
}

export default HomePublic;