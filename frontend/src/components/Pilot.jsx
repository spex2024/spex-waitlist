import React from 'react';
import spexbg from "../assets/prosp.jpg";

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
            backgroundImage: `url(${spexbg})`,
            backgroundBlendMode: 'multiply'
        }}>
            <div className="relative flex flex-col items-center text-white mb-5">
                <p className="font-nunito text-xl font-semi-bold mb-3"
                   data-aos="fade-in"
                   data-aos-offset="200"
                   data-aos-delay="50"
                   data-aos-duration="1000"
                   data-aos-easing="ease-in-out"
                   data-aos-mirror="true"
                   data-aos-once="true"
                >Piloting</p>
                <h1 className="font-sora text-center  text-xl lg:text-5xl font-semi-bold"

                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"

                >Traction during our 1st pilot</h1>
            </div>
            <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10 bg-cover bg-center bg-no-repeat ">
                {data.map((item, index) => (
                    <div key={index} className="w-[200px] h-[150px] flex flex-col  justify-center gap-5 bg-[#c7b72f] items-center m-2 p-4 rounded-md shadow-lg"

                         data-aos="fade-zoom-in"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="500"
                         data-aos-easing="ease-in-out"


                    >
                        <h1 className="font-sora font-black text-5xl">{item.value}</h1>
                        <p className="font-nunito text-md font-semi-bold text-center">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pilot;
