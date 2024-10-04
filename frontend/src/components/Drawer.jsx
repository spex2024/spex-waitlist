import { useState } from 'react';
import MultiStepForm from "./MultiStepForm.jsx";

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="text-center">
            <button
                className="text-white bg-[#71bc44] rounded-full font-light  text-md px-5 py-2.5 mb-2 "
                type="button"
                onClick={toggleDrawer}
            >
                Join the waitlist
            </button>

            <div
                id="drawer-right-example"
                className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } bg-gray-100 lg:w-[35%] shadow-md w-96`}
                tabIndex="-1"
                aria-labelledby="drawer-right-label"
            >
                <h5
                    id="drawer-right-label"
                    className="inline-flex items-center gap-5  mb-4 text-base font-semibold text-gray-500  px-10 text-start"
                >

                    < h1 className={`lg:text-xl font-bold`}>

                    Embrace Smart Pack!
                    </h1>
                    <p className={`font-light`}>

                    Sign Up
                    </p>
                </h5>
                <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls="drawer-right-example"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

               <MultiStepForm toggleDrawer={toggleDrawer}/>

            </div>
        </div>
    );
};

export default Drawer;
