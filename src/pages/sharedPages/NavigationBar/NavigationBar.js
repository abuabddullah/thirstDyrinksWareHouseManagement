import './NavigationBar.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomLink } from './CustomLink'

const NavigationBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className='bg-orange' variant="light" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className='fontLogo'>
                    <img
                        src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    thirsty-drinks</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navTag">
                        <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/items">Items</Nav.Link>
                        <Nav.Link as={CustomLink} to="/itemsUp">Upload Items</Nav.Link>



                    </Nav>
                    <Nav className='navTag'>
                        <Nav.Link>Log Out</Nav.Link>
                        <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                        <Nav.Link eventKey={2} as={CustomLink} to="/myItems">
                            My Items
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;