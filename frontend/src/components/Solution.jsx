import React from 'react';
import Card from "./Card.jsx";
import Slider from "react-slick";

const Solution = () => {
    const accordionData = [
        {
            id: 'accordion-flush-body-4',
            title: 'Effortless Corporate  Meal Planning',
            content: [
                'Simplify meal planning for your team, save time and have it delivered in reusable packs',
            ],
            image: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541341/hero_tg9gt8.jpg',
        },
        {
            id: 'accordion-flush-body-1',
            title: 'Zero Waste with SPEX',
            content: ['Say goodbye to single-use plastic containers at your office'],
            image: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541196/spex_jrkich.jpg',
        },
        {
            id: 'accordion-flush-body-2',
            title: 'Save on Costs, Ditch Single-Use Plastics',
            content: [
                'Cut down on Cost associated with meals orders and the "Single-Use" plastic packaging it comes with.',
            ],
            image: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541344/rider_di6odp.jpg',
        },
        {
            id: 'accordion-flush-body-3',
            title: 'Earn with Your Carbon Print',
            content: [
                'Reduce your carbon footprint with every pack exchange and Earn good money.',
            ],
            image:'https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541340/carbon_t19akr.jpg'
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
                    dots: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
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
                    infinite: true,
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

export default Solution;
