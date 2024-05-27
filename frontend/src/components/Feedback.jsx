import React, { useContext, useEffect, useState } from 'react';
import { FeedbackContext } from "../context/FeedbackContext.jsx";
import Fetch from "../hooks/Fetch.jsx";
import { FaEye } from 'react-icons/fa';

const Feedback = () => {
    const { content } = useContext(FeedbackContext);
    const { getFeedback } = Fetch();
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                await getFeedback();
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        const intervalId = setInterval(() => {
            fetchPostData();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleViewClick = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    const modalDetails = selectedItem ? [
        { question: "What is your name?", answer: selectedItem.name },
        { question: "What is your email?", answer: selectedItem.email },
        { question: "What is your phone number?", answer: selectedItem.phone },
        { question: "Where do you work?", answer: selectedItem.company },
        { question: "What is the most important factor for you when it comes to food packaging?", answer: selectedItem.answer1 },
        { question: "How much on average would you budget for a lunch meal on a working day?", answer: selectedItem.answer6 },
        { question: "How often do you order lunch at work?", answer: selectedItem.answer2 },
        { question: "How important is it for you to have the option to customize your meal?", answer: selectedItem.answer3 },
        { question: "Would you prefer a lunch paid for by your company, yourself, or Hybrid?", answer: selectedItem.answer4 },
        { question: "How long will it take for you to return a used lunch pack to a designated place in your office after eating?", answer: selectedItem.answer5 }
    ] : [];


    return (
        <div className="w-[90%] relative overflow-x-auto shadow-sm sm:rounded-lg mt-16 mx-auto">
            <table className="w-full text-sm text-left rtl:text-right text-white">
                <thead className="text-xs text-white uppercase bg-green-700">
                <tr>
                    <th scope="col" className="px-6 py-3 th-green">Name</th>
                    <th scope="col" className="px-6 py-3 th-green">Email</th>
                    <th scope="col" className="px-6 py-3 th-green">Phone</th>
                    <th scope="col" className="px-6 py-3 th-green">Company</th>
                    <th scope="col" className="px-6 py-3 th-green">Actions</th>
                </tr>
                </thead>
                <tbody className="bg-gray-400 text-black">
                {content.map((item, index) => (
                    <tr key={index} className="odd:bg-white even:bg-gray-50 even:border-b dark:border-gray-700 relative group">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap uppercase">
                            {item.name}
                        </th>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">{item.phone}</td>
                        <td className="px-6 py-4">{item.company}</td>
                        <td className="px-6 py-4">
                            <FaEye
                                className="text-gray-700 hover:text-gray-900 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                onClick={() => handleViewClick(item)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {selectedItem && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 cursor-pointer px-10">
                    <div className="flex flex-col items-center gap-5 bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-[60vw] lg:h-[90vh] py-10 overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">Feedback Details</h2>
                        {modalDetails.map((detail, index) => (
                            <div key={index} className={` w-full bg-amber-200  flex flex-col gap-5`}>
                                <h4 className={`flex  items-center justify-center gap-2 font-semibold font-nunito text-sm` }> <span>Question: </span> : {detail.question}</h4>
                                <p className={`flex  items-center justify-center gap-2 font-light font-nunito text-sm` } ><span>Answer: </span>{detail.answer}</p>
                            </div>
                        ))}
                        <button
                            className=" w-[20%] mt-4 bg-green-700 text-white px-4 py-2 rounded"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Feedback;
