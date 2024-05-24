import React from 'react';
import {AiFillFacebook, AiFillInstagram} from "react-icons/ai";
import {FaXTwitter , FaInstagram,FaFacebookF,FaTiktok} from "react-icons/fa6";
import {Link} from "react-router-dom";


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
        <div id={"footer"} className="w-full h-auto flex flex-col items-center justify-center py-10">
            <div className="w-full max-w-xl h-auto flex flex-col justify-center items-center gap-10  py-10">
                <h1 className="font-black text-5xl sm:text-6xl md:text-8xl font-serif">SPEX</h1>
                <ul className="flex gap-5 sm:gap-10 flex-wrap justify-center">
                    {social.map((social) => (
                        <Link key={social.link} to={social.link}>
                            <li className="text-xl sm:text-2xl text-gray-700">{social.steps}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div
                className="w-full max-w-6xl flex flex-col items-center sm:flex-row justify-between py-5 mt-10 sm:mt-36 border-t  px-2">
                <div className="flex items-center font-semibold text-sm sm:text-lg font-serif">
                    <p>Spex &copy; {currentYear}, All Rights Reserved.</p>
                </div>
                <div className="flex items-center mt-5 sm:mt-0">
                    <ul className="flex items-center text-sm gap-5 sm:gap-10 text-slate-600 font-semibold font-serif">
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