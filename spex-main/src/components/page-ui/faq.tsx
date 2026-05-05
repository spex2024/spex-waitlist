"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

type Category = "general" | "plans" | "vendors" | "support"

const categories: { id: Category; label: string }[] = [
    { id: "general", label: "General" },
    { id: "plans",   label: "Plans & Pricing" },
    { id: "vendors", label: "Vendors" },
    { id: "support", label: "Support" },
]

const faqs: Record<Category, { q: string; a: string }[]> = {
    general: [
        { q: "Are there any hidden fees?", a: "No, all prices are transparent. However, additional services outside the plan may have extra costs." },
    ],
    plans: [
        { q: "What is the minimum staff requirement?", a: "All plans require a minimum of 10 staff members to be eligible." },
        { q: "Can I upgrade my plan later?", a: "Yes, but you must cancel your current plan first before upgrading to a new one." },
        { q: "How do I cancel my plan?", a: "Contact our support team. Once canceled, you can select a new plan and continue using our services." },
    ],
    vendors: [
        { q: "Can I choose my own vendor?", a: "Yes! The Silver and Gold plans allow you to bring your own vendor or choose from our platform." },
        { q: "What is the difference between vendor tiers?", a: "Bronze: budget-friendly vendors. Silver: higher-rated vendors with variety. Gold: top-tier premium vendors." },
    ],
    support: [
        { q: "What type of support is included?", a: "Bronze: Email support. Silver & Gold: Email and phone support." },
    ],
}

export default function FAQSection() {
    const [category, setCategory] = useState<Category>("plans")
    const [open, setOpen] = useState<number | null>(null)

    return (
        <section id="faq" className="bg-white border-t-4 border-black font-[family-name:var(--font-geist-sans)]">

            {/* Header */}
            <div className="border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-3">— Help Center</p>
                    <h2 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.88] tracking-[-0.04em]">
                        FAQ.
                    </h2>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
                <div className="grid md:grid-cols-4 gap-0 border-2 border-black">

                    {/* Sidebar categories */}
                    <div className="border-r-2 border-black">
                        {categories.map((c) => (
                            <button
                                key={c.id}
                                onClick={() => { setCategory(c.id); setOpen(null) }}
                                className={`w-full text-left px-6 py-5 border-b-2 border-black last:border-b-0 text-sm font-black uppercase tracking-widest transition-all duration-100 ${category === c.id ? "bg-[#71bc44] text-black" : "bg-white text-black hover:bg-black/5"}`}
                            >
                                {c.label}
                                {category === c.id && <span className="float-right">→</span>}
                            </button>
                        ))}
                    </div>

                    {/* FAQ accordion */}
                    <div className="md:col-span-3">
                        {faqs[category].map((faq, i) => (
                            <div key={i} className="border-b-2 border-black last:border-b-0">
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex items-center justify-between px-8 py-6 text-left group"
                                >
                                    <span className="text-base font-black uppercase tracking-tight text-black pr-4">{faq.q}</span>
                                    <div className={`w-8 h-8 border-2 border-black flex items-center justify-center shrink-0 transition-all duration-100 ${open === i ? "bg-[#71bc44] border-[#71bc44]" : "group-hover:bg-black group-hover:text-white"}`}>
                                        {open === i
                                            ? <Minus className="w-4 h-4 text-black" />
                                            : <Plus className="w-4 h-4" />
                                        }
                                    </div>
                                </button>
                                {open === i && (
                                    <div className="px-8 pb-6 border-t-2 border-black/10 pt-4">
                                        <p className="text-sm text-black/60 font-medium leading-relaxed border-l-4 border-[#71bc44] pl-4">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
