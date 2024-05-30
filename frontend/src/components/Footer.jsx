import React from 'react';

import {FaXTwitter, FaInstagram, FaFacebookF, FaTiktok, FaLinkedin} from "react-icons/fa6";
import {Link} from "react-router-dom";
import bgImage from "../assets/spex-logo.png";


function Footer(props) {
    const currentYear = new Date().getFullYear();
    const social = [
        {
            id: 'IG',
            name:"instagram",
            steps: <FaInstagram />,
            link:'https://www.instagram.com/spex_africa?igsh=MWE4bDkzaXQzZ2w2cA'

        },
        {
            id: 'FB',
            name:"facebook",
            steps: <FaFacebookF/>,
            link:'https://www.facebook.com/share/rwdLMHF8Hr14Bq4p/?mibextid=qi2Omg'

        },
        {
            id: 'X',
            name:"X",
            steps: <FaXTwitter  />,
            link:'https://x.com/Spex_Africa?t=b3TmU_Xdfnt8WFdV8yWBdQ&s=09'

        },  {
            id: 'X',
            name:"linkedin",
            steps: <FaLinkedin />,
            link:'https://www.linkedin.com/company/spex-africa'

        },



    ];
    return (
        <div id={"footer"} className="w-full h-auto flex flex-col items-center justify-center py-10  text-black font-nunito bg-cover bg-center"

             data-aos="fade-zoom-in"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"

        >
            <div className="w-full max-w-xl h-auto flex flex-col justify-center items-center   py-5">
               <img src={bgImage} className={`lg:h-64 lg:w-64`}/>
                <ul className="flex gap-5  flex-wrap justify-center">
                    {social.map((social) => (
                        <Link key={social.link} to={social.link}>
                            <li className="text-md text-white bg-[#252526] p-2 rounded-full hover:bg-[#71bc44] hover:text-black  hover: transition-colors 3s">{social.steps}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div
                className="w-full max-w-6xl flex flex-col items-center sm:flex-row justify-between  mt-10 sm:mt-36 border-t border-t-gray-300  px-2">
                <div className="flex items-center font-semibold text-sm sm:text-lg font-serif mt-5">
                    <p>Spex &copy; {currentYear}, All Rights Reserved.</p>
                </div>
                <div className="flex items-center ">
                    <ul className="flex items-center text-sm mt-5  gap-5 text-[#252526] font-semibold ">
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