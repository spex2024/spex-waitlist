import React from 'react';
import Steps from "./Steps.jsx";
import bgImage from "../assets/paper.jpg";
import Process from "./Process.jsx";

function Approach(props) {
    const accordionData = [
        {
            id: 'accordion-flush-body-1',
            steps: 1,
            title: ' Delivering Reusable Containers',
            content: [
                'At Spex, we deliver durable reusable food containers (Smart packs) to restaurants / food Vendors at a subscription fee on behalf of Enterprise Clients/Partners'
            ],
            image: 'reusable.png'
        },
        {
            id: 'accordion-flush-body-2',
            steps: 2,
            title: 'Streamlined Smart Pack Delivery',
            content: [
                'Restaurants/food Vendors receive Take-out food orders from Enterprises / Users on the SPEX platform and then prepare the order in Smart packs for bulk or individual delivery to Users.'
            ],
            image: 'restaurant.png'
        }, {
            id: 'accordion-flush-body-3',
            steps: 3,
            title: 'In Transit',
            content: [
                'Partnered Couriers deliver take-out meals in smart packs to Users,'
            ],
            image: 'restaurant.png'
        },
        {
            id: 'accordion-flush-body-3',
            steps: 4,
            title: 'Smart Pack Takeout Solution',
            content: [
                'Enterprises / Users access take-out meals on the Spex Platform from their preferred food vendor/restaurant and receive their meals in Smart packs'
            ],
            image: 'box.png'
        } ,
        {
            id: 'accordion-flush-body-4',
            steps: 5,
            title: 'Seamless Smart Pack Cycle',
            content: [
                'Partnered Couriers  pick up used packs back to Spex Hygienic Center where they are machine-washed, sterilized, and returned to food vendors for Reuse.'
            ],
            image: 'recycle.png'
        },
    ];

    return (
        <div className={`w-full h-auto flex flex-col justify-center items-center mt-28 py-16 xl:py-20 `}  style={{
            backgroundImage: `url(${bgImage})`,
        }} >
            <header
                className={`w-[90%] lg:w-[70%] h-auto py-5 mb-10 text-black flex flex-col items-center justify-center `}>
                <p className={'font-nunito font-bold text-lg mb-3'}
                    data-aos="fade-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"

                >- How It Works -</p>
                <h1 className={`font-bold font-sora text-2xl lg:text-5xl mb-5 text-center`}
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"

                >Our step-by-step
                    approach</h1>

            </header>
            <div className={` w-[100%] lg:w-[50%] h-[950px] flex flex-col justify-center items-center py-10 lg:my-16`}>
                <Process accordionData={accordionData} />
            </div>
        </div>
    );
}

export default Approach;
