import React from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

const social = [
    {
        id: 'IG',
        name: "Instagram",
        icon: Instagram,
        link: 'https://www.instagram.com/spex_africa?igsh=MWE4bDkzaXQzZ2w2cA',
    },
    {
        id: 'FB',
        name: "Facebook",
        icon: Facebook,
        link: 'https://www.facebook.com/share/rwdLMHF8Hr14Bq4p/?mibextid=qi2Omg',
    },
    {
        id: 'X',
        name: "Twitter",
        icon: Twitter,
        link: 'https://x.com/Spex_Africa?t=b3TmU_Xdfnt8WFdV8yWBdQ&s=09',
    },
    {
        id: 'LI',
        name: "LinkedIn",
        icon: Linkedin,
        link: 'https://www.linkedin.com/company/spexafricapp/',
    },
]

const footerLinks = [
    { name: 'User Interface', href: 'https://user.spexafrica.app' },
    { name: 'Vendor Interface', href: 'https://vendor.spexafrica.app' },
    { name: 'Enterprise Interface', href: 'https://enterprise.spexafrica.app' },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white text-gray-600">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <img src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1722177650/spex_logo-03_png_dui5ur.png" alt="Spex Logo" className="h-24 w-auto" />
                        <p className="text-sm max-w-md">

                            SPEX is a meal marketplace that leverages a web platform/app to connect food vendors with enterprises and users seeking sustainable food packaging.
                        </p>
                        <div className="flex space-x-4">
                            {social.map((item) => (
                                <Button
                                    key={item.id}
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full border-[#71bc44] hover:bg-[#71bc44] hover:text-white transition-all duration-300 transform hover:scale-110"
                                >
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit our ${item.name} page`}
                                    >
                                        <item.icon className="h-4 w-4" />
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[#71bc44]">Quick Links</h3>
                        <ul className="space-y-4">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center hover:text-[#71bc44] transition-colors duration-300"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2 text-[#71bc44] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[#71bc44]">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-[#71bc44]" />
                                <a href="mailto:hello@spexafrica.app" className="hover:text-[#71bc44] transition-colors duration-300">hello@spexafrica.app</a>
                                <a href="mailto:sales@spexafrica.app" className="hover:text-[#71bc44] transition-colors duration-300">sales@spexafrica.app</a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-[#71bc44]" />
                                <a href="tel:+233302515422" className="hover:text-[#71bc44] transition-colors duration-300"> +233 302 515 422 </a> |
                                <a href="tel:+233530091529" className="hover:text-[#71bc44] transition-colors duration-300"> +233 530 091 529 </a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 mt-1 text-[#71bc44]" />
                                <address className="not-italic">
                                    5 Paterson Ave. Adenta Ritz,<br />
                                    Accra, Ghana
                                </address>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[#71bc44]">Our Mission</h3>
                        <p className="text-sm">
                            At Spex, we're committed to transforming the local food industry through innovative technology and sustainable practices. Our goal is to empower vendors, satisfy customers, and contribute to a thriving food ecosystem across Africa.
                        </p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm">
                            &copy; {currentYear} Spex. All Rights Reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href="/terms" className="text-sm hover:text-[#71bc44] transition-colors duration-300">Terms of Service</Link>
                            <Link href="/privacy" className="text-sm hover:text-[#71bc44] transition-colors duration-300">Privacy Policy</Link>
                        </div>
                        <p className="text-sm mt-4 md:mt-0">
                            Implemented by{' '}
                            <a
                                href="https://dercolbags.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold hover:text-[#71bc44] transition-colors duration-300"
                            >
                                Dercolbags
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}