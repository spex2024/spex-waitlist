import React, {useContext, useEffect, useState} from 'react';
// import { UserContext } from "../context/User";
import { RiArrowDropDownLine } from "react-icons/ri";
import Fetch from "../hooks/Fetch.jsx";
import {FaPowerOff} from "react-icons/fa";

function Logout({  username , role}) {
    const [isOpen, setIsOpen] = useState(false);


    const {logout } = Fetch()
    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Toggle dropdown visibility
    };



    return (
        <div>
            <div className="relative font-[sans-serif] w-max mx-auto" onClick={toggleDropdown}>
                <button type="button"
                        className="px-6 py-2 flex items-center rounded-full text-[#333] text-sm font-semibold border-2 border-gray-300 outline-none hover:bg-gray-100">
                    <img src="https://readymadeui.com/profile_6.webp"
                         className="w-7 h-7 mr-2 rounded-full shrink-0"></img>
                    {/*{role}*/}
                    <RiArrowDropDownLine size={30} />
                </button>
                {isOpen && (
                    <ul className='absolute flex flex-col items-center justify-center  gap-3 shadow-lg bg-white py-2 z-[1000]  w-[150px] rounded-lg h-[200px] overflow-auto'>
                        <li className='w-full py-2.5 px-6  flex items-center justify-center hover:bg-gray-100 text-[#333] text-md cursor-pointer'
                              >
                            {username}
                        </li>
                        <li className='w-full  py-2.5 px-6 flex items-center justify-center hover:bg-gray-100 text-[#333] text-md cursor-pointer'
                              >
                            {role}
                        </li>
                        <li className='w-[80%] h-[2%] bg-green-700 rounded text-white py-4 px-6  flex items-center justify-center gap-2 hover:bg-black  text-md cursor-pointer'
                              onClick={logout}>
                            <FaPowerOff />
                            Logout
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Logout;
