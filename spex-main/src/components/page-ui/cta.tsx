"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Package, Zap, TrendingUp } from "lucide-react"

export default function CTA() {
    return (
        <div id="cta" className="w-full bg-[#1C2026] py-20 lg:py-32 overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Embrace the
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#71bc44] to-[#c7b730]">
                Smart Pack
              </span>
                            <br />
                            Revolution!
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                            Join us in shaping the future of packaging solutions. Sign up now and be at the forefront of innovation.
                        </p>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-[#71bc44] to-[#c7b730] text-[#1C2026] hover:from-[#62ad35] hover:to-[#b8a821] text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Sign Up Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-[#71bc44] to-[#c7b730] rounded-full opacity-20 filter blur-3xl"></div>
                        <div className="relative z-10 grid grid-cols-2 gap-6">
                            {[
                                { icon: Package, title: "Smart Design", description: "Innovative packaging solutions" },
                                { icon: Zap, title: "Efficiency", description: "Optimized for performance" },
                                { icon: TrendingUp, title: "Sustainability", description: "Eco-friendly materials" },
                                { icon: ArrowRight, title: "Join Now", description: "Be part of the future" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 * index }}
                                    className="bg-white/10 backdrop-blur-lg rounded-lg p-6 flex flex-col items-center text-center"
                                >
                                    <div className="bg-gradient-to-br from-[#71bc44] to-[#c7b730] p-3 rounded-full mb-4">
                                        <item.icon className="h-6 w-6 text-[#1C2026]" />
                                    </div>
                                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-300 text-sm">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#71bc44', stopOpacity: 0.05 }} />
                            <stop offset="100%" style={{ stopColor: '#c7b730', stopOpacity: 0.05 }} />
                        </linearGradient>
                    </defs>
                    <path d="M0,0 Q50,100 100,0 V100 H0 Z" fill="url(#grad1)" />
                    <path d="M0,100 Q50,0 100,100 V0 H0 Z" fill="url(#grad1)" />
                </svg>
            </div>
        </div>
    )
}