"use client"

import { useState } from "react"
import Image from "next/image"

const partners = [
    { name: "Partner 1", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1730641721/partners/Picture5_zv1fxp.jpg" },
    { name: "Partner 2", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1730641623/partners/nexmatics_ltemd7.png" },
    { name: "Partner 3", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1730641624/partners/caupain_c0mbj6.png" },
    { name: "Partner 4", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1730641622/partners/Picture_sa7jgo.jpg" },
    { name: "Partner 5", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1730642793/partners/logo_s8cnjs.webp" },
    { name: "Partner 6", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1730641749/partners/Picture12_h8pnv4.jpg" },
    { name: "Partner 7", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1730641622/partners/Picture4_fjgkgb.png" },
    { name: "Partner 8", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1730642005/partners/Picture3_rdukuo.png" },
]

export default function Partners() {
    const [loaded, setLoaded] = useState<boolean[]>(new Array(partners.length).fill(false))

    const markLoaded = (i: number) =>
        setLoaded(prev => { const next = [...prev]; next[i] = true; return next })

    return (
        <section className="bg-white border-t-4 border-black font-[family-name:var(--font-geist-sans)]">

            {/* Header */}
            <div className="border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-3">— Ecosystem</p>
                        <h2 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.88] tracking-[-0.04em]">
                            Our Trusted<br />Partners.
                        </h2>
                    </div>
                    <p className="text-black/50 text-sm font-medium max-w-xs leading-relaxed border-l-4 border-black pl-4">
                        Collaborating with industry leaders to bring you the best sustainable solutions.
                    </p>
                </div>
            </div>

            {/* Logo grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
                <div className="grid grid-cols-2 sm:grid-cols-4 border-2 border-black">
                    {partners.map((p, i) => (
                        <div
                            key={i}
                            className="relative h-32 border-r-2 border-b-2 border-black last:border-r-0 [&:nth-child(4n)]:border-r-0 [&:nth-child(n+5)]:border-b-0 flex items-center justify-center p-6 group hover:bg-[#71bc44] transition-colors duration-150"
                        >
                            {!loaded[i] && (
                                <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                            )}
                            <Image
                                src={p.logo}
                                alt={p.name}
                                fill
                                className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-150"
                                sizes="200px"
                                onLoad={() => markLoaded(i)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
