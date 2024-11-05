'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Leaf, Users, Building, ChefHat, ShieldCheck, ArrowRight, Menu, X, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const toggleModal = () => setIsModalOpen(!isModalOpen)

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <header className="px-4 lg:px-6 h-20 flex items-center justify-between bg-white shadow-md sticky top-0 z-50">
                <div className="flex items-center space-x-4">
                    <Image
                        src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1722177650/spex_logo-03_png_dui5ur.png"
                        alt="SPEX Logo"
                        width={120}
                        height={40}
                        className="rounded-lg"
                    />
                    <nav className="hidden md:flex space-x-6">
                        {["Features", "Demo", "About"].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase()}`} className="text-[#2c3e50] hover:text-[#71bc44] transition-colors text-lg font-medium">
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <Button
                        className="bg-[#71bc44] hover:bg-[#5a9636] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                        onClick={toggleModal}
                    >
                        Contact Sales
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </header>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md p-4">
                    {["Features", "Demo", "About"].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-[#2c3e50] hover:text-[#71bc44] transition-colors text-lg font-medium">
                            {item}
                        </Link>
                    ))}
                </div>
            )}

            <main className="flex-1">
                <section className="relative bg-gradient-to-br from-[#f0f9eb] to-white py-20 lg:py-32 overflow-hidden">
                    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-10 lg:mb-0">
                            <h1 className="text-4xl lg:text-5xl font-bold text-[#2c3e50] leading-tight mb-6">
                                Revolutionize <span className="text-[#71bc44]">Corporate Lunch</span> with Eco-Friendly Solutions
                            </h1>
                            <p className="text-xl text-[#5a6c7d] mb-8">
                                SPEX simplifies meal planning, reduces costs, and minimizes plastic waste. Join the sustainable food revolution today!
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link href="https://spexafrica.app" className="w-full sm:w-auto">
                                    <Button className="w-full bg-[#71bc44] hover:bg-[#5a9636] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
                                        Get Started
                                    </Button>
                                </Link>
                                <Link href="#demo" className="w-full sm:w-auto">
                                    <Button className="w-full bg-white hover:bg-[#f0f9eb] text-[#71bc44] border-2 border-[#71bc44] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
                                        Explore Demos
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative mt-10 lg:mt-0">
                            <Image
                                src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541196/spex_jrkich.jpg"
                                alt="SPEX Demo"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-2">
                                <Leaf className="text-[#71bc44] w-8 h-8" />
                                <span className="text-sm font-medium text-[#2c3e50]">100% Eco-Friendly Packaging</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#2c3e50] mb-12">Why Choose SPEX?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Sustainable", icon: Leaf, description: "Reduce plastic waste with our reusable packs" },
                                { title: "Cost-Effective", icon: Users, description: "Save on meal planning and packaging costs" },
                                { title: "Time-Saving", icon: ChefHat, description: "Streamline your team's lunch process" },
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center p-6 bg-[#f0f9eb] rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
                                    <div className="bg-[#71bc44] p-3 rounded-full mb-4">
                                        <item.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">{item.title}</h3>
                                    <p className="text-center text-[#5a6c7d]">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="demo" className="py-20 bg-[#f0f9eb]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#2c3e50] mb-12">Explore Our Demo Portals</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "User Portal", icon: Users, link: "https://user.spexafrica.site", description: "Experience the employee interface" },
                                { title: "Enterprise Dashboard", icon: Building, link: "https://enterprise.spexafrica.site", description: "Manage your organization's meal program" },
                                { title: "Vendor Platform", icon: ChefHat, link: "https://vendor.spexafrica.site", description: "Explore the food provider's tools" },
                                { title: "Admin Console", icon: ShieldCheck, link: "https://admin.spexafrica.site", description: "Overview of the system management" },
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="bg-[#71bc44] p-3 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">{item.title}</h3>
                                    <p className="text-center text-[#5a6c7d] mb-4">{item.description}</p>
                                    <ArrowRight className="h-6 w-6 text-[#71bc44] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-[#71bc44] text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Corporate Lunch?</h2>
                        <p className="text-xl mb-8">Explore our demo portals and see SPEX in action!</p>
                        <Link
                            href="https://spexafrica.app"
                            className="inline-block bg-white text-[#71bc44] hover:bg-[#f0f9eb] px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-lg"
                        >
                            Get Started
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="py-12 bg-[#2c3e50] text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-8 md:mb-0">
                            <Image
                                src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1722177650/spex_logo-03_png_dui5ur.png"
                                alt="SPEX Logo"
                                width={100}
                                height={40}
                                className="rounded-lg"
                            />
                        </div>
                        <nav className="flex flex-wrap justify-center space-x-6 mb-8 md:mb-0">
                            {["Privacy Policy", "Terms of Service", "Contact Us"].map((item) => (
                                <Link key={item} href="#" className="hover:text-[#71bc44] transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="mt-8 text-center text-sm">
                        © {new Date().getFullYear()} SPEX Africa. All rights reserved.
                    </div>
                </div>
            </footer>

            {/* Contact Sales Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">Contact Sales</h2>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Phone className="text-[#71bc44]" />
                                <p className="text-[#5a6c7d]">(233) 302 515 422 | 530 091 529</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="text-[#71bc44]" />
                                <div>
                                    <p className="text-[#5a6c7d]">hello@spexafrica.app</p>
                                    <p className="text-[#5a6c7d]">sales@spexafrica.app</p>
                                </div>
                            </div>
                        </div>
                        <Button
                            className="mt-6 w-full bg-[#71bc44] hover:bg-[#5a9636] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                            onClick={toggleModal}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}