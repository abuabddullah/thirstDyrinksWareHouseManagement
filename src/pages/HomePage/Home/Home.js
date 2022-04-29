import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/PCQTKJj/water-banner2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Mineral Water</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/jznNS9J/softdrinks-banner2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Soft Drinks</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/mXFnYGh/juice-banner2.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Fruits Juice</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;