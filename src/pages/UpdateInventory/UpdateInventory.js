import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useSingleItem from '../customHooks/useSingleItem/useSingleItem';
import Loading from '../sharedPages/Loading/Loading';
import { updateMethod } from '../utilities/updateMethod/updateMethod';

const UpdateInventory = () => {
    const { id } = useParams();
    const [item, setItem] = useSingleItem(id);
    const { _id, pdName, pdPrice, pdPicture, pdDescription, email, pdCategory, pdQuantity, supplierName } = item || {}



    const [user, loading, error] = useAuthState(auth);


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target?.email?.value;
        const pdName = e.target?.pdName?.value;
        const pdPrice = e.target?.pdPrice?.value;
        const pdPicture = e.target?.pdPicture?.value;
        const pdDescription = e.target?.pdDescription?.value;
        const pdCategory = e.target?.pdCategory?.value;
        const pdQuantity = e.target?.pdQuantity?.value;
        const supplierName = e.target?.supplierName?.value;

        const updateInfo = {
            email,
            pdName,
            pdPrice,
            pdPicture,
            pdDescription,
            pdCategory,
            pdQuantity,
            supplierName
        }
        // console.log(updateInfo);

        updateMethod(id, updateInfo);
    }


    // handle sold
    const [soldQty, setSoldQty] = useState(0);
    useEffect(() => {
        setSoldQty(pdQuantity);
    }, [pdQuantity])

    const handleSell = (e) => {
        if (pdQuantity) {
            setSoldQty(soldQty - 1);
        }
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
                        alt="React Bootstrap logo"
                    />
                    Update Inventory</div>

                {
                    loading ? <Loading /> : (

                        <Form onSubmit={handleSubmit} className='bg-orangeTransparent py-4 p-2 p-md-5 w-md-75 mx-auto'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control disabled readOnly value={user?.email || ""} required name='email' type="email" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="pdNameInput"
                                label="Item Name"
                                className="mb-3"
                            >
                                <Form.Control required name='pdName' defaultValue={pdName || ""} type="text" placeholder="Item Name" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="pdPriceInput"
                                label="Item Price"
                                className="mb-3"
                            >
                                <Form.Control required name='pdPrice' defaultValue={pdPrice || ""} type="number" placeholder="Item Price" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="pdPicInput"
                                label="Item Picture URL"
                                className="mb-3"
                            >
                                <Form.Control required name='pdPicture' defaultValue={pdPicture || ""} type="text" placeholder="Item Picture" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingTextarea" label="Item Description" className="mb-3">
                                <Form.Control required as="textarea" placeholder="Item Description" name='pdDescription' defaultValue={pdDescription || ""}
                                    style={{ height: '100px' }} />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="pdCategoryInput"
                                label="Item Category"
                                className="mb-3"
                            >
                                <Form.Select defaultValue="" required name='pdCategory' size="lg" className='mb-3'>
                                    <option></option>
                                    <option>Juice</option>
                                    <option>Drinks</option>
                                    <option>Water</option>
                                </Form.Select>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="pdPriceInput"
                                label="Item Quantity"
                                className="mb-3"
                            >
                                <Form.Control required name='pdQuantity' defaultValue={soldQty || ""} type="number" placeholder="Item Quantity" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="SupplierNameInput"
                                label="Supplier Name"
                                className="mb-3"
                            >
                                <Form.Control required name='supplierName' defaultValue={supplierName || ""} type="text" placeholder="Supplier Name" />
                            </FloatingLabel>

                            <input className='d-block w-100 mx-auto bg-orange border-0 p-3 mt-3' type="submit" value="Update" />

                            <div className="d-grid gap-2 mt-3">
                                <Button onClick={handleSell} variant="warning" size="lg">
                                    Sold
                                </Button>
                            </div>
                        </Form>
                    )}

                <>
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <hr className="w-25" />
                        <span className='mx-2'>or</span>
                        <hr className="w-25" />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <Button as={Link} to="/allItems" className='w-md-50 mx-auto text-dark' variant="outline-warning" size="lg">
                            Manage Inventory
                        </Button>
                    </div>
                </>
            </div>
        </section>
    );
};

export default UpdateInventory;