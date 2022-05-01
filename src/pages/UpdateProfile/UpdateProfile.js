import React, { useEffect, useState } from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../sharedPages/Loading/Loading';

const UpdateProfile = () => {
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [updateProfile, updating, error] = useUpdateProfile(auth);


    // redirecting route
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()

    // handle error
    useEffect(() => {
        if (error) {
            let message = error?.message;
            toast.error(message, { id: 'error' });
        }
    }, [error]);


    if (updating) {
        return <Loading />;
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
                    Update Profile</div>


                <div className="d-grid grid-cols-1 gap-2 bg-orangeTransparent py-4 p-2 p-md-5 w-md-75 mx-auto">
                    <input
                        className='p-2 border-0'
                        placeholder='Name'
                        required
                        type="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                    <input
                        className='p-2 border-0'
                        placeholder='Photo URL'
                        required
                        type="photoURL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                    />
                    <button
                        className='bg-orange border-0 p-2 mt-3'
                        onClick={async () => {
                            await updateProfile({ displayName, photoURL });
                            navigate(from, { replace: true });
                            toast.success('Updated profile');
                            
                        }}
                    >
                        Update profile
                    </button>
                </div>


            </div>

        </section>
    );
};

export default UpdateProfile;