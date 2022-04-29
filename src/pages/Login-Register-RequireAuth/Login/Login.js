import React, { useEffect } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loading from '../../sharedPages/Loading/Loading';

const Login = () => {
    // redirecting route
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()


    
    
    // get element from firebase react hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    // handle submit
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const {email,password} = data || {}

        if (password.length >= 6) {
            signInWithEmailAndPassword(email, password)
        } else {
            toast.error('Password must be at least 8 characters long');
            return;
        }
    }
    

    // control navigation
    useEffect(() => {
        if (user) {
            toast.success('Logging in Successful', { id: 'login' });
            navigate(from, { replace: true });
        }
    }, [user]);

    // control error
    useEffect(() => {
        if (error) {
            let message = error?.message;
            toast.error(message, { id: 'error' });
        }
    }, [error]);

    // control loading
    if (loading) {
        return <Loading />
    }



    return (
        <section className='p-5'>
            <div className="container">
                <div className='mb-5 text-center display-5 fw-bold d-flex justify-content-center align-items-center'>
                    <img
                        src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top bg-orange rounded-circle me-3"
                        alt="React Bootstrap logo"
                    />
                    Login Now</div>
                <div className="row">
                    <div className="col-12 col-lg-6 mb-5 d-none d-lg-block d-flex align-items-center justify-content-center">
                        <img src="https://i.ibb.co/g9y4jff/pran-mango-Juice.jpg" alt="" className='w-75 img-fluid rounded-circle' />
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">



                        <form className='d-grid grid-cols-1 gap-2 bg-orangeTransparent p-4 pt-5 w-75 mx-auto' onSubmit={handleSubmit(onSubmit)}>

                            <input className='p-2 border-0' placeholder='Email' type="email" {...register("email", { required: true })} />
                            {errors.email?.type === 'required' && "Email is required"}

                            <input className='p-2 border-0' placeholder='Password' type="password" {...register("password", { required: true })} />
                            {errors.password?.type === 'required' && "Password is required"}

                            <input className='bg-orange border-0 p-2 mt-3' type="submit" />

                            <div className="mt-3 text-center">
                                <p>Not Have Account? <Link className='text-decoration-none text-white fw-bold' to='/register'>Register now</Link></p>
                                <p style={{ color: "#fff", cursor: "pointer", fontWeight: "700" }}>Forgot password?</p>
                            </div>
                        </form>

                    </div>
                    
                    <SocialLogin/>

                </div>
            </div>
        </section>
    );
};

export default Login;