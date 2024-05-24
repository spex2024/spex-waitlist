import React from 'react';
import { Link } from "react-router-dom";
import home from '../assets/home.jpg'
import spex from "../assets/spex-logo.webp";
import WaitlistForm from "./WaitlistForm.jsx";
import {IoGridSharp} from "react-icons/io5";

function Hero(props) {
    return (
        <div className="w-full text-center lg:text-start min-h-screen px-4 sm:px-8 md:px-16 lg:px-36  py-5 overflow-hidden">
            <header className="w-full flex items-center justify-between h-[80px] ">
                <div>
                    <img src={spex}/>
                </div>
                <ul className="lg:flex text-md  hidden items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    <li><a href="#about">About Spex</a></li>
                    <li><a href="#cta">Get in Touch</a></li>
                    <Link to={'/dashboard'}><li className={`flex gap-2 py-2 px-3 bg-green-700 items-center justify-center text-white`}><IoGridSharp />dashboard</li></Link>
                </ul>
            </header>
            <section className="w-full h-auto lg:h-[300px]  grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                <div className="w-full h-full flex flex-col justify-center gap-5 text-center lg:text-start">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Smart Pack Exchange</h1>
                    <div className="w-full flex items-center justify-center lg:justify-start gap-5 text-sm  sm:text-xl">
                        <span>Eat</span>
                        <span>Swap</span>
                        <span>Reuse</span>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center gap-5 px-4 md:px-8 py-5">
                    <p className="font-medium text-base sm:text-lg">SPEX is a packaging solution that leverages web to connect restaurants / vendors to users seeking sustainable packaging.</p>

                <WaitlistForm />
                </div>
            </section>
            <section className="w-full bg-black h-[300px] sm:h-[400px] md:h-[500px] lg:h-[800px] rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${home})`,}} >

            </section>
        </div>
    );
}

export default Hero;
