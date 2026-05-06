"use client"

import { useState } from "react"
import Image from "next/image"

const cards = [
    {
        title: "Effortless Corporate Meal Planning",
        desc: "Simplify meal planning for your team, save time and have it delivered in reusable packs",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1720541341/hero_tg9gt8.jpg",
        tag: "01",
        big: true,
    },
    {
        title: "Earn with Your Carbon Point",
        desc: "Reduce your carbon footprint with every pack exchange and Earn good money.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1720541340/carbon_t19akr.jpg",
        tag: "02",
        big: false,
    },
    {
        title: "Save on Costs, Ditch Single-Use Plastics",
        desc: "Cut down on cost associated with meal orders and the single-use plastic packaging.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1720541344/rider_di6odp.jpg",
        tag: "03",
        big: false,
    },
    {
        title: "Zero Waste with SPEX",
        desc: "Say goodbye to single-use plastic containers at your office.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1720541196/spex_jrkich.jpg",
        tag: "04",
        big: true,
    },
]

function CardSkeleton() {
    return (
        <div className="absolute inset-0 z-10 bg-black/80 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-white/20 animate-pulse" />
                <div className="w-24 h-2 bg-white/10 animate-pulse" />
                <div className="w-16 h-2 bg-white/10 animate-pulse" />
            </div>
        </div>
    )
}

export default function Solution() {
    const [loaded, setLoaded] = useState<boolean[]>(new Array(cards.length).fill(false))
    const mark = (i: number) => setLoaded(prev => { const n = [...prev]; n[i] = true; return n })

    return (
        <section id="solution" className="bg-white border-t-4 border-black font-[family-name:var(--font-geist-sans)]">

            {/* Header */}
            <div className="border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-3">— SPEX</p>
                        <h2 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.88] tracking-[-0.04em]">
                            The Solution.
                        </h2>
                    </div>
                    <p className="text-black/50 text-sm font-medium max-w-xs leading-relaxed border-l-4 border-black pl-4">
                        Innovative approaches to tackle plastic waste and promote sustainable practices.
                    </p>
                </div>
            </div>

            {/* Bento grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ minHeight: "600px" }}>

                    {/* Card 1 — big left */}
                    <div className="relative overflow-hidden border-2 border-black group md:row-span-2">
                        <div className="absolute inset-0">
                            {!loaded[0] && <CardSkeleton />}
                            <Image
                                src={cards[0].image} alt={cards[0].title} fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                onLoad={() => mark(0)}
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-all" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between p-8" style={{ minHeight: "300px" }}>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44]">{cards[0].tag}</span>
                            <div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{cards[0].title}</h3>
                                <p className="text-white/60 text-sm font-medium">{cards[0].desc}</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#71bc44] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </div>

                    {/* Card 2 */}
                    <div className="relative overflow-hidden border-2 border-black group">
                        <div className="absolute inset-0">
                            {!loaded[1] && <CardSkeleton />}
                            <Image
                                src={cards[1].image} alt={cards[1].title} fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                onLoad={() => mark(1)}
                            />
                            <div className="absolute inset-0 bg-black/65 group-hover:bg-black/50 transition-all" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between p-8" style={{ minHeight: "280px" }}>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44]">{cards[1].tag}</span>
                            <div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{cards[1].title}</h3>
                                <p className="text-white/60 text-sm font-medium">{cards[1].desc}</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#71bc44] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </div>

                    {/* Card 3 */}
                    <div className="relative overflow-hidden border-2 border-black group">
                        <div className="absolute inset-0">
                            {!loaded[2] && <CardSkeleton />}
                            <Image
                                src={cards[2].image} alt={cards[2].title} fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                onLoad={() => mark(2)}
                            />
                            <div className="absolute inset-0 bg-black/65 group-hover:bg-black/50 transition-all" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between p-8" style={{ minHeight: "280px" }}>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44]">{cards[2].tag}</span>
                            <div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{cards[2].title}</h3>
                                <p className="text-white/60 text-sm font-medium">{cards[2].desc}</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#71bc44] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </div>

                    {/* Card 4 — spans 2 cols */}
                    <div className="relative overflow-hidden border-2 border-black group md:col-span-2">
                        <div className="absolute inset-0">
                            {!loaded[3] && <CardSkeleton />}
                            <Image
                                src={cards[3].image} alt={cards[3].title} fill
                                sizes="(max-width: 768px) 100vw, 66vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                onLoad={() => mark(3)}
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-all" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between p-8" style={{ minHeight: "260px" }}>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44]">{cards[3].tag}</span>
                            <div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{cards[3].title}</h3>
                                <p className="text-white/60 text-sm font-medium">{cards[3].desc}</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#71bc44] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </div>
                </div>
            </div>
        </section>
    )
}
