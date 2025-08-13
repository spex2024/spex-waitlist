"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"

const plans = [
    {
        name: "Bronze",
        pricePerMeal: 39.0,
        pricePerStaff: 780,
        features: [
            "10 staff minimum",
            "20 smart packs",
            "2 smart packs per staff",
            "Access to the SPEX platform",
            "2 standard meal option / week",
            "Choose up to 2 vendors",
            "Email and phone support",
            "Bring your own vendor or choose from our platform",
        ],
        gradient: "from-white to-white",
        borderColor: "border-[#71bc44]/20",
        shadowColor: "shadow-[#71bc44]/10",
    },
    {
        name: "Silver",
        pricePerMeal: 59.0,
        pricePerStaff: 1180,
        features: [
            "10 staff minimum",
            "20 smart packs",
            "2 smart packs per staff",
            "Access to the SPEX platform",
            "3 standard meal option / week",
            "Choose up to 2 vendors",
            "Email and phone support",
            "Bring your own vendor or choose from our platform",
        ],
        popular: true,
        gradient: "from-[#71bc44] to-[#71bc44]",
        borderColor: "border-white/30",
        shadowColor: "shadow-[#71bc44]/40",
    },
    {
        name: "Gold",
        pricePerMeal: 99.0,
        pricePerStaff: 1980,
        features: [
            "10 staff minimum",
            "20 smart packs",
            "2 smart packs per staff",
            "Access to the SPEX platform",
            "5 Premium meals of choice / week",
            "Choose up to 2 vendors",
            "Email and phone support",
            "Bring your own vendor or choose from our platform",
        ],
        gradient: "from-white to-white",
        borderColor: "border-[#71bc44]/20",
        shadowColor: "shadow-[#71bc44]/10",
    },
]

export default function PricingPage() {
    const [isUSD, setIsUSD] = useState(false)
    const [isClient, setIsClient] = useState(false)

    // Exchange rate (example value - would be fetched from an API in a real app)
    const exchangeRate = 12.5

    useEffect(() => {
        setIsClient(true)
    }, [])

    const formatCurrency = (amount: number) => {
        if (isUSD) {
            // Convert from GHC to USD
            const usdAmount = amount / exchangeRate
            return `$${usdAmount.toFixed(2)}`
        } else {
            // This is already GHC, no conversion needed
            return `₵${amount.toFixed(2)}`
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    }

    const featureVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    }

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-16 py-16 overflow-hidden bg-white">
            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="inline-block relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#71bc44] mb-6 tracking-wider relative inline-block capitalize">
                        Spex Enterprise Model
                    </h1>
                </motion.div>

                <motion.h2
                    className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
          <span className="relative inline-block">
            Enterprises / Users access take-out meals on the Spex Platform from their preferred food vendors/restaurants
          </span>
                </motion.h2>
            </motion.div>

            <motion.div
                className="flex justify-center items-center gap-6 mb-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
            >
                <motion.button
                    className={`text-lg font-medium transition-colors duration-300 ${!isUSD ? "text-[#71bc44] font-bold" : "text-gray-500"}`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsUSD(false)}
                >
                    GHC
                </motion.button>

                <div className="relative" onClick={() => setIsUSD(!isUSD)}>
                    <motion.div
                        className="absolute inset-0 rounded-full bg-[#71bc44]/10 blur-md"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                        }}
                    />
                    <div className="w-14 h-7 bg-gray-200 rounded-full p-1 cursor-pointer relative">
                        <motion.div
                            className="w-5 h-5 bg-[#71bc44] rounded-full absolute"
                            animate={{
                                x: isUSD ? 28 : 4,
                                backgroundColor: isUSD ? "#71bc44" : "#71bc44",
                            }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    </div>
                </div>

                <motion.button
                    className={`text-lg font-medium transition-colors duration-300 ${isUSD ? "text-[#71bc44] font-bold" : "text-gray-500"}`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsUSD(true)}
                >
                    USD
                </motion.button>
            </motion.div>

            {isClient && (
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: plan.popular
                                    ? "0 25px 50px -12px rgba(113, 188, 68, 0.4)"
                                    : "0 25px 50px -12px rgba(113, 188, 68, 0.25)",
                                transition: { type: "spring", stiffness: 300, damping: 15 },
                            }}
                            className={`rounded-2xl bg-gradient-to-br ${plan.gradient} p-8 relative overflow-hidden
                                border-2 ${plan.borderColor} shadow-xl ${plan.shadowColor}
                                transition-all duration-300`}
                        >
                            {plan.popular && (
                                <motion.div
                                    className="absolute right-4 top-4 bg-white text-[#71bc44] px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg border border-[#71bc44]/20"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5 + index * 0.2, duration: 0.3 }}
                                >
                                    <Sparkles className="h-4 w-4 text-[#71bc44]" />
                                    Most Popular
                                </motion.div>
                            )}

                            <h2 className={`text-3xl font-bold ${plan.popular ? "text-white" : "text-[#71bc44]"}`}>{plan.name}</h2>
                            <div className={`${plan.popular ? "text-white/90" : "text-gray-500"} mb-2`}>
                                <p className="font-medium">10 Staff Minimum</p>
                            </div>

                            <motion.div
                                className="mb-2"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
                            >
                <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-[#71bc44]"}`}>
                  {formatCurrency(plan.pricePerMeal)}
                </span>
                                <span className={`${plan.popular ? "text-white/90" : "text-gray-600"} ml-1`}>/ meal</span>
                            </motion.div>

                            <motion.div
                                className="mb-6"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4 + index * 0.2, duration: 0.4 }}
                            >
                <span className={`text-2xl font-bold ${plan.popular ? "text-white/90" : "text-gray-700"}`}>
                  {formatCurrency(plan.pricePerStaff)}
                </span>
                                <span className={`${plan.popular ? "text-white/80" : "text-gray-600"} ml-1`}>per staff</span>
                                <p className={`${plan.popular ? "text-white/80" : "text-gray-600"} text-sm mt-1`}>Per Month</p>
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full ${
                                    plan.popular
                                        ? "bg-white text-[#71bc44] hover:bg-opacity-90"
                                        : "bg-[#71bc44] text-white hover:bg-[#65a93c]"
                                } rounded-full py-3.5 px-4 font-bold mb-8 shadow-lg transition-all duration-300`}
                            >
                                Choose Plan
                            </motion.button>

                            <motion.div
                                className="space-y-4"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.3 + index * 0.2,
                                        },
                                    },
                                }}
                                initial="hidden"
                                animate="visible"
                            >
                                {plan.features.map((feature, featureIndex) => (
                                    <motion.div key={featureIndex} className="flex items-start gap-3" variants={featureVariants}>
                                        <div
                                            className={`${plan.popular ? "bg-white/30" : "bg-[#71bc44]/10"} rounded-full p-1.5 flex-shrink-0 mt-0.5`}
                                        >
                                            <Check className={`h-4 w-4 ${plan.popular ? "text-white" : "text-[#71bc44]"}`} />
                                        </div>
                                        <span className={plan.popular ? "text-white" : "text-gray-700"}>{feature}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    )
}
