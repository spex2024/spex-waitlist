"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Package, ShoppingCart, UtensilsCrossed, Recycle } from "lucide-react"

const steps = [
    {
        id: "01",
        title: "Enterprise & Vendor Onboarding",
        description: "Enterprises and their Food Vendors are onboarded onto the Spex Platform. Spex delivers reusable food containers (Smartpacks) to restaurants and food vendors on behalf of subscribed Enterprises and Users.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1746625087/agency/ent-1_slekkd.png",
        icon: Package,
    },
    {
        id: "02",
        title: "Platform Access & Ordering",
        description: "Enterprises and Users access take-out meals on the Spex Platform from their preferred food vendors and restaurants.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1746623972/agency/Spex-Africa-Employee-Interface-plan_iipkmg.png",
        icon: ShoppingCart,
    },
    {
        id: "03",
        title: "Order Preparation",
        description: "Food Vendors and Restaurants receive orders on the Spex platform and prepare take-out meals for delivery using our Smartpacks (reusable food containers).",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1746624550/agency/meal-prep_lqqvyz.png",
        icon: UtensilsCrossed,
    },
    {
        id: "04",
        title: "Delivery & Smartpack Exchange",
        description: "Food vendors deliver take-out meals in Smartpacks in exchange for used and cleaned Smartpacks from Users for Redistribution and Reuse.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1746624645/agency/deliver_xoc3xs.png",
        icon: Recycle,
    },
]

function ImageSkeleton() {
    return (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-[#71bc44]/40 animate-pulse" />
                <div className="w-28 h-2 bg-white/10 animate-pulse" />
                <div className="w-16 h-2 bg-white/10 animate-pulse" />
            </div>
        </div>
    )
}

// ssr: false ensures this component is never included in server HTML,
// completely eliminating the sizes/srcSet hydration mismatch.
const ApproachImage = dynamic(() => import("./approach-image"), {
    ssr: false,
    loading: ImageSkeleton,
})

export default function Approach() {
    const [active, setActive] = useState("01")
    const activeStep = steps.find(s => s.id === active)!

    return (
        <section id="how-it-works" className="bg-black border-t-4 border-black font-[family-name:var(--font-geist-sans)]">

            {/* Header */}
            <div className="border-b-4 border-white/20">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-3">— Process</p>
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.88] tracking-[-0.04em]">
                            How It<br />Works.
                        </h2>
                    </div>
                    <p className="text-white/40 text-sm font-medium max-w-xs leading-relaxed border-l-4 border-[#71bc44] pl-4">
                        Spex connects Enterprises with Food Vendors through our sustainable food delivery platform.
                    </p>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
                <div className="grid md:grid-cols-2 gap-0 border-2 border-white/20">

                    {/* Left: Steps */}
                    <div className="border-r-2 border-white/20">
                        {steps.map((step) => {
                            const Icon = step.icon
                            const isActive = active === step.id
                            return (
                                <button
                                    key={step.id}
                                    onClick={() => setActive(step.id)}
                                    className={`w-full text-left p-8 border-b-2 border-white/10 last:border-b-0 flex items-start gap-5 transition-all duration-100 ${isActive ? "bg-[#71bc44]" : "hover:bg-white/5"}`}
                                >
                                    <div className={`w-12 h-12 border-2 flex items-center justify-center shrink-0 ${isActive ? "border-black bg-black" : "border-white/30"}`}>
                                        <Icon className={`w-5 h-5 ${isActive ? "text-[#71bc44]" : "text-white/50"}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className={`text-[10px] font-black uppercase tracking-[0.3em] mb-1 ${isActive ? "text-black" : "text-[#71bc44]"}`}>
                                            Step {step.id}
                                        </div>
                                        <h3 className={`text-lg font-black uppercase tracking-tight ${isActive ? "text-black" : "text-white"}`}>
                                            {step.title}
                                        </h3>
                                        {isActive && (
                                            <p className="text-black/70 text-sm font-medium leading-relaxed mt-3">
                                                {step.description}
                                            </p>
                                        )}
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    {/* Right: Image panel — client-only via dynamic import */}
                    <div className="relative aspect-square md:aspect-auto">
                        <ApproachImage
                            src={activeStep.image}
                            alt={activeStep.title}
                            stepId={activeStep.id}
                            stepTitle={activeStep.title}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
