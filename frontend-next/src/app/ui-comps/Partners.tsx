'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const partners = [
    { name: 'Partner 1', logo: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641721/partners/Picture5_zv1fxp.jpg' },
    { name: 'Partner 2', logo: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641623/partners/nexmatics_ltemd7.png' },
    { name: 'Partner 3', logo: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641624/partners/caupain_c0mbj6.png' },
    { name: 'Partner 4', logo: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641622/partners/Picture_sa7jgo.jpg' },
    { name: 'Partner 5', logo: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1730642793/partners/logo_s8cnjs.webp' },
    { name: 'Partner 6', logo: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641749/partners/Picture12_h8pnv4.jpg' },
    { name: 'Partner 7', logo: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641622/partners/Picture4_fjgkgb.png' },
    { name: 'Partner 8', logo: 'https://res.cloudinary.com/ddwet1dzj/image/upload/v1730642005/partners/Picture3_rdukuo.png' },
]

const PartnerLogo = ({ partner }: { partner: { name: string; logo: string } }) => {
    return (
        <motion.div
            className="flex-shrink-0 w-[180px] h-[100px] mx-3 bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center group"
            whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                transition: { duration: 0.2, ease: 'easeInOut' }
            }}
        >
            <div className="relative w-full h-full flex items-center justify-center p-4 transition-all duration-300 group-hover:bg-gray-50">
                <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-2 transition-all duration-300 group-hover:scale-105"
                    sizes="(max-width: 180px) 100vw, 180px"
                />
            </div>
        </motion.div>
    )
}

export default function Partners() {
    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLDivElement>(null)
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        }
    }, [])

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    const slideWidth = partners.length * (180 + 24) // Each logo is 180px wide with 24px margin

    const handleScroll = (direction: 'left' | 'right') => {
        if (carousel.current) {
            const scrollAmount = direction === 'left' ? -slideWidth / 2 : slideWidth / 2
            carousel.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    return (
        <section ref={ref} className="py-16  overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-bold text-[#71bc44] mb-4">Our Trusted Partners</h2>
                    <p className="text-lg text-[#71bc44] max-w-2xl mx-auto">Collaborating with industry leaders to bring you the best solutions</p>
                </motion.div>
                <motion.div
                    className="relative"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
                    <motion.div
                        ref={carousel}
                        className="flex overflow-hidden"
                        whileTap={{ cursor: 'grabbing' }}
                    >
                        <motion.div
                            className="flex"
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            initial={{ x: 0 }}
                            animate={{ x: -slideWidth }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    duration: 40,
                                    ease: 'linear',
                                },
                            }}
                        >
                            {[...partners, ...partners].map((partner, index) => (
                                <PartnerLogo key={index} partner={partner} />
                            ))}
                        </motion.div>
                    </motion.div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full shadow-md z-20 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => handleScroll('left')}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full shadow-md z-20 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => handleScroll('right')}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}