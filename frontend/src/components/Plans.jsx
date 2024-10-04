import { useState } from 'react'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
    const [expandedFaq, setExpandedFaq] = useState(null)

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index)
    }

    const faqItems = [
        { question: "How does the pricing work?", answer: "Our pricing is based on the number of employees. Each employee receives 2 meal packs. It's a one-time payment for the packs you choose, with a 10% discount applied to our standard plans." },
        { question: "Can I bring my own vendor?", answer: "Yes, you can bring your own vendor or choose from vendors available on our platform. You can work with a maximum of two vendors across all plans." },
        { question: "What kind of support do you offer?", answer: "We offer equal support for all plans, including email and phone assistance for any queries or issues you may have." },
    ]

    const plans = [
        {
            name: "Bronze",
            staff: 10,
            packs: 20,
            pricePerPack: 400,
            totalPrice: 4000,
            features: ["10 staff members", "20 smart packs", "2 smart packs per staff", "Access to SPEX platform", "Choose up to 2 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
        },
        {
            name: "Silver",
            staff: 25,
            packs: 50,
            pricePerPack: 375,
            totalPrice: 9375,
            features: ["25 staff members", "50 smart packs", "2 smart packs per staff", "Access to SPEX platform","Choose up to 2 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
        },
        {
            name: "Gold",
            staff: 50,
            packs: 100,
            pricePerPack: 350,
            totalPrice: 17500,
            features: ["50 staff members", "100 smart packs", "2 smart packs per staff", "Access to SPEX platform", "Choose up to 2 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
        },
        {
            name: "Custom Solutions",
            staff: null,
            packs: null,
            pricePerPack: null,
            totalPrice: null,
            features: ["Flexible staff numbers", "Customized pack quantities", "Flexible payment plan","Access to SPEX platform","Pack customization", "Choose up to 2 vendors", "Email and phone support", "Bring your own vendor or choose from our platform"]
        },
    ]

    return (
        <div className="min-h-screen flex items-center justify-center py-10 px-4 bg-gray-50">
            <Card className="w-full max-w-7xl bg-white shadow-2xl rounded-lg overflow-hidden">
                <CardHeader className="p-6 bg-[#71bc44] text-white">
                    <CardTitle className="text-3xl font-bold flex items-center justify-between">
                        <span>Spex Enterprise Pricing Plans</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/3 space-y-4">
                            <h2 className="font-bold text-xl text-gray-800 mb-4">Frequently Asked Questions</h2>
                            {faqItems.map((item, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4">
                                    <button
                                        className="flex justify-between items-center w-full text-left transition-colors hover:text-[#71bc44]"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span className="font-medium text-gray-700 text-sm">{item.question}</span>
                                        {expandedFaq === index ? <ChevronUp className="h-5 w-5 text-[#71bc44]" /> : <ChevronDown className="h-5 w-5 text-[#71bc44]" />}
                                    </button>
                                    {expandedFaq === index && (
                                        <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="lg:w-2/3 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            {plans.map((plan, index) => (
                                <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-0">
                                        <div className="w-full flex items-center justify-between bg-gradient-to-r from-[#71bc44] to-green-400 p-4 text-white">
                                            <div>
                                                <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
                                                {plan.staff && <p className="text-sm">{plan.staff} Staff</p>}
                                            </div>

                                            {plan.totalPrice !== null ? (
                                                <div className="mt-2 text-right">
                                                    <p className="font-bold text-2xl">
                                                        ₵{Math.round(plan.totalPrice * 0.9).toLocaleString()}
                                                    </p>
                                                    <p className="text-sm line-through">
                                                        ₵{plan.totalPrice.toLocaleString()}
                                                    </p>
                                                    <p className="text-sm">
                                                        ₵{Math.round(plan.pricePerPack * 0.9)} per staff
                                                    </p>
                                                    <p className="text-xs mt-1">One-time payment</p>
                                                </div>
                                            ) : (
                                                <Badge variant="secondary" className="mt-2 bg-white text-[#71bc44]">Contact Sales</Badge>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <ul className="space-y-2">
                                                {plan.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <Check className="h-4 w-4 text-[#71bc44] mr-2 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            10% discount applied to all standard plans. Prices in Ghana Cedis (GHS). One-time payment for meal packs. Each staff member receives 2 packs.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}