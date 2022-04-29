import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoginAlertModal from '../../Login-Register-RequireAuth/LoginAlertModal/LoginAlertModal';

const SingleItem = ({ item }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, pdName, pdPrice, pdPicture, pdDescription, email, pdCategory, pdQuantity, supplierName } = item || {};
    return (
        <Col>
            <Card>
                <div className="row">
                    <div className="col-5">

                        <Card.Img variant="top" src={pdPicture} className="img-fluid h-100" />

                    </div>
                    <div className="col-7 py-4">
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
                            </div>
                            <div className="d-grid gap-2">
                                {
                                    user ? <Button as={Link} to={`/inventory/${_id}`} variant="warning" size="lg">
                                        Update Item
                                    </Button> :
                                        <LoginAlertModal />
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