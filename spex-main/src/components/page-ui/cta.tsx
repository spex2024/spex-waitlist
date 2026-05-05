import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
    return (
        <section id="cta" className="bg-black border-t-4 border-black font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">

                {/* Big text */}
                <div className="border-b-4 border-white/15 pb-16 mb-16">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-6">— Get Started</p>
                    <h2 className="text-[clamp(52px,10vw,130px)] font-black text-white uppercase leading-[0.85] tracking-[-0.04em]">
                        The Future<br />
                        of Corporate<br />
                        <span className="text-[#71bc44]">Meal Planning.</span>
                    </h2>
                </div>

                {/* Sub copy + CTA */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-lg">
                        <p className="text-xl text-white/60 font-medium leading-relaxed mb-3">
                            Eco-friendly packaging solutions that eliminate waste.
                        </p>
                        <p className="text-base text-white/35 font-medium leading-relaxed">
                            Join the revolution in sustainable meal preparation with reusable packaging that's better for you and the planet.
                        </p>
                    </div>

                    <Link
                        href="https://main.spexafrica.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#71bc44] text-black text-sm font-black uppercase tracking-widest px-10 py-5 border-2 border-[#71bc44] shadow-[6px_6px_0px_#fff] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-100 whitespace-nowrap"
                    >
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Bottom ticker */}
                <div className="mt-20 pt-8 border-t-2 border-white/10 flex flex-wrap gap-x-16 gap-y-4">
                    {["Zero Plastic Waste", "Reusable Smartpacks", "15% Cost Reduction", "Africa's First Circular Meal Marketplace"].map((t) => (
                        <span key={t} className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25">{t}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}
