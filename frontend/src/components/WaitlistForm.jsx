import React, { useState } from "react";
import {
    TERipple,
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
} from "tw-elements-react";
import MultiStepForm from "./MultiStepForm.jsx";
import {AiFillCloseCircle} from "react-icons/ai";
import {GrClose} from "react-icons/gr";

export default function WaitlistForm({color ,text}) {
    const [showModalTopRight, setShowModalTopRight] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    return (
        <div>
            <div className="space-x-2">
                {/* <!--Button trigger top right modal--> */}
                <TERipple rippleColor="white">
                    <button
                        type="button"
                        className={`inline-block px-5 py-2 outline outline-1 ${color} ${text} mt-5 font-nunito `}
                        onClick={() => setShowModalTopRight(true)}
                    >
                        Join the waitlist
                    </button>
                </TERipple>
            </div>

            {/* <!--Top right modal--> */}
            <TEModal
                show={showModalTopRight}
                setShow={setShowModalTopRight}
                backdropClass="bg-black bg-opacity-100"
            >
                <TEModalDialog
                    position="top-right"
                    theme={{
                        show: "translate-x-0 opacity-100",
                        hidden: "translate-x-[100%] opacity-0",
                    }}
                >
                    <TEModalContent className="h-[95vh] px-5 rounded-md flex flex-col justify-center">
                        {/* <!--Modal title--> */}
                        <div className={`flex items-center justify-end h-[70px] py-5 px-10`}>
                            {/* <!--Close button--> */}
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                onClick={() => setShowModalTopRight(false)}
                                aria-label="Close"
                            >
                                <GrClose size={25} />
                            </button>
                        </div>

                        <div className={`mt-8 flex flex-col items-start justify-start h-[50px] py-2 px-10`}>
                            <h5 className="text-lg leading-normal font-semibold text-center">
                                Embrace Smart Pack!
                            </h5>
                            <h5 className="text-4xl leading-normal font-semibold text-center">
                                Join the Waitlist
                            </h5>
                        </div>

                        {/* <!--Modal body--> */}
                        <TEModalBody className={`mt-20`}>
                            <MultiStepForm
                                setShowModal={setShowModalTopRight}
                                setShowSuccessMessage={setShowSuccessMessage}
                            />
                        </TEModalBody>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>

            {/* Success message */}
            {showSuccessMessage && (
                <div
                    className="fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-50 py-10 lg:py-">
                    <div className="w-full max-w-lg mx-4 bg-white rounded-lg shadow-lg p-5">
                        <div className="p-5 text-center">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                Thank You!
                            </h3>
                            <p className="text-md text-gray-700 mb-5">
                                Thank you for joining the waitlist. We will keep you updated with the latest news and
                                announcements.
                            </p>
                            <button
                                onClick={() => setShowSuccessMessage(false)}
                                className="w-[50%] text-white bg-green-700 font-medium  text-md px-5 py-2.5 text-center mt-4"
                                type="button"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
