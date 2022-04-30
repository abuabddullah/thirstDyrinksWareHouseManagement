import React from 'react';
import { Row } from 'react-bootstrap';
import useItems from '../../customHooks/useItems/useItems';
import SingleItem from '../../HomePage/SingleItem/SingleItem';
import Loading from '../../sharedPages/Loading/Loading';

const Inventories4NonRegistered = () => {
    const [items, setItems] = useItems();
    return (
        <div>
            {
                items.length > 0 ? (
                    <Row xs={1} md={2} className="g-4">

                        {
                            items.map(item => <SingleItem
                                key={item._id}
                                item={item} />)
                        }

                    </Row>) : <Loading />
            }
        </div>
    );
};

export default Inventories4NonRegistered;