import React from 'react';

function Process({ accordionData }) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
                <div className="w-full max-w-3xl mx-auto">
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {accordionData.map((step, index) => (
                            <div
                                key={step.id}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                                data-aos="zoom-out"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#71bc44] group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                        <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                    </svg>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] bg-[#c7b72f]  p-4 rounded border-4 border-white shadow">
                                    <div className="flex flex-col gap-2 justify-between  mb-1 ">
                                        <div className=" font-medium text-sm text-slate-900 font-sora">{step.title}</div>
                                    <div className="text-black font-nunito text-sm ">{step.content}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;
