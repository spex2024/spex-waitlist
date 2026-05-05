const products = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dlatzzylw/image/upload/v1755078345/PACK_BOTTLE_350_uwyavl.jpg",
        alt: "Smart Meal Pack + Reusable Bottle Combo",
        caption: "Complete Eco Lunch Solution",
        description: "100% reusable smart meal pack with leak-proof compartments plus eco-friendly bottle for sustainable dining.",
        sale: "Save 30% — Best Value Deal",
        badge: "Most Popular",
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dlatzzylw/image/upload/v1755078345/BOTTLE_ONLY_90_hqyp3i.jpg",
        alt: "Premium Reusable Bottle",
        caption: "Eco-Friendly Reusable Bottle",
        description: "Durable, BPA-free reusable bottle that replaces hundreds of single-use bottles.",
        sale: "Limited Time Offer",
        badge: "Eco Champion",
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dlatzzylw/image/upload/v1755078345/PACK_ONLY_279_zfu7zw.jpg",
        alt: "Smart Meal Pack",
        caption: "Reusable Smart Meal Pack",
        description: "Innovative reusable food container with multiple compartments that eliminates disposable lunch boxes.",
        sale: "New Launch Special",
        badge: "Zero Waste",
    },
]

export default function ProductSales() {
    return (
        <section className="bg-black border-t-4 border-black font-[family-name:var(--font-geist-sans)]">

            {/* Header */}
            <div className="border-b-4 border-white/20">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#71bc44] mb-3">— Individual Orders</p>
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.88] tracking-[-0.04em]">
                            Eco-Smart<br />Collection.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-[#71bc44] border-2 border-[#71bc44] px-4 py-2 inline-block">
                            <p className="text-black text-xs font-black uppercase tracking-widest">Up to 30% Off — Individual Orders</p>
                        </div>
                        <p className="text-white/40 text-sm font-medium max-w-xs leading-relaxed">
                            Perfect for individual buyers. Start your sustainable journey today.
                        </p>
                    </div>
                </div>
            </div>

            {/* Product grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.map((p) => (
                        <div key={p.id} className="border-2 border-white/20 hover:border-[#71bc44] group transition-all duration-150">

                            {/* Badge */}
                            <div className="bg-[#71bc44] border-b-2 border-white/20 px-4 py-2 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">{p.badge}</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60">{p.sale}</span>
                            </div>

                            {/* Image */}
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-6 border-t-2 border-white/10">
                                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">{p.caption}</h3>
                                <p className="text-white/50 text-sm font-medium leading-relaxed mb-5">{p.description}</p>
                                <button className="w-full bg-[#71bc44] text-black text-xs font-black uppercase tracking-widest py-3 border-2 border-[#71bc44] shadow-[3px_3px_0px_#fff] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-100">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom strip */}
                <div className="mt-8 border-2 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5">
                    <p className="text-sm font-black uppercase tracking-widest text-white/60">Limited Time Offer — Get Your Personal Pack Today!</p>
                    <p className="text-xs font-medium text-white/30">Perfect for individual buyers · Join the sustainable living movement</p>
                </div>
            </div>
        </section>
    )
}
