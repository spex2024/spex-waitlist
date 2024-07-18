import {useContext, useState} from 'react';
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";
import {UserContext} from "../context/userContext.jsx";
import {FeedbackContext} from "../context/FeedbackContext.jsx";
// import {UserContext} from "../context/userContext.jsx";
// import {PostContext} from "../context/post.jsx";


export const Fetch = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const {setUserInfo} = useContext(UserContext)
    const {setContent} = useContext(FeedbackContext)

    const register = async (formdata) => {
        const response = await fetch(`https://spex-backend.vercel.app/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        });

        const data = await response.json();

        if (response.ok) {
            toast.success('Registration Successful');
            navigate('/login')
            setError(null);
            // Reset error state
        } else {
            setError(data.errors[0].msg);
            // toast.error(data.errors[0].msg);
        }
    };

    const login = async (formdata) => {
        const response = await fetch(`https://spex-backend.vercel.app/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials : "include",
            body: JSON.stringify(formdata)
        });

        const data = await response.json();

        if (response.ok) {

            toast.success('Login Successful');

            setError(null); // Reset error state
            setUserInfo(data)
            navigate('/dashboard')
            await profile()
        } else {
            setError(data.errors[0].msg);

        }


    };


    const profile = async () => {
        try {
            const response = await fetch(`https://spex-backend.vercel.app/api/profile`, {
                credentials: "include",
            });

            if (response.ok) {
                const data = await response.json();
                setUserInfo(data)
                // Log or handle the profile data as needed
            } else {
                // Handle the case when the response is not okay (e.g., unauthorized)
                console.error("Profile fetch failed:", response.statusText);
                // You can navigate to a login page or handle the unauthorized state as needed
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
            // Handle any network errors or exceptions
        }
    };
    const logout = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch(`https://spex-backend.vercel.app/api/logout`, {
                method: 'POST',
                credentials: "include",
            });

            if (response.ok) {
                setUserInfo('')
                navigate('/')

            }
        } catch (error) {
            console.error( error.message);
            // Handle any network errors or exceptions
        }
    }


    const createFeedback = async ( formData) =>{
        try {
            const response = await fetch(`https://spex-backend.vercel.app/api/add-vendor`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(formData)
            });

            console.log(formData)
            if (response.ok) {
                const feedback = await response.json();
                navigate('/');

            }
        } catch (error) {
            console.error( error.message);
            // Handle any network errors or exceptions
        }
    }
 const updateFeedback = async ( formData) =>{
        try {
            const response = await fetch(`https://spex-backend.vercel.app/api/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(formData)
            });

            console.log(formData)
            if (response.ok) {
                const feedback = await response.json();
                navigate('/');

            }
        } catch (error) {
            console.error( error.message);
            // Handle any network errors or exceptions
        }
    }



    const getFeedback =  async () => {
        try {
            const response = await fetch(`https://spex-backend.vercel.app/api/feedback`, {

            });

            if (response.ok) {
                const data = await response.json();

                setContent(data)
                // Log or handle the profile data as needed
            } else {
                // Handle the case when the response is not okay (e.g., unauthorized)
                console.error("Profile fetch failed:", response.statusText);
                // You can navigate to a login page or handle the unauthorized state as needed
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
            // Handle any network errors or exceptions
        }
    };

    const deleteFeedback = async (id) => {
        try {
            const response = await fetch(`https://spex-backend.vercel.app/api/feedback/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const data = await response.json();
                getFeedback();
            } else {
                console.error("Feedback deletion failed:", response.statusText);
                // Handle non-ok responses, e.g., show an error message to the user
            }
        } catch (error) {
            console.error("Error deleting feedback:", error);
            // Handle network errors or other exceptions
        }
    };



    return { register, login, profile , logout ,createFeedback ,getFeedback,error , deleteFeedback , updateFeedback};
};

export default Fetch;
