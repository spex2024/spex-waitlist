'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Users, Store, Truck, Package } from 'lucide-react'

const data = [
    { value: "4631", label: "Registered Users", icon: Users },
    { value: "10", label: "Vendors", icon: Store },
    { value: "4", label: "Partner Couriers", icon: Truck },
    { value: "1811", label: "Number Of Orders", icon: Package },
]

export default function Pilot() {
    return (
        <div
            className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541343/prosp_rni5kb.jpg)`,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                backgroundBlendMode: 'multiply'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center text-white mb-12"
            >
                <p className="font-light text-xl mb-3 text-yellow-300">Piloting</p>
                <h1 className="text-center text-3xl lg:text-5xl font-bold leading-tight">
                    Traction during our <span className="text-yellow-300">1st pilot</span>
                </h1>
            </motion.div>
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="bg-black/50 backdrop-blur-sm border-none text-white hover:bg-black/60 transition-all duration-300">
                            <CardContent className="flex flex-col items-center justify-center p-6">
                                <item.icon className="w-12 h-12 mb-4 text-yellow-300" />
                                <h2 className="font-bold text-4xl lg:text-5xl mb-2 text-yellow-300">{item.value}</h2>
                                <p className="text-sm lg:text-base font-light text-center">{item.label}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}