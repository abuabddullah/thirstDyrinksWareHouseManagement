import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from './../../sharedPages/Loading/Loading'
import getAccessToken from '../../utilities/getAccessToken/getAccessToken';

const SocialLogin = () => {
    // redirecting route
    let location = useLocation();
    let from = location.state?.from?.pathname || "/home";
    const navigate = useNavigate()

    // getting elem from hook
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

    // handle google sign in button
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }


    // handle navigation
    useEffect(() => {
        if (userGoogle) {
            getAccessToken(userGoogle)
            navigate(from, { replace: true });
        }
    }, [userGoogle]);

    // control error
    useEffect(() => {
        if (errorGoogle) {
            let message = errorGoogle.message;
            toast.error(message, { id: 'error' });
        }
    }, [errorGoogle]);


    
    // handle loading
    if (loadingGoogle) {
        return <Loading />
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <hr className="w-25" />
                <span className='mx-2'>or</span>
                <hr className="w-25" />
            </div>

            <div className="d-grid gap-2 mt-3">
                <Button onClick={handleGoogleSignIn} className='w-md-50 mx-auto text-dark' variant="outline-warning" size="lg">
                    <FaGoogle /> Login with Google
                </Button>
            </div>
        </>
    );
};

export default SocialLogin;