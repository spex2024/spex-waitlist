"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { AlertTriangle, DollarSign, Recycle, Fish } from "lucide-react"

// Define the CardData type
interface CardData {
    id: string
    title: string
    content: string[]
    image: string
    icon: React.ReactNode
}

export default function DesignAgencyFeatures() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    // Use the provided data with added icons
    const cardsData: CardData[] = [
        {
            id: "accordion-flush-body-1",
            title: "Plastic Waste in African Oceans",
            content: [
                "An Estimated 17 million MT of Mismanaged plastic waste found in oceans and off the coast of Africa annually.",
            ],
            image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541790/sup_pceezp.jpg",
            icon: <AlertTriangle className="w-8 h-8" />,
        },
        {
            id: "accordion-flush-body-2",
            title: "African Governments spend $5 Billion",
            content: ["Managing plastic waste in Africa costs $5 billion annually."],
            image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541790/spu_rxfz15.jpg",
            icon: <DollarSign className="w-8 h-8" />,
        },
        {
            id: "accordion-flush-body-3",
            title: "Under 10% Recycled",
            content: ["Single-Use plastic packages with less than 10% recycled."],
            image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541789/resup_rzdrur.jpg",
            icon: <Recycle className="w-8 h-8" />,
        },
        {
            id: "accordion-flush-body-4",
            title: "Oceans Polluted",
            content: ["Marine life and coastal communities affected by plastic pollution."],
            image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541790/fish-plastic2_gagfxk.jpg",
            icon: <Fish className="w-8 h-8" />,
        },
    ]

    const primaryColor = "#71bc44"

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 mt-16">
            {/* Title and Subtitle Section */}
            <div
                className={`text-center mb-16 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transition: "all 0.7s ease-out", transitionDelay: "100ms" }}
            >
                <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight" style={{ color: primaryColor }}>
                    The Problem
                </h1>
                {/*<div className="w-24 h-1 mx-auto mb-6 rounded-full opacity-80" style={{ backgroundColor: primaryColor }}></div>*/}
                <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light text-primary" >
                    Exploring the critical issues of plastic waste in Africa and its impact on our oceans.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cardsData.map((card, index) => {
                    // Determine column span based on index (first and last are smaller)
                    const colSpan = index === 0 || index === 3 ? "md:col-span-1" : "md:col-span-2"
                    // Staggered animation delay
                    const animationDelay = `${(index + 2) * 150}ms`

                    return (
                        <div
                            key={card.id}
                            className={`rounded-3xl overflow-hidden relative ${colSpan} aspect-square md:aspect-auto transition-all duration-700 group ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                            style={{
                                transitionDelay: animationDelay,
                                minHeight: "320px",
                            }}
                        >
                            {/* Background image with zoom effect */}
                            <div
                                className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>

                            {/* Gradient overlay - lighter by default, darker on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 p-8 flex flex-col justify-end transition-all duration-500 group-hover:via-black/50 group-hover:to-black/40">
                                {/* Icon in top-right corner */}
                                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                                    {card.icon}
                                </div>

                                {/* Content container */}
                                <div className="relative z-10">
                                    {/* Hidden content that shows on hover */}
                                    <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-40 mb-4">
                                        {card.content.map((paragraph, idx) => (
                                            <p key={idx} className="text-white text-lg leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Title always at bottom */}
                                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight transition-all duration-500">
                                        {card.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Border glow effect */}
                            <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none"></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
