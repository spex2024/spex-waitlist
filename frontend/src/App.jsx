import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'; // Import useState and useEffect hooks
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePublic from "./pages/HomePublic.jsx";
import { UserContext } from "./context/userContext.jsx";
import Register from "./pages/Register.jsx";
import {ClimbingBoxLoader, ClipLoader, GridLoader} from "react-spinners";

function App() {
    const { userInfo } = useContext(UserContext);
    const [loading, setLoading] = useState(true); // State to manage loading status

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust the time as needed

        return () => clearTimeout(timer); // Cleanup function
    }, []);

    const ProtectedRoute = ({ element: Component }) => {
        return userInfo ? <Component /> : <Navigate to="/login" />;
    };

    return (
        <Router>
            {loading ? ( // Conditionally render the preloader
                <div className="bg-gray-300 h-screen flex flex-col justify-center items-center">
                    <GridLoader

                        size={15}
                        color={"#57ba46"}
                        loading={loading}



                    />
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/public" element={<HomePublic />} />
                    <Route path="/spex" element={<Register />} />
                </Routes>
            )}
        </Router>
    );
}

export default App;
