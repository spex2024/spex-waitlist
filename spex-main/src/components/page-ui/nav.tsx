"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll, { passive: true })

        // Check initial scroll position
        handleScroll()

        // Clean up
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scrolled])

    const navItems = [
        { label: "About", href: "#" },
        { label: "Problem", href: "#" },
        { label: "Solution", href: "#" },
        { label: "How it works", href: "#" },
        { label: "Plans", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Pilot", href: "#" },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 mb-20  bg-gradient-to-b from-white via-[#f8fcf6] ",
                scrolled ? "py-2 md:py-3" : "py-4 md:py-6",
            )}
        >
            <div className="container mx-auto px-4">
                <div
                    className={cn(
                        "flex items-center justify-between md:justify-center relative mx-auto max-w-6xl rounded-full transition-all duration-300",
                        scrolled
                            ? "bg-white/40 backdrop-blur-lg shadow-lg border border-white/30"
                            : "bg-white/30 ",
                        "px-4 py-4",
                    )}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/5 pointer-events-none" />
                    {/* Logo - positioned absolutely on the left on desktop */}
                    <div
                        className={cn(
                            "md:absolute md:left-6 flex items-center gap-2 transition-all duration-300",
                            scrolled ? "scale-90" : "scale-100",
                        )}
                    >
                        <div className=" w-auto relative">
                            <Image
                                src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1722177650/spex_logo-03_png_dui5ur.png"
                                alt="Spex Logo"
                                width={100}
                                height={32}
                                className="object-contain"
                            />


                        </div>
                    </div>

                    {/* Mobile menu button - only visible on small screens */}
                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild className="md:hidden ml-auto">
                            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-[#71bc44]">
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                            <nav className="flex flex-col gap-6 mt-6">
                                <ul className="flex flex-col space-y-4">
                                    {navItems.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className="text-gray-800 hover:text-[#71bc44] block py-1 transition-colors duration-200 text-lg font-medium"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    asChild
                                    className="bg-[#71bc44] hover:bg-[#5da336] text-white rounded-full w-fit transition-all duration-300 hover:shadow-lg"
                                >
                                    <Link href="#">Sign up</Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>

                    {/* Desktop Navigation - centered on desktop */}
                    <nav className="hidden md:flex items-center justify-center">
                        <ul className="flex space-x-8">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-800 hover:text-[#71bc44] font-medium relative py-2 transition-colors duration-200 group"
                                    >
                                        {item.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#71bc44] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Sign up button - positioned absolutely on the right on desktop */}
                    <div className="hidden md:block md:absolute md:right-6">
                        <Button
                            asChild
                            className={cn(
                                "bg-[#71bc44] hover:bg-[#5da336] text-white rounded-full transition-all duration-300 hover:shadow-lg",
                                scrolled ? "px-5 py-1.5" : "px-6 py-2",
                            )}
                        >
                            <Link href="#">Sign up</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
