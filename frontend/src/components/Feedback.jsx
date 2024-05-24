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

    console.log(content);

    return (
        <div className="w-[80%] relative overflow-x-auto shadow-sm sm:rounded-lg mt-16 mx-auto">
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
                <div className=" fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 cursor-pointer">
                    <div className=" flex  flex-col gap-10 items-center justify-center gapbg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-[60vw] lg:h-[80vh] py-10 px-12">
                        <h2 className="text-2xl font-bold mb-4">Feedback Details</h2>
                        <div>
                            <h4>What is your name ?</h4>
                            <p> {selectedItem.name}</p>
                        </div>

                        <div>
                            <h4>What is your email ?</h4>
                            <p> {selectedItem.email}</p>
                        </div>

                        <div>
                            <h4>What is your phone number ?</h4>
                            <p> {selectedItem.phone}</p>
                        </div>

                        <div>
                            <h4>Where do you work ?</h4>
                            <p> {selectedItem.company}</p>
                        </div>

                        <div>
                            <h4>>What is your biggest challenge with current food packaging and delivery?</h4>
                            <p> {selectedItem.answer1}</p>
                        </div>

                        <div>
                            <h4>How interested are you in a smart reusable packaging system?</h4>
                            <p> {selectedItem.answer2}</p>
                        </div>

                        <div>
                            <h4>What ideas or suggestions do you have for making a smart reusable packaging system
                                successful in your organization or food delivery service?</h4>
                            <p>{selectedItem.answer3}</p>

                        </div>

                        <button
                            className="mt-4 bg-green-700 text-white px-4 py-2 rounded"
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
