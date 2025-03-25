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

const accordionData: CardData[] = [
    {
        id: "accordion-flush-body-4",
        title: "Effortless Corporate Meal Planning",
        content: ["Simplify meal planning for your team, save time and have it delivered in reusable packs"],
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541341/hero_tg9gt8.jpg",
    },
    {
        id: "accordion-flush-body-1",
        title: "Zero Waste with SPEX",
        content: ["Say goodbye to single-use plastic containers at your office"],
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541196/spex_jrkich.jpg",
    },
    {
        id: "accordion-flush-body-2",
        title: "Save on Costs, Ditch Single-Use Plastics",
        content: ['Cut down on Cost associated with meals orders and the "Single-Use" plastic packaging it comes with.'],
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541344/rider_di6odp.jpg",
    },
    {
        id: "accordion-flush-body-3",
        title: "Earn with Your Carbon Point",
        content: ["Reduce your carbon footprint with every pack exchange and Earn good money."],
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541340/carbon_t19akr.jpg",
    },
]

export default function Solution() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const sliderRef = useRef<Slider>(null)
    const totalSlides = accordionData.length

    // Custom prev/next arrow components with different styling
    const PrevArrow = (props: any) => {
        const { onClick } = props
        return (
            <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-[#71bc44]/20 text-[#71bc44] border-0 hover:bg-[#71bc44]/30 transition-all duration-200 z-20"
                onClick={onClick}
            >
                <ArrowLeft className="h-4 w-4" />
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
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-[#71bc44]/20 text-[#71bc44] border-0 hover:bg-[#71bc44]/30 transition-all duration-200 z-20"
                onClick={onClick}
            >
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
            </Button>
        )
    }

    // Slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
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
        cssEase: "cubic-bezier(0.25, 1, 0.5, 1)", // Different easing function
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
        <div className="relative max-w-8xl w-full px-4 py-12 bg-gradient-to-b from-white to-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#71bc44] relative inline-block">
                    The Solution
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#71bc44] transform -skew-x-12"></span>
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                    Innovative approaches to tackle plastic waste and promote sustainable practices
                </p>
            </div>

            {/* Slick Carousel with different styling */}
            <div className="relative">
                <Slider ref={sliderRef} {...settings} className="solution-carousel">
                    {accordionData.map((card) => (
                        <div key={card.id} className="px-3 py-2">
                            <Card className="h-full overflow-hidden group border border-gray-100 hover:border-[#71bc44]/30 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-md">
                                <CardContent className="p-0 relative aspect-[4/3]">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 z-10" />
                                    <Image
                                        src={card.image || "/placeholder.svg"}
                                        alt={card.title}
                                        fill
                                        className="object-cover transition-all duration-700 filter group-hover:brightness-110"
                                    />

                                    {/* Different overlay style */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />

                                    {/* Content box with different styling */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-20">
                                        <div className="transform transition-all duration-300 ease-out group-hover:-translate-y-2">
                                            <div className="bg-[#71bc44]/90 backdrop-blur-sm inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                Sustainable Solution
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                            <div className="overflow-hidden max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                                {card.content.map((paragraph, idx) => (
                                                    <p key={idx} className="text-sm text-white/90 mb-1">
                                                        {paragraph}
                                                    </p>
                                                ))}
                                                <div className="mt-3 pt-2 border-t border-white/20">
                                                    <span className="text-xs font-medium text-white/70">Learn more →</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Slider>

                {/* Different gradient overlays - darker and more subtle */}
                {/*<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50/95 via-gray-50/70 to-transparent pointer-events-none z-10" />*/}
                {/*<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50/95 via-gray-50/70 to-transparent pointer-events-none z-10" />*/}
            </div>

            {/* Different controls layout */}
            <div className="flex justify-between items-center mt-8 px-4">
                {/* Slide counter and progress in different position */}
                <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-md shadow-sm border border-gray-100">
                        {currentSlide + 1} of {totalSlides}
                    </div>
                </div>

                {/* Progress bar with different styling */}
                <div className="flex-1 mx-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#71bc44] transition-all duration-300 ease-out"
                        style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                    />
                </div>

                {/* Play/pause button with different styling */}
                <Button
                    variant={isPlaying ? "default" : "outline"}
                    size="sm"
                    className={`rounded-md transition-all duration-300 ${
                        isPlaying
                            ? "bg-[#71bc44] text-white hover:bg-[#71bc44]/90"
                            : "border-[#71bc44] text-[#71bc44] hover:bg-[#71bc44]/10"
                    }`}
                    onClick={toggleAutoplay}
                >
                    {isPlaying ? (
                        <>
                            <Pause className="h-3 w-3 mr-2" /> Pause
                        </>
                    ) : (
                        <>
                            <Play className="h-3 w-3 mr-2" /> Play
                        </>
                    )}
                </Button>
            </div>

            {/* Custom CSS for Slick with different styling */}
            <style jsx global>{`
                .solution-carousel .slick-track {
                    display: flex !important;
                    padding: 1.5rem 0;
                }
                
                .solution-carousel .slick-slide {
                    height: inherit !important;
                    display: flex !important;
                    opacity: 0.7;
                    transform: scale(0.95);
                    transition: all 0.4s ease;
                }
                
                .solution-carousel .slick-slide.slick-active {
                    opacity: 1;
                    transform: scale(1);
                }
                
                .solution-carousel .slick-slide > div {
                    display: flex;
                    height: 100%;
                    width: 100%;
                }
                
                .solution-carousel .slick-list {
                    padding: 0 10% 0 0 !important;
                    overflow: visible;
                }
            `}</style>
        </div>
    )
}

