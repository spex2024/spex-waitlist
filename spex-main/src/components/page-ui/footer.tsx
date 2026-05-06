import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const social = [
    { label: "IG",  icon: Instagram, href: "https://www.instagram.com/spex_africa?igsh=MWE4bDkzaXQzZ2w2cA" },
    { label: "FB",  icon: Facebook,  href: "https://www.facebook.com/share/rwdLMHF8Hr14Bq4p/?mibextid=qi2Omg" },
    { label: "X",   icon: Twitter,   href: "https://x.com/Spex_Africa?t=b3TmU_Xdfnt8WFdV8yWBdQ&s=09" },
    { label: "LI",  icon: Linkedin,  href: "https://www.linkedin.com/company/spexafricapp/" },
]

const links = [
    { name: "User Interface",       href: "https://user.spexafrica.app" },
    { name: "Vendor Interface",     href: "https://vendor.spexafrica.app" },
    { name: "Enterprise Interface", href: "https://enterprise.spexafrica.app" },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-white border-t-4 border-black font-[family-name:var(--font-geist-sans)]">

            {/* Top strip */}
            <div className="bg-[#71bc44] border-b-4 border-black px-6 md:px-10 py-4 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Africa's First Circular Meal Marketplace</span>
            </div>

            {/* Main grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 border-b-4 border-black">

                    {/* Brand col */}
                    <div className="md:col-span-4 border-r-4 border-black py-12 pr-10">
                        <Image
                            src="https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1722177650/spex_logo-03_png_dui5ur.png"
                            alt="Spex Logo"
                            width={120}
                            height={48}
                            className="w-auto h-14 object-contain mb-8"
                        />
                        <p className="text-sm text-black/60 font-medium leading-relaxed mb-8 max-w-xs">
                            SPEX is a meal marketplace connecting food vendors with enterprises and users seeking sustainable food packaging.
                        </p>
                        <div className="flex gap-3">
                            {social.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 border-2 border-black flex items-center justify-center text-black hover:bg-[#71bc44] hover:border-[#71bc44] transition-all duration-100"
                                >
                                    <s.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="md:col-span-3 border-r-4 border-black py-12 px-10">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-8">Quick Links</h3>
                        <ul className="space-y-3">
                            {links.slice(0, 3).map((l) => (
                                <li key={l.name}>
                                    <a href={l.href} target="_blank" rel="noopener noreferrer"
                                        className="text-sm font-bold text-black hover:text-[#71bc44] hover:underline transition-colors uppercase tracking-wide">
                                        {l.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3 py-12 pl-10">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-8">Contact</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-[#71bc44] mt-0.5 shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <a href="mailto:hello@spexafrica.app" className="text-sm font-medium text-black hover:text-[#71bc44] transition-colors">hello@spexafrica.app</a>
                                    <a href="mailto:sales@spexafrica.app" className="text-sm font-medium text-black hover:text-[#71bc44] transition-colors">sales@spexafrica.app</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-[#71bc44] mt-0.5 shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+233302515422" className="text-sm font-medium text-black">+233 302 515 422</a>
                                    <a href="tel:+233530091529" className="text-sm font-medium text-black">+233 530 091 529</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#71bc44] mt-0.5 shrink-0" />
                                <address className="not-italic text-sm font-medium text-black leading-relaxed">
                                    5 Paterson Ave. Adenta Ritz,<br />Accra, Ghana
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
                    <p className="text-xs font-black uppercase tracking-widest text-black/50">
                        © {year} Spex Africa. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        {["Terms of Service", "Privacy Policy", "FAQ"].map((t) => (
                            <Link key={t} href="#" className="text-xs font-black uppercase tracking-widest text-black/50 hover:text-[#71bc44] transition-colors">{t}</Link>
                        ))}
                    </div>
                    <p className="text-xs font-black uppercase tracking-widest text-black/30">
                        Built by <a href="https://dercolbags.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#71bc44] transition-colors">Dercolbags</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
