// src/App.js
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePrivate from "./pages/HomePrivate.jsx";
import HomePublic from "./pages/HomePublic.jsx";
import { useContext } from "react";
import { UserContext } from "./context/userContext.jsx";
import Register from "./pages/Register.jsx";


function App() {
    const ProtectedRoute = ({ element: Component }) => {
        const { userInfo } = useContext(UserContext);

        return userInfo ? <Component /> : <Navigate to="/login" />;
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/public" element={<HomePublic />} />
                <Route path="/spex" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
