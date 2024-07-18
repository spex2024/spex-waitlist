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
            link:'https://www.instagram.com/spex_africa?igsh=MWE4bDkzaXQzZ2w2cA',
            target:'_blank'

        },
        {
            id: 'FB',
            name:"facebook",
            steps: <FaFacebookF/>,
            link:'https://www.facebook.com/share/rwdLMHF8Hr14Bq4p/?mibextid=qi2Omg',
            target:'_blank'

        },
        {
            id: 'X',
            name:"X",
            steps: <FaXTwitter  />,
            link:'https://x.com/Spex_Africa?t=b3TmU_Xdfnt8WFdV8yWBdQ&s=09',
            target:'_blank'

        },  {
            id: 'X',
            name:"linkedin",
            steps: <FaLinkedin />,
            link:'https://www.linkedin.com/company/spexafricapp/',
            target:'_blank'

        },



    ];
    return (
        <div id={"footer"} className="w-full h-full flex flex-col items-center justify-center py-10  text-black font-myriad bg-cover bg-center"



        >
            <div className="w-full h-auto flex flex-col justify-center items-center   py-5">
               <img src={bgImage} className={`lg:h-52 lg:w-52`}/>
                <ul className="flex gap-5  flex-wrap justify-center">
                    {social.map((social) => (
                        <Link key={social.link} to={social.link} target={social.target}>
                            <li className="text-md text-white bg-[#252526] p-2 rounded-full hover:bg-[#71bc44] hover:text-black  hover: transition-colors 3s">{social.steps}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div
                className="w-full text-sm font-myriad flex flex-col items-center justify-center  mt-10 sm:mt-36 border-t border-t-gray-300 px-5  lg:px-20  h-52 lg:h-auto">
                <div className="flex lg:flex-row flex-col items-center font-light lg:text-md font-serif mt-5 gap-4">
                    <p>Spex &copy; {currentYear}, All Rights Reserved.</p>

                        <p>Implemented by  <Link to={'https://dercolbags.com'} className={`font-bold `} target={'_blank'}>
                            Dercolbags
                        </Link></p>


                </div>
                <div className="flex items-center ">
                    <ul className="flex items-center text-sm mt-5  gap-5 text-[#252526] font-light ">
                        <Link to={'/login'} target={'_blank'}>
                            <li className="list-none">Dashboard</li>
                        </Link>
                        <Link to={'/'} target={'_blank'}>
                            <li className="list-none">Terms</li>
                        </Link>
                        <Link to={'/'}  target={'_blank'}>
                            <li className="list-none">Policy</li>
                        </Link>
                        <Link to={'/'} target={'_blank'}>
                            <li className="list-none">Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Footer;