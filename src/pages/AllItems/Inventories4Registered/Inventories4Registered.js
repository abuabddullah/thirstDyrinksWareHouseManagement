import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useItems from '../../customHooks/useItems/useItems';
import { AiFillDelete } from "react-icons/ai";
import DeleteModal from '../DeleteModal/DeleteModal';
import { Link } from 'react-router-dom';

const Inventories4Registered = () => {
    const [items, setItems] = useItems();


    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Product Picture</th>
                    <th>Product ID</th>
                    <th>Price </th>
                    <th>Category </th>
                    <th>Quantity </th>
                    <th>Supplier </th>
                    <th>Description</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>

                {
                    items.length > 0 ? (
                        items.map((item, index) =>
                            <tr key={item?._id}>
                                <td>{index + 1}</td>
                                <td className='text-capitalize'>{item?.pdName}</td>
                                <td>
                                    <img src={item?.pdPicture} alt="" className='img-fluid ' />
                                </td>
                                <td>{item?._id}</td>
                                <td>{item?.pdPrice}</td>
                                <td>{item?.pdCategory}</td>
                                <td>{item?.pdQuantity}</td>
                                <td>{item?.supplierName}</td>
                                <td>{item?.pdDescription.slice(0, 40) + ". . ."}</td>
                                <td>
                                    <div className="d-grid gap-2">
                                        <DeleteModal _id={item?._id} />
                                        <Button as={Link} to={`/inventory/${item?._id}`} variant="warning" size="lg">
                                            Update
                                        </Button>
                                    </div>
                                </td>
                            </tr>)
                    ) : <tr><td colSpan={10} >Waiting for Items . . .</td></tr>

                }

            </tbody>
        </Table>
    );
};

export default Inventories4Registered;