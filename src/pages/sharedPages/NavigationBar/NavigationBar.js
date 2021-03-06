import './NavigationBar.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CustomLink } from './CustomLink'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const NavigationBar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();


    // handle logout
    const logout = () => {
        signOut(auth);
        toast.success("Logged Out !")
    };


    return (
        <Navbar collapseOnSelect expand="lg" className='bg-orange  border-bottom border-white' variant="light" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className='fontLogo'>
                    <img
                        src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    thirsty-drinks</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navTag">
                        <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/allItems">{user ? "Manage All Items" : "All Items"}</Nav.Link>
                        {
                            user && (<>
                                <Nav.Link as={CustomLink} to="/itemsUp">Add Items</Nav.Link>
                                <Nav.Link as={CustomLink} to="/myItems"> My Items </Nav.Link>
                            </>)
                        }



                    </Nav>
                    <Nav className='navTag'>

                        <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                        {
                            user ? <>
                                <Nav.Link eventKey={2} as={CustomLink} to="/myBlogs"> My Blogs </Nav.Link>
                                <Nav.Link onClick={logout}>Log Out</Nav.Link>
                                <img onClick={() => navigate(`/updateProfile`)} src={user?.photoURL} width={40} height={30} alt="" className='img-fluid rounded-circle cursor-pointer' title='Update Profile?' />
                            </> :
                                <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;