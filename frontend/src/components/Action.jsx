import React from 'react';
import ActionForm from "./ActionForm.jsx";

function Action(props) {
    return (
        <div className="bg-white min-h-[475px] text-[#333] font-[sans-serif] my-10">
            <div className="grid md:grid-cols-2 justify-center items-center max-md:text-center gap-8 ">
                <div className="max-w-md mx-auto p-2">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 md:!leading-[55px] font-myriad">Ready to Grow Your Food Business with SPEX?</h2>
                    <p className="text-base">
                        Join our exclusive waitlist and connect with enterprises  seeking sustainable meal packaging solutions. Don’t miss out on the opportunity to expand your reach and boost your sales!

                    </p>
                  <ActionForm/>
                </div>
                <div className="md:text-right max-md:mt-12 h-full">
                    <img src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1721310322/waakye_lifucw.webp" alt="Food vendors"
                         className="w-full h-full object-cover lg:rounded-l-xl"/>
                </div>
            </div>
        </div>
    );
}

export default Action;