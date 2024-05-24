import React, { useContext, useEffect } from 'react';
import { FeedbackContext } from "../context/FeedbackContext.jsx";
import Fetch from "../hooks/Fetch.jsx";

const Feedback = () => {
    const { content } = useContext(FeedbackContext);
    const { getFeedback } = Fetch();

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

                </tr>
                </thead>
                <tbody className="bg-gray-400 text-black">
                {content.map((item, index) => (
                    <tr key={index} className="odd:bg-white even:bg-gray-50 even:border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap uppercase">
                            {item.name}
                        </th>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">{item.phone}</td>
                        <td className="px-6 py-4">{item.company}</td>
                         {/* Added Location data */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Feedback;
