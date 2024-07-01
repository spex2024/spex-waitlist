import React from 'react';

function Solution(props) {

    const accordionData = [

        {
            id: 'accordion-flush-body-4',
            title: ' Food Ordering Made Easy',
            content: [
                'Simplify meal planning for your team,  Save \n' +
                'Time and have it delivered in Reusable packs\n'
            ],
            image: 'order.png'
        },

        {
            id: 'accordion-flush-body-1',
            title: ' Zero Waste with SPEX',
            content: [
                'Say goodbye to single-use plastic containers at your Office '
            ],
            image: 'zwaste.png'
        },
        {
            id: 'accordion-flush-body-2',
            title: ' Save Money on Bulk Orders',
            content: [
                'Cut down on Cost associated with Individual orders and the Single-Use plastic packaging it comes with.'
            ],
            image: 'money.png'
        },
        {
            id: 'accordion-flush-body-3',
            title: ' Earn with Your Carbon Points',
            content: [
                'Reduce your carbon footprint with every pack exchange and Earn good money.'
            ],
            image: 'co2.png'
        },

    ];

    return (
        <div className="w-full h-full flex flex-col gap-2">
            {
                accordionData.map(data => (
                    <div className="w-[95%] md:w-[90%] lg:w-[90%] xl:w-[90%] h-auto flex flex-col justify-start lg:flex-row gap-5 items-center mt-10 text-white " key={data.id}
                         data-aos="fade-zoom-in"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="700"
                         data-aos-easing="ease-in-out"
                    >
                        <div className="w-[60px] h-[60px] md:w-[60px] md:h-[60px]  bg-cover bg-center bg-white flex justify-center items-center rounded-full border-2 shadow-md gap-16" >
                            <img src={data.image} width={30} height={30}/>
                        </div>
                        <div className="flex flex-col justify-center  px-5 text-white rounded-lg h-auto w-full md:w-[450px]">
                            <h2 className="font-bold text-md md:text-lg font-sora">{data.title}</h2>
                            <span className="text-sm md:text-base font-nunito">{data.content}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Solution;
