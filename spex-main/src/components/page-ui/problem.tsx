"use client"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react"
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCallback, useRef, useState } from "react"

type CardData = {
    id: string
    title: string
    content: string[]
    image: string
}

const cardsData: CardData[] = [
    {
        id: "accordion-flush-body-1",
        title: "Plastic Waste in African Oceans",
        content: [
            "An Estimated 17 million MT of Mismanaged plastic waste found in oceans and off the coast of Africa annually. (Statista, 2022).",
        ],
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541790/sup_pceezp.jpg",
    },
    {
        id: "accordion-flush-body-2",
        title: "African Governments spend $5 Billion Managing plastic waste annually",
        content: [
            "Single-use plastic packaging costs food businesses up to 10% of revenue or $0.20-$0.30 per meal, while managing plastic waste in Africa costs $5 billion annually.",
        ],
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541790/spu_rxfz15.jpg",
    },
    {
        id: "accordion-flush-body-3",
        title: "Under 10% of Single-Use Plastic Waste is Recycled",
        content: ["These waste are predominately from Single-Use plastic packages with less than 10% recycled."],
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541789/resup_rzdrur.jpg",
    },
    {
        id: "accordion-flush-body-4",
        title: "Oceans Polluted, Coasts Harmed",
        content: [
            "These Waste pollutes Marine lives, affect the Climate and livelihoods, especially families living around coastal Areas.",
        ],
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541790/fish-plastic2_gagfxk.jpg",
    },
]

export default function Problem() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const sliderRef = useRef<Slider>(null)
    const totalSlides = cardsData.length

    // Custom prev/next arrow components
    const PrevArrow = (props: any) => {
        const { onClick } = props
        return (
            <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 backdrop-blur-sm shadow-md z-20 border-0 hover:bg-white/50 transition-all duration-200"
                onClick={onClick}
            >
                <ArrowLeft className="h-4 w-4 text-gray-800" />
                <span className="sr-only">Previous slide</span>
            </Button>
        )
    }

    const NextArrow = (props: any) => {
        const { onClick } = props
        return (
            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 backdrop-blur-sm shadow-md z-20 border-0 hover:bg-white/50 transition-all duration-200"
                onClick={onClick}
            >
                <ArrowRight className="h-4 w-4 text-gray-800" />
                <span className="sr-only">Next slide</span>
            </Button>
        )
    }

    // Slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: isPlaying,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        beforeChange: (_: number, next: number) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        cssEase: "cubic-bezier(0.45, 0, 0.55, 1)", // Smoother easing function
    }

    // Toggle autoplay
    const toggleAutoplay = useCallback(() => {
        if (isPlaying) {
            sliderRef.current?.slickPause()
        } else {
            sliderRef.current?.slickPlay()
        }
        setIsPlaying(!isPlaying)
    }, [isPlaying])

    return (
        <div className="relative max-w-8xl w-full px-4 py-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#71bc44] relative inline-block">
                    The Problem
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#71bc44] transform -skew-x-12"></span>
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                    Exploring the critical issues of plastic waste in Africa and its impact on our oceans
                </p>
            </div>

            {/* Slick Carousel with improved styling */}
            <div className="relative rounded-xl overflow-hidden">
                <div className="pb-6">
                    <Slider ref={sliderRef} {...settings} className="problem-carousel">
                        {cardsData.map((card) => (
                            <div key={card.id} className="px-3">
                                <Card className="h-full overflow-hidden group border-0  rounded-xl">
                                    <CardContent className="p-0 relative aspect-[4/3]">
                                        <Image
                                            src={card.image || "/placeholder.svg"}
                                            alt={card.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-300 ease-in-out">
                                            <h3 className="text-xl font-bold mb-2 group-hover:mb-4 group-hover:text-[#8fd460] transition-all duration-300">
                                                {card.title}
                                            </h3>
                                            <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                                                {card.content.map((paragraph, idx) => (
                                                    <p key={idx} className="text-sm opacity-90 mb-1">
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Darker gradient overlays */}
                {/*<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100/90 via-gray-100/50 to-transparent pointer-events-none z-10" />*/}
                {/*<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100/90 via-gray-100/50 to-transparent pointer-events-none z-10" />*/}
            </div>

            {/* Controls and indicators */}
            <div className="flex justify-center items-center mt-6">
                <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
          <span className="text-sm font-medium text-gray-700">
            {currentSlide + 1} / {totalSlides}
          </span>

                    {/* Progress bar */}
                    <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#71bc44] transition-all duration-300 ease-out"
                            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                        />
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/80 backdrop-blur-sm border-0 hover:bg-[#71bc44]/10 transition-all duration-200"
                        onClick={toggleAutoplay}
                    >
                        {isPlaying ? <Pause className="h-4 w-4 text-[#71bc44]" /> : <Play className="h-4 w-4 text-[#71bc44]" />}
                    </Button>
                </div>
            </div>

            {/* Custom CSS for Slick */}
            <style jsx global>{`
                .problem-carousel .slick-track {
                    display: flex !important;
                    padding: 1rem 0;
                }
                
                .problem-carousel .slick-slide {
                    height: inherit !important;
                    display: flex !important;
                }
                
                .problem-carousel .slick-slide > div {
                    display: flex;
                    height: 100%;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

