"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Store, Truck, Package, ArrowRight } from "lucide-react"

const data = [
    { value: 4631, label: "Registered Users", icon: Users, suffix: "" },
    { value: 10, label: "Vendors", icon: Store, suffix: "+" },
    { value: 4, label: "Partner Couriers", icon: Truck, suffix: "" },
    { value: 1811, label: "Number Of Orders", icon: Package, suffix: "" },
]

// Custom counter hook
const useCounter = (end: number, duration = 2) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime: number
        let animationFrame: number

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            setCount(Math.floor(progress * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step)
            } else {
                setCount(end)
            }
        }

        animationFrame = requestAnimationFrame(step)
        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration])

    return count
}

const CounterCard = ({ item, index }: { item: (typeof data)[0]; index: number }) => {
    const count = useCounter(item.value)
    const controls = useAnimation()

    useEffect(() => {
        controls.start({ scale: [1, 1.05, 1], transition: { duration: 0.3 } })
    }, [count, controls])

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
                y: -8,
                transition: { duration: 0.2 },
            }}
        >
            <Card className="relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 text-white group hover:bg-black/60 hover:border-yellow-300/50 transition-all duration-300">
                <motion.div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="flex flex-col items-center justify-center p-8 relative z-10">
                    <motion.div
                        animate={controls}
                        className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center mb-6 border border-yellow-300/30 group-hover:border-yellow-300 transition-all duration-300"
                    >
                        <item.icon className="w-8 h-8 text-yellow-300" />
                    </motion.div>
                    <motion.div className="flex items-baseline">
                        <motion.h2
                            className="font-bold text-4xl lg:text-5xl mb-3 text-yellow-300"
                            animate={{ opacity: [1, 0.8, 1] }}
                            transition={{ duration: 0.2, times: [0, 0.5, 1] }}
                        >
                            {count}
                        </motion.h2>
                        <span className="text-yellow-300 text-2xl font-bold ml-1">{item.suffix}</span>
                    </motion.div>
                    <p className="text-sm lg:text-base font-light text-center text-white/80">{item.label}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default function Pilot() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Start the animation after component mounts
        setIsVisible(true)
    }, [])

    return (
        <div
            className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541343/prosp_rni5kb.jpg)`,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                backgroundBlendMode: "multiply",
            }}
        >
            <AnimatePresence>
                {isVisible && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative flex flex-col items-center text-white mb-16"
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "80px" }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="h-1 bg-yellow-300 mb-6"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="font-light text-xl mb-3 text-yellow-300 tracking-wider"
                            >
                                PILOTING RESULTS
                            </motion.p>
                            <motion.h1
                                className="text-center text-3xl lg:text-5xl font-bold leading-tight max-w-3xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                Traction during our{" "}
                                <span className="text-yellow-300 relative">
                  1st pilot
                  <motion.span
                      className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                  />
                </span>
                            </motion.h1>

                            {/*<motion.div*/}
                            {/*    initial={{ opacity: 0 }}*/}
                            {/*    animate={{ opacity: 1 }}*/}
                            {/*    transition={{ duration: 0.5, delay: 1.4 }}*/}
                            {/*    className="mt-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer group"*/}
                            {/*>*/}
                            {/*    <span>View detailed report</span>*/}
                            {/*    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />*/}
                            {/*</motion.div>*/}
                        </motion.div>

                        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {data.map((item, index) => (
                                <CounterCard key={index} item={item} index={index} />
                            ))}
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
