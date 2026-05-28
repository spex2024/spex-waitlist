"use client"

import React from "react"
import { ArrowRight } from "lucide-react"

const steps = [
    { number: "01", title: "Savor the Quality", desc: "Browse a curated selection of premium local vendors serving quality food in our signature reusable packs." },
    { number: "02", title: "Effortless Exchange", desc: "Simply drop off your used packs at any designated station in your office. Focus on work, not waste." },
    { number: "03", title: "Reuse the Value", desc: "Track your plastic reduction in real-time and reuse points that translate to exclusive rewards and enterprise perks." },
]

export default function SmartPackExchangeSection() {
    return (
        <section id="about" className="bg-white border-t-4 border-black font-[family-name:var(--font-geist-sans)]">

            {/* Header block */}
            <div className="border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-4">— The Ecosystem</p>
                        <h2 className="text-[clamp(52px,9vw,120px)] font-black text-black leading-[0.88] tracking-[-0.04em] uppercase">
                            Eat.<br />
                            Swap.<br />
                            <span className="text-[#71bc44]">Reuse.</span>
                        </h2>
                    </div>
                    <div className="max-w-md border-l-4 border-black pl-8">
                        <p className="text-xl font-black text-black leading-snug mb-4 uppercase tracking-tight">
                            Africa's first fully circular meal marketplace for forward-thinking teams.
                        </p>
                        <p className="text-sm text-black/60 font-medium leading-relaxed">
                            SPEX is a meal marketplace that leverages a web platform/app to connect food vendors with enterprises and users seeking sustainable food packaging.
                        </p>
                    </div>
                </div>
            </div>

            {/* Steps grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 border-b-4 border-black">
                    {steps.map((step, i) => (
                        <div
                            key={step.number}
                            className="p-10 lg:p-14 border-b-4 lg:border-b-0 lg:border-r-4 last:border-r-0 border-black group hover:bg-[#71bc44] transition-colors duration-150"
                        >
                            <span className="block text-[11px] font-black uppercase tracking-[0.4em] text-[#71bc44] group-hover:text-black mb-10">{step.number}</span>
                            <h3 className="text-2xl font-black uppercase text-black mb-4 tracking-tight">{step.title}</h3>
                            <p className="text-sm text-black/60 group-hover:text-black/80 leading-relaxed mb-10 font-medium">{step.desc}</p>
                            <div className="w-10 h-10 border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-150">
                                <ArrowRight className="w-5 h-5 text-black group-hover:text-[#71bc44]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Impact banner */}
            <div className="relative bg-black border-b-4 border-black overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url(https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1720549684/office-1_delwsn.jpg)" }}
                />
                <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                    <h3 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.88] tracking-[-0.03em]">
                        Real Impact.<br />
                        <span className="text-[#71bc44]">Zero Friction.</span>
                    </h3>
                    <div className="flex flex-wrap gap-12">
                        {[["10k+", "Packs Exchanged"], ["98%", "Waste Avoidance"], ["50+", "Active Vendors"]].map(([val, label]) => (
                            <div key={label} className="flex flex-col border-l-4 border-[#71bc44] pl-5">
                                <span className="text-4xl font-black text-white leading-none">{val}</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#71bc44] mt-2">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
