import React from 'react';
import Partners from "./Partners.jsx";

function Partner(props) {
    return (
        <div className={`max-w-full h-[500px]  flex flex-col items-center justify-center overflow-hidden px-10 py-16 mt-20`}>
            <h1 className={`font-myriad text-6xl mb-10 font-black`}>Partners</h1>
              <Partners />

        </div>
    );
}

export default Partner;