// import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import { FaGoogle } from 'react-icons/fa';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../../../firebase.init';
// import Loading from '../../sharedPages/Loading/Loading';
// import SocialLogin from '../SocialLogin/SocialLogin';

// const Register = () => {
//     // redirecting route
//     let location = useLocation();
//     let from = location.state?.from?.pathname || "/home";
//     const navigate = useNavigate()

//     // set name to update profile
//     const [displayName, setDisplayName] = useState('');

//     // get element from firebase react hook    
//     const [
//         createUserWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

//     const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);


//     // handle form
//     const { register, formState: { errors }, handleSubmit } = useForm();
//     const onSubmit = async (data) => {
//         const { email, name, password } = data || {}

//         if (password.length >= 8) {
//             await createUserWithEmailAndPassword(email, password)
//             setDisplayName(name);
//             await updateProfile({ displayName: name });
//         } else {
//             toast.error('Password must be at least 8 characters long');
//             return;
//         }
//     }



//     // handle navigation
//     useEffect(() => {
//         if (user) {
//             toast.success('Registration Successful', { id: 'register' });
//             navigate(from, { replace: true });
//             console.log(user);
//         }
//     }, [user]);

//     // control error
//     useEffect(() => {
//         if (error) {
//             let message = error.message;
//             toast.error(message, { id: 'error' });
//         }
//     }, [error]);



//     // handle loading
//     if (loading) {
//         return <Loading />
//     }




//     return (
//         <section className='py-5 px-md-5'>
//             <div className="container">
//                 <div className='mb-5 text-center display-5 fw-bold d-flex justify-content-center align-items-center'>
//                     <img
//                         src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
//                         width="50"
//                         height="50"
//                         className="d-inline-block align-top bg-orange rounded-circle d-none d-md-block me-3"
//                         alt=""
//                     />
//                     Register Now</div>


//                 <div className="row">
//                     <div className="col-12 col-md-9 mx-auto">

//                         <form className='d-grid grid-cols-1 gap-2 bg-orangeTransparent py-4 p-2 p-md-5 w-md-75 mx-auto' onSubmit={handleSubmit(onSubmit)}>

//                             <input className='p-2 border-0' placeholder='Name' type="text"  {...register("name", { required: true })} />
//                             {errors.name?.type === 'required' && "Name is required"}

//                             <input className='p-2 border-0' placeholder='Email' type="email" {...register("email", { required: true })} />
//                             {errors.email?.type === 'required' && "Email is required"}

//                             <input className='p-2 border-0' placeholder='Password' type="password" {...register("password", { required: true })} />
//                             {errors.password?.type === 'required' && "Password is required"}

//                             <input className='bg-orange border-0 p-2 mt-3' type="submit" />

//                             <div className="mt-3 text-center">
//                                 <p>Have Account? <Link className='text-decoration-none text-white fw-bold' to='/login'>Login now</Link></p>
//                             </div>
//                         </form>
//                     </div>

//                     <SocialLogin />

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Register;














import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../sharedPages/Loading/Loading';
import getAccessToken from '../../utilities/getAccessToken/getAccessToken';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    // redirecting route
    let location = useLocation();
    let from = location.state?.from?.pathname || "/home";
    const navigate = useNavigate()

    // set name to update profile
    const [displayName, setDisplayName] = useState('');

    // get element from firebase react hook    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);


    // handle form
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const { email, name, password } = data || {}

        if (password.length >= 8) {
            await createUserWithEmailAndPassword(email, password)
            setDisplayName(name);
            await updateProfile({ displayName: name });
        } else {
            toast.error('Password must be at least 8 characters long');
            return;
        }
    }



    // handle navigation
    useEffect(() => {
        if (user) {
            getAccessToken(user)
            navigate(from, { replace: true });
            // console.log(user);
        }
    }, [user]);

    // control error
    useEffect(() => {
        if (error) {
            let message = error.message;
            toast.error(message, { id: 'error' });
        }
    }, [error]);



    // handle loading
    if (loading) {
        return <Loading />
    }




    return (
        <section className='py-5 px-md-5'>
            <div className="container">
                <div className='mb-5 text-center display-5 fw-bold d-flex justify-content-center align-items-center'>
                    <img
                        src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top bg-orange rounded-circle d-none d-md-block me-3"
                        alt=""
                    />
                    Register Now</div>


                <div className="row">
                    <div className="col-12 col-md-9 mx-auto">

                        <form className='d-grid grid-cols-1 gap-2 bg-orangeTransparent py-4 p-2 p-md-5 w-md-75 mx-auto' onSubmit={handleSubmit(onSubmit)}>

                            <input className='p-2 border-0' placeholder='Name' type="text"  {...register("name", { required: true })} />
                            {errors.name?.type === 'required' && "Name is required"}

                            <input className='p-2 border-0' placeholder='Email' type="email" {...register("email", { required: true })} />
                            {errors.email?.type === 'required' && "Email is required"}

                            <input className='p-2 border-0' placeholder='Password' type="password" {...register("password", { required: true })} />
                            {errors.password?.type === 'required' && "Password is required"}

                            <input className='bg-orange border-0 p-2 mt-3' type="submit" />

                            <div className="mt-3 text-center">
                                <p>Have Account? <Link className='text-decoration-none text-white fw-bold' to='/login'>Login now</Link></p>
                            </div>
                        </form>
                    </div>

                    <SocialLogin />

                </div>
            </div>
        </section>
    );
};

export default Register;