// import React from 'react';
// import { Table } from 'react-bootstrap';
// import useItems from '../../customHooks/useItems/useItems';

// const Inventories4Registered = () => {
//     const [items, setItems] = useItems();
//     return (
//         <Table responsive striped bordered hover>
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     
//                         <th >Table heading</th>
//                   
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     
//                         <td >Table cell  </td>
//                   
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     
//                         <td >Table cell  </td>
//                   
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     
//                         <td >Table cell  </td>
//                   
//                 </tr>
//             </tbody>
//         </Table>
//     );
// };

// export default Inventories4Registered;





import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useItems from '../../customHooks/useItems/useItems';
import { AiFillDelete } from "react-icons/ai";
import DeleteModal from '../DeleteModal/DeleteModal';

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
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td className='text-capitalize'>{item.pdName}</td>
                                <td>
                                    <img src={item.pdPicture} alt="" className='img-fluid ' />
                                </td>
                                <td>{item._id}</td>
                                <td>{item.pdPrice}</td>
                                <td>{item.pdCategory}</td>
                                <td>{item.pdQuantity}</td>
                                <td>{item.supplierName}</td>
                                <td>{item.pdDescription.slice(0, 40) + ". . ."}</td>
                                <td>
                                    <div className="d-grid gap-2">
                                        {/* <Button onClick={() => handleDelete(item._id)} variant="danger" size="lg">
                                            <AiFillDelete />
                                        </Button> */}
                                        <DeleteModal _id={item._id}/>
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