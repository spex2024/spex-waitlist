import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaTrashAlt } from 'react-icons/fa'; // Assuming you're using FontAwesome
import { FeedbackContext } from "../context/FeedbackContext.jsx";
import Fetch from "../hooks/Fetch.jsx";

const Feedback = () => {
    const { content } = useContext(FeedbackContext);
    const { getFeedback, deleteFeedback } = Fetch();
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

    const handleDeleteClick = async (id) => {
        try {
            await deleteFeedback(id);
        } catch (error) {
            console.error("Error deleting feedback:", error);
        }
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
                    <th scope="col" className="px-6 py-3 th-green">No</th>
                    <th scope="col" className="px-6 py-3 th-green">Name</th>
                    <th scope="col" className="px-6 py-3 th-green">Email</th>
                    <th scope="col" className="px-6 py-3 th-green">Phone</th>
                    <th scope="col" className="px-6 py-3 th-green">Company</th>
                    <th scope="col" className="px-6 py-3 th-green">Actions</th>
                </tr>
                </thead>
                <tbody className="bg-gray-400 text-black">
                {content.map((item, index) => (
                    <tr key={item._id} className="odd:bg-white even:bg-gray-50 even:border-b dark:border-gray-700 relative group">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap uppercase">
                            {index + 1}
                        </th>
                        <td className="px-6 py-4">{item.name}</td>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">{item.phone}</td>
                        <td className="px-6 py-4">{item.company}</td>
                        <td className="px-6 py-4 flex  items-center justify-center">
                                <span
                                    className="text-gray-700 hover:text-gray-900 cursor-pointer mr-2"
                                    onClick={() => handleViewClick(item)}
                                >
                                    <FaEye />
                                </span>
                            <span
                                className="text-gray-700 hover:text-gray-900 cursor-pointer"
                                onClick={() => handleDeleteClick(item._id)}
                            >
                                    <FaTrashAlt />
                                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {selectedItem && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 cursor-pointer">
                    <div className="flex flex-col items-start gap-5 bg-white rounded-lg shadow-lg py-20 px-5 lg:w-[80vw] lg:h-[90vh] overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">Feedback Details</h2>
                        {modalDetails.map((detail, index) => (
                            <div key={index} className="w-full justify-start flex flex-col gap-5">
                                <h4 className="flex items-center  gap-2 font-semibold font-nunito text-sm">
                                    <span>Question: </span>
                                    {detail.question}
                                </h4>
                                <p className="flex items-center  gap-2 font-light font-nunito text-sm">
                                    <span>Answer: </span>
                                    {detail.answer}
                                </p>
                            </div>
                        ))}
                        <button
                            className="w-[20%] mt-4 bg-green-700 text-white px-4 py-2 rounded"
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
