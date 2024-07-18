import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card.jsx";


const Problem = () => {
    const accordionData = [
        {
            id: 'accordion-flush-body-1',
            title: 'Plastic Waste in African Oceans',
            content: [
                'An Estimated 17 million MT of Mismanaged plastic waste found in oceans and off the coast of Africa annually. (Statista, 2022).',
            ],
            image: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541790/sup_pceezp.jpg',
        },
        {
            id: 'accordion-flush-body-2',
            title: 'African Governments spend $5 Billion Managing plastic waste annually',
            content: [
                'Single-use plastic packaging costs food businesses up to 10% of revenue or $0.20-$0.30 per meal, while managing plastic waste in Africa costs $5 billion annually.',
            ],
            image: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541790/spu_rxfz15.jpg',
        },
        {
            id: 'accordion-flush-body-3',
            title: 'Under 10% of Single-Use Plastic Waste is Recycled',
            content: [
                'These waste are predominately from Single-Use plastic packages with less than 10% recycled.',
            ],
            image: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541789/resup_rzdrur.jpg',
        },
        {
            id: 'accordion-flush-body-4',
            title: 'Oceans Polluted, Coasts Harmed',
            content: [
                'These Waste pollutes Marine lives, affect the Climate and livelihoods, especially families living around coastal Areas.',
            ],
            image: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541790/fish-plastic2_gagfxk.jpg',
        },
    ];

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                    fade: true,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    cssEase: "linear"
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    fade: true,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    cssEase: "linear"
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {accordionData.map((card) => (
                    <div key={card.id} className="px-2"> {/* Add padding here */}
                        <Card {...card} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Problem;
