import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {Toaster} from "react-hot-toast";
import {toast} from "react-toastify";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const questions = [
        {
            question: "What is the most important factor for you when it comes to food packaging?",
            options: [
                "Sustainability",
                "Ease of use",
                "Temperature retention",
                "Portion size",
                "Aesthetics"
            ]
        },
        {
            question: "Which packaging materials do you prefer for your food delivery?",
            options: [
                "Biodegradable materials",
                "Plastic containers",
                "Paper-based packaging",
                "Reusable containers",
                "Foam containers"
            ]
        },
        {
            question: "How likely are you to order from a new food delivery service if it offers environmentally friendly packaging that saves you money and waste?",
            options: [
                "Very likely",
                "Likely",
                "Neutral",
                "Unlikely",
                "Very unlikely"
            ]
        },
        {
            question: "How often do you order lunch at work?",
            options: [
                "Daily",
                "A few times a week",
                "Once a week",
                "Occasionally",
                "Never"
            ]
        },
        {
            question: "How important is it for you to have the option to customize your meal?",
            options: [
                "Very important",
                "Important",
                "Neutral",
                "Not important",
                "Not important at all"
            ]
        },
        {
            question: "Would you prefer a lunch paid for by your company, yourself, or Hybrid?",
            options: [
                "Paid by company",
                "Paid by yourself",
                "Hybrid"
            ]
        },
        {
            question: "How long will it take for you to return a used lunch pack to a designated place in your office after eating?",
            options: [
                "15 minutes",
                "30 minutes",
                "1 hour",
                "2 hours",
                "12 hours"
            ]
        },
    ];

    const onSubmitStep1 = async (data) => {
        try {
            //
            await axios.post('https://api.spexafrica.app/api/create', data);

            // Store form data and move to the next step
            setFormData(data);
            setStep(2);
            toast.success('Form successfully submitted!')

            // Reset the form for step 2
            reset();
        } catch (error) {
            toast.success('Form successfully failed!')
        }
    };

    const onSubmitStep2 = async (data) => {
        try {
            // Combine step 1 data with step 2 data

            const response = await axios.post('https://api.spexafrica.app/api/update', data);
            console.log(response)
            if(response.ok){
                toast.success('Feedback successfully submitted!')
                reset();
            }
            // Send the combined data to the backend
            // await axios.post('/api/feedback', combinedData);

            // Reset the form after submission


            // Optionally, you can handle navigation or show a success message

        } catch (error) {
            toast.success('Feedback submission failed!')
        }
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const inputClass = " border-b border-gray-900 text-gray-900 text-sm  bg-transparent w-full p-2.5 focus:outline-none ";
    const labelClass = "block mb-3  text-md  text-black text-start font-light ";
    const formGroupClass = "mb-2 w-full flex flex-col items-start font-light";
    const btnClass = "h-10 w-32 border border-black hover:bg-black hover:text-white font-light";

    return (
        <div className={`lg:mt-10 mt-10`}>
            {step === 1 && (
                <form onSubmit={handleSubmit(onSubmitStep1)} className="flex flex-col lg:gap-5 gap-2 justify-center items-start px-10">
                    <div className={formGroupClass}>
                        <label htmlFor="name" className={labelClass}>Name</label>
                        <input id="name" {...register('name', { required: 'Name is required' })} className={inputClass} />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className={formGroupClass}>
                        <label htmlFor="email" className={labelClass}>Email</label>
                        <input id="email" type="email" {...register('email', { required: 'Email is required' })} className={inputClass} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className={formGroupClass}>
                        <label htmlFor="phone" className={labelClass}>Phone</label>
                        <input id="phone" {...register('phone', { required: 'Phone is required' })} className={inputClass} />
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </div>
                    <div className={formGroupClass}>
                        <label htmlFor="company" className={labelClass}>Company</label>
                        <input id="company" {...register('company', { required: 'Company Name is required' })} className={inputClass} />
                        {errors.company && <p>{errors.company.message}</p>}
                    </div>
                    <button type="submit" className={btnClass}>Next</button>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handleSubmit(onSubmitStep2)} className="w-full flex flex-col justify-center items-start px-10 lg:gap-5 gap-1">
                    <div className="w-full flex-col  items-start justify-center text-start font-bold">
                        <h1 className={`text-xl`}>Thanks for joining our waitlist</h1>
                        <p className={`font-light`}>Kindly fill out the form below to help improve spex</p>
                    </div>
                    <div className={formGroupClass}>
                        <label htmlFor="email2" className={labelClass}>Email</label>
                        <input id="email2" type="email" {...register('email', { required: 'Email is required' })} defaultValue={formData.email} className={inputClass} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    {questions.map((question, index) => (
                        <div key={index} className={formGroupClass}>
                            <label htmlFor={`question${index + 1}`} className={labelClass}>{question.question}</label>
                            <select id={`question${index + 1}`} {...register(`answer${index + 1}`, { required: `${question.question} is required` })} className={inputClass}>
                                <option value="">Select an option</option>
                                {question.options.map((option, idx) => (
                                    <option key={idx} value={option}>{option}</option>
                                ))}
                            </select>
                            {errors[`answer${index + 1}`] && <p>{errors[`answer${index + 1}`].message}</p>}
                        </div>
                    ))}
                    <div className={formGroupClass}>
                        <label htmlFor="question8" className={labelClass}>How much on average would you budget for a lunch meal on a working day?</label>
                        <input id="question8" {...register('answer8', { required: 'Question 8 is required' })} className={inputClass} />
                        {errors.answer8 && <p>{errors.answer8.message}</p>}
                    </div>
                    <div className="flex gap-4">
                        <button type="button" onClick={handlePrevious} className={btnClass}>Previous</button>
                        <button type="submit" className={btnClass}>Submit</button>
                    </div>
                </form>
            )}

            <Toaster />
        </div>
    );
};

export default MultiStepForm;
