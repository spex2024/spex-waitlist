"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronDown, CreditCard, Users, Zap, Award, ArrowUpRight, HelpCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

// Define types for our FAQ data
type FAQCategory = "general" | "plans" | "vendors" | "support"

interface FAQ {
    question: string
    answer: string
    icon: React.ElementType
}

// FAQ categories with icons
const categories = [
    { id: "general" as FAQCategory, name: "General", icon: HelpCircle },
    { id: "plans" as FAQCategory, name: "Plans & Pricing", icon: CreditCard },
    { id: "vendors" as FAQCategory, name: "Vendors", icon: Users },
    { id: "support" as FAQCategory, name: "Support", icon: Zap },
]

// FAQs organized by category
const faqsByCategory: Record<FAQCategory, FAQ[]> = {
    general: [
        {
            question: "Are there any hidden fees?",
            answer: "No, all prices are transparent. However, additional services outside the plan may have extra costs.",
            icon: AlertCircle,
        },
    ],
    plans: [
        {
            question: "What is the minimum staff requirement for all plans?",
            answer: "All plans require a minimum of 10 staff members to be eligible.",
            icon: Users,
        },
        {
            question: "Can I upgrade my plan later?",
            answer: "Yes, but you must cancel your current plan first before upgrading to a new one.",
            icon: ArrowUpRight,
        },
        {
            question: "How do I cancel my plan?",
            answer:
                "You can cancel your plan by contacting our support team. Once canceled, you can select a new plan and continue using our services.",
            icon: CreditCard,
        },
    ],
    vendors: [
        {
            question: "Can I choose my own vendor?",
            answer:
                "Yes! The Silver and Gold plans allow you to bring your own vendor or choose from our platform. The Bronze plan only includes budget-friendly vendors.",
            icon: Users,
        },
        {
            question: "What is the difference between Budget-Friendly, Pro, and Premium Vendors?",
            answer:
                "Budget-Friendly Vendors (Bronze Plan): Vendors that offer affordable meal options. Pro Vendors (Silver Plan): Higher-rated vendors with a variety of meal choices. Premium Vendors (Gold Plan): Top-tier vendors providing premium meal options and services.",
            icon: Award,
        },
    ],
    support: [
        {
            question: "What type of support is included?",
            answer: "Bronze: Email Support. Silver & Gold: Email and Phone Support.",
            icon: Zap,
        },
    ],
}

