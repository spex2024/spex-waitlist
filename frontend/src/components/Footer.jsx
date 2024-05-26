import React from 'react';

import {FaXTwitter , FaInstagram,FaFacebookF,FaTiktok} from "react-icons/fa6";
import {Link} from "react-router-dom";
import bgImage from "../assets/spex-logo.webp";


// import spex from '../assets/spex-logo.webp'
function Footer(props) {
    const currentYear = new Date().getFullYear();
    const social = [
        {
            id: 'IG',
            name:"instagram",
            steps: <FaInstagram />,
            link:'/'

        },
        {
            id: 'FB',
            name:"facebook",
            steps: <FaFacebookF/>,
            link:'/'

        },
        {
            id: 'X',
            name:"X",
            steps: <FaXTwitter  />,
            link:'/'

        },  {
            id: 'X',
            name:"TikTok",
            steps: <FaTiktok />,
            link:'/'

        },



    ];
    return (
        <div id={"footer"} className="w-full h-auto flex flex-col items-center justify-center py-16  text-black font-nunito bg-cover bg-center"   >
            <div className="w-full max-w-xl h-auto flex flex-col justify-center items-center gap-10  py-10">
               <img src={bgImage} width={200}/>
                <ul className="flex gap-5  flex-wrap justify-center">
                    {social.map((social) => (
                        <Link key={social.link} to={social.link}>
                            <li className="text-lg text-white bg-[#252526] p-2 rounded-full">{social.steps}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div
                className="w-full max-w-6xl flex flex-col items-center sm:flex-row justify-between py-5 mt-10 sm:mt-36 border-t border-t-[#252526]  px-2">
                <div className="flex items-center font-semibold text-sm sm:text-lg font-serif">
                    <p>Spex &copy; {currentYear}, All Rights Reserved.</p>
                </div>
                <div className="flex items-center mt-5 sm:mt-0">
                    <ul className="flex items-center text-sm gap-5 sm:gap-10 text-[#252526] font-semibold ">
                        <Link to={'/login'}>
                            <li className="list-none">Dashboard</li>
                        </Link>
                        <Link to={'/'}>
                            <li className="list-none">Terms</li>
                        </Link>
                        <Link to={'/'}>
                            <li className="list-none">Policy</li>
                        </Link>
                        <Link to={'/'}>
                            <li className="list-none">Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Footer;