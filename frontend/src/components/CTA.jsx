import React from 'react';
import WaitlistForm from "./WaitlistForm.jsx";


function Cta(props) {
    return (
        <div id={"cta"} className="w-full flex flex-col lg:gap-5 items-center justify-around  min-h-[600px] py-10 lg:py-20 bg-[#1C2026] font-nunito" >
            <div className="w-full max-w-4xl h-auto flex flex-col items-center text-center px-4 text-white"
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="800"
                 data-aos-easing="ease-in-out"
            >
                <h1 className="font-serif font-bold text-2xl sm:text-3xl mb-3 font-nunito">Waitlist</h1>
                <h1 className="font-bold text-2xl sm:text-4xl md:text-6xl mb-5 font-serif text-center font-sora">Embrace Smart Pack!</h1>
                <p className="font-bold text-2xl sm:text-4xl md:text-5xl font-sora capitalize">Join the Waitlist</p>
            </div>

            <div className="w-full max-w-lg h-[200px] flex flex-col justify-center items-center lg:mt-10 py-5 px-4 "
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
            >
                <p className="  text-md sm:text-xl md:text-2xl text-center mb-5 font-nunito text-white">
                    Be part of the sustainable food packaging revolution! Together, we can make a difference, one smart pack at a time.
                </p>

                <WaitlistForm color={`outline-white`} text={`text-white`}/>
            </div>
        </div>
    );
}

export default Cta;
