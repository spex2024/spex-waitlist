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
        answer3: ''
    });

    const [errors, setErrors] = useState({});

    const steps = [
        "Step 1: Info",
        "Step 2: Info",
        "Step 3: Info",
        "Step 4: Info",
        "Step 5: Info",
        "Step 6: Info",
        "Step 7: Info"
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
                answer3: ''
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
        <div className="w-full max-w-lg mx-auto mt-10">
            <div className="flex justify-start items-center">
                <div className="text-center p-2">
                    <div className="flex items-center text-gray-500 text-sm font-thin italic mb-5">
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
                        <label htmlFor="step5" className="text-sm">What is your biggest challenge with current food packaging and delivery?</label>
                        <select
                            id="step5"
                            name="answer1"
                            value={formData.answer1}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        >
                            <option value="" disabled>Select your biggest challenge</option>
                            <option value="cost">High cost</option>
                            <option value="waste">Plastic waste</option>
                            <option value="quality">Poor quality</option>
                            <option value="availability">Limited availability</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.answer1 && <p className="text-red-500 text-sm mt-3">{errors.answer1}</p>}
                    </div>
                )}
                {currentStep === 6 && (
                    <div>
                        <label htmlFor="step6" className="text-sm">How interested are you in a smart reusable packaging system?</label>
                        <select
                            id="step6"
                            name="answer2"
                            value={formData.answer2}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        >
                            <option value="" disabled>Select your interest level</option>
                            <option value="very_interested">Very interested</option>
                            <option value="interested">Interested</option>
                            <option value="neutral">Neutral</option>
                            <option value="not_interested">Not interested</option>
                            <option value="very_not_interested">Very not interested</option>
                        </select>
                        {errors.answer2 && <p className="text-red-500 text-sm mt-3">{errors.answer2}</p>}
                    </div>
                )}

                {currentStep === 7 && (
                    <div>
                        <label htmlFor="step7" className="text-sm">Anything else you'd like to share?</label>
                        <textarea
                            id="step7"
                            name="answer3"
                            value={formData.answer3}
                            onChange={handleChange}
                            className="mt-2 p-2 border-b border-black w-full focus:outline-none"
                        />
                        {errors.answer3 && <p className="text-red-500 text-sm">{errors.answer3}</p>}
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
