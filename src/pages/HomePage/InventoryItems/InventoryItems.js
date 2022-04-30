import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../../customHooks/useItems/useItems';
import Loading from '../../sharedPages/Loading/Loading';
import SingleItem from '../SingleItem/SingleItem';

const InventoryItems = () => {
    const [items, setItems] = useItems();
    return (
        <section className='my-5 p-md-5'>
            <div className="container">
                <div className='mb-5 text-center display-5 fw-bold '>
                    Inventory Items
                    <hr className="w-25 text-orange p-1 mx-auto" />
                </div>
                {
                    items.length > 0 ? (<>
                        <Row xs={1} md={2} className="g-4">

                            {
                                items.slice(2, 8).map(item => <SingleItem
                                    key={item._id}
                                    item={item} />)
                            }

                        </Row>
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
                    </>) : <Loading />
                }



            </div>
        </section>
    );
};

export default InventoryItems;