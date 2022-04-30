import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GiCrossedSabres } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";

const LoginDeleteModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="danger" onClick={handleShow} size="lg">                
            <AiFillDelete />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Logging In Required !!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <GiCrossedSabres className='d-block mx-auto display-1 fw-bold text-danger rounded-circle p-2 border border-danger' />
                    <h2 className='text-center mt-3'>Login First</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button as={Link} to="/login" variant="warning">Login</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LoginDeleteModal;