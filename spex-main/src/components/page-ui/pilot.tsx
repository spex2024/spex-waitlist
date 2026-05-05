"use client"

import { useEffect, useState } from "react"
import { Users, Store, Truck, Package } from "lucide-react"

const stats = [
    { value: 4631, label: "Registered Users",   suffix: "",  icon: Users },
    { value: 10,   label: "Vendors",             suffix: "+", icon: Store },
    { value: 4,    label: "Partner Couriers",    suffix: "",  icon: Truck },
    { value: 1811, label: "Number of Orders",    suffix: "",  icon: Package },
]

function useCounter(end: number, duration = 2) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        let start: number
        let raf: number
        const step = (ts: number) => {
            if (!start) start = ts
            const progress = Math.min((ts - start) / (duration * 1000), 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) raf = requestAnimationFrame(step)
            else setCount(end)
        }
        raf = requestAnimationFrame(step)
        return () => cancelAnimationFrame(raf)
    }, [end, duration])
    return count
}

function StatCard({ item }: { item: typeof stats[0] }) {
    const count = useCounter(item.value)
    const Icon = item.icon
    return (
        <div className="border-r-4 last:border-r-0 border-white/20 p-10 flex flex-col gap-6 group hover:bg-[#71bc44] transition-colors duration-150">
            <div className="w-12 h-12 border-2 border-white/30 group-hover:border-black flex items-center justify-center">
                <Icon className="w-6 h-6 text-white group-hover:text-black" />
            </div>
            <div>
                <div className="text-5xl md:text-6xl font-black text-[#71bc44] group-hover:text-black leading-none tracking-tight">
                    {count.toLocaleString()}{item.suffix}
                </div>
                <div className="text-xs font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-black/70 mt-2">
                    {item.label}
                </div>
            </div>
        </div>
    )
}

export default function Pilot() {
    return (
        <section
            id="pilot"
            className="relative bg-black border-t-4 border-black font-[family-name:var(--font-geist-sans)] overflow-hidden"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url(https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1720541343/prosp_rni5kb.jpg)" }}
            />

            <div className="relative">
                {/* Header */}
                <div className="border-b-4 border-white/20">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-3">— Pilot Program</p>
                            <h2 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.88] tracking-[-0.04em]">
                                Piloting<br />Results.
                            </h2>
                        </div>
                        <p className="text-white/40 text-sm font-medium max-w-xs leading-relaxed border-l-4 border-[#71bc44] pl-4">
                            Traction during our 1st pilot — real numbers from real users.
                        </p>
                    </div>
                </div>

                {/* Stats grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 border-b-4 border-white/20">
                        {stats.map((item, i) => (
                            <StatCard key={i} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
