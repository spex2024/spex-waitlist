import React from 'react';
import spex from '../assets/spex.jpg';

function Problem(props) {
    const accordionData = [
        {
            id: 'accordion-flush-body-1',
            title: ' Plastic Waste in African Oceans',
            content: [
                'An Estimated 17 million MT of Mismanaged plastic waste found in oceans and off the coast of Africa annually. (Statista, 2022).'
            ],
            image:'sup.jpg'
        },
        {
            id: 'accordion-flush-body-2',
            title: 'Single-Use Plastic Costs African Food Industry 10%',
            content: [
                'Single-use plastic packaging costs food businesses up to 10% of their revenues, translating to $0.20 - $0.30 per takeout meal. Managing the resulting plastic waste costs at least $5 billion annually in Africa.'
            ],
            image:'spu.jpeg'
        },
        {
            id: 'accordion-flush-body-3',
            title: ' Under 5% of Single-Use Plastic Waste is Recycled',
            content: [
                'These waste are predominately from Single-Use plastic packages with less than 5% recycled.'
            ],
            image:'resup.jpg'
        },
        {
            id: 'accordion-flush-body-4',
            title: 'Oceans Polluted, Coasts Harmed',
            content: [
                'These Waste pollutes Marine lives, affect the Climate and livelihoods, especially families living around coastal Areas.'
            ],
            image:'sea.jpg'
        }
    ];

    return (
        <div className="w-full h-full flex flex-col gap-4 lg:p-4">
            {accordionData.map(data => (
                <div className="w-full flex flex-col md:flex-row gap-5 items-center mt-10 text-white" key={data.id}>
                    <div className=" w-full lg:w-44 h-40 bg-green-700 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${data.image})` }}></div>
                    <div className=" w-full lg:w-[90%] flex flex-col lg:justify-start gap-3 p-5 text-white shadow-lg  rounded-lg h-[220px] lg:h-40 bg-[#57ba46]">
                        <h2 className="font-bold text-md font-sora ">{data.title}</h2>
                        <span className="text-sm font-nunito ">{data.content}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Problem;
