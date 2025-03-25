"use client"

import { useState } from "react"
import { Check, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function Plans() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const plans = [
        {
            name: "Bronze",
            pricePerHead: 739.92,
            features: ["Minimum Staff: 10", "Maximum Vendors: 2", "Budget-Friendly Vendors", "Email Support"],
        },
        {
            name: "Silver",
            pricePerHead: 1399.99,
            features: [
                "Minimum Staff: 10",
                "Maximum Vendors: 3",
                "Pro Vendors",
                "Bring Your Own Vendor or Choose from Our Platform",
                "Email and Phone Support",
            ],
        },
        {
            name: "Gold",
            pricePerHead: 2279.99,
            features: [
                "Minimum Staff: 10",
                "Maximum Vendors: 5",
                "Premium Vendors",
                "Bring Your Own Vendor or Choose from Our Platform",
                "Email and Phone Support",
            ],
        },
    ]

    const paymentFAQs = [
        {
            question: "What is the minimum staff requirement for all plans?",
            answer: "All plans require a minimum of 10 staff members to be eligible.",
        },
        {
            question: "Can I choose my own vendor?",
            answer:
                "Yes! The Silver and Gold plans allow you to bring your own vendor or choose from our platform. The Bronze plan only includes budget-friendly vendors.",
        },
        {
            question: "What type of support is included?",
            answer: "Bronze: Email Support. Silver & Gold: Email and Phone Support.",
        },
        {
            question: "What is the difference between Budget-Friendly, Pro, and Premium Vendors?",
            answer:
                "Budget-Friendly Vendors (Bronze Plan): Vendors that offer affordable meal options. Pro Vendors (Silver Plan): Higher-rated vendors with a variety of meal choices. Premium Vendors (Gold Plan): Top-tier vendors providing premium meal options and services.",
        },
        {
            question: "Can I upgrade my plan later?",
            answer: "Yes, but you must cancel your current plan first before upgrading to a new one.",
        },
        {
            question: "How do I cancel my plan?",
            answer:
                "You can cancel your plan by contacting our support team. Once canceled, you can select a new plan and continue using our services.",
        },
        {
            question: "Are there any hidden fees?",
            answer: "No, all prices are transparent. However, additional services outside the plan may have extra costs.",
        },
    ]

    const formatPrice = (price: number) => {
        return price.toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }

    return (
        <div className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#71bc44] to-green-600">
                        SPEX Enterprise Model
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-500">
                        Choose the perfect plan for your business needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-8">
                    <div className="md:col-span-2 space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {plans.map((plan, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden border-0 transition-all duration-300 hover:shadow-2xl group max-w-md mx-auto w-full"
                                >
                                    <CardHeader className="p-8 bg-gradient-to-br from-[#71bc44] to-green-500 group-hover:from-green-500 group-hover:to-[#71bc44]">
                                        <CardTitle className="text-3xl font-bold text-white text-center">{plan.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-8 bg-white">
                                        <div className="mb-8 text-center">
                                            <p className="text-5xl font-bold text-[#71bc44] group-hover:scale-110 transition-transform">
                                                ₵{formatPrice(plan.pricePerHead)}
                                            </p>
                                            <p className="text-xl text-gray-500 mt-3">per head</p>
                                        </div>
                                        <ul className="space-y-4 mb-8">
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start text-base text-gray-600">
                                                    <Check className="h-5 w-5 text-[#71bc44] mr-3 mt-0.5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button
                                            className="w-full py-6 text-lg bg-[#71bc44] hover:bg-green-600 text-white"
                                            onClick={() => window.open("https://enterprise.spexafrica.app/subscribe", "_blank")}
                                        >
                                            Choose Plan
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-1">
                        <Card className="sticky top-6 overflow-hidden border-0 shadow-xl max-w-xl mx-auto w-full">
                            <CardHeader className="p-8 bg-gradient-to-br from-[#71bc44] to-green-500">
                                <CardTitle className="text-3xl font-bold text-white flex items-center">
                                    <Star className="h-7 w-7 mr-3" /> Frequently Asked Questions
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 bg-white">
                                <Accordion type="single" collapsible className="w-full">
                                    {paymentFAQs.map((faq, index) => (
                                        <AccordionItem key={index} value={`item-${index}`}>
                                            <AccordionTrigger className="text-left text-lg font-medium hover:text-[#71bc44] transition-colors py-4">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-gray-600 text-base pt-2 pb-6 px-1">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-500">All prices are in Ghana Cedis (GHS).</p>
                </div>
            </div>
        </div>
    )
}

