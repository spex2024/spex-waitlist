"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const WORDS = ["Eat.", "Swap.", "Earn."]
const PHASE_MS = 900   // ms each word is shown

export default function Preloader() {
    const [phase, setPhase] = useState(0)       // 0-2 words, 3 logo, 4 exiting, 5 done
    const [whiteBg, setWhiteBg] = useState(false)

    useEffect(() => {
        document.body.style.overflow = "hidden"

        const timers = [
            setTimeout(() => setPhase(1), PHASE_MS),
            setTimeout(() => setPhase(2), PHASE_MS * 2),
            setTimeout(() => { setPhase(3); setWhiteBg(true) }, PHASE_MS * 3),
            setTimeout(() => setPhase(4), PHASE_MS * 3 + 1800),
            setTimeout(() => {
                setPhase(5)
                document.body.style.overflow = ""
            }, PHASE_MS * 3 + 1800 + 750),
        ]

        return () => {
            timers.forEach(clearTimeout)
            document.body.style.overflow = ""
        }
    }, [])

    if (phase === 5) return null

    return (
        <div
            className="fixed inset-0 z-[300] flex items-center justify-center"
            style={{
                backgroundColor: whiteBg ? "#fff" : "#000",
                transition: "background-color 0.35s ease, transform 0.65s cubic-bezier(0.76, 0, 0.24, 1)",
                transform: phase === 4 ? "translateY(-100%)" : "translateY(0)",
            }}
        >
            <style>{`
                @keyframes plIn {
                    from { opacity: 0; transform: translateY(32px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes plScale {
                    from { opacity: 0; transform: scale(0.8) translateY(24px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
            `}</style>

            {/* Words */}
            {phase <= 2 && (
                <span
                    key={phase}
                    className="font-black uppercase leading-none select-none tracking-[-0.04em]"
                    style={{
                        fontSize: "clamp(72px, 16vw, 160px)",
                        animation: "plIn 0.42s cubic-bezier(0.16, 1, 0.3, 1) both",
                    }}
                >
                    <span style={{ color: "#71bc44" }}>{WORDS[phase].slice(0, -1)}</span>
                    <span style={{ color: "#fff" }}>.</span>
                </span>
            )}

            {/* Logo — sized by width to match the visual weight of the words */}
            {phase === 3 && (
                <div
                    key="logo"
                    style={{ animation: "plScale 0.55s cubic-bezier(0.16, 1, 0.3, 1) both" }}
                >
                    <Image
                        src="https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1722177650/spex_logo-03_png_dui5ur.png"
                        alt="SPEX Africa"
                        width={800}
                        height={320}
                        priority
                        style={{ width: "clamp(240px, 55vw, 620px)", height: "auto" }}
                    />
                </div>
            )}
        </div>
    )
}
