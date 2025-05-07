import Image from "next/image"
import { Leaf } from "lucide-react"

interface CardData {
    id: string
    title: string
    content: string[]
    image: string
}

export default function Home() {
    const accordionData: CardData[] = [
        {
            id: "accordion-flush-body-4",
            title: "Effortless Corporate Meal Planning",
            content: ["Simplify meal planning for your team, save time and have it delivered in reusable packs"],
            image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541341/hero_tg9gt8.jpg",
        },
        {
            id: "accordion-flush-body-3",
            title: "Earn with Your Carbon Point",
            content: ["Reduce your carbon footprint with every pack exchange and Earn good money."],
            image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541340/carbon_t19akr.jpg",
        },
        {
            id: "accordion-flush-body-2",
            title: "Save on Costs, Ditch Single-Use Plastics",
            content: ['Cut down on Cost associated with meals orders and the "Single-Use" plastic packaging it comes with.'],
            image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541344/rider_di6odp.jpg",
        },
        {
            id: "accordion-flush-body-1",
            title: "Zero Waste with SPEX",
            content: ["Say goodbye to single-use plastic containers at your office"],
            image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541196/spex_jrkich.jpg",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f7eb] via-[#e8f5e0] to-[#f2f8ed] relative">
            {/* Gradient overlay pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#71bc44_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15] pointer-events-none"></div>


            <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-[#4a8c2a] text-sm font-medium uppercase tracking-wider">SPEX</p>
                    <div className="relative inline-block">
                        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-[#4a8c2a] relative z-10">The Solution</h1>
                        {/*<div className="absolute -bottom-2 left-0 w-full h-3 bg-[#71bc44]/20 rounded-full z-0 transform -rotate-1"></div>*/}
                        {/*<svg className="absolute -bottom-1 left-0 w-full h-2 z-0" viewBox="0 0 200 10" preserveAspectRatio="none">*/}
                        {/*    <path d="M0,0 Q50,10 100,5 T200,0" fill="none" stroke="#4a8c2a" strokeWidth="2" strokeLinecap="round" />*/}
                        {/*</svg>*/}
                    </div>
                    <p className="text-[#3a6b21] mt-4 max-w-3xl text-lg md:text-xl font-medium">
                        Innovative approaches to tackle plastic waste and promote sustainable practices.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 h-[600px]">
                    {/* First Card */}
                    <div className="relative overflow-hidden rounded-lg shadow-md group">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-10"></div>
                        <Image
                            src={accordionData[0].image || "/placeholder.svg"}
                            alt={accordionData[0].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="relative z-20 flex flex-col justify-end h-full p-6 text-white">
                            <h2 className="text-xl font-bold mb-2">{accordionData[0].title}</h2>
                            <p className="text-sm text-white/90">{accordionData[0].content[0]}</p>
                        </div>
                    </div>

                    {/* Middle Column - Split into two cards */}
                    <div className="flex flex-col gap-6 h-full">
                        {/* Top Middle Card */}
                        <div className="relative overflow-hidden rounded-lg shadow-md flex-1 group">
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-10"></div>
                            <Image
                                src={accordionData[1].image || "/placeholder.svg"}
                                alt={accordionData[1].title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="relative z-20 flex flex-col justify-end h-full p-6 text-white">
                                <h2 className="text-xl font-bold mb-2">{accordionData[1].title}</h2>
                                <p className="text-sm text-white/90">{accordionData[1].content[0]}</p>
                            </div>
                        </div>

                        {/* Bottom Middle Card */}
                        <div className="relative overflow-hidden rounded-lg shadow-md flex-1 group">
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-10"></div>
                            <Image
                                src={accordionData[2].image || "/placeholder.svg"}
                                alt={accordionData[2].title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="relative z-20 flex flex-col justify-end h-full p-6 text-white">
                                <h2 className="text-xl font-bold mb-2">{accordionData[2].title}</h2>
                                <p className="text-sm text-white/90">{accordionData[2].content[0]}</p>
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="relative overflow-hidden rounded-lg shadow-md group">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-10"></div>
                        <Image
                            src={accordionData[3].image || "/placeholder.svg"}
                            alt={accordionData[3].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="relative z-20 flex flex-col justify-end h-full p-6 text-white">
                            <h2 className="text-xl font-bold mb-2">{accordionData[3].title}</h2>
                            <p className="text-sm text-white/90">{accordionData[3].content[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
