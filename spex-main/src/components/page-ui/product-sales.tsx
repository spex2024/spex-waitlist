const products = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dlatzzylw/image/upload/v1755078345/PACK_BOTTLE_350_uwyavl.jpg",
      alt: "Smart Meal Pack + Reusable Bottle Combo",
      caption: "Complete Eco Lunch Solution",
      description:
        "100% reusable smart meal pack with leak-proof compartments plus eco-friendly bottle for sustainable dining.",
      saleText: "Save 30% • Best Value Deal",
      highlight: "Most Popular",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dlatzzylw/image/upload/v1755078345/BOTTLE_ONLY_90_hqyp3i.jpg",
      alt: "Premium Reusable Bottle",
      caption: "Eco-Friendly Reusable Bottle",
      description: "Durable, BPA-free reusable bottle that replaces hundreds of single-use bottles for hydration goals.",
      saleText: "Limited Time Offer",
      highlight: "Eco Champion",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dlatzzylw/image/upload/v1755078345/PACK_ONLY_279_zfu7zw.jpg",
      alt: "Smart Meal Pack",
      caption: "Reusable Smart Meal Pack",
      description:
        "Innovative reusable food container with multiple compartments that eliminates disposable lunch boxes.",
      saleText: "New Launch Special",
      highlight: "Zero Waste",
    },
  ]
  
  export default function ProductSales() {
    return (
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold capitalize" style={{ color: "#71bc44" }}>
             Eco-Smart Reusable Collection
            <span className="block text-2xl text-red-600 font-semibold mt-2">🔥 Individual Orders - Up to 30% Off!</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Perfect for individual buyers! Get your personal reusable meal packs and bottles that reduce waste while keeping your food fresh.
            <span className="font-medium" style={{ color: "#71bc44" }}>
              {" "}
              Start your sustainable journey today!
            </span>
          </p>
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg inline-block">
            <p className="text-green-800 font-medium text-sm">✨ Perfect for Personal Use • Individual Orders Welcome</p>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div
                className="absolute top-2 left-2 text-white px-3 py-1 rounded-full text-xs font-semibold z-10"
                style={{ backgroundColor: "#71bc44" }}
              >
                {product.highlight}
              </div>
  
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.alt}
                className="w-full h-auto object-contain bg-gray-50 rounded-lg shadow-sm group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
              />
  
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{product.caption}</h3>
                <div className="h-12 flex items-center justify-center">
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 mt-3">
                  <p className="text-red-700 font-semibold text-sm">{product.saleText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div
          className="text-center mt-12 rounded-lg p-6"
          style={{ background: "linear-gradient(to right, #f0f9ff, rgba(113, 188, 68, 0.1))" }}
        >
          <p className="text-lg font-semibold text-gray-800 mb-2">⏰ Limited Time Offer - Get Your Personal Pack Today!</p>
          <p className="text-gray-600">Perfect for individual buyers - join the sustainable living movement with your own reusable meal solutions</p>
        </div>
      </div>
    )
  }
  