import React from 'react';
import useItems from '../../customHooks/useItems/useItems';

const InventoryItems = () => {
    const [items, setItems] = useItems();
    return (
        <section className='mt-5 p-5'>
            <div className="container">
                <div className='mb-5 text-center display-5 fw-bold '>
                    Inventory Items
                    <hr className="w-25 text-orange p-1 mx-auto" />
                </div>
            </div>
        </section>
    );
};

export default InventoryItems;