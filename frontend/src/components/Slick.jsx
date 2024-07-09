import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card.jsx";


const Slick = () => {
    const accordionData = [
        {
            id: 'accordion-flush-body-1',
            title: 'Plastic Waste in African Oceans',
            content: [
                'An Estimated 17 million MT of Mismanaged plastic waste found in oceans and off the coast of Africa annually. (Statista, 2022).',
            ],
            image: 'sup.jpg',
        },
        {
            id: 'accordion-flush-body-2',
            title: 'Single-Use Plastic Costs African Food Industry 10%',
            content: [
                'Single-use plastic packaging costs food businesses up to 10% of revenue or $0.20-$0.30 per meal, while managing plastic waste in Africa costs $5 billion annually.',
            ],
            image: 'spu.jpeg',
        },
        {
            id: 'accordion-flush-body-3',
            title: 'Under 10% of Single-Use Plastic Waste is Recycled',
            content: [
                'These waste are predominately from Single-Use plastic packages with less than 5% recycled.',
            ],
            image: 'resup.jpg',
        },
        {
            id: 'accordion-flush-body-4',
            title: 'Oceans Polluted, Coasts Harmed',
            content: [
                'These Waste pollutes Marine lives, affect the Climate and livelihoods, especially families living around coastal Areas.',
            ],
            image: 'fish-plastic2.jpg',
        },
    ];

    const settings = {
        dots: true,
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
                    dots: true,
                    fade: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    cssEase: "linear"
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    fade: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    cssEase: "linear"
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
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

export default Slick;
