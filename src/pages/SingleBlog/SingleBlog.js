import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleBlog = ({ blog }) => {
    const { _id, email,blogTitle, banner, heading1, paragraph1, heading2, paragraph2, writer } = blog || {};
    return (
        <Col>
            <Card>

                <Card.Img variant="top" src={banner} className="img-fluid" />
                <Card.Body>
                    <Card.Title className='text-capitalize'>{blogTitle ? "Q" + blogTitle : `Q : ${heading1} and ${heading2}`}</Card.Title>
                    <Card.Text className=''>
                        {paragraph1.slice(0, 50)} <Link className='text-warning' to={`/blogs/${_id}`}><small>... read more <FaArrowAltCircleRight /></small></Link>
                    </Card.Text>

                </Card.Body>

            </Card>
        </Col>
    );


};

export default SingleBlog;