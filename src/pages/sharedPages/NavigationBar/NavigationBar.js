import './NavigationBar.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomLink } from './CustomLink'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const NavigationBar = () => {
    const [user, loading, error] = useAuthState(auth);

    // if (user) {        
    //     console.log(user.displayName,user.email,user.photoURL);
    // }

    // handle logout
    const logout = () => {
        signOut(auth);
        toast.success("Logged Out !")
      };
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
                        <Nav.Link as={CustomLink} to="/allItems">Manage All Items</Nav.Link>
                        {
                            user && 
                            <Nav.Link as={CustomLink} to="/itemsUp">Add Items</Nav.Link>
                        }



                    </Nav>
                    <Nav className='navTag'>
                        
                    <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                        {
                            user ? <>
                            <Nav.Link eventKey={2} as={CustomLink} to="/myItems">
                                My Items
                            </Nav.Link>
                            <Nav.Link onClick={logout}>Log Out</Nav.Link>
                            <img src={user?.photoURL} width={40} height={30} alt="" className='img-fluid rounded-circle' />
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