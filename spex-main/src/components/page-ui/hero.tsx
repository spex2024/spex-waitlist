"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Play } from "lucide-react"

export default function Home() {
    // Images for the slider - updated with the new URLs
    const images = [
        "https://res.cloudinary.com/ddwet1dzj/image/upload/v1744899494/demo/mockuper_1_gfbf6w.png",
        "https://res.cloudinary.com/ddwet1dzj/image/upload/v1744521643/demo/Screenshot_2025-02-24_141340_pmftxe.png",
        "https://res.cloudinary.com/ddwet1dzj/image/upload/v1744521643/demo/Screenshot_2025-04-12_180508_wqujpv.png",
        "https://res.cloudinary.com/ddwet1dzj/image/upload/v1744521644/demo/Screenshot_2025-04-11_155216_h82jac.png",
        "https://res.cloudinary.com/ddwet1dzj/image/upload/v1744521644/demo/Screenshot_2025-04-12_180334_vxcqoq.png",
        "https://res.cloudinary.com/ddwet1dzj/image/upload/v1744521647/demo/Screenshot_2025-02-24_141418_q1xo0e.png",
    ]

    // Text animation state
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const typewriterTexts = ["plan your meal", "meal delivered in reusable pack", "return pack", "earn points"]

    // Slider state
    const [currentIndex, setCurrentIndex] = useState(0)
    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLDivElement>(null)


    // Animation style setup
    useEffect(() => {
        const style = document.createElement("style")
        style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      @keyframes slide {
        0% { transform: translateX(0) translateY(0); }
        100% { transform: translateX(-100px) translateY(-100px); }
      }
      @keyframes spin-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes spin-slow-reverse {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
      @keyframes gradient-x {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient-x {
        animation: gradient-x 15s ease infinite;
        background-size: 400% 400%;
      }
      @keyframes blob {
        0%, 100% {
          transform: translate(0, 0) scale(1);
        }
        25% {
          transform: translate(20px, -30px) scale(1.05);
        }
        50% {
          transform: translate(-20px, 20px) scale(0.95);
        }
        75% {
          transform: translate(30px, 30px) scale(1.05);
        }
      }
      .animate-blob {
        animation: blob 20s ease-in-out infinite;
      }
      @keyframes pulse-scale {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .animate-pulse-scale {
        animation: pulse-scale 4s ease-in-out infinite;
      }
      @keyframes wave {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-5px) rotate(2deg); }
        100% { transform: translateY(0) rotate(0deg); }
      }
      .animate-wave {
        animation: wave 8s ease-in-out infinite;
      }
      @keyframes slide-in-from-top {
        from { transform: translateY(-100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .animate-in {
        animation-fill-mode: both;
      }
      .slide-in-from-top {
        animation-name: slide-in-from-top;
      }
      @keyframes beam-right {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(500%); }
      }
      @keyframes beam-down {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(500%); }
      }
      @keyframes beam-left {
        0% { transform: translateX(500%); }
        100% { transform: translateX(-100%); }
      }
      @keyframes beam-up {
        0% { transform: translateY(500%); }
        100% { transform: translateY(-100%); }
      }
      .animate-beam-right {
        animation: beam-right 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      .animate-beam-down {
        animation: beam-down 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      .animate-beam-left {
        animation: beam-left 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      .animate-beam-up {
        animation: beam-up 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes fade-out {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      .animate-in {
        animation-fill-mode: both;
      }
      .fade-in {
        animation-name: fade-in;
        animation-duration: 300ms;
      }
      .fade-out {
        animation-name: fade-out;
        animation-duration: 300ms;
      }
      .bg-size-200 {
        background-size: 200% auto;
      }
      .animate-gradient-x {
        animation: gradient-x 3s linear infinite;
      }
      @keyframes underline-expand {
        0% { width: 0; }
        100% { width: 100%; }
      }
      @keyframes text-shimmer {
        0% { background-position: -100% 0; }
        100% { background-position: 200% 0; }
      }
      .animate-text-shimmer {
        background: linear-gradient(90deg, rgba(113, 188, 68, 0.8) 0%, rgba(143, 208, 102, 1) 20%, rgba(113, 188, 68, 0.8) 40%);
        background-size: 200% auto;
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        animation: text-shimmer 3s linear infinite;
      }
    `
        document.head.appendChild(style)

        return () => {
            document.head.removeChild(style)
        }
    }, [])

    // Text animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % typewriterTexts.length)
        }, 3000) // Change text every 3 seconds

        return () => clearInterval(interval)
    }, [typewriterTexts.length])

    // Update width on resize
    useEffect(() => {
        const handleResize = () => {
            if (carousel.current) {
                setWidth(carousel.current.offsetWidth)
            }
        }

        handleResize() // Initial call
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Autoplay effect for slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000) // Change slide every 5 seconds for more frequent transitions

        return () => clearInterval(interval)
    }, [images.length])

    // Calculate indices for visible slides (center and adjacent)
    const getVisibleIndices = () => {
        const indices = []
        const totalSlides = images.length

        // Add previous slide
        indices.push((currentIndex - 1 + totalSlides) % totalSlides)

        // Add current slide
        indices.push(currentIndex)

        // Add next slide
        indices.push((currentIndex + 1) % totalSlides)

        return indices
    }

    const visibleIndices = getVisibleIndices()

    return (
        <div className="min-h-screen overflow-x-hidden mt-20 bg-gradient-to-b from-white via-[#f8fcf6] to-[#f0f9ed] relative">
            {/* Animated background patterns */}


            {/* Hero Section */}
            <main className="container mx-auto px-4 py-10 sm:py-12 md:py-16 lg:py-24 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="relative inline-block overflow-hidden">
              <span className="relative z-10">Corporate lunch in</span>
              <div className="absolute -bottom-1 left-0 w-0 h-3 bg-[#71bc44]/50 rounded-full transform -rotate-1 animate-[underline-expand_1.5s_ease-out_forwards]"></div>
            </span>
                        <br />
                        <span className="relative">
              <span className="bg-gradient-to-r from-[#71bc44] via-[#8fd066] to-[#71bc44] bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                Reusable Pack
              </span>
              <div className="absolute -right-4 -top-4 w-8 h-8">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#71bc44]/30 animate-spin-slow">
                  <path fill="currentColor" d="M12,2 L14,7 L19,7 L15,11 L17,16 L12,13 L7,16 L9,11 L5,7 L10,7 Z" />
                </svg>
              </div>
            </span>
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8 max-w-2xl relative">
            <span className="relative z-10">
              SPEX simplifies meal planning for your team. Save time, reduce costs, and
              <span className="relative inline-block mx-1">
                <span className="relative z-10 font-medium text-[#71bc44]">eliminate plastic waste</span>
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#71bc44]/50 rounded-full animate-[underline-expand_1.5s_ease-out_0.5s_forwards]"></div>
              </span>
              .
            </span>
                    </p>

                    <div className="flex items-center mb-6 md:mb-8 h-10">
                        <div className="flex items-center text-base sm:text-lg md:text-xl text-[#71bc44] font-medium overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTextIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    {typewriterTexts[currentTextIndex]}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 md:gap-4">
                        <Link
                            href="#"
                            className="relative overflow-hidden group bg-[#71bc44] hover:bg-[#5da336] text-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium transition-all duration-300 flex items-center justify-center"
                        >
              <span className="relative z-10 flex items-center gap-1.5">
                Sign up
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#71bc44]/0 via-[#ffffff]/20 to-[#71bc44]/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white/30 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </Link>
                        <button
                            onClick={() => {
                                // Create modal for video playback
                                const modal = document.createElement("div")
                                modal.className =
                                    "fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-in fade-in duration-300"
                                modal.innerHTML = `
      <div class="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <iframe 
          src="https://res.cloudinary.com/ddwet1dzj/video/upload/v1720540324/spexvid_cqrhog.mp4" 
          class="w-full h-full" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        <button class="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `
                                document.body.appendChild(modal)

                                // Add event listener to close modal
                                const closeButton = modal.querySelector("button")
                                closeButton?.addEventListener("click", () => {
                                    modal.classList.replace("fade-in", "fade-out")
                                    setTimeout(() => document.body.removeChild(modal), 300)
                                })
                            }}
                            className="group relative overflow-hidden text-black flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-full border-2 border-[#71bc44]/30 hover:border-[#71bc44] transition-colors"
                        >
              <span className="relative z-10 flex items-center gap-2">
                <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#71bc44] group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-4 h-4 text-white fill-white" />
                  <span className="absolute inset-0 rounded-full bg-[#71bc44] animate-ping opacity-30 group-hover:opacity-60"></span>
                </span>
                Watch Video
              </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#71bc44]/0 via-[#71bc44]/5 to-[#71bc44]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                        </button>
                    </div>
                </div>
            </main>

            {/* Full-width Image Slider Section */}
            <section className="py-10 sm:py-12 md:py-16 lg:py-24 w-full relative z-10 backdrop-blur-sm">
                <div className="w-[100vw] relative left-[calc(-50vw+50%)] overflow-hidden">
                    <div
                        ref={carousel}
                        className="relative py-8 sm:py-12 md:py-16 w-full"
                        style={{
                            height: "60vh",
                            minHeight: "400px",
                            maxHeight: "800px",
                        }}
                    >
                        <div className="relative h-full flex items-center justify-center w-full">
                            <AnimatePresence initial={false} mode="popLayout">
                                <div className="flex items-center justify-center w-full">
                                    {visibleIndices.map((slideIndex, i) => {
                                        const isCurrent = slideIndex === currentIndex

                                        return (
                                            <motion.div
                                                key={`slide-${slideIndex}`}
                                                initial={{
                                                    scale: 0.8,
                                                    opacity: 0.5,
                                                    y: i === 1 ? 50 : 0,
                                                }}
                                                animate={{
                                                    scale: isCurrent ? 1 : 0.8,
                                                    opacity: isCurrent ? 1 : 0.7,
                                                    y: isCurrent ? 0 : 50,
                                                    zIndex: isCurrent ? 10 : 0,
                                                    rotateY: isCurrent ? 0 : i === 0 ? 8 : -8,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 80,
                                                    damping: 20,
                                                    mass: 1,
                                                    duration: 1.2,
                                                    ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smoother motion
                                                }}
                                                className={`relative ${
                                                    isCurrent
                                                        ? "w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]"
                                                        : "w-[60vw] sm:w-[55vw] md:w-[50vw] lg:w-[45vw] xl:w-[40vw] hidden sm:block"
                                                }`}
                                                style={{
                                                    height: isCurrent ? "55vh" : "40vh",
                                                    maxHeight: isCurrent ? "600px" : "400px",
                                                    perspective: "1000px",
                                                }}
                                            >
                                                {/* Card with eco-friendly design */}
                                                <div className="relative w-full h-full group">
                                                    {/* Animated shine/beam border effect */}
                                                    <div
                                                        className={`absolute -inset-0.5 rounded-3xl overflow-hidden ${isCurrent ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}
                                                    >
                                                        {/* Static glow */}
                                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#71bc44]/50 via-[#8fd066]/70 to-[#71bc44]/50 animate-gradient-x blur-sm"></div>

                                                        {/* Moving beam effect */}
                                                        <div className="absolute inset-0">
                                                            {/* Top beam */}
                                                            <div
                                                                className="absolute top-0 left-0 h-[3px] w-[40%] bg-white/90 blur-[2px] animate-beam-right"
                                                                style={{
                                                                    boxShadow:
                                                                        "0 0 15px 3px rgba(255, 255, 255, 0.7), 0 0 25px 8px rgba(113, 188, 68, 0.6)",
                                                                    animationDuration: "2.5s",
                                                                    animationIterationCount: "infinite",
                                                                }}
                                                            ></div>

                                                            {/* Right beam */}
                                                            <div
                                                                className="absolute top-0 right-0 h-[40%] w-[3px] bg-white/90 blur-[2px] animate-beam-down"
                                                                style={{
                                                                    boxShadow:
                                                                        "0 0 15px 3px rgba(255, 255, 255, 0.7), 0 0 25px 8px rgba(113, 188, 68, 0.6)",
                                                                    animationDuration: "2.5s",
                                                                    animationDelay: "0.625s",
                                                                    animationIterationCount: "infinite",
                                                                }}
                                                            ></div>

                                                            {/* Bottom beam */}
                                                            <div
                                                                className="absolute bottom-0 right-0 h-[3px] w-[40%] bg-white/90 blur-[2px] animate-beam-left"
                                                                style={{
                                                                    boxShadow:
                                                                        "0 0 15px 3px rgba(255, 255, 255, 0.7), 0 0 25px 8px rgba(113, 188, 68, 0.6)",
                                                                    animationDuration: "2.5s",
                                                                    animationDelay: "1.25s",
                                                                    animationIterationCount: "infinite",
                                                                }}
                                                            ></div>

                                                            {/* Left beam */}
                                                            <div
                                                                className="absolute bottom-0 left-0 h-[40%] w-[3px] bg-white/90 blur-[2px] animate-beam-up"
                                                                style={{
                                                                    boxShadow:
                                                                        "0 0 15px 3px rgba(255, 255, 255, 0.7), 0 0 25px 8px rgba(113, 188, 68, 0.6)",
                                                                    animationDuration: "2.5s",
                                                                    animationDelay: "1.875s",
                                                                    animationIterationCount: "infinite",
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>

                                                    {/* Card content with eco-friendly background */}
                                                    <div
                                                        className={`relative w-full h-full overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm  transition-all duration-500 ease-in-out`}
                                                    >
                                                        {/* Eco-friendly background pattern */}
                                                        <div className="absolute inset-0 z-0 overflow-hidden">
                                                            {/* Base background */}
                                                            {/*<div className="absolute inset-0 bg-white"></div>*/}

                                                            {/* Leaf pattern */}
                                                            <svg
                                                                className="absolute top-0 left-0 w-full h-full opacity-20"
                                                                viewBox="0 0 100 100"
                                                                preserveAspectRatio="none"
                                                            >
                                                                <defs>
                                                                    <pattern
                                                                        id={`leafPattern-${slideIndex}`}
                                                                        patternUnits="userSpaceOnUse"
                                                                        width="60"
                                                                        height="60"
                                                                        patternTransform="rotate(10)"
                                                                    >
                                                                        <path
                                                                            d="M30,10 C20,15 15,20 10,30 C15,40 20,45 30,50 C40,45 45,40 50,30 C45,20 40,15 30,10"
                                                                            fill="none"
                                                                            stroke="#71bc44"
                                                                            strokeWidth="0.5"
                                                                            className="animate-pulse"
                                                                        />
                                                                        <path
                                                                            d="M10,10 C5,15 0,20 0,30 C5,40 10,45 20,50 C30,45 35,40 40,30 C35,20 30,15 20,10"
                                                                            fill="none"
                                                                            stroke="#8fd066"
                                                                            strokeWidth="0.5"
                                                                            className="animate-pulse"
                                                                            style={{ animationDelay: "1s" }}
                                                                        />
                                                                    </pattern>
                                                                </defs>
                                                                <rect x="0" y="0" width="100%" height="100%" fill={`url(#leafPattern-${slideIndex})`} />
                                                            </svg>

                                                            {/* Recycling symbols */}
                                                            <svg
                                                                className="absolute top-[20%] left-[30%] w-16 h-16 animate-spin-slow"
                                                                style={{ animationDuration: "30s" }}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    d="M7,19 L12,14 M12,14 L17,19 M12,14 L12,22 M16,6 L12,2 M12,2 L8,6 M12,2 L12,10 M2,11 L7,16 M7,16 L7,8 M7,16 L15,16 M22,11 L17,6 M17,6 L17,14 M17,6 L9,6"
                                                                    stroke="#71bc44"
                                                                    strokeWidth="1"
                                                                    fill="none"
                                                                />
                                                            </svg>
                                                            <svg
                                                                className="absolute bottom-[15%] right-[25%] w-12 h-12 animate-spin-slow-reverse"
                                                                style={{ animationDuration: "25s" }}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    d="M7,19 L12,14 M12,14 L17,19 M12,14 L12,22 M16,6 L12,2 M12,2 L8,6 M12,2 L12,10 M2,11 L7,16 M7,16 L7,8 M7,16 L15,16 M22,11 L17,6 M17,6 L17,14 M17,6 L9,6"
                                                                    stroke="#8fd066"
                                                                    strokeWidth="1"
                                                                    fill="none"
                                                                />
                                                            </svg>

                                                            {/* Water droplets */}
                                                            <svg
                                                                className="absolute top-[40%] left-[15%] w-8 h-8 animate-float"
                                                                style={{ animationDuration: "15s" }}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    d="M12,2 C12,2 5,10 5,16 C5,20.4183 8.13401,24 12,24 C15.866,24 19,20.4183 19,16 C19,10 12,2 12,2 Z"
                                                                    fill="#71bc44"
                                                                    opacity="0.2"
                                                                />
                                                            </svg>
                                                            <svg
                                                                className="absolute top-[70%] left-[60%] w-6 h-6 animate-float"
                                                                style={{ animationDuration: "12s", animationDelay: "2s" }}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    d="M12,2 C12,2 5,10 5,16 C5,20.4183 8.13401,24 12,24 C15.866,24 19,20.4183 19,16 C19,10 12,2 12,2 Z"
                                                                    fill="#8fd066"
                                                                    opacity="0.2"
                                                                />
                                                            </svg>

                                                            {/* Plant growth animation */}
                                                            <svg className="absolute bottom-0 left-[20%] w-12 h-32 opacity-20" viewBox="0 0 24 100">
                                                                <path
                                                                    d="M12,100 L12,60 C12,60 5,55 12,50 C19,55 12,60 12,60"
                                                                    stroke="#71bc44"
                                                                    strokeWidth="1"
                                                                    fill="none"
                                                                    className="animate-wave"
                                                                />
                                                                <path
                                                                    d="M12,60 C12,60 3,50 12,45 C21,50 12,60 12,60"
                                                                    stroke="#71bc44"
                                                                    strokeWidth="1"
                                                                    fill="none"
                                                                    className="animate-wave"
                                                                    style={{ animationDelay: "0.5s" }}
                                                                />
                                                                <path
                                                                    d="M12,50 C12,50 7,35 12,30 C17,35 12,50 12,50"
                                                                    stroke="#71bc44"
                                                                    strokeWidth="1"
                                                                    fill="none"
                                                                    className="animate-wave"
                                                                    style={{ animationDelay: "1s" }}
                                                                />
                                                            </svg>
                                                            <svg className="absolute bottom-0 right-[30%] w-12 h-24 opacity-20" viewBox="0 0 24 100">
                                                                <path
                                                                    d="M12,100 L12,70 C12,70 5,65 12,60 C19,65 12,70 12,70"
                                                                    stroke="#8fd066"
                                                                    strokeWidth="1"
                                                                    fill="none"
                                                                    className="animate-wave"
                                                                    style={{ animationDelay: "1.5s" }}
                                                                />
                                                                <path
                                                                    d="M12,70 C12,70 3,60 12,55 C21,60 12,70 12,70"
                                                                    stroke="#8fd066"
                                                                    strokeWidth="1"
                                                                    fill="none"
                                                                    className="animate-wave"
                                                                    style={{ animationDelay: "2s" }}
                                                                />
                                                            </svg>

                                                            {/* Animated circles */}
                                                            <div className="absolute top-[10%] left-[10%] w-16 h-16 rounded-full border border-[#71bc44]/20 animate-spin-slow"></div>
                                                            <div className="absolute bottom-[20%] right-[15%] w-24 h-24 rounded-full border border-[#71bc44]/15 animate-spin-slow-reverse"></div>
                                                            <div className="absolute top-[60%] left-[70%] w-12 h-12 rounded-full border border-[#71bc44]/25 animate-float"></div>
                                                        </div>

                                                        {/* Image with enhanced hover effect */}
                                                        <div className="relative w-full h-full z-10">
                                                            <Image
                                                                src={images[slideIndex] || "/placeholder.svg"}
                                                                alt={`Screenshot ${slideIndex + 1}`}
                                                                fill
                                                                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.02]"
                                                                sizes={isCurrent ? "80vw" : "40vw"}
                                                                priority={isCurrent}
                                                            />

                                                            {/* Glass overlay with gradient */}
                                                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-[#71bc44]/10 opacity-70 group-hover:opacity-0 transition-opacity duration-500"></div>

                                                            {/* Shine effect on hover */}
                                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                                                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
                                                            </div>
                                                        </div>

                                                        {/* Eco badge for current slide */}
                                                        {isCurrent && (
                                                            <div className="absolute top-3 left-3 px-3 py-1.5 bg-[#71bc44]/90 text-white text-xs font-medium rounded-full backdrop-blur-sm shadow-sm flex items-center gap-1.5 transform -translate-y-12 animate-in slide-in-from-top duration-500 delay-300 z-20">
                                                                <svg
                                                                    className="w-3.5 h-3.5"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M21 8C19.5 8 18.7 9.4 18 11.2C17.2 13.3 16.5 14 15 14C13.5 14 12.7 12.6 12 10.8C11.2 8.7 10.5 8 9 8C7.5 8 6.7 9.4 6 11.2C5.2 13.3 4.5 14 3 14"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21 4C19.5 4 18.7 5.4 18 7.2C17.2 9.3 16.5 10 15 10C13.5 10 12.7 8.6 12 6.8C11.2 4.7 10.5 4 9 4C7.5 4 6.7 5.4 6 7.2C5.2 9.3 4.5 10 3 10"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21 12C19.5 12 18.7 13.4 18 15.2C17.2 17.3 16.5 18 15 18C13.5 18 12.7 16.6 12 14.8C11.2 12.7 10.5 12 9 12C7.5 12 6.7 13.4 6 15.2C5.2 17.3 4.5 18 3 18"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                                Eco-friendly
                                                            </div>
                                                        )}

                                                        {/* Current indicator dot with pulse animation */}
                                                        {isCurrent && (
                                                            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 z-20">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-[#71bc44] animate-pulse"></div>
                                                                <div
                                                                    className="w-1.5 h-1.5 rounded-full bg-[#71bc44] animate-pulse"
                                                                    style={{ animationDelay: "0.5s" }}
                                                                ></div>
                                                                <div
                                                                    className="w-1.5 h-1.5 rounded-full bg-[#71bc44] animate-pulse"
                                                                    style={{ animationDelay: "1s" }}
                                                                ></div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
            {/* Animated Scroll Down Indicator */}
            <div className="relative w-full flex justify-center items-center py-8 sm:py-10 md:py-12">
                <motion.div
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() =>
                        window.scrollTo({
                            top: window.innerHeight * 1.8,
                            behavior: "smooth",
                        })
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.p
                        className="text-[#71bc44] font-medium text-sm sm:text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Discover more
                    </motion.p>

                    <motion.div
                        className="relative w-8 h-14 sm:w-10 sm:h-16 border-2 border-[#71bc44] rounded-full flex justify-center overflow-hidden"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.7,
                            type: "spring",
                            stiffness: 50,
                            damping: 10,
                        }}
                    >
                        <motion.div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#71bc44] rounded-full"
                            initial={{ y: 2 }}
                            animate={{
                                y: [2, 24, 2],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 2,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Animated beam effect */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div
                                className="absolute top-0 left-0 w-full h-[2px] bg-white/60 blur-[1px] animate-beam-right"
                                style={{
                                    boxShadow: "0 0 8px 1px rgba(113, 188, 68, 0.5)",
                                    animationDuration: "3s",
                                    animationIterationCount: "infinite",
                                }}
                            />
                            <div
                                className="absolute top-0 right-0 h-full w-[2px] bg-white/60 blur-[1px] animate-beam-down"
                                style={{
                                    boxShadow: "0 0 8px 1px rgba(113, 188, 68, 0.5)",
                                    animationDuration: "3s",
                                    animationDelay: "0.75s",
                                    animationIterationCount: "infinite",
                                }}
                            />
                            <div
                                className="absolute bottom-0 right-0 w-full h-[2px] bg-white/60 blur-[1px] animate-beam-left"
                                style={{
                                    boxShadow: "0 0 8px 1px rgba(113, 188, 68, 0.5)",
                                    animationDuration: "3s",
                                    animationDelay: "1.5s",
                                    animationIterationCount: "infinite",
                                }}
                            />
                            <div
                                className="absolute bottom-0 left-0 h-full w-[2px] bg-white/60 blur-[1px] animate-beam-up"
                                style={{
                                    boxShadow: "0 0 8px 1px rgba(113, 188, 68, 0.5)",
                                    animationDuration: "3s",
                                    animationDelay: "2.25s",
                                    animationIterationCount: "infinite",
                                }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        <motion.div
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            animate={{
                                y: [0, 5, 0],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 2,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full text-[#71bc44]"
                            >
                                <path
                                    d="M12 5L12 19M12 19L19 12M12 19L5 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>
                        <motion.div
                            className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
                            animate={{
                                y: [0, 5, 0],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 2,
                                ease: "easeInOut",
                                delay: 0.7,
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full text-[#71bc44]/70"
                            >
                                <path
                                    d="M12 5L12 19M12 19L19 12M12 19L5 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
