"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"

const partners = [
    {
        name: "Partner 1",
        logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641721/partners/Picture5_zv1fxp.jpg",
    },
    {
        name: "Partner 2",
        logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641623/partners/nexmatics_ltemd7.png",
    },
    {
        name: "Partner 3",
        logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641624/partners/caupain_c0mbj6.png",
    },
    {
        name: "Partner 4",
        logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641622/partners/Picture_sa7jgo.jpg",
    },
    {
        name: "Partner 5",
        logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730642793/partners/logo_s8cnjs.webp",
    },
    {
        name: "Partner 6",
        logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641749/partners/Picture12_h8pnv4.jpg",
    },
    {
        name: "Partner 7",
        logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641622/partners/Picture4_fjgkgb.png",
    },
    {
        name: "Partner 8",
        logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730642005/partners/Picture3_rdukuo.png",
    },
]

const PartnerLogo = ({
                         partner,
                         index,
                         isActive,
                     }: { partner: { name: string; logo: string }; index: number; isActive: boolean }) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            className={`flex-shrink-0 w-[220px] h-[140px] mx-4 bg-white rounded-xl shadow-lg overflow-hidden 
                  flex items-center justify-center transform transition-all duration-500 
                  ${isActive ? "scale-105 z-10" : "scale-95 opacity-80"}`}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        delay: (index * 0.1) % 0.8,
                    },
                },
            }}
            whileHover={{
                scale: 1.08,
                boxShadow: "0 15px 50px rgba(113, 188, 68, 0.2)",
                transition: { duration: 0.3, ease: "easeInOut" },
            }}
            style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
            }}
        >
            <div
                className="relative w-full h-full flex items-center justify-center p-4 transition-all duration-300
                  bg-white"
            >
                <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-3 transition-all duration-300 group-hover:scale-110 z-10"
                    sizes="(max-width: 220px) 100vw, 220px"
                />
            </div>
        </motion.div>
    )
}

// Animation variants for the title
const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3,
        },
    },
}

const titleWordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
}

const underlineVariants = {
    hidden: { width: "0%" },
    visible: {
        width: "100%",
        transition: {
            delay: 1,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export default function Partners() {
    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLDivElement>(null)
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })
    const [isHovering, setIsHovering] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        }

        const handleResize = () => {
            if (carousel.current) {
                setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    useEffect(() => {
        // Auto-rotate active index for 3D effect
        if (!isHovering) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % partners.length)
            }, 2000)
            return () => clearInterval(interval)
        }
    }, [isHovering])

    const slideWidth = partners.length * (220 + 32) // Each logo is 220px wide with 32px margin

    // Split title into words for animation
    const titleWords = "Our Trusted Partners".split(" ")

    return (
        <section
            ref={ref}
            className="py-24 overflow-hidden relative bg-white"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >


            <div className="container mx-auto px-4 relative z-10">
                <motion.div className="text-center mb-20" initial="hidden" animate={controls} variants={titleContainerVariants}>
                    <motion.div className="inline-block relative">
                        <div className="flex justify-center items-center flex-wrap">
                            {titleWords.map((word, index) => (
                                <motion.span
                                    key={index}
                                    className="text-6xl font-bold text-[#71bc44] mx-2 inline-block"
                                    variants={titleWordVariants}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>
                        {/*<motion.div*/}
                        {/*    className="absolute -bottom-4 left-0 h-2 bg-[#71bc44] rounded-full"*/}
                        {/*    initial="hidden"*/}
                        {/*    animate={controls}*/}
                        {/*    variants={underlineVariants}*/}
                        {/*/>*/}
                    </motion.div>
                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl mx-auto mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { delay: 1.2, duration: 0.7 },
                            },
                        }}
                    >
                        <span className="text-[#71bc44] font-medium">Collaborating with industry leaders</span> to bring you the
                        best solutions
                    </motion.p>
                </motion.div>

                <motion.div
                    className="relative"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* 3D perspective container */}
                    <div className="relative overflow-visible py-10">
                        {/* Custom track design */}
                        <motion.div
                            className="absolute left-1/2 top-1/2 w-[90%] h-2 bg-gradient-to-r from-transparent via-[#71bc44]/20 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        />

                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

                        <motion.div
                            ref={carousel}
                            className="flex overflow-hidden py-10"
                            whileTap={{ cursor: "grabbing" }}
                            style={{ perspective: "1200px" }}
                        >
                            <motion.div
                                className="flex"
                                drag="x"
                                dragConstraints={{ right: 0, left: -width }}
                                initial={{ x: 0 }}
                                animate={{
                                    x: isHovering ? 0 : -slideWidth,
                                }}
                                transition={{
                                    x: {
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "reverse",
                                        duration: 40,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {[...partners, ...partners].map((partner, index) => (
                                    <PartnerLogo
                                        key={index}
                                        partner={partner}
                                        index={index}
                                        isActive={index % partners.length === activeIndex}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
