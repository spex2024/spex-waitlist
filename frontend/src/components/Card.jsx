import React from 'react';

const Card = ({ id, title, content, image }) => (
    <div key={id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl  rounded-tl-3xl rounded-br-3xl border-4 ">
        <div className="h-96 w-96">
            <img className="h-full w-full object-cover bg-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image} alt={title} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-start justify-center gap-5 px-2  transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-myriad text-lg font-bold text-white text-start">{title}</h1>
            {content.map((paragraph, index) => (
                <div key={index} className="w-full">
                    <p className="h-24 mb-5 mt-5 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-myriad font-light">{paragraph}</p>
                </div>
            ))}
        </div>
    </div>
);

export default Card;
