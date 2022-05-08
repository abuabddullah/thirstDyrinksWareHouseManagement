import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useSingleItem from '../customHooks/useSingleItem/useSingleItem';
import Loading from '../sharedPages/Loading/Loading';
import { updateMethod } from '../utilities/updateMethod/updateMethod';
import CountUp from 'react-countup';
import PageTitle from '../sharedPages/PageTitle/PageTitle';

const UpdateInventory = () => {
    const { id } = useParams();
    const [item, setItem] = useSingleItem(id);
    const { _id, pdName, pdPrice, pdPicture, pdDescription, email, pdCategory, pdQuantity, supplierName } = item || {}

    // dating the change
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // console.log(day, hours, minutes, seconds);

    // handle sold
    const [soldQty, setSoldQty] = useState(0);
    useEffect(() => {
        setSoldQty(pdQuantity);
    }, [pdQuantity])

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
        let remarks;


        let updateInfo;
        if (pdPrice >= 0 && pdQuantity >= 0) {
            setSoldQty(pdQuantity);
            updateInfo = {
                email: email,
                pdName: pdName,
                pdPrice: pdPrice,
                pdPicture: pdPicture,
                pdDescription: pdDescription,
                pdCategory: pdCategory,
                pdQuantity: pdQuantity,
                supplierName: supplierName,
                remarks: `last updated on ${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`
            }
        } else {
            return toast.error("Price and Quantity must be greater than 0");
        }

        updateMethod(id, updateInfo);
        toast.success("Item updated successfully");
        e.target.reset();
    }



    const handleDelivery = (e) => {
        if (soldQty > 0) {
            setSoldQty(soldQty - 1);
            const updateInfo = {
                pdQuantity: soldQty - 1
            }
            updateMethod(id, updateInfo);
            toast.success("Item delivered successfully");

        } else {
            toast.error("Item is Stock out . Please re-stock");
            return
        }
    }


    return (
        <section className='py-5 px-md-5'>
            <PageTitle title="UpdateInventory" />
            <div className="container">
                <div className='mb-5 text-center display-5 fw-bold d-flex justify-content-center align-items-center'>
                    <img
                        src={pdPicture}
                        width="50"
                        height="50"
                        className="d-inline-block align-top bg-orange rounded-circle  d-none d-md-block me-3"
                        alt=""
                    />
                    Update Inventory
                </div>
                <p className="text-center"><small><code>ID : {_id}</code></small></p>
                {
                    loading ? <Loading /> : (

                        <Form onSubmit={handleSubmit} className='bg-orangeTransparent py-4 p-2 p-md-5 w-md-75 mx-auto'>

                            <p 
                            className='text-center'><small>Updating by <strong>{user?.email} </strong> on <strong>{`${day}/${month}/${year}  ${hours}:${minutes}:${seconds}`}</strong></small></p>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address (creator)"
                                className="mb-3"
                            >
                                <Form.Control disabled readOnly value={email || ""} required name='email' type="email" placeholder="name@example.com" />
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
                                    <option>{pdCategory}</option>
                                    <option>Juice</option>
                                    <option>Drinks</option>
                                    <option>Water</option>
                                </Form.Select>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="SupplierNameInput"
                                label="Supplier Name"
                                className="mb-3"
                            >
                                <Form.Control required name='supplierName' defaultValue={supplierName || ""} type="text" placeholder="Supplier Name" />
                            </FloatingLabel>


                            <Form.Group
                                className="mb-3"
                                controlId="pdPriceInput"
                            >
                                <Form.Label>
                                    Item Quantity
                                </Form.Label>
                                <Form.Control
                                    name='pdQuantity'
                                    type="number"
                                    placeholder="Item Quantity"
                                    required
                                />
                                <Form.Text
                                    className="text-muted">
                                    Update Item Quantity...
                                </Form.Text>
                            </Form.Group>

                            <input className='d-block w-100 mx-auto bg-orange border-0 p-3 mt-3' type="submit" value="Update" />
                        </Form>
                    )}

                <>
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <hr className="w-25" />
                        <span className='mx-2'>or</span>
                        <hr className="w-25" />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <Button as={Link} to="/allItems" className='w-md-50 mx-auto text-warning' variant="link" size="lg">
                            Manage Inventories <FaArrowAltCircleRight />
                        </Button>
                    </div>
                </>

                <div className='position-fixed plusBtn border border-white bg-orangeTransparent p-1 p-md-3 rounded-3'>
                    <p className='text-center'>
                        <strong className='display-3 fw-bold'>
                            <CountUp
                                duration={.1}
                                end={soldQty}
                            />
                        </strong>
                        <small className='d-none d-md-inline-block'>
                            pcs
                        </small>
                    </p>

                    <p className="text-center d-none d-md-block">
                        <small>
                            <code>
                                ID : {_id}
                            </code>
                        </small>
                    </p>

                    <div className="d-grid gap-2 mt-3">
                        <Button className='border border-white' onClick={handleDelivery} variant="warning" size="sm">
                            Delivered
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateInventory;