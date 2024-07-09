import React from 'react';

const data = [
    { value: "4631", label: "Registered Users" },
    { value: "10", label: "Vendors" },
    { value: "4", label: "Partner Couriers" },
    { value: "1811", label: "Number Of Orders " },
];

function Pilot(props) {
    return (
        <div className="w-full lg:h-[95vh] flex flex-col justify-center items-center px-10 py-20 bg-cover bg-center" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backgroundImage: `url(https://res.cloudinary.com/ddwet1dzj/image/upload/v1720541343/prosp_rni5kb.jpg)`,
            backgroundBlendMode: 'multiply'
        }}>
            <div className="relative flex flex-col items-center text-white mb-5">
                <p className="font-myriad text-xl font-light mb-3"

                >Piloting</p>
                <h1 className="font-myriad text-center  text-2xl lg:text-5xl font-black"


                >Traction during our 1st pilot</h1>
            </div>
            <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10 bg-cover bg-center bg-no-repeat ">
                {data.map((item, index) => (
                    <div key={index} className="w-[200px] h-[150px] flex flex-col  justify-center gap-5 bg-[#c7b72f] items-center m-2 p-4 rounded-md shadow-lg"


                    >
                        <h1 className="font-myriad font-black text-6xl">{item.value}</h1>
                        <p className="font-myriad text-md font-light text-center">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pilot;
