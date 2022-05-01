import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Forbidden = () => {

    const [sendEmailVerification, sending, varifyError] = useSendEmailVerification(auth);

    return (
        <section className='p-5'>
            <div className="container">
                <div className="row  justify-content-center align-items-center">
                    <div className="col-12 col-md-6  mb-5 p-3">
                        <img src="https://cdn.dribbble.com/users/1192256/screenshots/6290585/1._friday.gif" alt="" className='img-fluid border border-warning rounded-3 img-thumbnail shadow' />
                    </div>

                    <div className="col-12 col-md-6">
                        <div className='mb-5 text-center display-6 fw-bold d-flex justify-content-center align-items-center'>
                            <img
                                src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
                                width="50"
                                height="50"
                                className="d-inline-block align-top bg-orange rounded-circle d-none d-md-block me-3"
                                alt=""
                            />
                            Verify Email</div>

                        <p className="text-center">
                            <code>Your email is not verified !!!</code>
                        </p>

                        <div className="text-center">
                            <button
                                className='btn btn-outline-warning'
                                onClick={async () => {
                                    await sendEmailVerification();
                                    toast('Sent email');
                                }}
                            >
                                Send Verification Email
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Forbidden;