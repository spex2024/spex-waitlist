"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"

const plans = [
    {
        name: "Bronze",
        priceGHC: 39,
        staffGHC: 780,
        popular: false,
        features: [
            "10 staff minimum",
            "20 smart packs",
            "2 smart packs per staff",
            "Access to the SPEX platform",
            "2 standard meal options / week",
            "Choose up to 2 vendors",
            "Email and phone support",
            "Bring your own vendor or choose from our platform",
        ],
    },
    {
        name: "Silver",
        priceGHC: 59,
        staffGHC: 1180,
        popular: true,
        features: [
            "10 staff minimum",
            "20 smart packs",
            "2 smart packs per staff",
            "Access to the SPEX platform",
            "3 standard meal options / week",
            "Choose up to 2 vendors",
            "Email and phone support",
            "Bring your own vendor or choose from our platform",
        ],
    },
    {
        name: "Gold",
        priceGHC: 99,
        staffGHC: 1980,
        popular: false,
        features: [
            "10 staff minimum",
            "20 smart packs",
            "2 smart packs per staff",
            "Access to the SPEX platform",
            "5 premium meals of choice / week",
            "Choose up to 2 vendors",
            "Email and phone support",
            "Bring your own vendor or choose from our platform",
        ],
    },
]

const RATE = 12.5

export default function Plans() {
    const [isUSD, setIsUSD] = useState(false)
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    const fmt = (ghc: number) =>
        isUSD ? `$${(ghc / RATE).toFixed(2)}` : `₵${ghc.toFixed(2)}`

    return (
        <section id="plans" className="bg-white border-t-4 border-black font-[family-name:var(--font-geist-sans)]">

            {/* Header */}
            <div className="border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-3">— Enterprise Model</p>
                        <h2 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.88] tracking-[-0.04em]">
                            Plans &<br />Pricing.
                        </h2>
                    </div>
                    {/* Currency toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsUSD(false)}
                            className={`text-sm font-black uppercase tracking-widest px-4 py-2 border-2 border-black transition-all duration-100 ${!isUSD ? "bg-black text-white shadow-[3px_3px_0px_#71bc44]" : "bg-white text-black"}`}
                        >GHC</button>
                        <button
                            onClick={() => setIsUSD(true)}
                            className={`text-sm font-black uppercase tracking-widest px-4 py-2 border-2 border-black transition-all duration-100 ${isUSD ? "bg-black text-white shadow-[3px_3px_0px_#71bc44]" : "bg-white text-black"}`}
                        >USD</button>
                    </div>
                </div>
            </div>

            {/* Plans */}
            {mounted && (
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
                    <div className="grid md:grid-cols-3 gap-0 border-2 border-black">
                        {plans.map((plan, i) => (
                            <div
                                key={plan.name}
                                className={`relative flex flex-col border-r-2 last:border-r-0 border-black ${plan.popular ? "bg-[#71bc44]" : "bg-white"}`}
                            >
                                {/* Popular badge */}
                                {plan.popular && (
                                    <div className="bg-black text-[#71bc44] text-[9px] font-black uppercase tracking-[0.3em] text-center py-2">
                                        ★ Most Popular
                                    </div>
                                )}

                                <div className="p-8 flex-1 flex flex-col">
                                    {/* Plan name */}
                                    <h3 className={`text-3xl font-black uppercase tracking-tight mb-1 ${plan.popular ? "text-black" : "text-[#71bc44]"}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-xs font-black uppercase tracking-widest mb-6 ${plan.popular ? "text-black/60" : "text-black/40"}`}>
                                        10 Staff Minimum
                                    </p>

                                    {/* Price */}
                                    <div className={`border-t-2 border-b-2 py-4 mb-6 ${plan.popular ? "border-black/20" : "border-black/10"}`}>
                                        <div className="flex items-baseline gap-1">
                                            <span className={`text-5xl font-black leading-none ${plan.popular ? "text-black" : "text-black"}`}>
                                                {fmt(plan.priceGHC)}
                                            </span>
                                            <span className={`text-sm font-bold ${plan.popular ? "text-black/60" : "text-black/40"}`}>/meal</span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mt-1">
                                            <span className={`text-2xl font-black ${plan.popular ? "text-black" : "text-black/70"}`}>
                                                {fmt(plan.staffGHC)}
                                            </span>
                                            <span className={`text-xs font-bold ${plan.popular ? "text-black/60" : "text-black/40"}`}>per staff/mo</span>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <button className={`w-full py-3 text-sm font-black uppercase tracking-widest border-2 border-black mb-8 shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100 ${plan.popular ? "bg-black text-[#71bc44]" : "bg-[#71bc44] text-black"}`}>
                                        Choose Plan
                                    </button>

                                    {/* Features */}
                                    <ul className="space-y-3 flex-1">
                                        {plan.features.map((f, fi) => (
                                            <li key={fi} className="flex items-start gap-3">
                                                <div className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? "border-black bg-black" : "border-[#71bc44] bg-[#71bc44]"}`}>
                                                    <Check className={`w-3 h-3 ${plan.popular ? "text-[#71bc44]" : "text-black"}`} />
                                                </div>
                                                <span className={`text-sm font-medium leading-snug ${plan.popular ? "text-black" : "text-black/70"}`}>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}
