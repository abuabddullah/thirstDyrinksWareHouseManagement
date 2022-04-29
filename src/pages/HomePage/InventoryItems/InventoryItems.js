import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
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
                    items.length > 0 ? (
                        <Row xs={1} md={2} className="g-4">

                            {
                                items.slice(2, 8).map(item => <SingleItem
                                    key={item._id}
                                    item={item} />)
                            }

                        </Row>) : <Loading/>
}

            </div>
        </section>
    );
};

export default InventoryItems;