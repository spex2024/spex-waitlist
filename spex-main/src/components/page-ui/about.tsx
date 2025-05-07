"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { UtensilsCrossed, Recycle, ChevronRight, Coins } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

// Mobile hook directly in the component file
const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768) // Adjust breakpoint as needed
        }

        // Set initial value
        handleResize()

        // Listen for window resize events
        window.addEventListener("resize", handleResize)

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return isMobile
}

export default function SmartPackExchangeSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

    const [activeTab, setActiveTab] = useState(0)
    const tabs = [
        {
            title: "For Restaurants",
            content:
                "Join our network of eco-conscious restaurants and reduce your packaging costs while attracting sustainability-minded customers.",
        },
        {
            title: "For Consumers",
            content:
                "Enjoy your favorite meals in reusable containers. Earn rewards for returning containers and reduce your environmental footprint.",
        },
        {
            title: "For Businesses",
            content:
                "Offer your employees a sustainable meal program. We handle all logistics and provide detailed sustainability reports.",
        },
    ]

    // 3D particle effect for background
    const ParticleCanvas = () => {
        const canvasRef = useRef<HTMLCanvasElement>(null)
        const isMobile = useMobile()

        useEffect(() => {
            const canvas = canvasRef.current
            if (!canvas) return

            const ctx = canvas.getContext("2d")
            if (!ctx) return

            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            const particles: {
                x: number
                y: number
                size: number
                speedX: number
                speedY: number
                color: string
                opacity: number
            }[] = []

            const createParticles = () => {
                const particleCount = isMobile ? 50 : 100
                for (let i = 0; i < particleCount; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        size: Math.random() * 5 + 1,
                        speedX: (Math.random() - 0.5) * 0.5,
                        speedY: (Math.random() - 0.5) * 0.5,
                        color: "#71bc44",
                        opacity: Math.random() * 0.5 + 0.1,
                    })
                }
            }

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                particles.forEach((particle, index) => {
                    particle.x += particle.speedX
                    particle.y += particle.speedY

                    if (particle.x < 0 || particle.x > canvas.width) {
                        particle.speedX = -particle.speedX
                    }

                    if (particle.y < 0 || particle.y > canvas.height) {
                        particle.speedY = -particle.speedY
                    }

                    ctx.beginPath()
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                    ctx.fillStyle = `rgba(113, 188, 68, ${particle.opacity})`
                    ctx.fill()

                    // Connect particles that are close to each other
                    for (let j = index + 1; j < particles.length; j++) {
                        const dx = particles[j].x - particle.x
                        const dy = particles[j].y - particle.y
                        const distance = Math.sqrt(dx * dx + dy * dy)

                        if (distance < 100) {
                            ctx.beginPath()
                            ctx.strokeStyle = `rgba(113, 188, 68, ${0.1 * (1 - distance / 100)})`
                            ctx.lineWidth = 0.5
                            ctx.moveTo(particle.x, particle.y)
                            ctx.lineTo(particles[j].x, particles[j].y)
                            ctx.stroke()
                        }
                    }
                })

                requestAnimationFrame(animate)
            }

            const handleResize = () => {
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
                particles.length = 0
                createParticles()
            }

            createParticles()
            animate()

            window.addEventListener("resize", handleResize)

            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }, [isMobile])

        return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
    }

    // Feature icon for the bottom section
    const FeatureIconSimple = ({
                                   icon: Icon,
                                   label,
                                   delay = 0,
                               }: {
        icon: React.ElementType
        label: string
        delay?: number
    }) => {
        return (
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay * 0.2 + 0.5, duration: 0.6 }}
            >
                <div className="bg-gradient-to-br from-[#71bc44] to-[#4a8c21] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-lg font-medium text-white uppercase tracking-wider">{label}</div>
            </motion.div>
        )
    }

    return (
        <section
            ref={containerRef}
            className="relative w-full overflow-hidden min-h-screen flex items-center py-20"
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                backgroundImage: `url(https://res.cloudinary.com/ddwet1dzj/image/upload/v1720549684/office-1_delwsn.jpg)`,
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Interactive particle background */}
            <ParticleCanvas />

            {/* Main content */}
            <motion.div className="container mx-auto px-4 relative z-10" style={{ opacity, scale }}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left column */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <motion.div
                            className="flex flex-col"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className="font-black text-white leading-none text-5xl md:text-7xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                <span className="inline-block relative">
                  Smart
                  <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-[#71bc44]"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </span>{" "}
                                <span className="inline-block">Pack</span>
                                <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#71bc44] to-[#a9e283]">
                  Exchange
                </span>
                            </motion.h1>
                        </motion.div>

                        <motion.p
                            className="text-white/80 text-xl leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            SPEX is a meal marketplace that leverages a web platform/app to connect food vendors with enterprises and
                            users seeking sustainable food packaging.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-3 gap-6 mt-8 border-t border-white/10 pt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                        >
                            <FeatureIconSimple icon={UtensilsCrossed} label="eat" delay={0} />
                            <FeatureIconSimple icon={Recycle} label="swap" delay={1} />
                            <FeatureIconSimple icon={Coins} label="earn" delay={2} />
                        </motion.div>
                    </div>

                    {/* Right column */}
                    <div className="lg:col-span-7">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            {/* Decorative elements */}
                            <div className="absolute -left-10 -top-10 w-20 h-20 border-2 border-[#71bc44]/30 rounded-full" />
                            <div className="absolute -right-5 -bottom-5 w-32 h-32 border border-[#71bc44]/20 rounded-full" />
                            <div className="absolute right-20 -top-8 w-16 h-16 border border-[#71bc44]/20 rounded-full" />

                            {/* Main content card */}
                            <div className="bg-gradient-to-br from-black/80 to-[#0f1f0c]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_0_50px_rgba(113,188,68,0.15)]">
                                {/* Tabs */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {tabs.map((tab, index) => (
                                        <button
                                            key={index}
                                            className={cn(
                                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                                activeTab === index ? "bg-[#71bc44] text-white" : "bg-white/5 text-white/70 hover:bg-white/10",
                                            )}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {tab.title}
                                        </button>
                                    ))}
                                </div>

                                {/* Tab content */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-white/80 text-lg mb-8"
                                    >
                                        {tabs[activeTab].content}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Features grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                    {[
                                        { title: "Zero Waste", description: "Eliminate single-use packaging waste completely" },
                                        { title: "Rewards Program", description: "Earn points for every container returned" },
                                        { title: "Seamless Integration", description: "Works with existing POS systems" },
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative group"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#71bc44]/20 to-transparent rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                                            <div className="relative bg-white/5 rounded-xl p-5 backdrop-blur-sm border border-white/10 h-full group-hover:border-[#71bc44]/30 transition-all duration-300">
                                                <h3 className="text-[#71bc44] font-bold text-xl mb-2 flex items-center">
                                                    {feature.title}
                                                    <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                                </h3>
                                                <p className="text-white/70">{feature.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Platform signup */}
                                <motion.div
                                    className="mt-8 bg-black/40 rounded-xl p-4 border border-white/5 flex items-center justify-between"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 0.8 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#71bc44] rounded-full p-3">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.6,9.48l-1.91-3.31c-0.14-0.24-0.44-0.32-0.68-0.18L12,8.5V5c0-0.55-0.45-1-1-1H5C3.9,4,3,4.9,3,6v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-8C21,9.29,19.71,8,18,8C17.86,8,17.73,8.01,17.6,9.48z M5,6h6v2H5V6z M19,18H5v-2h14V18z M19,14H5v-2h14V14z M13.42,7.41L15,5.83l1.58,1.58L18,6l-3-3l-3,3L13.42,7.41z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">SPEX Platform</h4>
                                            <p className="text-white/60 text-sm">Join our sustainable ecosystem</p>
                                        </div>
                                    </div>
                                    <Button className="bg-white/10 hover:bg-white/20 text-white rounded-lg">Sign Up</Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
