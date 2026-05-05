"use client"

import React from "react"

const problems = [
    {
        number: "01",
        title: "Plastic Waste in African Oceans",
        stat: "17M MT",
        desc: "Mismanaged plastic waste found in oceans and off the coast of Africa annually.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1720541790/sup_pceezp.jpg",
        span: 1,
    },
    {
        number: "02",
        title: "African Governments Spend",
        stat: "$5 Billion",
        desc: "Managing plastic waste in Africa costs $5 billion annually.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1720541790/spu_rxfz15.jpg",
        span: 2,
    },
    {
        number: "03",
        title: "Under 10% Recycled",
        stat: "<10%",
        desc: "Single-use plastic packages with less than 10% ever recycled.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1720541789/resup_rzdrur.jpg",
        span: 2,
    },
    {
        number: "04",
        title: "Oceans Polluted",
        stat: "NOW",
        desc: "Marine life and coastal communities affected by plastic pollution.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1720541790/fish-plastic2_gagfxk.jpg",
        span: 1,
    },
]

export default function Problem() {
    return (
        <section id="problem" className="bg-black border-t-4 border-black font-[family-name:var(--font-geist-sans)]">

            {/* Section header */}
            <div className="border-b-4 border-white/20">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-3">— The Problem</p>
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.88] tracking-[-0.04em]">
                            The Crisis.
                        </h2>
                    </div>
                    <p className="text-white/50 text-sm font-medium max-w-xs leading-relaxed border-l-4 border-[#71bc44] pl-4">
                        Exploring the critical issues of plastic waste in Africa and its devastating impact on our oceans.
                    </p>
                </div>
            </div>

            {/* Cards grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {problems.map((p) => (
                        <div
                            key={p.number}
                            className={`relative overflow-hidden border-2 border-white/20 hover:border-[#71bc44] group transition-all duration-150 ${p.span === 2 ? "md:col-span-2" : ""}`}
                            style={{ minHeight: "320px" }}
                        >
                            {/* Background image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url(${p.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/55 transition-all duration-150" />

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between p-8" style={{ minHeight: "320px" }}>
                                <div className="flex items-start justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44]">{p.number}</span>
                                    <span className="text-4xl font-black text-white leading-none">{p.stat}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{p.title}</h3>
                                    <p className="text-white/60 text-sm font-medium leading-relaxed">{p.desc}</p>
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#71bc44] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
