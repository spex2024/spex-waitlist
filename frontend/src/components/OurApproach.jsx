import React from 'react';
import web from '../assets/spex-web.webp';
import home from "../assets/rider.jpg";

// Accordion data array
const accordionData = [
    {
        id: 'accordion-flush-body-1',
        step: 1,
        title: 'Placing Orders on Spex Platform',
        content: [
            'Enterprise clients and their users place take-out food orders from their preferred food vendors/restaurants on the SPEX platform, selecting the option for delivery in durable, reusable Smart packs.'
        ],
        image: 'reusable.png'
    },
    {
        id: 'accordion-flush-body-2',
        step: 2,
        title: 'Smart Pack Delivery',
        content: [
            'Partnered couriers deliver the take-out meals in Smart packs to Enterprise users, ensuring a streamlined and eco-friendly delivery process.'
        ],
        image: 'restaurant.png'
    },
    {
        id: 'accordion-flush-body-3',
        step: 3,
        title: 'Returning Packs For Reuse',
        content: [
            'Used Smart packs are picked up by partnered couriers and returned to the Spex Hygienic Center, where they are machine-washed, sterilized, and prepared for reuse by food vendors for Enterprise clients.'
        ],
        image: 'recycle.png'
    }
];

const ApproachSection = () => {
    return (
        <div className="bg-white text-black lg:h-[120vh] lg:py-5 lg:mt-10 bg-center bg-cover" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backgroundImage: `url(${home})`,
            backgroundBlendMode: 'multiply'
        }} >
            <div className="w-full flex flex-col items-center px-4 xl:px-24 py-10 lg:pt-20 " >
                {/* Title */}
                <header
                    className="w-[90%] lg:w-[60%] h-auto py-5 mb-10 text-white flex flex-col items-center justify-center">
                    <p className="font-nunito font-bold text-lg mb-3"
                       data-aos="fade-in"
                       data-aos-offset="200"
                       data-aos-delay="50"
                       data-aos-duration="1000"
                       data-aos-easing="ease-in-out"
                       data-aos-mirror="true"
                       data-aos-once="true">
                        - How It Works -
                    </p>
                    <h1 className="font-bold font-sora text-2xl lg:text-5xl mb-5 text-center"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true">
                        Our step-by-step approach
                    </h1>
                </header>
                {/* End Title */}

                {/* Grid */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                    <div className="aspect-w-16 aspect-h-9 lg:w-[100%]">
                        <img
                            className="w-full object-cover rounded-xl"
                            src={web}
                            alt="Image Description"
                            width={200}
                        />
                    </div>
                    {/* End Col */}

                    {/* Timeline */}
                    <div>
                        {/* Heading */}
                        <div className="mb-4">
                            <h3 className="text-xs font-bold font-sora uppercase text-[#fff]">Steps</h3>
                        </div>
                        {/* End Heading */}

                        {accordionData.map((item, index) => (
                            <div className="flex gap-x-5 ms-1" key={item.id}>
                                {/* Icon */}
                                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                    <div className="relative z-10 size-8 flex justify-center items-center">
                                        <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-white font-semibold text-xs uppercase rounded-full">
                                            {item.step}
                                        </span>
                                    </div>
                                </div>
                                {/* End Icon */}

                                {/* Right Content */}
                                <div className="grow pt-0.5 pb-8 sm:pb-12">
                                    <p className="text-sm lg:text-base text-white font-nunito">
                                        <span className="text-white font-sora font-bold">{item.title}:</span> {item.content}
                                    </p>
                                </div>
                                {/* End Right Content */}
                            </div>
                        ))}
                        {/* End Items */}
                    </div>
                    {/* End Timeline */}
                </div>
                {/* End Grid */}
            </div>
        </div>
    );
};

export default ApproachSection;
