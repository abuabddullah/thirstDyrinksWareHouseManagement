// import React from 'react';
// import { Button, Table } from 'react-bootstrap';
// import useItems from '../../customHooks/useItems/useItems';
// import { AiFillDelete } from "react-icons/ai";
// import DeleteModal from '../DeleteModal/DeleteModal';
// import { Link } from 'react-router-dom';

// const Inventories4Registered = () => {
//     const [items, setItems] = useItems();


//     return (
//         <Table responsive striped bordered hover>
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Product Name</th>
//                     <th>Product Picture</th>
//                     <th>Product ID</th>
//                     <th>Price </th>
//                     <th>Category </th>
//                     <th>Quantity </th>
//                     <th>Supplier </th>
//                     <th>Description</th>
//                     <th>Action</th>

//                 </tr>
//             </thead>
//             <tbody>

//                 {
//                     items.length > 0 ? (
//                         items.map((item, index) =>
//                             <tr key={item?._id}>
//                                 <td>{index + 1}</td>
//                                 <td className='text-capitalize'>{item?.pdName}</td>
//                                 <td>
//                                     <img src={item?.pdPicture} alt="" className='img-fluid ' />
//                                 </td>
//                                 <td>{item?._id}</td>
//                                 <td>{item?.pdPrice}</td>
//                                 <td>{item?.pdCategory}</td>
//                                 <td>{item?.pdQuantity}</td>
//                                 <td>{item?.supplierName}</td>
//                                 <td>{item?.pdDescription.slice(0, 40) + ". . ."}</td>
//                                 <td>
//                                     <div className="d-grid gap-2">
//                                         <DeleteModal _id={item?._id} />
//                                         <Button as={Link} to={`/inventory/${item?._id}`} variant="warning" size="lg">
//                                             Update
//                                         </Button>
//                                     </div>
//                                 </td>
//                             </tr>)
//                     ) : <tr><td colSpan={10} >Waiting for Items . . .</td></tr>

//                 }

//             </tbody>
//         </Table>
//     );
// };

// export default Inventories4Registered;



















import React, { useEffect, useState } from 'react';
import { Button, Form, Pagination, Table } from 'react-bootstrap';
import useItems from '../../customHooks/useItems/useItems';
import { AiFillDelete } from "react-icons/ai";
import DeleteModal from '../DeleteModal/DeleteModal';
import { Link } from 'react-router-dom';

const Inventories4Registered = () => {
    const [items, setItems] = useState([]);

    // Pagination startTransition
    const [noOfPages, setNoOfPages] = useState(0);
    const [perPageProducts, setPerPageProducts] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    // load data as per pagination
    useEffect(() => {
        const url = `https://still-citadel-40412.herokuapp.com/items?currentPage=${currentPage}&perPageProducts=${perPageProducts}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data)
            });
    }, [currentPage, perPageProducts]);



    // get total product count from db and set total page
    useEffect(() => {
        const url = `https://still-citadel-40412.herokuapp.com/itemsCount`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const noOfProducts = data.count;
                const reqNoOfPages = Math.ceil(noOfProducts / perPageProducts);
                setNoOfPages(reqNoOfPages);

            });
    }, [perPageProducts]);






    return (
        <>
            <div className='mb-5'>
                <label htmlFor="selectOption">Items Per Page :</label>
                <Form.Select
                    className='mb-3'
                    id='selectOption'
                    aria-label="Default select example"
                    onChange={(e) => setPerPageProducts(e.target.value)}
                >
                    <option value="3">3</option>
                    <option value="5" selected>5</option>
                    <option value="10">10</option>
                </Form.Select>

                <Pagination>
                    <Pagination.First
                    onClick={() => setCurrentPage(0)}
                    />
                    <Pagination.Prev
                        onClick={() => setCurrentPage(currentPage - 1)}
                    />

                    {
                        [...Array(noOfPages).keys()].map((pNum, index) => {
                            return <Pagination.Item
                                key={index}
                                active={currentPage === pNum}
                                onClick={() => setCurrentPage(pNum)}
                            >{pNum + 1}</Pagination.Item>
                        })
                    }
                    
                    <Pagination.Next
                        onClick={() => setCurrentPage(currentPage + 1)}
                     />
                    <Pagination.Last
                    onClick={() => setCurrentPage(noOfPages - 1)}
                    />
                </Pagination>
            </div>

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
        </>
    );
};

export default Inventories4Registered;