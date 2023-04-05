import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const authToken = localStorage.getItem('access_token');
    console.log(authToken)
    
    if (!authToken) {
        return <Navigate to="/login" replace />
    }

    return children;
}

export default ProtectedRoute
