// DetailsPage.jsx

import React from 'react';

const Details = ({ selectedItem }) => {

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
        <div className="fixed w-full  inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 cursor-pointer px-10">
            <div className="flex flex-col items-start  gap-5 bg-white rounded-lg shadow-lg py-20 px-5 lg:w-[80vw] lg:min-h-screen  overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">Feedback Details</h2>
                {modalDetails.map((detail, index) => (
                    <div key={index} className={`w-full  justify-start flex flex-col gap-5`}>
                        <h4 className={`flex items-center justify-center gap-2 font-semibold font-nunito text-sm`}> <span>Question: </span>  {detail.question}</h4>
                        <p className={`flex items-center justify-center gap-2 font-light font-nunito text-sm`}> <span>Answer: </span>{detail.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Details;
