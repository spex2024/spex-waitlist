"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Refined subtle animated background
const ElegantBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

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
            opacity: number
        }[] = []

        const createParticles = () => {
            const particleCount = Math.min(window.innerWidth / 30, 35)

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: (Math.random() - 0.5) * 0.2,
                    opacity: Math.random() * 0.08 + 0.02,
                })
            }
        }

        createParticles()

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle) => {
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(113, 188, 68, ${particle.opacity})`
                ctx.fill()

                particle.x += particle.speedX
                particle.y += particle.speedY

                if (particle.x > canvas.width) particle.x = 0
                if (particle.x < 0) particle.x = canvas.width
                if (particle.y > canvas.height) particle.y = 0
                if (particle.y < 0) particle.y = canvas.height
            })

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            particles.length = 0
            createParticles()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
}

export default function CTA() {
    return (
        <div id="cta" className="w-full bg-[#1C2026] py-32 lg:py-40 overflow-hidden relative">
            {/* Subtle background */}
            <ElegantBackground />

            {/* Refined decorative elements */}
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[#71bc44]/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#71bc44]/5 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
                        >
                            The Future of
                            <br />
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[#71bc44] relative inline-block"
                            >
                                Corporate Meal Planning
                                {/*<motion.span*/}
                                {/*    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[3px] bg-[#71bc44]"*/}
                                {/*    initial={{ scaleX: 0 }}*/}
                                {/*    animate={{ scaleX: 1 }}*/}
                                {/*    transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}*/}
                                {/*/>*/}
                            </motion.span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-2xl sm:text-3xl text-gray-400 mb-6 leading-relaxed max-w-3xl mx-auto font-light"
                        >
                            Eco-friendly packaging solutions that eliminate waste
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-xl text-gray-500 mb-16 leading-relaxed max-w-2xl mx-auto font-light"
                        >
                            Join the revolution in sustainable meal preparation with reusable packaging that&#39;s better for you and the
                            planet.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="flex justify-center"
                        >
                            <Link href="https://main.spexafrica.app/" target="_blank" rel="noopener noreferrer">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Button
                                        size="lg"
                                        className="relative overflow-hidden group bg-[#71bc44] hover:bg-[#71bc44] text-white text-xl px-12 py-8 rounded-full shadow-lg transition-all duration-500"
                                    >
                    <span className="relative z-10 flex items-center font-medium tracking-wide">
                      Get Started
                      <motion.span
                          className="ml-3 inline-block"
                          animate={{
                              x: [0, 5, 0],
                              opacity: [1, 0.8, 1],
                          }}
                          transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 1.5,
                              ease: "easeInOut",
                          }}
                      >
                        <ArrowRight className="h-6 w-6" />
                      </motion.span>
                    </span>
                                        <motion.span
                                            className="absolute inset-0 bg-white/10"
                                            initial={{ x: "-100%", opacity: 0.3 }}
                                            whileHover={{ x: "100%" }}
                                            transition={{ duration: 0.8 }}
                                        />
                                    </Button>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Elegant bottom accent */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1.4, duration: 1.5 }}
                className="absolute bottom-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#71bc44]/30 to-transparent"
            />
        </div>
    )
}
