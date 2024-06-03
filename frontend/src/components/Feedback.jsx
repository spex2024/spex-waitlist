// Feedback.jsx

import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaTrashAlt } from 'react-icons/fa';
import { FeedbackContext } from "../context/FeedbackContext.jsx";
import Fetch from "../hooks/Fetch.jsx";
import { Link } from 'react-router-dom';
import Details from "./Details.jsx"; // Import Link from react-router-dom

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

    return (
        <div className="w-[90%] relative overflow-x-auto shadow-sm sm:rounded-lg mt-16 mx-auto">
            {selectedItem ? (
                <Details selectedItem={selectedItem} />
            ) : (
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
                                <Link to={`/details/${item._id}`} className="text-gray-700 hover:text-gray-900 cursor-pointer mr-2">
                                    <FaEye />
                                </Link>
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
            )}
        </div>
    );
};

export default Feedback;
