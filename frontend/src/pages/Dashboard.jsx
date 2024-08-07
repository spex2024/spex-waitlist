import React, {useContext, useEffect} from 'react';
import SpexLogo from '../assets/spex-logo.png';
import { Link } from 'react-router-dom';
import {AiFillFileExcel, AiOutlineCloudDownload} from 'react-icons/ai';
import Feedback from '../components/Feedback.jsx';
import Logout from '../components/Logout.jsx';
import { FeedbackContext } from '../context/FeedbackContext.jsx';
import Fetch from "../hooks/Fetch.jsx";
import {UserContext} from "../context/userContext.jsx";
import {Tab, Tabs} from "@nextui-org/react";
import VendorFeedback from "../components/VendorFeedback.jsx";
import {VendorContext} from "../context/VendorContext.jsx";
import logout from "../components/Logout.jsx";

function Dashboard() {
    const { content } = useContext(FeedbackContext);
    const {vendor} = useContext(VendorContext)
    const { profile} = Fetch()

    // const handleLogout =  () => {
    //     logout();
    // };
    //
    const {userInfo} = useContext(UserContext)
    // useEffect(async () => {
    //     await profile();
    // }, []);
    const {name , username ,role} = userInfo;

    console.log(userInfo)

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

    const downloadVendorCSV = () => {
        if (!vendor || vendor.length === 0) {
        alert('No data available to download');
        return;
    }

        const headers = Object.keys(vendor[0]).join(',');
        const rows = vendor.map(row => Object.values(row).join(',')).join('\n');
        const csvVendor = `data:text/csv;charset=utf-8,${headers}\n${rows}`;

        const encodedUri = encodeURI(csvVendor);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'vendor.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="w-full flex flex-col items-center min-h-screen  pb-10">
            <header className="w-full h-[5%] flex gap-[50%] items-center justify-center py-5 bg-white">
                <Link to='/'>
                    <img src={SpexLogo} alt="Spex Logo" className="h-28 w-28"  />
                </Link>
                <Logout username={username}  role={role} />
            </header>
            <div className="w-[64%] h-[20vh] mt-16 flex justify-between">
                <div>
                    <h1 className="text-5xl font-bold capitalize mb-2">Welcome, {name} 👋</h1>
                    <p className="text-xl">Good to see you boss</p>
                </div>

                <div className={`flex gap-5`}>

                <button
                    onClick={downloadVendorCSV}
                    className="bg-green-700 h-[45px] text-white font-bold py-2 px-2 rounded mt-4 ml-4 flex items-center gap-3"
                >
                    <AiOutlineCloudDownload/> User Data <AiFillFileExcel size={20}/>
                </button>
                </div>
            </div>
            <div className="w-[90%] min-h-screen py-5 ">

                <Tabs aria-label="Options">
                    <Tab key="user" title="User Feedback">
                        <button
                            onClick={downloadCSV}
                            className=" bg-green-700 h-[45px] text-white font-bold py-2 px-2  my-4 ml-4 flex items-center gap-3"
                        >
                          <AiOutlineCloudDownload/> User Data <AiFillFileExcel size={20}/>
                        </button>

                        <Feedback/>
                    </Tab>

                    <Tab key="vendor" title="Vendor Feedback">
                        <button
                            onClick={downloadVendorCSV}
                            className="bg-green-700 h-[45px] text-white font-bold py-2 px-2 rounded my-4 ml-4 flex items-center gap-3"
                        >
                            <AiOutlineCloudDownload/> User Data <AiFillFileExcel size={20}/>
                        </button>
                        <VendorFeedback/>
                    </Tab>

                </Tabs>
            </div>
        </div>
    );
}

export default Dashboard;
