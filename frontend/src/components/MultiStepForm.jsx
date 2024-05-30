import React, { useState } from 'react';
import { MdOutlineHorizontalRule } from "react-icons/md";
import Fetch from "../hooks/Fetch.jsx";

const MultiStepForm = ({ setShowModal, setShowSuccessMessage }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const { createFeedback } = Fetch();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
        answer6: '',
        answer7: '',
        answer8: ''
    });

    const [errors, setErrors] = useState({});

    const steps = [
        "Step 1: Info",
        "Step 2: Info",
        "Step 3: Info",
        "Step 4: Info",
        "Step 5: Info",
        "Step 6: Info",
        "Step 7: Info",
        "Step 8: Info",
        "Step 9: Info",
        "Step 10: Info",
        "Step 11: Info",
        "Step 12: Info",
    ];

    const validate = () => {
        const newErrors = {};
        if (currentStep === 1 && !formData.name) {
            newErrors.name = "Name is required";
        }
        if (currentStep === 2 && !formData.email) {
            newErrors.email = "Email is required";
        } else if (currentStep === 2 && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid";
        }
        if (currentStep === 3 && !formData.phone) {
            newErrors.phone = "Phone number is required";
        } else if (currentStep === 3 && !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number is invalid";
        }
        if (currentStep === 4 && !formData.company) {
            newErrors.company = "Company is required";
        }
        if (currentStep === 5 && !formData.answer1) {
            newErrors.answer1 = "This field is required";
        }
        if (currentStep === 6 && !formData.answer2) {
            newErrors.answer2 = "This field is required";
        }
        if (currentStep === 7 && !formData.answer3) {
            newErrors.answer3 = "This field is required";
        }
        if (currentStep === 8 && !formData.answer4) {
            newErrors.answer4 = "This field is required";
        }
        if (currentStep === 9 && !formData.answer5) {
            newErrors.answer5 = "This field is required";
        }
        if (currentStep === 10 && !formData.answer6) {
            newErrors.answer6 = "This field is required";
        }
        if (currentStep === 11 && !formData.answer7) {
            newErrors.answer7 = "This field is required";
        }
        if (currentStep === 12 && !formData.answer8) {
            newErrors.answer8 = "This field is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async () => {
        if (validate()) {
            // Submit the form data
            console.log("Form submitted:", formData);
            await createFeedback(formData);

            // Reset form data
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                answer1: '',
                answer2: '',
                answer3: '',
                answer4: '',
                answer5: '',
                answer6: '',
                answer7: '',
                answer8: ''
            });

            // Reset to step 1
            setCurrentStep(1);

            // Close the modal and show success message
            setShowModal(false);
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 3000); // Hide popup after 3 seconds
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="w-full max-w-lg mx-auto mt-5">
            <div className="flex justify-start items-center">
                <div className="text-center p-2">
                    <div className="flex items-center text-gray-500 text-sm font-thin italic mb-2">
                        {currentStep} <MdOutlineHorizontalRule /> {steps.length}
                    </div>
                </div>
            </div>
            <div className="mt-10">
                {currentStep === 1 && (
                    <div>
                        <label htmlFor="step1" className="text-sm">What is your name?</label>
                        <input
                            type="text"
                            id="step1"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-3">{errors.name}</p>}
                    </div>
                )}
                {currentStep === 2 && (
                    <div>
                        <label htmlFor="step2" className="text-sm">What is your email?</label>
                        <input
                            type="email"
                            id="step2"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-3">{errors.email}</p>}
                    </div>
                )}
                {currentStep === 3 && (
                    <div>
                        <label htmlFor="step3" className="text-sm">What is your phone number?</label>
                        <input
                            type="tel"
                            id="step3"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-3">{errors.phone}</p>}
                    </div>
                )}
                {currentStep === 4 && (
                    <div>
                        <label htmlFor="step4" className="text-sm">Where do you work?</label>
                        <input
                            type="text"
                            id="step4"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        />
                        {errors.company && <p className="text-red-500 text-sm mt-3">{errors.company}</p>}
                    </div>
                )}
                {currentStep === 5 && (
                    <div>
                        <label htmlFor="step5" className="text-sm">What is the most important factor for you when it comes to food packaging?</label>
                        <select
                            id="step5"
                            name="answer1"
                            value={formData.answer1}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        >
                            <option value="" disabled>Select the most important factor</option>
                            <option value="sustainability">Sustainability</option>
                            <option value="ease_of_use">Ease of use</option>
                            <option value="temperature_retention">Temperature retention</option>
                            <option value="portion_size">Portion size</option>
                            <option value="aesthetics">Aesthetics</option>
                        </select>
                        {errors.answer1 && <p className="text-red-500 text-sm mt-3">{errors.answer1}</p>}
                    </div>
                )}
                {currentStep === 6 && (
                    <div>
                        <label htmlFor="step6" className="text-sm">Which packaging materials do you prefer for your food delivery?</label>
                        <select
                            id="step6"
                            name="answer2"
                            value={formData.answer2}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        >
                            <option value="" disabled>Select packaging material</option>
                            <option value="biodegradable">Biodegradable materials</option>
                            <option value="plastic">Plastic containers</option>
                            <option value="paper">Paper-based packaging</option>
                            <option value="reusable">Reusable containers</option>
                            <option value="foam">Foam containers</option>
                        </select>
                        {errors.answer2 && <p className="text-red-500 text-sm mt-3">{errors.answer2}</p>}
                    </div>
                )}
                {currentStep === 7 && (
                    <div>
                        <label htmlFor="step7" className="text-sm">How likely are you to order from a new food delivery service if it offers environmentally friendly packaging that saves you money and waste?</label>
                        <select
                            id="step7"
                            name="answer3"
                            value={formData.answer3}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        >
                            <option value="" disabled>Select likelihood</option>
                            <option value="very_likely">Very likely</option>
                            <option value="likely">Likely</option>
                            <option value="neutral">Neutral</option>
                            <option value="unlikely">Unlikely</option>
                            <option value="very_unlikely">Very unlikely</option>
                        </select>
                        {errors.answer3 && <p className="text-red-500 text-sm mt-3">{errors.answer3}</p>}
                    </div>
                )}
                {currentStep === 8 && (
                    <div>
                        <label htmlFor="step8" className="text-sm">How often do you order lunch at work?</label>
                        <select
                            id="step8"
                            name="answer4"
                            value={formData.answer4}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        >
                            <option value="" disabled>Select frequency</option>
                            <option value="daily">Daily</option>
                            <option value="few_times_a_week">A few times a week</option>
                            <option value="once_a_week">Once a week</option>
                            <option value="occasionally">Occasionally</option>
                            <option value="never">Never</option>
                        </select>
                        {errors.answer4 && <p className="text-red-500 text-sm mt-3">{errors.answer4}</p>}
                    </div>
                )}
                {currentStep === 9 && (
                    <div>
                        <label htmlFor="step9" className="text-sm">How important is it for you to have the option to customize your meal?</label>
                        <select
                            id="step9"
                            name="answer5"
                            value={formData.answer5}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        >
                            <option value="" disabled>Select importance</option>
                            <option value="very_important">Very important</option>
                            <option value="important">Important</option>
                            <option value="neutral">Neutral</option>
                            <option value="not_important">Not important</option>
                            <option value="not_important_at_all">Not important at all</option>
                        </select>
                        {errors.answer5 && <p className="text-red-500 text-sm mt-3">{errors.answer5}</p>}
                    </div>
                )}
                {currentStep === 10 && (
                    <div>
                        <label htmlFor="step10" className="text-sm">Would you prefer a lunch paid for by your company, yourself, or Hybrid?</label>
                        <select
                            id="step10"
                            name="answer6"
                            value={formData.answer6}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="company">Paid by company</option>
                            <option value="self">Paid by yourself</option>
                            <option value="hybrid">Hybrid</option>
                        </select>
                        {errors.answer6 && <p className="text-red-500 text-sm mt-3">{errors.answer6}</p>}
                    </div>
                )}
                {currentStep === 11 && (
                    <div>
                        <label htmlFor="step11" className="text-sm">How long will it take for you to return a used lunch pack to a designated place in your office after eating?</label>
                        <select
                            id="step11"
                            name="answer7"
                            value={formData.answer7}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        >
                            <option value="" disabled>Select time</option>
                            <option value="15_minutes">15 minutes</option>
                            <option value="30_minutes">30 minutes</option>
                            <option value="1_hour">1 hour</option>
                            <option value="2_hours">2 hours</                            option>
                            <option value="12_hours">12 hours</option>
                        </select>
                        {errors.answer7 && <p className="text-red-500 text-sm mt-3">{errors.answer7}</p>}
                    </div>
                )}
                {currentStep === 12 && (
                    <div>
                        <label htmlFor="step12" className="text-sm">How much on average would you budget for a lunch meal on a working day?</label>
                        <input
                            type="text"
                            id="step12"
                            name="answer8"
                            value={formData.answer8}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        />
                        {errors.answer8 && <p className="text-red-500 text-sm mt-3">{errors.answer8}</p>}
                    </div>
                )}
            </div>
            <div className="flex justify-between mt-20">
                <button
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="text-sm px-4 py-2 outline outline-1 outline-slate-400 text-black disabled:opacity-50"
                >
                    Previous Question
                </button>
                {currentStep === steps.length ? (
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 outline outline-1 outline-green-700 text-black"
                    >
                        Submit
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="text-sm px-4 py-2 outline outline-1 outline-slate-400 text-black"
                    >
                        Next Question
                    </button>
                )}
            </div>
        </div>
    );
};

export default MultiStepForm;
