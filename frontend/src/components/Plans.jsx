'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Plans() {
    const plans = [
        {
            name: "Bronze",
            staff: 10,
            packs: 20,
            pricePerPack: 400,
            totalPrice: 4000,
            sixMonthStaff: 100,
            sixMonthPacks: 200,
            features: ["20 Smartpacks", "Access to SPEX platform", "Pack customization", "Choose up to 3 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
        },
        {
            name: "Silver",
            staff: 25,
            packs: 50,
            pricePerPack: 375,
            totalPrice: 9375,
            sixMonthStaff: 150,
            sixMonthPacks: 300,
            features: ["50 Smartpacks", "Access to SPEX platform", "Pack customization", "Choose up to 3 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
        },
        {
            name: "Gold",
            staff: 50,
            packs: 100,
            pricePerPack: 350,
            totalPrice: 17500,
            sixMonthStaff: 200,
            sixMonthPacks: 400,
            features: ["100 Smartpacks", "Access to SPEX platform", "Pack customization", "Choose up to 3 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
        },
        {
            name: "Custom Solutions",
            staff: null,
            packs: null,
            pricePerPack: null,
            totalPrice: null,
            sixMonthPacks: null,
            features: ["Customized pack quantities", "Flexible payment plan", "Access to SPEX platform", "Pack customization", "Choose up to 3 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
        },
    ]

    const paymentFAQs = [
        {
            question: "What are the payment options available?",
            answer: "We offer three payment options: a one-time payment with a 10% discount, a 3-month payment plan, and a 6-month plan with increased Smartpacks."
        },
        {
            question: "How does the one-time payment work?",
            answer: "With the one-time payment option, you pay the full amount upfront and receive a 10% discount on the total price. This discount is only available for standard plans when you choose the one-time payment option."
        },
        {
            question: "How does the 3-month payment plan work?",
            answer: "The 3-month payment plan allows you to divide the total amount into 3 equal monthly installments. You'll pay the first installment at the time of purchase, and the remaining two installments will be automatically charged in the following two months."
        },
        {
            question: "How does the 6-month plan work?",
            answer: "The 6-month plan offers an increased number of staff and Smartpacks. For Bronze, you get 100 staff and 200 Smartpacks; for Silver, 150 staff and 300 Smartpacks; and for Gold, 200 staff and 400 Smartpacks. The total cost is divided into 6 equal monthly installments for easier budgeting."
        },
        {
            question: "Is there a difference in what I receive between the payment options?",
            answer: "Yes, the 6-month plan offers more Smartpacks compared to the other options. The one-time payment offers a 10% discount, while the 3-month plan splits the payment without any changes to the package."
        },
        {
            question: "Can I switch between payment plans?",
            answer: "Yes, you can switch between payment plans. For the 6-month plan, you have the flexibility to switch to a different plan at the end of any month. For other plans, you can switch when renewing or upgrading your plan. Contact our support team for assistance with plan changes."
        },
        {
            question: "Are there any additional fees for the 3-month or 6-month payment plans?",
            answer: "No, there are no additional fees or interest charges for choosing the 3-month or 6-month payment plans. You'll pay the total amount divided into equal installments."
        }
    ]

    const formatPrice = (price) => {
        return price.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-10 px-4 bg-gray-50">
            <Card className="w-full max-w-7xl bg-white shadow-2xl rounded-lg overflow-hidden">
                <CardHeader className="p-6 bg-[#71bc44] text-white">
                    <CardTitle className="text-3xl font-bold flex items-center justify-between">
                        <span>SPEX Enterprise Model Pricing Plans</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <Tabs defaultValue="onetime" className="w-full mb-6">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="onetime">One-time Payment</TabsTrigger>
                            <TabsTrigger value="threemonth">3 Month Payment Plan</TabsTrigger>
                            <TabsTrigger value="sixmonth">6 Month Payment Plan</TabsTrigger>
                        </TabsList>
                        <TabsContent value="onetime" className="mt-4">
                            <p className="text-sm text-gray-600 mb-4">
                                Take advantage of our 10% discount with a one-time payment. All prices are in Ghana Cedis (GHS).
                            </p>
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                {plans.map((plan, index) => (
                                    <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <CardContent className="p-0">
                                            <div className="w-full flex items-center justify-between bg-gradient-to-r from-[#71bc44] to-green-400 p-4 text-white">
                                                <div>
                                                    <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
                                                    {plan.staff && <p className="text-sm">{plan.staff} Staff</p>}
                                                </div>
                                                {plan.totalPrice !== null ? (
                                                    <div className="mt-2 text-right">
                                                        <p className="font-bold text-2xl">
                                                            ₵{formatPrice(plan.totalPrice * 0.9)}
                                                        </p>
                                                        <p className="text-sm line-through">
                                                            ₵{formatPrice(plan.totalPrice)}
                                                        </p>
                                                        <p className="text-xs mt-1">One-time payment</p>
                                                    </div>
                                                ) : (
                                                    <Badge variant="secondary" className="mt-2 bg-white text-[#71bc44]">Contact Sales</Badge>
                                                )}
                                            </div>
                                            <div className="p-4">
                                                <ul className="space-y-2">
                                                    {plan.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                            <Check className="h-4 w-4 text-[#71bc44] mr-2 flex-shrink-0" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="threemonth" className="mt-4">
                            <p className="text-sm text-gray-600 mb-4">
                                Pay the total amount in 3 equal monthly installments. All prices are in Ghana Cedis (GHS).
                            </p>
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                {plans.map((plan, index) => (
                                    <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <CardContent className="p-0">
                                            <div className="w-full flex items-center justify-between bg-gradient-to-r from-[#71bc44] to-green-400 p-4 text-white">
                                                <div>
                                                    <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
                                                    {plan.staff && <p className="text-sm">{plan.staff} Staff</p>}
                                                </div>
                                                {plan.totalPrice !== null ? (
                                                    <div className="mt-2 text-right">
                                                        <p className="font-bold text-2xl">
                                                            ₵{formatPrice(plan.totalPrice / 3)}
                                                        </p>
                                                        <p className="text-sm">
                                                            per month for 3 months
                                                        </p>
                                                        <p className="text-xs mt-1">Total: ₵{formatPrice(plan.totalPrice)}</p>
                                                    </div>
                                                ) : (
                                                    <Badge variant="secondary" className="mt-2 bg-white text-[#71bc44]">Contact Sales</Badge>
                                                )}
                                            </div>
                                            <div className="p-4">
                                                <ul className="space-y-2">
                                                    {plan.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                            <Check className="h-4 w-4 text-[#71bc44] mr-2 flex-shrink-0" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="sixmonth" className="mt-4">
                            <p className="text-sm text-gray-600 mb-4">
                                Get more staff and Smartpacks with our 6-month plan. Pay in 6 equal monthly installments. All prices are in Ghana Cedis (GHS).
                            </p>
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                {plans.map((plan, index) => (
                                    <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <CardContent className="p-0">
                                            <div className="w-full flex items-center justify-between bg-gradient-to-r from-[#71bc44] to-green-400 p-4 text-white">
                                                <div>
                                                    <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
                                                    {plan.sixMonthStaff && <p className="text-sm">{plan.sixMonthStaff} Staff</p>}
                                                </div>
                                                {plan.totalPrice !== null ? (
                                                    <div className="mt-2 text-right">
                                                        <p className="font-bold text-2xl">
                                                            ₵{formatPrice(plan.totalPrice * 1.15 / 6)}
                                                        </p>
                                                        <p className="text-sm">
                                                            per month for 6 months
                                                        </p>
                                                        <p className="text-xs mt-1">Total: ₵{formatPrice(plan.totalPrice * 1.15)}</p>
                                                    </div>
                                                ) : (
                                                    <Badge variant="secondary" className="mt-2 bg-white text-[#71bc44]">Contact Sales</Badge>
                                                )}
                                            </div>
                                            <div className="p-4">
                                                <ul className="space-y-2">
                                                    {plan.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                            <Check className="h-4 w-4 text-[#71bc44] mr-2 flex-shrink-0" />
                                                            <span>{feature.replace(/\d+ Smartpacks/, `${plan.sixMonthPacks} Smartpacks`)}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                    <div className="mt-8">
                        <h2 className="font-bold text-2xl text-gray-800 mb-4">Payment Plan FAQ</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {paymentFAQs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            All prices are in Ghana Cedis (GHS). Each staff member receives 2 reusable Smartpacks in standard plans.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}