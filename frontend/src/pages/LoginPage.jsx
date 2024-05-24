import React from 'react';
import LoginForm from "../components/LoginForm.jsx";
import {Link} from "react-router-dom";
import spexbg from "../assets/pack.jpg";

function LoginPage(props) {
    return (
        <div className={`w-full  h-screen flex flex-col gap-5 items-center justify-center`}   style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backgroundImage: `url(${spexbg})`,
            backgroundBlendMode: 'multiply'
        }}>
            <LoginForm />
            <div>

            </div>
        </div>
    );
}

export default LoginPage;