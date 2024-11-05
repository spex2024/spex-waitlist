'use client'

import { useState, useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Play, Pause, X, ArrowRight, Menu, ChevronDown, Leaf, DollarSign, Clock, Users } from "lucide-react"
import { useInView } from 'react-intersection-observer'

export default function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const { scrollY } = useScroll()
    const y2 = useTransform(scrollY, [0, 300], [0, -50])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

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
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Eco-friendly",
            description: "Sustainable packaging"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Time-saving",
            description: "Efficient meal planning"
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Cost-effective",
            description: "Budget-friendly solutions"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Team-oriented",
            description: "Perfect for groups"
        }
    ]

    const navLinks = ["Home", "About", "Problem", "Solution", "Pilots", "Approach", "Plans"]

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#e8f5e9] to-white">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#71bc4410" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                        M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                        M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                    </path>
                </svg>
            </div>

            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZmZmZjEwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0zNi4zNCAxMy4yNWwtOC4wOSA4LjA5TDIwLjE2IDEzLjI1IDEzLjI1IDIwLjE2bDguMDkgOC4wOS04LjA5IDguMDkgNi45MSA2LjkxIDguMDktOC4wOSA4LjA5IDguMDkgNi45MS02LjkxLTguMDktOC4wOSA4LjA5LTguMDl6IiBmaWxsPSIjNzFiYzQ0MTAiPjwvcGF0aD4KPC9zdmc+')] bg-repeat" />

            {/* Floating elements */}
            <motion.div
                className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#71bc44]/10"
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-[#c7b730]/10"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            />

            {/* Leaf decorations */}
            <motion.div
                className="absolute top-10 right-10 text-[#71bc44]/20"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
                <Leaf size={60} />
            </motion.div>
            <motion.div
                className="absolute bottom-10 left-10 text-[#c7b730]/20"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            >
                <Leaf size={40} />
            </motion.div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                <header className="flex justify-between items-center mb-8 bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg W-[60%]">
                    <motion.div
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        <Image
                            src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1722177650/spex_logo-03_png_dui5ur.png"
                            alt="SPEX Logo"
                            width={50}
                            height={40}
                        />
                    </motion.div>
                    <Button variant="ghost" size="icon" className="lg:hidden">
                        <Menu className="h-6 w-6"/>
                    </Button>
                    <nav className="hidden lg:flex space-x-1">
                        {navLinks.map((item) => (
                            <Link key={item} href="#" className="text-[#71bc44] hover:text-white hover:bg-[#71bc44] transition-colors text-sm font-medium px-3 py-1 rounded-full">
                                {item}
                            </Link>
                        ))}
                    </nav>
                </header>

                <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className="lg:w-1/2 space-y-8"
                    >
                        <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                            <span className="bg-gradient-to-r from-[#71bc44] to-[#c7b730] text-transparent bg-clip-text">
                                Corporate lunch in
                                <br />
                                Reusable Packs
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 sm:text-2xl leading-relaxed">
                            SPEX simplifies meal planning for your{" "}
                            <span className="font-bold text-2xl uppercase sm:text-3xl text-[#71bc44]">team</span>.
                            <br />
                            Saves you time, cost and plastic waste.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="bg-[#71bc44] hover:bg-[#71bc44]/90 text-white text-lg px-6 py-3 rounded-full">
                                <Link href="https://spexafrica.app" className="flex items-center">
                                    Get Started <ArrowRight className="ml-2 h-5 w-5"/>
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-[#71bc44] text-[#71bc44] hover:bg-[#71bc44]/10 text-lg px-6 py-3 rounded-full"
                            >
                                <Link href="https://spexafrica.site" className="flex items-center">
                                    Explore Demo <ArrowRight className="ml-2 h-5 w-5"/>
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{opacity: 0, scale: 0.9}}
                        animate={inView ? {opacity: 1, scale: 1} : {}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="lg:w-1/2 relative aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-[#e8f5e9]"
                    >
                        <Image
                            src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541343/hero-1_raxkds.jpg"
                            alt="SPEX reusable lunch packs"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                            onClick={toggleVideo}
                            aria-label="Play demo video"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [1, 0.8, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Play className="w-10 h-10" />
                            </motion.div>
                        </Button>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                            <p className="text-white text-lg font-semibold">Discover SPEX</p>
                            <p className="text-white/80 text-sm">02:15</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                    className="mt-24"
                >
                    <h2 className="text-4xl font-bold mb-12 text-center text-[#71bc44]">Why Choose <span className="text-[#c7b730]">SPEX</span>?</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}

                                transition={{duration: 0.5, delay: 0.1 * index}}
                                className="flex items-center bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#71bc44]/20 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#71bc44]/10 flex items-center justify-center text-[#71bc44] group-hover:bg-[#71bc44] group-hover:text-white transition-colors duration-300 mr-3">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-[#71bc44] group-hover:text-[#c7b730] transition-colors duration-300">{feature.title}</h3>
                                    <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div style={{ y: y2, opacity }} className="mt-24 text-center">
                    <Link
                        href="#about"
                        className="inline-flex flex-col items-center text-[#71bc44] hover:text-[#c7b730] transition-colors"
                        aria-label="Scroll to About section"
                    >
                        <span className="mb-2 text-lg font-medium">Explore More</span>
                        <ChevronDown className="animate-bounce w-8 h-8" />
                    </Link>
                </motion.div>
            </div>

            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogContent className="sm:max-w-[90vw] max-h-[90vh] p-0 bg-black rounded-lg overflow-hidden">
                    <DialogTitle className="sr-only">SPEX Video Presentation</DialogTitle>
                    <div className="relative aspect-video">
                        <video
                            ref={videoRef}
                            className="w-full h-full"
                            onEnded={() => setIsVideoOpen(false)}
                            autoPlay
                        >
                            <source src="https://res.cloudinary.com/ddwet1dzj/video/upload/v1720540324/spexvid_cqrhog.mp4" type="video/mp4" />
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