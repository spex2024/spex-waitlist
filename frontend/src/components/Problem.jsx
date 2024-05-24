import React from 'react';
import spex from '../assets/spex.jpg';

function Problem(props) {
    const accordionData = [
        {
            id: 'accordion-flush-body-1',
            title: '01 Plastic Waste in African Oceans',
            content: [
                'An Estimated 17 million MT of Mismanaged plastic waste found in oceans and off the coast of Africa annually. (Statista, 2022).'
            ],
            image:'sup.jpg'
        },
        {
            id: 'accordion-flush-body-2',
            title: '02 Single-Use Plastic Costs African Food Industry 10%',
            content: [
                'Single-use plastic packaging Cost food businesses Up to 10% of their Revenues. That’s $0.20 - $0.30 Per Take out meal and cost at least $5 Billion per year to manage the waste plastics generates in Africa.'
            ],
            image:'spu.jpeg'
        },
        {
            id: 'accordion-flush-body-3',
            title: '03 Under 5% of Single-Use Plastic Waste is Recycled',
            content: [
                'These waste are predominately from Single-Use plastic packages with less than 5% recycled.'
            ],
            image:'resup.jpg'
        },
        {
            id: 'accordion-flush-body-4',
            title: '04 Oceans Polluted, Coasts Harmed',
            content: [
                'These Waste pollutes Marine lives, affect the Climate and livelihoods, especially families living around coastal Areas.'
            ],
            image:'sea.jpg'
        }
    ];

    return (
        <div className="w-full h-full flex flex-col gap-4 p-4">
            {accordionData.map(data => (
                <div className="w-full flex flex-col md:flex-row gap-5 items-center mt-10 text-white" key={data.id}>
                    <div className="w-full md:w-1/3 h-40 bg-green-700 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${data.image})` }}></div>
                    <div className="w-full md:w-2/3 flex flex-col justify-center gap-3 p-5 text-black  rounded-lg lg:h-40">
                        <h2 className="font-bold text-md">{data.title}</h2>
                        <span className="text-sm ">{data.content}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Problem;
