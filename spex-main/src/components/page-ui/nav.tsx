"use client"

import Link from "next/link"
import Image from "next/image"

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black font-[family-name:var(--font-geist-sans)]">
            <div className="flex items-center justify-between px-6 md:px-10 h-20">

                {/* Logo */}
                <Link href="/">
                    <Image
                        src="https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1722177650/spex_logo-03_png_dui5ur.png"
                        alt="Spex Logo"
                        width={160}
                        height={64}
                        className="h-14 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Sign up */}
                <Link
                    href="https://main.spexafrica.app/"
                    className="inline-flex items-center bg-[#71bc44] text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-100"
                >
                    Sign Up
                </Link>

            </div>
        </header>
    )
}
