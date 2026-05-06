"use client"

import { useState } from "react"

const WA_NUMBER = "233530091529"

const options = [
    {
        label: "General Inquiry",
        message: "Hello SPEX! I have a general inquiry.",
    },
    {
        label: "Sign Up / Onboarding",
        message: "Hello SPEX! I need help with signing up or onboarding.",
    },
    {
        label: "Enterprise Partnership",
        message: "Hello SPEX! I'm interested in an enterprise partnership.",
    },
]

const waLink = (msg: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

const WaIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
)

export default function WhatsAppButton() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed bottom-[5rem] right-6 z-50 flex flex-col items-end">

            {/* Popup card — opens upward */}
            {open && (
                <div className="mb-3 w-72 bg-black border-2 border-black shadow-[6px_6px_0px_#25D366]">
                    {/* Header */}
                    <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between border-b-2 border-black">
                        <div className="flex items-center gap-2">
                            <WaIcon className="w-4 h-4 fill-black shrink-0" />
                            <span className="text-[11px] font-black uppercase tracking-widest text-black">
                                Chat with SPEX
                            </span>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-black font-black text-sm leading-none hover:opacity-60 transition-opacity"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Greeting */}
                    <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-white/70 text-[11px] font-medium leading-relaxed">
                            Hi there! 👋 How can we help you? Choose a topic to start chatting.
                        </p>
                    </div>

                    {/* Options */}
                    <div className="p-3 flex flex-col gap-2">
                        {options.map((opt) => (
                            <a
                                key={opt.label}
                                href={waLink(opt.message)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-4 py-3 border-2 border-white/20 text-white text-[11px] font-bold uppercase tracking-wide hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all duration-100"
                            >
                                {opt.label}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0 ml-2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Trigger button */}
            <button
                onClick={() => setOpen(!open)}
                aria-label="Chat on WhatsApp"
                className="bg-[#25D366] text-black text-[10px] font-black uppercase tracking-widest px-4 py-3 border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-100 flex items-center gap-2"
            >
                <WaIcon className="w-4 h-4 fill-black shrink-0" />
                {open ? "Close" : "Need help?"}
            </button>
        </div>
    )
}
