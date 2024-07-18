import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider} from "./context/userContext.jsx";
import {FeedbackContextProvider} from "./context/FeedbackContext.jsx";
import {NextUIProvider} from "@nextui-org/react";
import { VendorContextProvider} from "./context/VendorContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NextUIProvider>
      <UserContextProvider>
          <FeedbackContextProvider>
              <VendorContextProvider>

                <App />
              </VendorContextProvider>
          </FeedbackContextProvider>
      </UserContextProvider>
      </NextUIProvider>
  </React.StrictMode>,
)
