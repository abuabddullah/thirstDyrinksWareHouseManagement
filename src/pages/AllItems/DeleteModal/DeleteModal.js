import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import { GiCrossedSabres } from "react-icons/gi";
import { toast } from 'react-toastify';
import useItems from '../../customHooks/useItems/useItems';

const DeleteModal = ({ _id }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // handle delete item
    const [items, setItems] = useItems();
    const handleDelete = (id) => {

        const url = `https://thirstdyrinkswarehousemanagement-server.onrender.com/items/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Successfully Deleted !!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    const remainingItems = items.filter(item => item._id !== id);
                    setItems(remainingItems);
                    handleClose();
                }
            })
            .catch(err => console.log(err));
    }



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
                    <Modal.Title>ID : <strong><small>{_id}</small></strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <GiCrossedSabres className='d-block mx-auto display-1 fw-bold text-danger rounded-circle p-2 border border-danger' />
                    <h2 className='text-center mt-3'>Sure to Delete ?</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteModal;