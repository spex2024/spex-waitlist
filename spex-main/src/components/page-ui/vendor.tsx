'use client'

import { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
    name:     z.string().min(1, "Full name is required"),
    email:    z.string().email("Invalid email address"),
    business: z.string().min(1, "Business name is required"),
    phone:    z.string().min(1, "Phone number is required"),
    location: z.string().min(1, "Location is required"),
})
type FormData = z.infer<typeof schema>

export default function Vendor() {
    const [open, setOpen] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

    const onSubmit = (data: FormData) => {
        console.log(data)
        setSubmitted(true)
        setTimeout(() => { setOpen(false); setSubmitted(false) }, 2000)
    }

    return (
        <section className="bg-[#71bc44] border-t-4 border-black font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left copy */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/50 mb-6">— Vendors</p>
                        <h2 className="text-[clamp(40px,6vw,80px)] font-black text-black uppercase leading-[0.9] tracking-[-0.03em] mb-8">
                            Ready to Grow<br />Your Food<br />Business?
                        </h2>
                        <p className="text-base text-black/70 font-medium leading-relaxed mb-10 max-w-md border-l-4 border-black pl-5">
                            Join our exclusive network and connect with enterprises seeking sustainable meal packaging solutions. Expand your reach and boost your sales!
                        </p>
                        <button
                            onClick={() => setOpen(true)}
                            className="inline-flex items-center gap-3 bg-black text-white text-sm font-black uppercase tracking-widest px-8 py-4 border-2 border-black shadow-[5px_5px_0px_#fff] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-100"
                        >
                            Join Now <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Right image */}
                    <div className="relative border-4 border-black shadow-[8px_8px_0px_#000] overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto/v1721310322/waakye_lifucw.webp"
                            alt="Local food vendor"
                            className="w-full h-80 md:h-[440px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black px-6 py-4 border-t-4 border-black">
                            <p className="text-white text-sm font-black uppercase tracking-wide">
                                Spex is empowering <span className="text-[#71bc44]">10,000 local food vendors</span> — Be Part of the Revolution!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
                    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#71bc44] w-full max-w-md">

                        {/* Modal header */}
                        <div className="flex items-center justify-between px-8 py-5 border-b-4 border-black bg-[#71bc44]">
                            <h3 className="text-lg font-black uppercase tracking-tight text-black">Join SPEX Network</h3>
                            <button onClick={() => setOpen(false)} className="w-8 h-8 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-100">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {submitted ? (
                            <div className="px-8 py-16 text-center">
                                <p className="text-2xl font-black uppercase text-[#71bc44]">Application Submitted!</p>
                                <p className="text-sm text-black/60 font-medium mt-2">We'll be in touch soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-8 space-y-4">
                                {[
                                    { id: "name",     label: "Full Name",     type: "text" },
                                    { id: "email",    label: "Email",         type: "email" },
                                    { id: "business", label: "Business Name", type: "text" },
                                    { id: "phone",    label: "Phone Number",  type: "tel" },
                                    { id: "location", label: "Location",      type: "text" },
                                ].map(({ id, label, type }) => (
                                    <div key={id}>
                                        <label htmlFor={id} className="block text-[10px] font-black uppercase tracking-[0.2em] text-black mb-1">{label}</label>
                                        <input
                                            id={id}
                                            type={type}
                                            {...register(id as keyof FormData)}
                                            className="w-full border-2 border-black px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-[#71bc44] focus:shadow-[3px_3px_0px_#71bc44] transition-all"
                                        />
                                        {errors[id as keyof FormData] && (
                                            <p className="text-red-600 text-xs font-bold mt-1">{errors[id as keyof FormData]?.message}</p>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="submit"
                                    className="w-full bg-[#71bc44] text-black text-sm font-black uppercase tracking-widest py-3.5 border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100 mt-2"
                                >
                                    Submit Application
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}
