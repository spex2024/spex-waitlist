import React from 'react';
import spexbg from "../assets/coporate.jpg";

const data = [
    { value: "4631", label: "Registered Users" },
    { value: "10", label: "Vendors" },
    { value: "4", label: "Partner Couriers" },
    { value: "1811", label: "Number Of Orders " },
];

function Pilot(props) {
    return (
        <div className="w-full lg:h-[80vh] flex flex-col justify-center items-center px-10 py-20 bg-cover bg-center" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backgroundImage: `url(${spexbg})`,
            backgroundBlendMode: 'multiply'
        }}>
            <div className="relative flex flex-col items-center text-white mb-5">
                <p className="font-nunito text-xl font-semi-bold">Piloting</p>
                <h1 className="font-sora text-center  text-xl lg:text-5xl font-semi-bold">Traction during our 1st pilot</h1>
            </div>
            <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10 bg-cover bg-center ">
                {data.map((item, index) => (
                    <div key={index} className="w-[200px] h-[150px] flex flex-col  justify-center gap-5 bg-[#c7b72f] items-center m-2 p-4 rounded-md shadow-lg">
                        <h1 className="font-sora font-black text-5xl">{item.value}</h1>
                        <p className="font-nunito text-md font-semi-bold text-center">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pilot;
