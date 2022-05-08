import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import DeleteModal from '../../AllItems/DeleteModal/DeleteModal';
import LoginAlertModal from '../../Login-Register-RequireAuth/LoginAlertModal/LoginAlertModal';
import LoginDeleteModal from '../../Login-Register-RequireAuth/LoginDeleteModal/LoginDeleteModal';

const SingleItem = ({ item }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, pdName, pdPrice, pdPicture, pdDescription, email, pdCategory, pdQuantity, supplierName, remarks } = item || {};

    const location = useLocation();
    const pathName = location?.pathname;
    return (
        <Col>
            <Card className='hoverEffects'>
                <div className="row">
                    <div className="col-md-5">

                        <Card.Img variant="top" src={pdPicture} className="img-fluid h-100" />

                    </div>
                    <div className="col-md-7 py-4">
                        <Card.Body>
                            <Card.Title className='text-capitalize'>{pdName}</Card.Title>
                            <Card.Text className='minH100'>
                                {pdDescription.slice(0, 100)}
                            </Card.Text>
                            <div className='mb-3'>
                                <h4>Price : <strong>$ {pdPrice}</strong></h4>
                                <h4>Category : <strong>{pdCategory}</strong></h4>
                                <h4>Quantity : <strong>{pdQuantity}</strong></h4>
                                <h4>Supplier : <strong>{supplierName}</strong></h4>
                                {
                                    remarks ? <code className='text-muted'>{remarks}</code> : null
                                }
                            </div>
                            <div className="d-grid gap-2">


                                {
                                    pathName === '/myItems' ? (<>

                                        <div className="d-grid gap-2">
                                            <DeleteModal _id={item._id} />
                                            <Button as={Link} to={`/inventory/${item._id}`} variant="warning" size="lg">
                                                Update
                                            </Button>
                                        </div>
                                    </>) : (<>
                                        {
                                            pathName === '/allItems' && <LoginDeleteModal />
                                        }


                                        {
                                            user ? <Button as={Link} to={`/inventory/${_id}`} variant="warning" size="lg">
                                                Update Item
                                            </Button> :
                                                <LoginAlertModal />
                                        }
                                    </>)
                                }




                            </div>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default SingleItem;