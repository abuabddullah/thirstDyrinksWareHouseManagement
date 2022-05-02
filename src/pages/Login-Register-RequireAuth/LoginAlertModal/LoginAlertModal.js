import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { GiCrossedSabres } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom';

const LoginAlertModal = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {
        pathName === '/blogs' ? (
          <Button className='w-md-50 mx-auto text-warning' variant="link" size="lg" onClick={handleShow}>
            Write Blogs <FaArrowAltCircleRight />
          </Button>
        ) : (
          <Button variant="warning" onClick={handleShow} size="lg">
            Update Item
          </Button>
        )
      }


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

export default LoginAlertModal;