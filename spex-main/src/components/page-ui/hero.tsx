"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Play, Pause, X, ArrowRight, CheckCircle, Menu, ChevronDown } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const toggleVideo = () => {
        setIsVideoOpen(!isVideoOpen)
        setIsPlaying(!isVideoOpen)
    }

    const handleVideoPlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play()
                setIsPlaying(true)
            } else {
                videoRef.current.pause()
                setIsPlaying(false)
            }
        }
    }

    const features = [
        "Eco-friendly packaging",
        "Simplified meal planning",
        "Cost-effective solutions",
        "Convenient for teams",
    ]

    const floatingTags = [
        { text: "Eco-friendly", x: -35, y: -40, color: "#71bc44" },
        { text: "Reusable", x: 35, y: -30, color: "#c7b730" },
        { text: "Time-saving", x: -30, y: 35, color: "#ff6b6b" },
        { text: "Cost-effective", x: 20, y: 40, color: "#4ecdc4" },
    ]

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-white pb-10">
            <div className="absolute inset-0 bg-grid-[#71bc44]/[0.02] bg-[size:50px_50px]" />
            <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
                <div className="w-full lg:w-1/2 lg:px-20 px-2 py-8 lg:py-12 flex flex-col">
                    <header className="w-full mb-8">
                        <div className="flex justify-between items-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1722177650/spex_logo-03_png_dui5ur.png"
                                    alt="SPEX Logo"
                                    width={90}
                                    height={60}
                                />
                            </motion.div>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Menu className="h-6 w-6" />
                            </Button>
                            <nav className="hidden lg:flex space-x-4">
                                <Link href="#" className="text-[#71bc44] hover:text-[#c7b730] transition-colors">
                                    Home
                                </Link>
                                <Link href="#" className="text-[#71bc44] hover:text-[#c7b730] transition-colors">
                                    About
                                </Link>
                                <Link href="#" className="text-[#71bc44] hover:text-[#c7b730] transition-colors">
                                    Services
                                </Link>
                                <Link href="#" className="text-[#71bc44] hover:text-[#c7b730] transition-colors">
                                    Contact
                                </Link>
                            </nav>
                        </div>
                    </header>

                    <main className="flex-grow flex flex-col justify-center px-16 ">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl relative"
                            >
                                <motion.span
                                    initial={{ backgroundPosition: "0% 50%" }}
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    className="bg-gradient-to-r from-[#71bc44] via-[#c7b730] to-[#71bc44] text-transparent bg-clip-text bg-[length:200%_auto]"
                                >
                                    Corporate lunch in
                                    <br />
                                    Reusable Pack
                                </motion.span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl text-gray-600 sm:text-2xl leading-relaxed"
                            >
                                SPEX simplifies meal planning for your{" "}
                                <span className="font-bold text-2xl uppercase sm:text-3xl text-[#71bc44]">team</span>. Save time, reduce
                                costs, and eliminate plastic waste.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button asChild size="lg" className="bg-[#71bc44] hover:bg-[#71bc44]/90 text-white">
                                    <Link href="https://main.spexafrica.app" target={'_blank'} rel="noopener noreferrer" className="flex items-center">
                                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="mt-12"
                            >
                                <h2 className="text-2xl font-bold mb-6 text-[#c7b730]">Why Choose SPEX?</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.1 * index }}
                                            className="flex items-center space-x-3 bg-[#71bc44]/5 rounded-lg p-3 shadow-sm hover:bg-[#71bc44]/10 hover:shadow-md transition-all duration-300 cursor-pointer"
                                        >
                                            <CheckCircle className="text-[#71bc44] h-5 w-5 flex-shrink-0" />
                                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </main>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className=""
                    >
                        <Link
                            href="#about"
                            className="flex flex-col items-center text-black hover:text-[#c7b730] transition-colors"
                            aria-label="Scroll to About section"
                        >
                            <span className="mb-2 text-sm font-medium">Explore More</span>
                            <ChevronDown className="animate-bounce" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative group"
                >
                    <div className="absolute inset-0">
                        <Image
                            src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541343/hero-1_raxkds.jpg"
                            alt="Video thumbnail"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                                onClick={toggleVideo}
                                aria-label="Play video"
                            >
                                <Play className="w-10 h-10" />
                            </Button>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                            <p className="text-white text-lg font-semibold">Discover SPEX</p>
                            <p className="text-white/80 text-sm">02:15</p>
                        </div>

                        {/* Floating tags */}
                        {floatingTags.map((tag, index) => (
                            <motion.div
                                key={index}
                                className="absolute text-white font-bold text-xs sm:text-sm md:text-base px-2 py-1 rounded-full shadow-lg"
                                initial={{ opacity: 0, x: tag.x, y: tag.y }}
                                animate={{
                                    opacity: 1,
                                    x: [tag.x - 5, tag.x + 5, tag.x - 5],
                                    y: [tag.y - 5, tag.y + 5, tag.y - 5],
                                }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                }}
                                style={{
                                    left: `${50 + tag.x}%`,
                                    top: `${50 + tag.y}%`,
                                    backgroundColor: tag.color,
                                }}
                            >
                                {tag.text}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogContent className="sm:max-w-[90vw] max-h-[90vh] p-0 bg-black rounded-lg overflow-hidden">
                    <DialogTitle className="sr-only">SPEX Video Presentation</DialogTitle>
                    <div className="relative aspect-video">
                        <video ref={videoRef} className="w-full h-full" onEnded={() => setIsVideoOpen(false)} autoPlay>
                            <source
                                src="https://res.cloudinary.com/ddwet1dzj/video/upload/v1720540324/spexvid_cqrhog.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/20 rounded-full"
                                onClick={handleVideoPlayPause}
                                aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/20 rounded-full"
                                onClick={() => setIsVideoOpen(false)}
                                aria-label="Close video"
                            >
                                <X className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