export default function FAQSection() {
    const [activeCategory, setActiveCategory] = useState<FAQCategory>("plans")
    const [searchQuery, setSearchQuery] = useState("")
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const headerRef = useRef<HTMLDivElement>(null)

    // Handle mouse movement for the interactive background effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (headerRef.current) {
                const rect = headerRef.current.getBoundingClientRect()
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                })
            }
        }

        const element = headerRef.current
        if (element) {
            element.addEventListener("mousemove", handleMouseMove)
            return () => {
                element.removeEventListener("mousemove", handleMouseMove)
            }
        }
    }, [headerRef])

    // Toggle FAQ item
    const toggleItem = (id: string) => {
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    // Filter FAQs based on search query
    const filteredFAQs = searchQuery
        ? Object.values(faqsByCategory)
            .flat()
            .filter(
                (faq) =>
                    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
            )
        : faqsByCategory[activeCategory]

    // Get the current category icon component
    const getCurrentCategoryIcon = () => {
        const category = categories.find((c) => c.id === activeCategory)
        if (category) {
            const IconComponent = category.icon
            return <IconComponent className="h-4 w-4 text-[#71bc44]" />
        }
        return null
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 md:px-6 lg:px-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                {/* Left sidebar - sticky on desktop */}
                <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-8 md:self-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div ref={headerRef} className="relative overflow-hidden">
                            {/* Animated background gradient */}
                            {/*<div*/}
                            {/*    className="absolute inset-0 opacity-10 pointer-events-none"*/}
                            {/*    style={*/}
                            {/*        {*/}
                            {/*            background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, #71bc44, transparent)`,*/}
                            {/*            transition: "background 0.2s ease",*/}
                            {/*        } as React.CSSProperties*/}
                            {/*    }*/}
                            {/*/>*/}

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#71bc44]/5 blur-3xl" />
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#71bc44]/5 blur-2xl" />

                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#71bc44]/10 text-[#71bc44] font-medium text-sm mb-4 backdrop-blur-sm"
                                >
                                    <span className="w-2 h-2 bg-[#71bc44] rounded-full mr-2"></span>
                                    HELP CENTER
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                    Frequently
                  </span>{" "}
                                    <span className="relative inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#71bc44] to-emerald-400">
                      Asked
                    </span>
                    <motion.span
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-[#71bc44] to-emerald-400"
                    />
                  </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-gray-600 text-lg font-light leading-relaxed"
                                >
                                    We address common queries, demystify intricacies, and provide insights to guide you through our
                                    services with clarity and precision.
                                </motion.p>
                            </div>
                        </div>

                        {/* Search box */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-4 py-3 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#71bc44]/20 focus:outline-none transition-all duration-200 text-sm"
                                placeholder="Search questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </motion.div>

                        {/* Category tabs - only show when not searching */}
                        {!searchQuery && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="space-y-3"
                            >
                                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 ml-1">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((category, index) => {
                                        const CategoryIcon = category.icon
                                        return (
                                            <motion.button
                                                key={category.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                                onClick={() => setActiveCategory(category.id)}
                                                className={cn(
                                                    "flex items-center w-full px-4 py-3 rounded-xl text-left transition-all duration-200",
                                                    activeCategory === category.id
                                                        ? "bg-gradient-to-r from-[#71bc44] to-emerald-400 text-white shadow-md shadow-[#71bc44]/10"
                                                        : "bg-gray-50 hover:bg-gray-100 text-gray-700",
                                                )}
                                            >
                                                <CategoryIcon
                                                    className={cn(
                                                        "mr-3 h-4 w-4",
                                                        activeCategory === category.id ? "text-white" : "text-[#71bc44]",
                                                    )}
                                                />
                                                <span className="font-medium text-sm">{category.name}</span>
                                                <ChevronDown
                                                    className={cn(
                                                        "ml-auto h-4 w-4 transition-transform duration-200",
                                                        activeCategory === category.id ? "text-white rotate-180" : "text-gray-400",
                                                    )}
                                                />
                                            </motion.button>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* FAQ accordion - right side */}
                <div className="md:col-span-7 lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 relative overflow-hidden"
                    >
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#71bc44]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#71bc44]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative">
                            {searchQuery ? (
                                <h3 className="text-xl font-semibold mb-6 flex items-center">
                                    <Search className="h-5 w-5 mr-2 text-[#71bc44]" />
                                    Search Results
                                </h3>
                            ) : (
                                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-[#71bc44]/10 flex items-center justify-center mr-2">
                    {getCurrentCategoryIcon()}
                  </span>
                                    {categories.find((c) => c.id === activeCategory)?.name || "FAQs"}
                                </h3>
                            )}

                            <div className="space-y-3">
                                <AnimatePresence initial={false}>
                                    {filteredFAQs.length > 0 ? (
                                        filteredFAQs.map((faq, index) => {
                                            const itemId = `${activeCategory}-${index}`
                                            const isOpen = openItems[itemId] || false
                                            const FaqIcon = faq.icon

                                            return (
                                                <motion.div
                                                    key={itemId}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                                    className={cn(
                                                        "border border-gray-100 rounded-xl overflow-hidden transition-all duration-300",
                                                        isOpen ? "shadow-md bg-white" : "bg-gray-50 hover:bg-white",
                                                    )}
                                                >
                                                    <button
                                                        onClick={() => toggleItem(itemId)}
                                                        className="flex items-start justify-between w-full p-5 text-left group"
                                                    >
                                                        <div className="flex items-start">
                                                            <div className="mr-4 mt-0.5">
                                                                <div
                                                                    className={cn(
                                                                        "p-2 rounded-lg transition-colors duration-200",
                                                                        isOpen
                                                                            ? "bg-[#71bc44]/10 text-[#71bc44]"
                                                                            : "bg-gray-100 text-gray-500 group-hover:bg-gray-200",
                                                                    )}
                                                                >
                                                                    <FaqIcon className="h-4 w-4" />
                                                                </div>
                                                            </div>
                                                            <span
                                                                className={cn(
                                                                    "text-base font-medium transition-colors duration-200",
                                                                    isOpen ? "text-[#71bc44]" : "text-gray-800 group-hover:text-gray-900",
                                                                )}
                                                            >
                                {faq.question}
                              </span>
                                                        </div>
                                                        <div
                                                            className={cn(
                                                                "flex-shrink-0 ml-4 h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300",
                                                                isOpen
                                                                    ? "bg-gradient-to-r from-[#71bc44] to-emerald-400 rotate-180"
                                                                    : "bg-gray-100 group-hover:bg-gray-200",
                                                            )}
                                                        >
                                                            <ChevronDown
                                                                className={cn(
                                                                    "h-4 w-4 transition-transform duration-300",
                                                                    isOpen ? "text-white" : "text-gray-500",
                                                                )}
                                                            />
                                                        </div>
                                                    </button>

                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pl-12 pr-4 pb-6">
                                                                    <motion.div
                                                                        initial={{ y: -10, opacity: 0 }}
                                                                        animate={{ y: 0, opacity: 1 }}
                                                                        transition={{ duration: 0.2, delay: 0.1 }}
                                                                        className="prose text-gray-600 text-sm leading-relaxed"
                                                                    >
                                                                        {faq.answer}
                                                                    </motion.div>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>
                                            )
                                        })
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="py-12 text-center bg-gray-50 rounded-xl"
                                        >
                                            <HelpCircle className="mx-auto h-10 w-10 text-gray-300 mb-4" />
                                            <p className="text-gray-500 mb-2">No FAQs found matching your search.</p>
                                            <button
                                                onClick={() => setSearchQuery("")}
                                                className="mt-2 text-[#71bc44] text-sm font-medium hover:underline focus:outline-none"
                                            >
                                                Clear search
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
