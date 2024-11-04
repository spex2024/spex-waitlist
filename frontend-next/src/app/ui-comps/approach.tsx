'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Package, ShoppingCart, UtensilsCrossed, RecycleIcon } from 'lucide-react'

const accordionData = [
    {
        id: 'item-1',
        step: 1,
        title: 'Smart Pack Delivery',
        content: 'At Spex, we deliver reusable food containers (Smartpacks) to restaurants / food Vendors on behalf of Enterprises.',
        icon: Package
    },
    {
        id: 'item-2',
        step: 2,
        title: 'Placing Orders on Spex Platform',
        content: 'Enterprises / Users access take-out meals on the Spex Platform from their preferred food vendors/restaurants.',
        icon: ShoppingCart
    },
    {
        id: 'item-3',
        step: 3,
        title: 'Take-Out Orders by Vendors in Smartpacks',
        content: 'Restaurants/food Vendors prepare Take-out orders for Enterprises / Users in our Smartpacks',
        icon: UtensilsCrossed
    },
    {
        id: 'item-4',
        step: 4,
        title: 'Returning Packs For Reuse',
        content: 'Food vendors deliver new take-out meals in exchange for used and cleaned Smartpacks from Users for Redistribution and Reuse.',
        icon: RecycleIcon
    }
]

export default function ApproachSection() {
    return (
        <section className=" w-full relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                style={{backgroundImage: `url(https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541344/rider_di6odp.jpg)`}}
            />
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-semibold tracking-wider uppercase mb-3 text-[#71bc44]">How It Works</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#71bc44] to-[#90d468]">Our step-by-step approach</h3>
                    <div className="w-24 h-1 bg-[#71bc44] mx-auto"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#71bc44]/20 to-[#90d468]/20 rounded-lg transform -rotate-3"></div>
                        <Image
                            src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1730532072/spex-ui_zwytfw.png"
                            alt="Spex UI"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-2xl relative z-10 transform rotate-3 transition-transform hover:rotate-0 duration-300"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Card className="bg-white/5 backdrop-blur-sm border-none shadow-xl">
                            <CardContent className="p-6">
                                <Accordion type="single" collapsible className="w-full">
                                    {accordionData.map((item, index) => (
                                        <AccordionItem value={item.id} key={item.id} className="border-b border-white/10">
                                            <AccordionTrigger className="text-left hover:no-underline">
                                                <div className="flex items-center">
                          <span className="bg-[#71bc44] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold">
                            {item.step}
                          </span>
                                                    <span className="font-semibold text-lg text-white">{item.title}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="flex items-start mt-4 pl-14">
                                                    <div className="mr-4 text-[#71bc44]">
                                                        <item.icon size={40} />
                                                    </div>
                                                    <p className="text-gray-300">{item.content}</p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <a href="#" className="inline-flex items-center text-[#71bc44] hover:text-[#90d468] transition-colors duration-300">
                        Learn more about our process
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}