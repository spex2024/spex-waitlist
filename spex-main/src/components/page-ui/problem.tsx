'use client'

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {useCallback, useEffect} from "react";

type CardData = {
    id: string
    title: string
    content: string[]
    image: string
}

const cardsData: CardData[] = [
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
]

export default function Problem() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
    const [isPlaying, setIsPlaying] = React.useState(true)

    const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback((): void => { // Explicitly define the return type as void
        if (!emblaApi) return;
        setCurrentIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());

        emblaApi.on("select", onSelect);
        return (): void => { // Explicitly return void in cleanup
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (!emblaApi || !isPlaying) return
        const intervalId = setInterval(() => emblaApi.scrollNext(), 5000)

        // Return the cleanup function
        return () => clearInterval(intervalId)
    }, [emblaApi, isPlaying])

    const toggleAutoplay = () => setIsPlaying(!isPlaying)

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
            <div className="relative overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {cardsData.map((card) => (
                        <div key={card.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] pl-4">
                            <Card className="h-full overflow-hidden group">
                                <CardContent className="p-0 relative aspect-[4/3]">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-300 ease-in-out">
                                        <h3 className="text-xl font-bold mb-2 group-hover:mb-4">{card.title}</h3>
                                        <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-40">
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
                </div>
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10" />
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 backdrop-blur-xs shadow-md z-20"
                    onClick={scrollPrev}
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm shadow-md z-20"
                    onClick={scrollNext}
                >
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Next slide</span>
                </Button>
            </div>
            <div className="flex justify-center items-center mt-6">
                <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">
            {currentIndex + 1} / {scrollSnaps.length}
          </span>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/50 backdrop-blur-sm"
                        onClick={toggleAutoplay}
                    >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                </div>
            </div>
            <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#71bc44] transition-all duration-300 ease-out"
                    style={{ width: `${((currentIndex + 1) / scrollSnaps.length) * 100}%` }}
                />
            </div>
        </div>
    )
}