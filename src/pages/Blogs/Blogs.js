import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useBlogs from '../customHooks/useBlogs/useBlogs';
import LoginAlertModal from '../Login-Register-RequireAuth/LoginAlertModal/LoginAlertModal';
import Loading from '../sharedPages/Loading/Loading';
import PageTitle from '../sharedPages/PageTitle/PageTitle';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
    const [user, loading, error] = useAuthState(auth);

    const [blogs, setBlogs] = useBlogs()

    return (
        <section className='py-5 px-md-5'>
        <PageTitle title="Blogs"/>
            <div className="container">
                <div className='mb-5 text-center display-5 fw-bold d-flex justify-content-center align-items-center'>
                    <img
                        src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top bg-orange rounded-circle d-none d-md-block me-3"
                        alt=""
                    />
                    Blogs</div>


                {
                    blogs.length > 0 ? (
                        <Row xs={1} md={2} className="g-4">

                            {
                                blogs.map(blog => <SingleBlog
                                    key={blog._id}
                                    blog={blog} />)
                            }

                        </Row>) : <Loading />
                }
                <>
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <hr className="w-25" />
                        <span className='mx-2'>or</span>
                        <hr className="w-25" />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        
                        {
                            user ? (
                                <Button as={Link} to="/writeBlogs" className='w-md-50 mx-auto text-warning' variant="link" size="lg">
                                    Write Blogs <FaArrowAltCircleRight />
                                </Button>
                            ) : (
                                <LoginAlertModal />

                            )
                        }

                    </div>
                </>

            </div>

        </section>
    );


};

export default Blogs;