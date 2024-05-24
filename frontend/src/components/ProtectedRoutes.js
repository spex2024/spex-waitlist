// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/userContext.jsx';

const ProtectedRoute = () => {
    const { userInfo } = useContext(UserContext);
    const isAuthenticated = userInfo?._id;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
