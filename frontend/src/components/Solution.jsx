import React from 'react';
import spex from "../assets/spex.jpg";

function Solution(props) {

    const accordionData = [
        {
            id: 'accordion-flush-body-1',
            title: '01 Smart Pack Exchange',
            content: [
                'Say goodbye to single-use plastic containers. With Spex, your staff can easily return used packs and receive points in return, encouraging a culture of reusability and sustainability.'
            ],
            image: 'food.png'
        },
        {
            id: 'accordion-flush-body-2',
            title: '02 Carbon Points',
            content: [
                'Reduce your carbon footprint with every pack exchange. Spex rewards your organization for environmentally-friendly practices, helping you contribute to a healthier planet.'
            ],
            image: 'carbon.png'
        },
        {
            id: 'accordion-flush-body-3',
            title: '03 Cost Savings',
            content: [
                'Cut down on expenses associated with disposable packaging. Spex helps you save costs in the long run by promoting the use of reusable smart packs.'
            ],
            image: 'cedis.png'
        },
        {
            id: 'accordion-flush-body-4',
            title: '04 Food Ordering Made Easy',
            content: [
                'Simplify meal planning for your team. With Spex, you can conveniently order food for your organization and have it delivered in our smart, reusable packs, ensuring both convenience and sustainability.'
            ],
            image: 'delivery.png'
        },
    ];

    return (
        <div className="w-full h-full flex flex-col gap-2">
            {
                accordionData.map(data => (
                    <div className="w-[95%] md:w-[90%] lg:w-[90%] xl:w-[90%] h-auto flex flex-col md:flex-row gap-5 items-center mt-10 text-white mx-auto" key={data.id}>
                        <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg bg-cover bg-center" style={{backgroundImage: `url(${data.image})`}}>
                        </div>
                        <div className="flex flex-col justify-center gap-3 px-5 text-white rounded-lg h-auto w-full md:w-[450px]">
                            <h2 className="font-bold text-md md:text-lg">{data.title}</h2>
                            <span className="text-sm md:text-base ">{data.content}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Solution;
