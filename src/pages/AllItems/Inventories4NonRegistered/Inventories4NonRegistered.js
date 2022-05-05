import React, { useEffect, useState } from 'react';
import { Form, Pagination, Row } from 'react-bootstrap';
import useItems from '../../customHooks/useItems/useItems';
import SingleItem from '../../HomePage/SingleItem/SingleItem';
import Loading from '../../sharedPages/Loading/Loading';

const Inventories4NonRegistered = () => {
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
                setItems(data)
            });
    }, [currentPage, perPageProducts]);



    // get total product count from db and set total page
    useEffect(() => {
        const url = `https://still-citadel-40412.herokuapp.com/itemsCount`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
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
        </>
    );
};

export default Inventories4NonRegistered;