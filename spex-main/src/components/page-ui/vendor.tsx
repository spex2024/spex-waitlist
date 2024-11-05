'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {Input} from "@/components/ui/input";

const formSchema = z.object({
    name: z.string().min(1, { message: "Full name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    business: z.string().min(1, { message: "Business name is required" }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    location: z.string().min(1, { message: "Location is required" }),
})

type FormData = z.infer<typeof formSchema>

export default function Vendor() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
        // Here you would typically send the data to your backend
        setIsDialogOpen(false)
    }

    return (
        <div className="bg-gradient-to-br from-[#71bc44] via-[#5a9636] to-[#437026] min-h-screen text-white font-sans py-16 px-4 sm:px-6 lg:px-32 overflow-hidden">
            <div className="w-full max-w-9xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 z-10"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
                        Ready to Grow Your Food Business with SPEX?
                    </h1>
                    <p className="text-xl text-gray-100 max-w-2xl">
                        Join our exclusive network and connect with enterprises seeking sustainable meal packaging solutions. It's time to expand your reach and boost your sales!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsDialogOpen(true)}
                        className="bg-white text-[#71bc44] text-xl font-bold py-4 px-8 rounded-full inline-flex items-center space-x-3 hover:bg-gray-100 transition duration-300"
                    >
                        <span>Join Now</span>
                        <ArrowRight className="w-6 h-6" />
                    </motion.button>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center space-x-4 text-white"
                    >
                        <ArrowRight className="w-6 h-6" />
                        <span className="text-lg font-semibold">Join 10,000+ food vendors already onboard</span>
                    </motion.div>
                </motion.div>
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transform -rotate-3">
                    <img
                        src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1721310322/waakye_lifucw.webp"
                        alt="Delicious local food prepared by vendors"
                        className="w-full h-full object-cover"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-[#71bc44]/80 via-[#71bc44]/50 to-transparent flex flex-col justify-end p-8"
                    >
                        <p className="text-white text-3xl font-bold mb-4">
                            Spex is empowering <span className="bg-white text-[#71bc44] px-2 py-1 rounded-md">10,000 local food vendors</span>
                        </p>
                        <h2 className="text-white text-5xl font-extrabold mb-6">
                            Be Part of the Revolution!
                        </h2>
                    </motion.div>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Join SPEX Network</DialogTitle>
                        <DialogDescription>
                            Fill out this form to join our exclusive network of food vendors. Please provide your business details, including location.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                {...register("name")}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email")}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="business">Business Name</Label>
                            <Input
                                id="business"
                                {...register("business")}
                                aria-invalid={errors.business ? "true" : "false"}
                            />
                            {errors.business && <p className="text-red-500 text-sm">{errors.business.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                {...register("phone")}
                                aria-invalid={errors.phone ? "true" : "false"}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                {...register("location")}
                                aria-invalid={errors.location ? "true" : "false"}
                            />
                            {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                        </div>
                        <Button type="submit" className="w-full bg-[#71bc44] hover:bg-[#5a9636] text-white">
                            Submit Application
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}