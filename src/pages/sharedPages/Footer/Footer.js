import './Footer.css'
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-orange text-white py-5 p-md-5 pb-4'>
            <div className="container">


                <div className="row align-items-center">
                    <div className="col-12 col-md-6 text-center mb-5">
                        <figure>
                            <img src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
                                alt=""
                                className='img-fluid'
                                width={200}
                            />
                            <figcaption className='fontLogo'>Satisfy yoUr Thirst</figcaption>
                        </figure>

                    </div>
                    <div className="col-12 col-md-3 text-md-end">
                        <h3 className="my-3">Quick Links</h3>
                        <hr className='ms-md-auto w-50 text-white p-1' />
                        <ul className="list-unstyled">
                            <li><Link className='text-decoration-none text-white' to='/aboutItesms'>About Our Items</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/blogs'>Read my blogs</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/register'>Register</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/addItem'>Add Items</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 text-md-end">
                        <h3 className="my-3">Contacts</h3>
                        <hr className='ms-md-auto w-50 text-white p-1' />
                        <ul className="list-unstyled">
                            <li>Bangladesh</li>
                            <li>+880-1939032974</li>
                            <li>+880-1313707413</li>
                            <li>asif@gmail.com</li>
                        </ul>
                    </div>
                </div>


                <div className="text-md-end">
                    <h3 className="my-3">About</h3>
                    <hr className='ms-md-auto w-75 text-white p-1' />
                    <p className='text-justify'>"If life gives you lemons, make some kind of fruity juice"</p>

                    <div className=''>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Link to='/facebook' className='icons'><FaFacebookSquare /></Link></li>
                            <li className="list-inline-item">
                                <Link to='/twitter' className='icons'><FaTwitterSquare /></Link></li>
                            <li className="list-inline-item">
                                <Link to='/youtube' className='icons'><FaYoutubeSquare /></Link></li>
                            <li className="list-inline-item">
                                <Link to='/instagram' className='icons'><FaInstagramSquare /></Link></li>
                        </ul>




                    </div>
                </div>

                <div className="border-top border-white mt-5 pt-4 text-white">
                    <p className="text-center m-0">
                        Copyright {(new Date().getFullYear())} | &copy; All Rights Reserved By <strong>THIRSTY-DRINKS</strong>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;