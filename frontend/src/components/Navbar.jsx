import React, {useContext} from 'react';
import {UserContext} from "../context/userContext.jsx";
import {Link} from "react-router-dom";
import spex from "../assets/spex-logo.png";
import Drawer from "./Drawer.jsx";


function Navbar(props) {



    return (
        <>


            <header
                className=" font-myriad fixed w-full lg:flex items-center lg:justify-between justify-center h-[80px] py-5 px-16  border-b shadow-sm bg-white z-10 hidden font-light ">

                <img src={spex} className={`lg:h-32 lg:w-32`}/>

                <ul className="lg:flex text-lg font-light hidden items-center justify-center gap-4 lg:gap-10 text-black lowercase  ">
                    <li><a href="#about">About Spex</a></li>
                    <li><a href="#cta">Get in Touch</a></li>
                    {/*<Link to={'/login'}>*/}
                    {/*    <li className={`flex gap-2 py-2 px-5 border items-center justify-center text-black`}>login <AiOutlineLogin/>*/}
                    {/*    </li>*/}
                    {/*</Link>*/}
                </ul>
                <Drawer/>
            </header>


        </>

    );
}

export default Navbar;