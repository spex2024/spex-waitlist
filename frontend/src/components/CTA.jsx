import React from 'react';
import WaitlistForm from "./WaitlistForm.jsx";


function Cta(props) {
    return (
        <div id={"cta"} className="w-full  flex flex-col lg:gap-5 items-center justify-around text-black  min-h-[600px] py-10 lg:py-20">

            <div className="w-full max-w-4xl h-auto flex flex-col items-center text-center px-4">
                <h1 className="font-serif font-bold text-2xl sm:text-3xl mb-3">Waitlist</h1>
                <h1 className="font-bold text-2xl sm:text-4xl md:text-6xl mb-5 font-serif text-center">Embrace Smart Pack !</h1>
                <p className="font-bold text-2xl sm:text-4xl md:text-5xl font-serif">Join the Waitlist</p>
            </div>

            <div className="w-full max-w-lg h-[200px]  flex flex-col  justify-center items-center lg:mt-10 py-5 px-4">
                <p className="font-serif text-md sm:text-xl md:text-2xl text-center mb-5">
                    Be part of the sustainable food packaging revolution! Together, we can make a difference, one smart pack at a time.
                </p>


               <WaitlistForm />

            </div>

        </div>
    );
}

export default Cta;
