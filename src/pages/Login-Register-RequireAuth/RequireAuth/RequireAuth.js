import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../sharedPages/Loading/Loading';
import Forbidden from '../Forbidden/Forbidden';


const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, varifyError] = useSendEmailVerification(auth);
    const location = useLocation();


    if (loading) {
        return <Loading />
    }


    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
        return <Forbidden />
    }




    return children;
};

export default RequireAuth;