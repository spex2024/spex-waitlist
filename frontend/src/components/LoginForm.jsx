import React, { useState } from 'react';
import Fetch from "../hooks/Fetch.jsx";
import {Link} from "react-router-dom";

function LoginForm() {
    // State variables to store form input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login ,error} = Fetch()
    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Do something with the form data, such as sending it to a server
        console.log('Submitted data:', { username, password });
          const formData = {username,password}
        await login(formData);



        // Reset form fields after submission (if needed)
        setUsername('');
        setPassword('');
    };

    return (
        <div className="w-full flex flex-col justify-center items-center  text-[#333] h-full min-h-screen p-6  bg-cover bg-center"

           >
            <div className="max-w-md w-full mx-auto">
                <form className="   px-8 h-[50%] space-y-16 py-16" onSubmit={handleSubmit}>
                    <div className="mb-24">
                        <h3 className="text-3xl text-center font-extrabold text-white ">Dashboard Login</h3>
                    </div>
                    <div>
                        <div className="relative flex items-center">
                            <input name="text" type="text" required
                                   className="bg-transparent w-full text-white text-sm border-b border-[#fff] px-2 py-3 outline-none placeholder:text-[#fff]"
                                   placeholder="Enter username"
                                   value={username}
                                   onChange={(event) => setUsername(event.target.value)}
                            />

                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="relative flex items-center">
                            <input name="password" type="password" required
                                   className="bg-transparent w-full text-white text-sm border-b border-[#fff] px-2 py-3 outline-none placeholder:text-[#fff]"
                                   placeholder="Enter password"
                                   value={password}
                                   onChange={(event) => setPassword(event.target.value)}
                            />

                        </div>
                    </div>

                    <div className="mt-10">
                        <button type="submit"
                                className="w-[30%] py-3 text-black text-sm font-semibold   bg-[#fff] hover:bg-[#fff] focus:outline-none">
                            Sign in
                        </button>

                    </div>

                </form>

            </div>
            <Link to={'/'}>
                <button className={'px-5 py-3 rounded-full font-bold inset-3 bg-white text-black mt-10 '}> back to main site</button>
            </Link>
        </div>
    );
}

export default LoginForm;
