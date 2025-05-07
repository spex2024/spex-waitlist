"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { Package, ShoppingCart, UtensilsCrossed, Recycle } from "lucide-react"

const spexContent = [
    {
        id: "01",
        step: 1,
        title: "Order Your Meal",
        description:
            "Users or Enterprises place take-out meal orders on the Spex platform from their preferred food vendors or restaurants.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541341/hero_tg9gt8.jpg",
        icon: ShoppingCart,
    },
    {
        id: "02",
        step: 2,
        title: "Receive Meal in a Smartpack",
        description: "Food vendors prepare the ordered meals and deliver them in reusable Smartpacks provided by Spex.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541196/spex_jrkich.jpg",
        icon: Package,
    },
    {
        id: "03",
        step: 3,
        title: "Return Your Used Smartpack",
        description:
            "After enjoying the meal, users return the cleaned Smartpacks to the food vendor during the next delivery or pick-up.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541344/rider_di6odp.jpg",
        icon: Recycle,
    },
    {
        id: "04",
        step: 4,
        title: "Earn Points for Reusing",
        description:
            "Users earn points every time they return Smartpacks, promoting sustainability and rewarding eco-friendly behavior.",
        image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541196/spex_jrkich.jpg",
        icon: UtensilsCrossed,
    },
]

export default function Approach() {
    const [activeTab, setActiveTab] = useState("01")
    const [previousTab, setPreviousTab] = useState("")
    const controls = useAnimation()

    const handleTabChange = (tabId: string) => {
        setPreviousTab(activeTab)
        setActiveTab(tabId)
    }

    useEffect(() => {
        controls.start({
            scale: [1, 1.02, 1],
            transition: { duration: 0.5 },
        })
    }, [activeTab, controls])

    const activeContent = spexContent.find((tab) => tab.id === activeTab)
    const activeIndex = spexContent.findIndex((tab) => tab.id === activeTab)
    const prevIndex = spexContent.findIndex((tab) => tab.id === previousTab)
    const direction = prevIndex > activeIndex ? -1 : 1

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f8eb]">
            {/* Main Content */}
            <main className="container mx-auto px-4 md:px-8 lg:px-24 py-16">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Column - Process Steps */}
                    <div className="order-2 md:order-1">
                        <div className="flex items-center mb-8">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="h-1 w-12 bg-[#71bc44] mr-4"
                            />
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl md:text-4xl font-bold text-[#71bc44]"
                            >
                                How It Works
                            </motion.h2>
                        </div>

                        <div className="space-y-4">
                            {/* Tabs */}
                            {spexContent.map((tab, index) => {
                                const IconComponent = tab.icon
                                const isActive = activeTab === tab.id

                                return (
                                    <motion.div
                                        key={tab.id}
                                        className={`rounded-xl p-5 cursor-pointer transition-all duration-300 border-2 ${
                                            isActive
                                                ? "bg-[#71bc44] text-white border-[#71bc44] shadow-lg shadow-[#71bc44]/20"
                                                : "bg-white border-gray-100 hover:border-[#71bc44]/30"
                                        }`}
                                        onClick={() => handleTabChange(tab.id)}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: isActive ? 1 : 0.98,
                                        }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 0.3,
                                        }}
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: isActive
                                                ? "0 10px 25px -5px rgba(113, 188, 68, 0.3)"
                                                : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        layout
                                    >
                                        <div className="flex items-start">
                                            <motion.div
                                                className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 ${
                                                    isActive ? "bg-white/20" : "bg-[#e8f5e0]"
                                                }`}
                                                animate={
                                                    isActive
                                                        ? {
                                                            rotate: [0, 10, -10, 0],
                                                            transition: {
                                                                duration: 0.5,
                                                                delay: 0.2,
                                                            },
                                                        }
                                                        : {}
                                                }
                                            >
                                                <IconComponent className={`h-7 w-7 ${isActive ? "text-white" : "text-[#71bc44]"}`} />
                                            </motion.div>
                                            <div className="flex-1">
                                                <div className={`text-sm font-medium mb-1 ${isActive ? "text-white/80" : "text-[#71bc44]"}`}>
                                                    Step {tab.step}
                                                </div>
                                                <h3 className={`text-xl font-bold mb-2 ${isActive ? "text-white" : "text-gray-800"}`}>
                                                    {tab.title}
                                                </h3>
                                                <motion.div
                                                    initial={isActive ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                                    animate={isActive ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-sm md:text-base">{tab.description}</p>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Column - Description and Image */}
                    <div className="order-1 md:order-2">
                        <motion.div
                            className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Discover the power of sustainable food delivery. Spex makes reusable food containers accessible and
                                convenient for restaurants and enterprises.
                            </p>
                        </motion.div>

                        <motion.div className="rounded-xl overflow-hidden shadow-2xl relative" animate={controls}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{
                                        opacity: 0,
                                        x: direction * 100,
                                        scale: 0.9,
                                        rotateY: direction * 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        scale: 1,
                                        rotateY: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: -direction * 100,
                                        scale: 0.9,
                                        rotateY: -direction * 15,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                    className="aspect-[4/3] relative w-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#71bc44]/80 to-transparent z-10 opacity-60" />
                                    <Image
                                        src={activeContent?.image || "/images/hero-1.jpg"}
                                        alt={`${activeContent?.title} illustration`}
                                        fill
                                        className="object-cover"
                                    />
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 p-6 z-20"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                                            <span className="text-[#71bc44] font-bold">Step {activeContent?.step}: </span>
                                            <span className="text-gray-800 font-medium">{activeContent?.title}</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Step indicators */}
                            <div className="absolute top-4 right-4 z-20 flex space-x-2">
                                {spexContent.map((tab, index) => (
                                    <motion.div
                                        key={tab.id}
                                        className={`h-2 w-2 rounded-full ${activeTab === tab.id ? "bg-white" : "bg-white/40"}`}
                                        whileHover={{ scale: 1.5 }}
                                        onClick={() => handleTabChange(tab.id)}
                                        animate={
                                            activeTab === tab.id
                                                ? {
                                                    scale: [1, 1.5, 1],
                                                    transition: {
                                                        repeat: Number.POSITIVE_INFINITY,
                                                        repeatType: "reverse",
                                                        duration: 1.5,
                                                    },
                                                }
                                                : {}
                                        }
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    )
}
