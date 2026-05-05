"use client"

import React, { useState, useRef, useEffect } from "react"
import { Play, Pause, ArrowUpRight } from "lucide-react"

const socials = [
    { label: "Instagram", href: "https://www.instagram.com/spex_africa", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { label: "X / Twitter", href: "https://x.com/Spex_Africa", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/spexafricapp/", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
]

function openVideoModal() {
    const modal = document.createElement("div")
    modal.className = "fixed inset-0 z-[100] flex items-center justify-center bg-black p-4"
    modal.innerHTML = `
        <div class="relative w-full max-w-6xl aspect-video bg-black border-4 border-white overflow-hidden">
            <button class="absolute top-4 right-4 z-10 bg-white text-black font-black text-xs uppercase tracking-widest px-4 py-2 hover:bg-[#71bc44] transition-all">
                CLOSE ✕
            </button>
            <video src="https://res.cloudinary.com/ddwet1dzj/video/upload/v1720540324/spexvid_cqrhog.mp4" controls autoplay class="w-full h-full"></video>
        </div>
    `
    document.body.appendChild(modal)
    modal.querySelector("button")?.addEventListener("click", () => document.body.removeChild(modal))
}


export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => setIsPlaying(false))
        }
    }, [])

    const togglePlay = () => {
        if (!videoRef.current) return
        isPlaying ? videoRef.current.pause() : videoRef.current.play()
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-hidden font-[family-name:var(--font-geist-sans)] pt-20">

            {/* ── LEFT WHITE PANEL ── */}
            <div className="relative z-10 w-full lg:w-[42%] lg:min-w-[340px] bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-center px-6 md:px-12 xl:px-16 py-14 lg:py-20 gap-0">

                {/* Eyebrow — sits right above the headline */}
                <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-5 h-0.5 bg-[#71bc44]" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#71bc44]">Smart Pack Exchange</span>
                </div>

                {/* Headline */}
                <h1 className="text-[clamp(42px,8vw,80px)] lg:text-[clamp(50px,5.5vw,80px)] font-black text-black leading-[0.88] tracking-[-0.035em] uppercase mb-6 lg:mb-8">
                    Corporate<br />
                    Lunch In<br />
                    <span className="text-[#71bc44]">Reusable</span><br />
                    Pack.
                </h1>

                {/* Subtitle */}
                <p className="text-[15px] text-black/60 leading-relaxed font-medium border-l-2 border-[#71bc44] pl-5 mb-8 lg:mb-10 max-w-xs">
                    SPEX simplifies meal planning for your team. Save time, reduce costs, and eliminate plastic waste.
                </p>

                {/* CTAs */}
                <div className="flex items-center gap-4 flex-wrap mb-8 lg:mb-10">
                    <a
                        href="#pilot"
                        className="inline-flex items-center gap-2.5 bg-[#71bc44] text-black text-[13px] font-bold uppercase tracking-wider px-8 py-4 border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
                    >
                        Sign Up <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <button
                        onClick={openVideoModal}
                        className="inline-flex items-center gap-2.5 bg-white text-black text-[13px] font-bold uppercase tracking-wider px-8 py-4 border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
                    >
                        <Play className="w-3.5 h-3.5 fill-black" /> Watch Film
                    </button>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-4 pt-6 lg:pt-8 border-t-2 border-black">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="w-9 h-9 border-2 border-black flex items-center justify-center hover:bg-[#71bc44] hover:border-[#71bc44] transition-all duration-100"
                        >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black" aria-hidden>
                                <path d={s.d} />
                            </svg>
                        </a>
                    ))}
                </div>

            </div>

            {/* ── RIGHT VIDEO PANEL ── */}
            <div className="relative w-full lg:flex-1 h-[50vh] lg:h-auto overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay muted loop playsInline preload="auto"
                    poster="https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1720549684/office-1_delwsn.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://res.cloudinary.com/ddwet1dzj/video/upload/q_auto/v1720540324/spexvid_cqrhog.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25" />

                {/* Play/Pause toggle */}
                <button
                    onClick={togglePlay}
                    className="absolute top-5 right-5 z-10 bg-black text-white border-2 border-white text-[10px] font-black uppercase tracking-widest px-4 py-2 flex items-center gap-2 hover:bg-[#71bc44] hover:text-black hover:border-black transition-all duration-100"
                >
                    {isPlaying ? <><Pause className="w-3 h-3" /> Pause</> : <><Play className="w-3 h-3 fill-current" /> Play</>}
                </button>

            </div>
        </div>
    )
}
