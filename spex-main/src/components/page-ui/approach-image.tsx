"use client"

import { useState } from "react"
import Image from "next/image"

interface Props {
    src: string
    alt: string
    stepId: string
    stepTitle: string
}

function Skeleton() {
    return (
        <div className="absolute inset-0 z-10 bg-black/80 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-[#71bc44]/40 animate-pulse" />
                <div className="w-28 h-2 bg-white/10 animate-pulse" />
                <div className="w-16 h-2 bg-white/10 animate-pulse" />
            </div>
        </div>
    )
}

export default function ApproachImage({ src, alt, stepId, stepTitle }: Props) {
    const [imgLoaded, setImgLoaded] = useState(false)

    return (
        <>
            {!imgLoaded && <Skeleton />}
            <Image
                key={stepId}
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                onLoad={() => setImgLoaded(true)}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#71bc44] px-6 py-4 flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Step {stepId}</span>
                <span className="w-px h-4 bg-black/30" />
                <span className="text-sm font-black text-black uppercase tracking-tight">{stepTitle}</span>
            </div>
        </>
    )
}
