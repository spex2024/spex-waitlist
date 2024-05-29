import {useContext, useState} from 'react';
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";
import {UserContext} from "../context/userContext.jsx";
import {FeedbackContext} from "../context/FeedbackContext.jsx";

export const Fetch = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const {setUserInfo} = useContext(UserContext);
    const {setContent} = useContext(FeedbackContext);

    const register = async (formdata) => {
        try {
            const response = await fetch(`https://spex-waitlist.onrender.com/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Registration Successful');
                navigate('/login');
                setError(null);
            } else {
                setError(data.errors[0].msg);
                toast.error(data.errors[0].msg);
            }
        } catch (error) {
            toast.error("An error occurred during registration.");
            console.error(error.message);
        }
    };

    const login = async (formdata) => {
        try {
            const response = await fetch(`https://spex-waitlist.onrender.com/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify(formdata)
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Login Successful');
                setError(null);
                setUserInfo(data);
                navigate('/dashboard');
                await profile();
            } else {
                setError(data.errors[0].msg);
                toast.error(data.errors[0].msg);
            }
        } catch (error) {
            toast.error("An error occurred during login.");
            console.error(error.message);
        }
    };

    const profile = async () => {
        try {
            const response = await fetch(`https://spex-waitlist.onrender.com/api/profile`, {
                credentials: "include",
            });

            if (response.ok) {
                const data = await response.json();
                setUserInfo(data);
            } else {
                toast.error("Failed to fetch profile.");
                console.error("Profile fetch failed:", response.statusText);
            }
        } catch (error) {
            toast.error("An error occurred while fetching the profile.");
            console.error("Error fetching profile:", error.message);
        }
    };

    const logout = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://spex-waitlist.onrender.com/api/logout`, {
                method: 'POST',
                credentials: "include",
            });

            if (response.ok) {
                setUserInfo('');
                navigate('/');
            } else {
                toast.error("Failed to log out.");
            }
        } catch (error) {
            toast.error("An error occurred during logout.");
            console.error(error.message);
        }
    };

    const createFeedback = async (formData) => {
        try {
            const response = await fetch(`https://spex-waitlist.onrender.com/api/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const feedback = await response.json();
                navigate('/');
            } else {
                toast.error("Failed to create feedback.");
            }
        } catch (error) {
            toast.error("An error occurred while creating feedback.");
            console.error(error.message);
        }
    };

    const getFeedback = async () => {
        try {
            const response = await fetch(`https://spex-waitlist.onrender.com/api/feedback`, {});

            if (response.ok) {
                const data = await response.json();
                setContent(data);
            } else {
                toast.error("Failed to fetch feedback.");
                console.error("Feedback fetch failed:", response.statusText);
            }
        } catch (error) {
            toast.error("An error occurred while fetching feedback.");
            console.error("Error fetching feedback:", error.message);
        }
    };

    return { register, login, profile, logout, createFeedback, getFeedback, error };
};

export default Fetch;
