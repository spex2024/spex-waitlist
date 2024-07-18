import React from 'react';
import { useForm } from 'react-hook-form';
import Fetch from "../hooks/Fetch.jsx";
import toast from "react-hot-toast";



const ActionForm = () => {
    const { register, reset , handleSubmit, formState: { errors } } = useForm();

    const { createFeedback } = Fetch();

    const onSubmit =  async  data => {
      const response = await createFeedback(data)
        if (response.status === 200) {
        toast.success('Thank you for joining the waitlist! 🎉 Check your email for further updates if provided.', {
            icon: '👏',
            iconSize: '3rem',
            duration: 3000,
            style: {
                border: '2px solid #4caf50',
                padding: '16px',
                color: '#4caf50',
                fontWeight: 'light',
                fontSize: '15px',
                background: '#fff',
                width: '900px',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            },
        });
          reset()
        }



    }

        const input =" w-full text-sm px-4 py-3 outline-double outline-1  outline-[#333] placeholder-gray-500   focus:outline-green-600  focus:outline-2";
       const error = "text-red-500 text-sm font-light font-myriad";
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <input
                name="name"
                type="text"
                className={input}
                placeholder="Enter name"
                {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className={error}>{errors.name.message}</span>}

            <input
                name="email"
                type="email"
                className={input}
                placeholder="Enter email (optional)"
                {...register('email')}
            />

            <input
                name="phone"
                type="tel"
                className={input}
                placeholder="Enter phone number"
                {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                        value: /^(\+?\d{1,4}[\s-]?)?(\d{10})$/,
                        message: 'Invalid phone number format'
                    }
                })}
            />
            {errors.phone && <span className={error}>{errors.phone.message}</span>}

            <input
                name="company"
                type="text"
                className={input}
                placeholder="Enter business  name"
                {...register('company', { required: 'Company is required' })}
            />
            {errors.company && <span className={error}>{errors.company.message}</span>}

            <input
                name="location"
                type="text"
                className={input}
                placeholder="Enter location"
                {...register('location', { required: 'Location is required' })}
            />
            {errors.location && <span className={error}>{errors.location.message}</span>}

            <button
                type="submit"
                className="w-full px-4 py-2 text-base tracking-wider font-semibold outline-none border border-[#333] bg-[#222] text-white hover:bg-transparent hover:text-[#333] transition-all duration-300"
            >
                Join the waitlist
            </button>
        </form>
    );
};

export default ActionForm;
