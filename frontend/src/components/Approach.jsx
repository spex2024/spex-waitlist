import React from 'react';
import Steps from "./Steps.jsx";

function Approach(props) {
    const accordionData = [
        {
            id: 'accordion-flush-body-1',
            steps: 1,
            title: ' Deliverying Reusable Containers',
            content: [
                '         At Spex, we deliver durable reusable food containers (Smartpacks) to restaurants / food Vendors at a subscription fee on\n' +
                'Behalf of Enterprise Clients/Partners\n'
            ],
            image: 'reusable.png'
        },
        {
            id: 'accordion-flush-body-2',
            steps: 2,
            title: 'Streamlined Smartpack Delivery',
            content: [
                ' Restaurants/food Vendors receive Take-out food orders from Enterprises / Users on the SPEX platform and then prepare the order in Smartpacks for bulk or individual delivery to Users.'
            ],
            image: 'restaurant.png'
        },
        {
            id: 'accordion-flush-body-3',
            steps: 3,
            title: 'Smartpack Takeout Solution',
            content: [
                '  Enterprises / Users access take-out meals on the Spex Platform from their preferred food vendor/restaurant and receive their meals in Smartpacks'
            ],
            image: 'box.png'
        } ,
        {
            id: 'accordion-flush-body-4',
            steps: 4,
            title: 'Seamless Smartpack Cycle',
            content: [
                'Partnered Couriers deliver take-out meals in smartpacks to Users, and pick up used packs back to Spex Hygienic Center where they are machine-washed, sterilized, and returned to food vendors for Reuse.'
            ],
            image: 'recycle.png'
        },


    ];
    return (



        <div className={`w-full h-auto flex flex-col justify-center items-center mt-28 py-16`}>
            <header className={`w-[90%] lg:w-[70%] h-auto py-5 mb-10 text-black flex flex-col items-center justify-center `}>
                <h1 className={`font-bold font-serif text-2xl lg:text-5xl mb-5 text-center`}>Our step-by-step approach </h1>
                <p className={'font-sans'}>-How Its Works-</p>

            </header>

            <div className={` w-[100%] lg:w-[50%] h-[ 300px]  flex flex-col justify-center items-center py-20 rounded`}>

                {accordionData.map(step => (
                    <Steps
                        key={step.id}
                        title={step.title}
                        content={step.content}
                        image={step.image}
                        steps={step.steps}
                    />
                ))}
            </div>


        </div>













    );
}

export default Approach;