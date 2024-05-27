import React from 'react';
import { Link } from "react-router-dom";
import spex from "../assets/spex-logo.png";
import WaitlistForm from "./WaitlistForm.jsx";
import { AiOutlineLogin } from "react-icons/ai";
import spexbg from "../assets/pack.jpg";
import { RiScrollToBottomLine } from "react-icons/ri";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

function Hero(props) {
    return (
        <div className="w-full flex flex-col lg:justify-between justify-around lg:text-start min-h-screen px-4 lg:px-5  py-5 overflow-hidden bg-cover bg-center  font-nunito" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundImage: `url(${spexbg})`,
            backgroundBlendMode: 'multiply'
        }}
             data-aos="fade-zoom-in"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center"
        >
            <header className="w-full flex items-center lg:justify-between justify-center h-[80px] px-10 ">
                <div className={` h-80 w-80  lg:h-44 lg:w-44`}>
                    <img src={spex} />
                </div>
                <ul className="lg:flex text-md hidden items-center justify-center gap-4 lg:gap-10 text-white lowercase  ">
                    <li><a href="#about">About Spex</a></li>
                    <li><a href="#cta">Get in Touch</a></li>
                    <Link to={'/login'}><li className={`flex gap-2 py-2 px-5 border items-center justify-center text-white`}>login <AiOutlineLogin /></li></Link>
                </ul>
            </header>
            <section className="w-full flex flex-col lg:flex-row justify-between h-[400px] lg:h-[300px] rounded-2xl bg-cover lg:px-20 gap-3 lg:mb-20 " >

                <div className={`lg:w-[80%]`}>

                    <div
                        className="w-[150px] h-[30px] flex lowercase font-semi-bold items-center lg:items-center justify-center text-white  bg-[#57ba46] rounded-full gap-3 text-blacke text-md font-nunito font-md mb-3">
                        <span>Eat</span>
                        <span>Swap</span>
                        <span>Reuse</span>
                    </div>
                    <div className={`w-full lg:w-[60%] text-white lg:pe-10 space-y-4 mb-5`}>

                        <h1 className={`font-extra-bold  text-2xl lg:text-7xl md:5xl capitalize font-sora`}>smart pack exchange</h1>
                        <p className={`text-lg font-nunito font-thin pe-10 `}>SPEX is a packaging solution that leverages web to connect
                            restaurants / vendors to users seeking sustainable packaging.</p>
                    </div>
                    <WaitlistForm color={`outline-white`} text={`text-white`} style={{ width: "100%" }} />

                </div>
                <div className={`lg:w-[20%] flex flex-col items-center justify-end`}>
                    <p className={`text-white text-lg font-thin font-nunito`}>scroll down</p>
                    <RiScrollToBottomLine size={30} className={`text-white animate-pulse mt-5`} />
                </div>

            </section>
        </div>
    );
}

export default Hero;
