import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ResetPassModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [email, setEmail] = useState('');
    const handleEmailOnBlur = (e) => {
        setEmail(e.target.value);
    }

    // handle reset pass 
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleResetPass = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email sent successfully');
            handleClose()
        }
    }

    return (
        <>
            <span className='text-white text-decoration-none fw-bold cursor-pointer' onClick={handleShow}>
                Forgot password?
            </span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Enter Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input onBlur={handleEmailOnBlur} className='p-2 d-block w-100 border-0' placeholder='Email' type="email" name="email" id="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleResetPass} variant="warning">Send</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ResetPassModal;