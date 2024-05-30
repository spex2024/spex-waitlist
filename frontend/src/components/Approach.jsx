import React from 'react';
import Steps from "./Steps.jsx";
import bgImage from "../assets/paper.jpg";
import Process from "./Process.jsx";

function Approach(props) {
    const accordionData = [
        {
            id: 'accordion-flush-body-1',
            steps: 1,
            title: 'Placing Orders in Smart Packs',
            content: [
                'Enterprise clients and their users place take-out food orders from their preferred food vendors/restaurants on the SPEX platform, selecting the option for delivery in durable, reusable Smart packs.'
            ],
            image: 'reusable.png'
        },
        {
            id: 'accordion-flush-body-2',
            steps: 2,
            title: 'Smart Pack Delivery',
            content: [
                'Partnered couriers deliver the take-out meals in Smart packs to Enterprise users, ensuring a streamlined and eco-friendly delivery process.'
            ],
            image: 'restaurant.png'
        },
        {
            id: 'accordion-flush-body-3',
            steps: 3,
            title: 'Returning Packs For Reuse',
            content: [
                'Used Smart packs are picked up by partnered couriers and returned to the Spex Hygienic Center, where they are machine-washed, sterilized, and prepared for reuse by food vendors for Enterprise clients.'
            ],
            image: 'recycle.png'
        }
    ];



    return (
        <div className={`w-full h-auto flex flex-col justify-center items-center mt-20 py-16 xl:py-20 `}  style={{
            backgroundImage: `url(${bgImage})`,
        }} >
            <header
                className={`w-[90%] lg:w-[60%] h-auto py-5 mb-10 text-black flex flex-col items-center justify-center `}>
                <p className={'font-nunito font-bold text-lg mb-3'}
                    data-aos="fade-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"

                >- How It Works -</p>
                <h1 className={`font-bold font-sora text-2xl lg:text-5xl mb-5 text-center`}
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"

                >Our step-by-step
                    approach</h1>

            </header>
            <div className={` w-[100%] lg:w-[50%] h-[850px] flex flex-col justify-center items-center py-10 lg:my-10`}>
                <Process accordionData={accordionData} />
            </div>
        </div>
    );
}

export default Approach;
