import React from 'react';
import { Link } from "react-router-dom";
import spex from "../assets/spex-logo.png";

import { AiOutlineLogin } from "react-icons/ai";
import spexbg from "../assets/office-1.jpg";
import { RiScrollToBottomLine } from "react-icons/ri";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Video from "./Video.jsx";
import HoverCard from "./HoverCard.jsx";
import Drawer from "./Drawer.jsx";


AOS.init();

function Hero(props) {
    return (
        <div
            className="w-full  lg:gap-3 flex flex-col lg:justify-center justify-around lg:text-start min-h-screen   py-10 lg:py-10 overflow-hidden bg-cover bg-center  font-myriad"

            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >

            <section className="w-full flex flex-col  h-[70vh]  items-center justify-center lg:px-10 gap-5 lg:mt-10   ">


                <img src={spex} width={250} className={`lg:hidden`}/>
                <div
                    className={`w-full text-black flex flex-col justify-center items-center space-y-5 mb-5 font-semi-bold lg:px-20 `}>

                    <h1 className={`font-black  text-4xl lg:text-8xl md:8xl capitalize font-myriad text-center `}>Corporate
                        Meal in <br/> Reusable Packs
                    </h1>
                    <p className={`text:xl lg:text-2xl font-semibold text-center `}>SPEX simplifies meal planning for your <span className={`font-black lg:text-3xl text-2xl uppercase`}>team</span> . <br/>Saves you time, cost and plastic waste.</p>
                </div>

            </section>
                   <Drawer/>
            {/*<div className={` w-full h-[60vh] lg:h-[90vh] lg:w-[80vw] bg-black mx-auto rounded-3xl flex flex-col justify-center items-center bg-cover bg-center`} >style={{*/}
            {/*    backgroundColor: 'rgba(0, 0, 0, 0.7)',*/}
            {/*    backgroundImage: `url(${spexbg})`,*/}
            {/*    backgroundBlendMode: 'multiply'*/}
            {/*}}*/}


            {/*</div>*/}

            <HoverCard/>

            <div className={`lg:w-full flex flex-col items-center justify-center`}>
                <p className={`text-white text-lg font-thin font-nunito`}>scroll down</p>

                    <a href="#about">

                    <RiScrollToBottomLine size={30} className={`text-black animate-pulse mt-5`}/>
                    </a>
            </div>

        </div>
    );
}

export default Hero;
