import { cn } from "@/lib/utils"
import { UtensilsCrossed, Recycle, Leaf } from "lucide-react"

const FeatureIcon = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
    <div className="flex items-center gap-1">
        <Icon className="h-4 w-4" />
        <span className="font-myriad text-sm">{label}</span>
    </div>
)

export default function SmartPackExchangeSection() {
    return (
        <section className={cn(
            "relative w-full h-50 overflow-hidden",
            "bg-center bg-cover bg-fixed bg-no-repeat",
            "py-16 md:py-24 lg:py-32"
        )}
                 style={{
                     backgroundColor: 'rgba(0, 0, 0, 0.6)',
                     backgroundImage: `url(https://res.cloudinary.com/ddwet1dzj/image/upload/v1720549684/office-1_delwsn.jpg)`,
                     backgroundBlendMode: 'multiply'
                 }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 bg-[#71bc44] text-white rounded-full py-1 px-3 w-max">
                            <FeatureIcon icon={UtensilsCrossed} label="eat" />
                            <FeatureIcon icon={Recycle} label="swap" />
                            <FeatureIcon icon={Leaf} label="reuse" />
                        </div>
                        <h1 className={cn(
                            "font-black text-white leading-tight",
                            "text-3xl md:text-6xl lg:text-8xl"
                        )}>
                            Smart Pack <br /> Exchange
                        </h1>
                    </div>
                    <div className="flex flex-col gap-5 px-5 justify-center items-center">
                        <p className={cn(
                            "font-myriad text-white",
                            "text-xl md:text-2xl font-light"
                        )}>
                            SPEX is a meal marketplace that leverages a web platform/app to connect food vendors with
                            enterprises and users seeking sustainable food packaging.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}