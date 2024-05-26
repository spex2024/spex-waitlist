import React from 'react';
import Problem from "./Problem.jsx";
import Solution from "./Solution.jsx";
import solution from "../assets/solutions.png";
import problem from "../assets/caution.png";
import home from '../assets/home.jpg'
function About(props) {


    return (
        <div id='about' className={`w-full h-auto  flex flex-col gap-10  mt-32 font-nunito `}>
             <header className={`w-full px-5 h-[100px] flex flex-col  items-center justify-center  mb-20`}>
                 <h2 className={`text-3xl text-center lg:text-5xl font-extra-bold px-5 font-sora mb-5`}>Here's what sets us apart</h2>
                 <p className={` px-5 text-center text-sm  font-nunito`} > - Reducing your packaging cost and waste while linking you to eco-centric users -</p>
             </header>
            <section className={`w-full   grid grid-cols-1 lg:grid-cols-2  gap-10`}>
                <div className={`w-full h-full  px-10 py-16`}>
                    <div
                        className={`w-[50%] lg:w-[25%] py-2 px-2 bg-black  text-white flex justify-center items-center gap-3 font-semibold text-xl rounded mb-5`}>
                        <img src={problem} className={'lg:w-8 lg:h-8 w-5 h-5'}/>
                        <h2 className={`lg:text-md text-sm font-sora font-semibold`}>The Problem</h2>
                    </div>

                    <p className={`font-medium text-md my-10`}>Pollution from the indiscriminate use of Single-Use
                        Plastic packaging in the food services and businesses across Africa.
                    </p>
                    <Problem/>


                </div>
                <div className={`w-full h-full bg-green-700 p-10  bg-cover bg-center py-16 rounded-tl-3xl drop-shadow-xl`}
                     style={{
                         backgroundColor: 'rgba(0, 0, 0, 0.7)',
                         backgroundImage: `url(${home})`,
                         backgroundBlendMode: 'multiply'
                     }}>
                    <div
                        className={`w-[50%] lg:w-[25%] py-2 px-2 bg-white rounded  text-black flex justify-center gap-2 items-center font-bold text-xl mb-5`}>
                        <img src={solution} className={'lg:w-8 lg:h-8 w-5 h-5'}/>
                        <h2 className={`lg:text-md text-sm font-sora font-semibold`}>The Solution</h2>
                    </div>
                    <p className={`font-medium text-md my-10 text-white`}>
                        Our solution leverages a web platform /app to connect food vendors to Users seeking sustainable food packaging.

                    </p>
                    <Solution/>


                </div>
            </section>


        </div>
    );
}

export default About;