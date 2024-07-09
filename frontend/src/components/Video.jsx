import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {AiFillPauseCircle, AiFillPlaySquare} from "react-icons/ai";
import {Button} from "@nextui-org/react";
import {FaPlay} from "react-icons/fa6";


const VideoPopup = ({ isOpen, onClose, videoUrl }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-transparent rounded-lg overflow-hidden shadow-lg z-50 max-w-4xl mx-auto"> {/* Changed max-w-2xl to max-w-4xl */}
                <div className="flex justify-end p-2">
                    <button
                        className="text-gray-500 hover:text-gray-700  bg-transparent rounded-full"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                <div className="p-4">
                    <video width="800" height="550" controls autoPlay> {/* Added height attribute */}
                        <source src={videoUrl} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>,
        document.body
    );
};

const Video = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    return (
        <div
            className="px-5 py-2 rounded-full  flex items-center justify-center  text-white  font-myriad font-bold ">


                    <span onClick={openPopup} className={`bg-white bg-opacity-30 rounded-full p-2 flex justify-center items-center cursor-pointer animate-pulse`}>

                        <span onClick={openPopup} className={`bg-white rounded-full p-2 flex justify-center items-center cursor-pointer `}>

                    <FaPlay size={30} color="black"/>
                    </span>
                    </span>



            <div>

            </div>

            <VideoPopup
                isOpen={isOpen}
                onClose={closePopup}
                videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
            />
        </div>
    );
};

export default Video;
