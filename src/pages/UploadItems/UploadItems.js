import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UploadItems = () => {
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

        const itemInfo = {
            email: email,
            pdName: pdName,
            pdPrice: pdPrice,
            pdPicture: pdPicture,
            pdDescription: pdDescription,
            pdCategory: pdCategory,
            pdQuantity: pdQuantity,
            supplierName: supplierName
        }


        // post new item to db
        const url = "https://still-citadel-40412.herokuapp.com/items";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemInfo),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast.success("Item added successfully");
                e.target.reset();
            })
            .catch(err => console.log(err));
    }

    return (
        <section className='py-5 px-md-5'>
            <div className="container">
                <div className='mb-5 text-center display-5 fw-bold d-flex justify-content-center align-items-center'>
                    <img
                        src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top bg-orange rounded-circle  d-none d-md-block me-3"
                        alt=""
                    />
                    Upload Items</div>

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
                        <Form.Control required name='pdName' type="text" placeholder="Item Name" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="pdPriceInput"
                        label="Item Price"
                        className="mb-3"
                    >
                        <Form.Control required name='pdPrice' type="number" placeholder="Item Price" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="pdPicInput"
                        label="Item Picture URL"
                        className="mb-3"
                    >
                        <Form.Control required name='pdPicture' type="text" placeholder="Item Picture" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea" label="Item Description" className="mb-3">
                        <Form.Control required as="textarea" placeholder="Item Description" name='pdDescription'
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
                        <Form.Control required name='pdQuantity' type="number" placeholder="Item Quantity" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="SupplierNameInput"
                        label="Supplier Name"
                        className="mb-3"
                    >
                        <Form.Control required name='supplierName' type="text" placeholder="Supplier Name" />
                    </FloatingLabel>

                    <input className='d-block w-100 mx-auto bg-orange border-0 p-3 mt-3' type="submit" value="Upload" />
                </Form>

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
            </div>
        </section>
    );
};

export default UploadItems;