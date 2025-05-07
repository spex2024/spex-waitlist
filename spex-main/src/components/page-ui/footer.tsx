"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const social = [
    {
        id: "IG",
        name: "Instagram",
        icon: Instagram,
        link: "https://www.instagram.com/spex_africa?igsh=MWE4bDkzaXQzZ2w2cA",
        color: "#E1306C",
    },
    {
        id: "FB",
        name: "Facebook",
        icon: Facebook,
        link: "https://www.facebook.com/share/rwdLMHF8Hr14Bq4p/?mibextid=qi2Omg",
        color: "#1877F2",
    },
    {
        id: "X",
        name: "Twitter",
        icon: Twitter,
        link: "https://x.com/Spex_Africa?t=b3TmU_Xdfnt8WFdV8yWBdQ&s=09",
        color: "#1DA1F2",
    },
    {
        id: "LI",
        name: "LinkedIn",
        icon: Linkedin,
        link: "https://www.linkedin.com/company/spexafricapp/",
        color: "#0A66C2",
    },
]

const footerLinks = [
    { name: "User Interface", href: "https://user.spexafrica.app" },
    { name: "Vendor Interface", href: "https://vendor.spexafrica.app" },
    { name: "Enterprise Interface", href: "https://enterprise.spexafrica.app" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Blog", href: "/blog" },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const footerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in")
                    }
                })
            },
            { threshold: 0.1 },
        )

        if (footerRef.current) {
            observer.observe(footerRef.current)
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current)
            }
        }
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    }

    return (
        <footer
            ref={footerRef}
            className="relative overflow-hidden text-gray-600"
            style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f0f7ed 100%)",
            }}
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#71bc44]/10 via-[#71bc44] to-[#71bc44]/10"></div>

            <div
                className="absolute top-20 right-20 w-64 h-64 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(113,188,68,0.07) 0%, rgba(113,188,68,0) 70%)" }}
            ></div>

            <div
                className="absolute bottom-40 left-10 w-40 h-40 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(113,188,68,0.05) 0%, rgba(113,188,68,0) 70%)" }}
            ></div>

            <div
                className="absolute -bottom-10 right-1/4 w-80 h-20"
                style={{ background: "linear-gradient(0deg, rgba(113,188,68,0.03) 0%, rgba(113,188,68,0) 100%)" }}
            ></div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12"
                >
                    <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#71bc44]/20 to-transparent rounded-lg blur-sm opacity-75"></div>
                            <div className="relative bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-2 inline-block">
                                <Image
                                    src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1722177650/spex_logo-03_png_dui5ur.png"
                                    alt="Spex Logo"
                                    width={150}
                                    height={96}
                                    className="w-auto h-20"
                                />
                            </div>
                        </motion.div>

                        <p className="text-sm leading-relaxed max-w-md font-light tracking-wide">
                            SPEX is a meal marketplace that leverages a web platform/app to connect food vendors with enterprises and
                            users seeking sustainable food packaging.
                        </p>

                        <div className="flex space-x-4 pt-2">
                            {social.map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{
                                        scale: 1.15,
                                        backgroundColor: item.color,
                                        color: "#fff",
                                        borderColor: "transparent",
                                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                                    }}
                                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                                    className="rounded-full"
                                >
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-[#71bc44]/30 hover:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                    >
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Visit our ${item.name} page`}
                                            className="flex items-center justify-center"
                                        >
                                            <item.icon className="h-4 w-4" />
                                        </a>
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                        <h3 className="text-base font-semibold mb-6 text-[#71bc44] relative inline-block tracking-wider uppercase">
                            Quick Links
                            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#71bc44] to-[#71bc44]/30 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.slice(0, 3).map((link) => (
                                <motion.li
                                    key={link.name}
                                    whileHover={{ x: 5, color: "#71bc44" }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="font-light"
                                >
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center transition-colors duration-300"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 text-[#71bc44] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                        <h3 className="text-base font-semibold mb-6 text-[#71bc44] relative inline-block tracking-wider uppercase">
                            Company
                            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#71bc44] to-[#71bc44]/30 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.slice(3).map((link) => (
                                <motion.li
                                    key={link.name}
                                    whileHover={{ x: 5, color: "#71bc44" }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="font-light"
                                >
                                    <Link href={link.href} className="group flex items-center transition-colors duration-300">
                                        <ChevronRight className="h-4 w-4 mr-2 text-[#71bc44] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
                        <div>
                            <h3 className="text-base font-semibold mb-6 text-[#71bc44] relative inline-block tracking-wider uppercase">
                                Contact Us
                                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#71bc44] to-[#71bc44]/30 rounded-full"></span>
                            </h3>
                            <ul className="space-y-5">
                                <motion.li
                                    className="flex items-center group"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <motion.div
                                        className="h-10 w-10 rounded-full bg-gradient-to-br from-[#71bc44]/20 to-[#71bc44]/5 flex items-center justify-center mr-4 flex-shrink-0 border border-[#71bc44]/10 group-hover:border-[#71bc44]/30 transition-all duration-300"
                                        whileHover={{ scale: 1.1, backgroundColor: "#71bc44", color: "white" }}
                                    >
                                        <Mail className="h-4 w-4 text-[#71bc44] group-hover:text-white transition-colors duration-300" />
                                    </motion.div>
                                    <div className="flex flex-col">
                                        <a
                                            href="mailto:hello@spexafrica.app"
                                            className="hover:text-[#71bc44] transition-colors duration-300 font-light"
                                        >
                                            hello@spexafrica.app
                                        </a>
                                        <a
                                            href="mailto:sales@spexafrica.app"
                                            className="hover:text-[#71bc44] transition-colors duration-300 font-light"
                                        >
                                            sales@spexafrica.app
                                        </a>
                                    </div>
                                </motion.li>
                                <motion.li
                                    className="flex items-center group"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <motion.div
                                        className="h-10 w-10 rounded-full bg-gradient-to-br from-[#71bc44]/20 to-[#71bc44]/5 flex items-center justify-center mr-4 flex-shrink-0 border border-[#71bc44]/10 group-hover:border-[#71bc44]/30 transition-all duration-300"
                                        whileHover={{ scale: 1.1, backgroundColor: "#71bc44", color: "white" }}
                                    >
                                        <Phone className="h-4 w-4 text-[#71bc44] group-hover:text-white transition-colors duration-300" />
                                    </motion.div>
                                    <div className="flex flex-col">
                                        <a
                                            href="tel:+233302515422"
                                            className="hover:text-[#71bc44] transition-colors duration-300 font-light"
                                        >
                                            +233 302 515 422
                                        </a>
                                        <a
                                            href="tel:+233530091529"
                                            className="hover:text-[#71bc44] transition-colors duration-300 font-light"
                                        >
                                            +233 530 091 529
                                        </a>
                                    </div>
                                </motion.li>
                                <motion.li
                                    className="flex items-start group"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <motion.div
                                        className="h-10 w-10 rounded-full bg-gradient-to-br from-[#71bc44]/20 to-[#71bc44]/5 flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-[#71bc44]/10 group-hover:border-[#71bc44]/30 transition-all duration-300"
                                        whileHover={{ scale: 1.1, backgroundColor: "#71bc44", color: "white" }}
                                    >
                                        <MapPin className="h-4 w-4 text-[#71bc44] group-hover:text-white transition-colors duration-300" />
                                    </motion.div>
                                    <address className="not-italic leading-relaxed font-light">
                                        5 Paterson Ave. Adenta Ritz,
                                        <br />
                                        Accra, Ghana
                                    </address>
                                </motion.li>
                            </ul>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <h3 className="text-base font-semibold mb-4 text-[#71bc44] relative inline-block tracking-wider uppercase">
                                Our Mission
                                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#71bc44] to-[#71bc44]/30 rounded-full"></span>
                            </h3>
                            <p className="text-sm leading-relaxed font-light tracking-wide">
                                At Spex, we are committed to transforming the local food industry through innovative technology and
                                sustainable practices. Our goal is to empower vendors, satisfy customers, and contribute to a thriving
                                food ecosystem across Africa.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="mt-16 pt-8 border-t border-gray-200"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(113,188,68,0.03) 0%, rgba(113,188,68,0.07) 50%, rgba(113,188,68,0.03) 100%)",
                    }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center py-4">
                        <motion.p className="text-sm font-light" whileHover={{ scale: 1.02 }}>
                            &copy; {currentYear} Spex. All Rights Reserved.
                        </motion.p>

                        <div className="flex space-x-8 mt-4 md:mt-0">
                            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
                                <Link href="/terms" className="text-sm hover:text-[#71bc44] transition-colors duration-300 font-light">
                                    Terms of Service
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
                                <Link
                                    href="/privacy"
                                    className="text-sm hover:text-[#71bc44] transition-colors duration-300 font-light"
                                >
                                    Privacy Policy
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
                                <Link href="/faq" className="text-sm hover:text-[#71bc44] transition-colors duration-300 font-light">
                                    FAQ
                                </Link>
                            </motion.div>
                        </div>

                        <motion.p className="text-sm mt-4 md:mt-0 font-light" whileHover={{ scale: 1.05 }}>
                            Implemented by{" "}
                            <a
                                href="https://dercolbags.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium hover:text-[#71bc44] transition-colors duration-300"
                            >
                                Dercolbags
                            </a>
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
