import  { createContext, useState } from "react";

export const FeedbackContext = createContext({});

export function FeedbackContextProvider({ children }) {
    const [content, setContent] = useState([]);
    return (
        <FeedbackContext.Provider value={{ content, setContent}}>
            {children}
        </FeedbackContext.Provider>
    );
}
