import React from 'react';
import Drawer from "./Drawer.jsx";



function Cta(props) {
    return (
        <div id={"cta"} className="w-full flex flex-col lg:gap-5 items-center justify-around  min-h-[600px] py-10 lg:py-20 bg-[#1C2026] font-myriad" >
            <div className="w-full max-w-4xl h-auto flex flex-col items-center text-center px-4 text-white"

            >
                <h1 className="font-black text-2xl sm:text-4xl md:text-6xl mb-5 font-serif text-center font-myriad">Embrace Smart Pack!</h1>
                <p className="font-black text-2xl sm:text-4xl md:text-5xl font-myriad capitalize">Join the Waitlist</p>
            </div>

            <div className="w-full max-w-lg h-[200px] flex flex-col justify-center items-center lg:mt-10 py-3 px-4 "

            >
                <p className="  text-md sm:text-xl md:text-2xl text-center mb-5 font-myriad text-white font-light">
                    Be part of the sustainable food packaging revolution! Together, we can make a difference, one smart pack at a time.
                </p>

              <Drawer/>
            </div>
        </div>
    );
}

export default Cta;
