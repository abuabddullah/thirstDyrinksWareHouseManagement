import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UploadItems = () => {
    const [user, loading, error] = useAuthState(auth);

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
                    Upload Items</div>
                <Form className='bg-orangeTransparent p-5 w-75 mx-auto'>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Form>
            </div>
        </section>
    );
};

export default UploadItems;