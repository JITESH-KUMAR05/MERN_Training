import React from 'react'
import { useAuth } from '../store/authStore'
import { loadingClass } from '../styles/common';
import { Navigate } from 'react-router';

const ProtectedRoute = ({children, allowedRoles}) => {
    const {loading , currentUser, isAuthenticated} = useAuth();
    // loading state
    if(loading){
        return <p className={loadingClass}>Loading...</p>
    }
    // check if the user
    if(!isAuthenticated){
        return <Navigate to="/login" replace />
    }
    // check the roles
    if(allowedRoles && !allowedRoles.includes(currentUser?.role)){
        return <Navigate to="/unauthorized" redirectTo="/" />
    }
  return children;
}

export default ProtectedRoute
