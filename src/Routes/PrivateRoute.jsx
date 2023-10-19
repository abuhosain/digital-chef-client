import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return (<div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        )
    }
    if(user){
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;