'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Check, Star, Phone, Mail } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Plans() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const plans = [
        {
            name: "Bronze",
            staff: 10,
            packs: 20,
            pricePerPack: 400,
            totalPrice: 4000,
            sixMonthStaff: 100,
            sixMonthPacks: 200,
            features: ["20 Smartpacks", "Access to SPEX platform", "Pack customization", "Choose up to 2 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
        },
        {
            name: "Silver",
            staff: 25,
            packs: 50,
            pricePerPack: 375,
            totalPrice: 9375,
            sixMonthStaff: 150,
            sixMonthPacks: 300,
            features: ["50 Smartpacks", "Access to SPEX platform", "Pack customization", "Choose up to 2 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
        },
        {
            name: "Gold",
            staff: 50,
            packs: 100,
            pricePerPack: 350,
            totalPrice: 17500,
            sixMonthStaff: 200,
            sixMonthPacks: 400,
            features: ["100 Smartpacks", "Access to SPEX platform", "Pack customization", "Choose up to 2 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
        },
        {
            name: "Custom Solutions",
            staff: null,
            packs: null,
            pricePerPack: null,
            totalPrice: null,
            sixMonthPacks: null,
            features: ["Customized pack quantities", "Flexible payment plan", "Access to SPEX platform", "Pack customization", "Choose up to 2 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
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

    const formatPrice = (price: number) => {
        return price.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
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

                <Tabs defaultValue="onetime" className="w-full">
                    <TabsList className="flex justify-center space-x-4 mb-8 bg-transparent">
                        <TabsTrigger value="onetime"
                                     className="px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#71bc44] data-[state=active]:bg-[#71bc44] data-[state=active]:text-white">One-time
                            Payment</TabsTrigger>
                        <TabsTrigger value="threemonth"
                                     className="px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#71bc44] data-[state=active]:bg-[#71bc44] data-[state=active]:text-white">3
                            Month Payment Plan</TabsTrigger>
                        <TabsTrigger value="sixmonth"
                                     className="px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#71bc44] data-[state=active]:bg-[#71bc44] data-[state=active]:text-white">6
                            Month Payment Plan</TabsTrigger>
                    </TabsList>

                    <div className="grid lg:grid-cols-3 gap-12 py-5">
                        <div className="lg:col-span-2 space-y-12">
                            <TabsContent value="onetime">
                                <p className="text-base text-gray-600 mb-8">
                                    Take advantage of our 10% discount with a one-time payment. All prices are in Ghana
                                    Cedis (GHS).
                                </p>
                                <div className="grid gap-8 sm:grid-cols-2">
                                    {plans.map((plan, index) => (
                                        <Card key={index}
                                              className="overflow-hidden border-0 transition-all duration-300 hover:shadow-2xl group">
                                            <CardHeader
                                                className="p-6 bg-gradient-to-br from-[#71bc44] to-green-500 group-hover:from-green-500 group-hover:to-[#71bc44]">
                                                <CardTitle
                                                    className="text-2xl font-bold text-white flex justify-between items-center">
                                                    <span>{plan.name}</span>
                                                    {plan.staff && <span
                                                        className="text-lg font-normal bg-white bg-opacity-20 px-3 py-1 rounded-full">{plan.staff} Staff</span>}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-6 bg-white">
                                                {plan.totalPrice !== null ? (
                                                    <div className="mb-6 text-center">
                                                        <p className="text-5xl font-bold text-[#71bc44] group-hover:scale-110 transition-transform">₵{formatPrice(plan.totalPrice * 0.9)}</p>
                                                        <p className="text-xl text-gray-500 line-through mt-2">₵{formatPrice(plan.totalPrice)}</p>
                                                        <Badge
                                                            className="mt-3 bg-green-100 text-[#71bc44] px-3 py-1 text-sm font-semibold">Save
                                                            10%</Badge>
                                                    </div>
                                                ) : (
                                                    <div className="mb-6 text-center">
                                                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                                            <DialogTrigger asChild>
                                                                <Badge className="text-lg py-2 px-4 bg-[#71bc44] text-white cursor-pointer">Contact Sales</Badge>
                                                            </DialogTrigger>
                                                            <DialogContent>
                                                                <DialogHeader>
                                                                    <DialogTitle>Contact Sales</DialogTitle>
                                                                </DialogHeader>
                                                                <div className="py-4">
                                                                    <p className="flex items-center mb-2"><Phone className="mr-2" /> Phone: +233 302 515 422</p>
                                                                    <p className="flex items-center"><Mail className="mr-2" /> Email: hello@spexafrica.app</p>
                                                                </div>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>
                                                )}
                                                <ul className="space-y-3">
                                                    {plan.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex}
                                                            className="flex items-center text-sm text-gray-600">
                                                            <Check
                                                                className="h-5 w-5 text-[#71bc44] mr-2 flex-shrink-0"/>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <Button
                                                    className="w-full mt-6 bg-[#71bc44] hover:bg-green-600 text-white"
                                                    onClick={() => window.open('https://enterprise.spexafrica.app/subscribe', '_blank')}
                                                >
                                                    Choose Plan
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="threemonth">
                                <p className="text-lg text-gray-600 mb-8">
                                    Pay the total amount in 3 equal monthly installments. All prices are in Ghana Cedis
                                    (GHS).
                                </p>
                                <div className="grid gap-8 sm:grid-cols-2">
                                    {plans.map((plan, index) => (
                                        <Card key={index}
                                              className="overflow-hidden border-0 transition-all duration-300 hover:shadow-2xl group">
                                            <CardHeader
                                                className="p-6 bg-gradient-to-br from-[#71bc44] to-green-500 group-hover:from-green-500 group-hover:to-[#71bc44]">
                                                <CardTitle
                                                    className="text-2xl font-bold text-white flex justify-between items-center">
                                                    <span>{plan.name}</span>
                                                    {plan.staff && <span
                                                        className="text-lg font-normal bg-white bg-opacity-20 px-3 py-1 rounded-full">{plan.staff} Staff</span>}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-6 bg-white">
                                                {plan.totalPrice !== null ? (
                                                    <div className="mb-6 text-center">
                                                        <p className="text-5xl font-bold text-[#71bc44] group-hover:scale-110 transition-transform">₵{formatPrice(plan.totalPrice / 3)}</p>
                                                        <p className="text-lg text-gray-500 mt-2">per month for 3
                                                            months</p>
                                                        <p className="text-sm text-gray-500 mt-1">Total:
                                                            ₵{formatPrice(plan.totalPrice)}</p>
                                                    </div>
                                                ) : (
                                                    <div className="mb-6 text-center">
                                                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                                            <DialogTrigger asChild>
                                                                <Badge className="text-lg py-2 px-4 bg-[#71bc44] text-white cursor-pointer">Contact Sales</Badge>
                                                            </DialogTrigger>
                                                            <DialogContent>
                                                                <DialogHeader>
                                                                    <DialogTitle>Contact Sales</DialogTitle>
                                                                </DialogHeader>
                                                                <div className="py-4">
                                                                    <p className="flex items-center mb-2"><Phone className="mr-2" /> Phone: +233 302 515 422</p>
                                                                    <p className="flex items-center"><Mail className="mr-2" /> Email: hello@spexafrica.app</p>
                                                                </div>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>
                                                )}
                                                <ul className="space-y-3">
                                                    {plan.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex}

                                                            className="flex items-center text-sm text-gray-600">
                                                            <Check
                                                                className="h-5 w-5 text-[#71bc44] mr-2 flex-shrink-0"/>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <Button
                                                    className="w-full mt-6 bg-[#71bc44] hover:bg-green-600 text-white"
                                                    onClick={() => window.open('https://user.spexafrica.app/subscribe', '_blank')}
                                                >
                                                    Choose Plan
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="sixmonth">
                                <p className="text-lg text-gray-600 mb-8">
                                    Get more staff and Smartpacks with our 6-month plan. Pay in 6 equal monthly
                                    installments. All prices are in Ghana Cedis (GHS).
                                </p>
                                <div className="grid gap-8 sm:grid-cols-2">
                                    {plans.map((plan, index) => (
                                        <Card key={index}
                                              className="overflow-hidden border-0 transition-all duration-300 hover:shadow-2xl group">
                                            <CardHeader
                                                className="p-6 bg-gradient-to-br from-[#71bc44] to-green-500 group-hover:from-green-500 group-hover:to-[#71bc44]">
                                                <CardTitle
                                                    className="text-2xl font-bold text-white flex justify-between items-center">
                                                    <span>{plan.name}</span>
                                                    {plan.sixMonthStaff && <span
                                                        className="text-lg font-normal bg-white bg-opacity-20 px-3 py-1 rounded-full">{plan.sixMonthStaff} Staff</span>}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-6 bg-white">
                                                {plan.totalPrice !== null ? (
                                                    <div className="mb-6 text-center">
                                                        <p className="text-5xl font-bold text-[#71bc44] group-hover:scale-110 transition-transform">₵{formatPrice(plan.totalPrice * 1.15 / 6)}</p>
                                                        <p className="text-lg text-gray-500 mt-2">per month for 6
                                                            months</p>
                                                        <p className="text-sm text-gray-500 mt-1">Total:
                                                            ₵{formatPrice(plan.totalPrice * 1.15)}</p>
                                                    </div>
                                                ) : (
                                                    <div className="mb-6 text-center">
                                                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                                            <DialogTrigger asChild>
                                                                <Badge className="text-lg py-2 px-4 bg-[#71bc44] text-white cursor-pointer">Contact Sales</Badge>
                                                            </DialogTrigger>
                                                            <DialogContent>
                                                                <DialogHeader>
                                                                    <DialogTitle>Contact Sales</DialogTitle>
                                                                </DialogHeader>
                                                                <div className="py-4">
                                                                    <p className="flex items-center mb-2"><Phone className="mr-2" /> Phone: +233 302 515 422</p>
                                                                    <p className="flex items-center"><Mail className="mr-2" /> Email: hello@spexafrica.app</p>
                                                                </div>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>
                                                )}
                                                <ul className="space-y-3">
                                                    {plan.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex}
                                                            className="flex items-center text-sm text-gray-600">
                                                            <Check
                                                                className="h-5 w-5 text-[#71bc44] mr-2 flex-shrink-0"/>
                                                            <span>{feature.replace(/\d+ Smartpacks/, `${plan.sixMonthPacks} Smartpacks`)}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <Button
                                                    className="w-full mt-6 bg-[#71bc44] hover:bg-green-600 text-white"
                                                    onClick={() => window.open('https://user.spexafrica.app/subscribe', '_blank')}
                                                >
                                                    Choose Plan
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        </div>

                        <div className="lg:col-span-1">
                            <Card className="sticky top-6 overflow-hidden border-0 shadow-xl">
                                <CardHeader className="p-6 bg-gradient-to-br from-[#71bc44] to-green-500">
                                    <CardTitle className="text-2xl font-bold text-white flex items-center">
                                        <Star className="mr-2"/> Payment Plan FAQ
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 bg-white">
                                    <Accordion type="single" collapsible className="w-full">
                                        {paymentFAQs.map((faq, index) => (
                                            <AccordionItem key={index} value={`item-${index}`}>
                                                <AccordionTrigger
                                                    className="text-left text-lg font-medium hover:text-[#71bc44] transition-colors">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-gray-600 pt-2 pb-4">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Tabs>

                <div className="text-center">
                    <p className="text-sm text-gray-500">
                        All prices are in Ghana Cedis (GHS). Each staff member receives 2 reusable Smartpacks in
                        standard plans.
                    </p>
                </div>
            </div>
        </div>
    )
}