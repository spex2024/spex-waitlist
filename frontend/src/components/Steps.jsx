import React from 'react';

function Steps({key,title,content , image , steps}) {


    return (



            <div className={'px-10'} key={key}>
                <div className="ps-2 my-10 first:mt-0">
                    <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">

                    </h3>
                </div>

                <div className="flex  gap-5">
                    <div
                        className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700 ru">
                        <div className="relative z-10 size-8 flex justify-center items-center bg-[#252526] rounded-full text-white font-nunito ">
                            {steps}
                        </div>
                    </div>

                    <div className="grow bg-[#dbcf20] shadow-lg py-5 px-5 rounded-lg">
                        <h3 className="flex items-center gap-x-1.5  text-gray-800 mb-3 font-bold text-sm lg:text-lg">
                            <img className=" lg:w-7 lg:h-7 w-5 h-5  "
                                 src={image}
                                 alt="Image Description"/>
                            {title}
                        </h3>
                        <p className="mt-1 text-sm text-[#252526] ">
                            {content}
                        </p>

                    </div>
                </div>


            </div>



    );
}

export default Steps;