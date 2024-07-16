import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const MultiForm = ({toggleDrawer}) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [error , setError] = useState("")
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
        }
    ];

    const onSubmitStep1 = async (data) => {
        try {
            // Send the data to the backend
            // const resposne = await axios.post('http://localhost:5000/api/user', data);

            // if (resposne.ok){
            //
            // }
            setFormData(data);
            setStep(2);
            reset();
            toggleDrawer()

            // Store form data and move to the next step

            // Reset the form for step 2
        } catch (error) {
            console.error('Error submitting step 1:', error);
            setError("Form submission failed")
        }
    };

    const onSubmitStep2 = async (data) => {
        try {
            // Combine step 1 data with step 2 data



            //Send the combined data to the backend
            // await axios.post('http://localhost:5000/api/feedback', data);

            // Reset the form after submission
            reset();

            // Optionally, you can handle navigation or show a success message
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting step 2:', error);
        }
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const inputClass = "block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer font-myriad font-light ";
    const labelClass = "w-full flex  items-start  font-light text-md ";
    const formGroupClass = "relative z-0 w-full mb-5 group flex flex-col justify-start items-start gap-3";
    const btnClass = "h-10 w-32 border border-black hover:bg-black hover:text-white font-light";


    return (
        <div className={`lg:mt-10 mt-10`}>
            {step === 1 && (
                <form onSubmit={handleSubmit(onSubmitStep1)} className="flex flex-col lg:gap-5 gap-2 justify-center items-start px-10">
                    <div className={formGroupClass}>

                        <input id="name" {...register('name', {required: 'Name is required'})} className={inputClass}
                               placeholder=" full name "/>

                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className={formGroupClass}>

                    <input id="email" type="email" {...register('email', { required: 'Email is required' })} className={inputClass} placeholder="email address " />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className={formGroupClass}>

                        <input id="phone" {...register('phone number', { required: 'Phone is required' })} className={inputClass} placeholder="phone number " />
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </div>
                    <div className={formGroupClass}>

                        <input id="company" {...register('company', { required: 'Company Name is required' })} className={inputClass} placeholder=" where do you work? " />
                        {errors.company && <p>{errors.company.message}</p>}
                    </div>
                    <button type="submit" className={btnClass}>Next</button>
                    {error}
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handleSubmit(onSubmitStep2)}
                      className="w-full flex flex-col  items-start px-10 lg:gap-5 gap-1">
                    <div className="w-full flex-col text-sm lg:font-lg lg:font-bold flex items-start justify-start font-light">
                        <h1>Thanks for joining our waitlist</h1>
                        <p>Kindly fill out the form below to help improve spex</p>
                    </div>
                    <div className={formGroupClass}>
                        <label htmlFor="email2" className={labelClass}>Email</label>
                        <input id="email2" type="email" {...register('email', {required: 'Email is required'})}
                               defaultValue={formData.email} className={inputClass} placeholder=" "/>

                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    {questions.map((question, index) => (
                        <div key={`question${index}`} className={formGroupClass}>
                            <label htmlFor={`question${index}`} className={labelClass}>{question.question}</label>
                            <select
                                id={`question${index}`}
                                {...register(`answer${index + 1}`, { required: `Question ${index + 1} is required` })}
                                className={inputClass}
                            >
                                <option value="" className={labelClass}>Select an option</option>
                                {question.options.map((option, optionIndex) => (
                                    <option key={`option${optionIndex}`} value={option} className={`font-light bg-transparent`}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            {errors[`answer${index + 1}`] && <p>{errors[`answer${index + 1}`].message}</p>}
                        </div>
                    ))}

                    <div className={formGroupClass}>
                        <label htmlFor="question8" className={labelClass}>Question 8</label>
                        <input
                            id="question8"
                            {...register('answer8', {required: 'Name is required'})}
                            type="text"
                            className={inputClass}
                        />
                        {errors.answer8 && <p>{errors.answer8.message}</p>}
                    </div>
                    <div className="flex gap-4">
                        <button type="button" onClick={handlePrevious} className={btnClass}>Previous</button>
                        <button type="submit" className={btnClass}>Submit</button>
                    </div>
                </form>

            )}
        </div>
    );
};

export default MultiForm;
