import React from 'react';
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Approach from "../components/Approach.jsx";
import Cta from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";

function HomePublic(props) {
    return (
        <div className={'min-h-screen max-w-full '}>
          <Hero/>
            <About />
            <Approach />
            <Cta />
            <Footer />
        </div>
    );
}

export default HomePublic;