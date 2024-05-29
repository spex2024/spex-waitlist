import React, {useContext, useEffect} from 'react';
import SpexLogo from '../assets/spex-logo.webp';
import { Link } from 'react-router-dom';
import { AiFillFileExcel } from 'react-icons/ai';
import Feedback from '../components/Feedback.jsx';
import Logout from '../components/Logout.jsx';
import { FeedbackContext } from '../context/FeedbackContext.jsx';
import Fetch from "../hooks/Fetch.jsx";
import {UserContext} from "../context/userContext.jsx";

function Dashboard() {
    const { content } = useContext(FeedbackContext);
    const { profile} = Fetch()
    //
    // const handleLogout =  () => {
    //     logout();
    // };
    const {userInfo} = useContext(UserContext)
    useEffect(() => {
        profile();
    }, []);

    const {name , username ,role} = userInfo;

    const downloadCSV = () => {
        if (!content || content.length === 0) {
            alert('No data available to download');
            return;
        }

        const headers = Object.keys(content[0]).join(',');
        const rows = content.map(row => Object.values(row).join(',')).join('\n');
        const csvContent = `data:text/csv;charset=utf-8,${headers}\n${rows}`;

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'feedback_data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="w-full flex flex-col items-center min-h-screen bg-gray-100 pb-10">
            <header className="w-full h-[20%] flex gap-[50%] items-center justify-center py-5 bg-white">
                <Link to='/'>
                    <img src={SpexLogo} alt="Spex Logo" />
                </Link>
                <Logout username={username}  role={role} />
            </header>
            <div className="w-[64%] h-[20vh] mt-16 flex justify-between">
                <div>
                    <h1 className="text-5xl font-bold capitalize mb-2">Welcome, {name} 👋</h1>
                    <p className="text-xl">Good to see you boss</p>
                </div>
                <button
                    onClick={downloadCSV}
                    className="bg-green-700 h-[45px] text-white font-bold py-2 px-2 rounded mt-4 ml-4 flex items-center gap-3"
                >
                    Download CSV <AiFillFileExcel size={20} />
                </button>
            </div>
            <div className="w-[90%] min-h-screen py-5">
                <Feedback />
            </div>
        </div>
    );
}

export default Dashboard;
