
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children, ...rest }) => {
    const auth = useSelector((state) => state.auth.token);
    const token = window.localStorage.getItem('token');
    let location = useLocation();
    if (token) {
        return children;
    }
    return <Navigate to="/register" state={{ from: location }} />;
};
export default PrivateRoute;