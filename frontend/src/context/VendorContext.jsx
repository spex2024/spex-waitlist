import  { createContext, useState } from "react";


export const VendorContext = createContext({});

export function VendorContextProvider({ children }) {
    const [vendor, setVendor] = useState([]);
    return (
        <VendorContext.Provider value={{ vendor, setVendor}}>
            {children}
        </VendorContext.Provider>
    );
}
