import React from 'react';
import Problem from "./Problem.jsx";
import Solution from "./Solution.jsx";
import spexbg from "../assets/office-1.jpg";


function About(props) {


    return (
        <div id='about' className={`max-w-full h-full flex flex-col gap-32  font-myriad lg:mb-40 px-5 `} >

            <div className={`w-full grid grid-cols-1 lg:grid-cols-2  px-5  py-16 bg-center bg-cover bg-fixed bg-no-repeat`} style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backgroundImage: `url(https://res.cloudinary.com/ddwet1dzj/image/upload/v1720549684/office-1_delwsn.jpg)`,
                backgroundBlendMode: 'multiply'
            }}>
              <div className={`w-full flex flex-col gap-3  px-5 justify-center text-white`}>
                  <div className={`w-[55%] lg:w-[25%] flex bg-[#71bc44] justify-center items-center lg:gap-5 gap-2 rounded-full text-white font-light px-2 text-sm `}>

                  <p className={`font-myriad text-xl  `}> eat    </p>
                  <p className={`font-myriad text-xl  `}> swap   </p>
                  <p className={`font-myriad text-xl  `}> reuse </p>
                  </div>
                  <h1 className={`font-black  text-3xl lg:text-8xl    `}> Smart Pack <br/> Exchange </h1>
              </div>
                <div className={`flex flex-col gap-5  px-5 justify-center items-center`}>
                    <div
                        className={`w-[22%] flex bg-[#71bc44] justify-center items-center gap-5 rounded-full text-white font-light`}>
                    </div>
                    <p className={`font-myriad text-md font-light  text-xl lg:text-2xl  text-white  `}>
                        SPEX is a meal marketplace that leverages a web platform/app to connect food vendors with
                        enterprises and users seeking sustainable food packaging.

                    </p>
                </div>
            </div>

            <div className={`flex flex-col px-5`}>
                <div className={`flex flex-col gap-3 mb-10 px-5 justify-center items-center`}>
                    <h1 className={`font-black  font-sora text-3xl lg:text-5xl  text-black p-2 `}> - The Problem - </h1>
                    <p className={`font-myriad text-md font-light text-center`}>The  Indiscriminate Use of single-use plastic packaging in food services and businesses Across Africa generates a lot of waste and cost.</p>
              </div>
            <Problem/>
            </div>
            <div className={`flex flex-col px-5`}>
              <div className={`flex flex-col gap-3 mb-10 px-5 items-center justify-center`}>
                  <h1 className={`font-black font-myriad text-3xl lg:text-5xl  text-black p-2  `}> - The Solution -</h1>
                  <p className={`font-myriad font-light text-md text-center`}>Our solution leverages a web platform /app to connect food vendors to Users seeking sustainable food packaging.</p>
              </div>
           <Solution/>
            </div>


        </div>
    );
}

export default About;