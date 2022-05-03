import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { Card, Col, Row } from 'react-bootstrap';
import useItems from '../../customHooks/useItems/useItems';
import Loading from '../../sharedPages/Loading/Loading';
import CountUp from 'react-countup';

const ItemsStats = () => {

    const [items, setItems] = useItems();


    // get dynamic month
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    const thisMonth = months[d.getMonth()]; // "July" (or current month)


    // get dynamic monthly status
    let netWorth = 0
    let netQuantity = 0
    let itemsArray = []
    const arrt = items.map(item => {
        // console.log(item); 
        netWorth += parseInt(item.pdPrice);
        netQuantity += parseInt(item.pdQuantity);
        itemsArray.push(item._id);
    });
    let netItems = itemsArray.length;


    // set parameter for aos
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    return (

        <section className='my-5 p-md-5 bg-orange'>
            <div className="container  overflow-hidden my-5 bg-white p-md-5">
                <div data-aos="fade-down" className='mb-5 text-center display-5 fw-bold '>
                    Inventory Status
                    <hr className="w-25 text-orange p-1 mx-auto" />
                </div>

                {
                    items.length > 0 ? (<>
                        <Row xs={1} md={3} className="g-5 g-md-3">


                            <Col data-aos="fade-right" >
                                <Card className='border-warning border-2 shadow bg-warning'>

                                    <Card.Body className='text-center bg-white rounded-3'>
                                        <Card.Title>Monthly Status : <strong>{thisMonth}</strong></Card.Title>
                                        <h2 className='display-3 fw-bold my-4'>
                                            <CountUp
                                                end={netWorth}
                                                prefix="$"
                                                duration={5}
                                                delay={1}
                                            />
                                        </h2>
                                        <h2 className='fw-bold'>Net Worth</h2>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col data-aos="flip-right">
                                <Card className='border-warning border-2 shadow bg-warning'>

                                    <Card.Body className='text-center bg-white rounded-3'>
                                        <Card.Title>Monthly Status : <strong>{thisMonth}</strong></Card.Title>
                                        <h2 className='display-3 fw-bold my-4'>
                                            <CountUp
                                                end={netItems}
                                                suffix="pcs"
                                                duration={5}
                                                delay={1}
                                            />
                                        </h2>
                                        <h2 className='fw-bold'>Net Items</h2>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col className='mb-5 mb-md-0'>
                                <Card data-aos="fade-left" className='border-warning border-2 shadow bg-warning'>

                                    <Card.Body className='text-center bg-white rounded-3'>
                                        <Card.Title>Monthly Status : <strong>{thisMonth}</strong></Card.Title>
                                        <h2 className='display-3 fw-bold my-4'>
                                            <CountUp
                                                end={netQuantity}
                                                suffix="pcs"
                                                duration={5}
                                                delay={1}
                                            />
                                        </h2>
                                        <h2 className='fw-bold'>Net Quantity</h2>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </>) : <Loading />
                }




            </div>
        </section>
    );
};

export default ItemsStats;