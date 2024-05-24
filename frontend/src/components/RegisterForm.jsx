import React, { useState } from 'react';
import Fetch from "../hooks/Fetch.jsx";
import spexbg from "../assets/pack.jpg";

function RegisterForm() {
    // State variables to store form input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const { register, error } = Fetch();

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Do something with the form data, such as sending it to a server
        console.log('Submitted data:', { username, password, name, role, email });
        const formData = { username, password, name, role, email };
        await register(formData);

        // Reset form fields after submission (if needed)
        setUsername('');
        setPassword('');
        setName('');
        setRole('');
        setEmail('');
    };

    return (
        <div className="flex justify-center items-center text-[#333] h-full min-h-screen p-6 bg-cover bg-center"
             style={{
                 backgroundColor: 'rgba(0, 0, 0, 0.8)',
                 backgroundImage: `url(${spexbg})`,
                 backgroundBlendMode: 'multiply'
             }}
        >
            <div className="max-w-md w-full mx-auto ">
                <form className="px-8 h-[50%] space-y-12 py-16" onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <h3 className="text-3xl text-center font-extrabold text-white">Register</h3>
                    </div>
                    <div>
                        <div className="relative flex items-center">
                            <input name="name" type="text" required
                                   className="bg-transparent w-full text-white text-sm border-b border-[#fff] px-2 py-3 outline-none placeholder:text-gray-400"
                                   placeholder="Enter name"
                                   value={name}
                                   onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative flex items-center">
                            <input name="username" type="text" required
                                   className="bg-transparent w-full text-white text-sm border-b border-[#fff] px-2 py-3 outline-none placeholder:text-gray-400"
                                   placeholder="Enter username"
                                   value={username}
                                   onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative flex items-center">
                            <input name="password" type="password" required
                                   className="bg-transparent w-full text-white text-sm border-b border-[#fff] px-2 py-3 outline-none placeholder:text-gray-400"
                                   placeholder="Enter password"
                                   value={password}
                                   onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative flex items-center">
                            <select name="role" required
                                    className="bg-transparent w-full text-gray-500 text-sm border-b border-[#fff] px-2 py-3 outline-none "
                                    value={role}
                                    onChange={(event) => setRole(event.target.value)}
                            >
                                <option value="">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                                <option value="manager">Manager</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="relative flex items-center">
                            <input name="email" type="email" required
                                   className="bg-transparent w-full text-white text-sm border-b border-[#fff] px-2 py-3 outline-none placeholder:text-gray-400"
                                   placeholder="Enter email"
                                   value={email}
                                   onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <button type="submit"
                                className="w-[30%] py-3 text-black text-sm font-semibold bg-[#fff] hover:bg-[#fff] focus:outline-none">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
