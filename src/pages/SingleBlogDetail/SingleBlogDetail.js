import React from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import useSingleBlog from '../customHooks/useSingleBlog/useSingleBlog';

const SingleBlogDetail = () => {
    const { _id } = useParams();
    const [blog, setBlog] = useSingleBlog(_id);

    const { email, blogTitle, banner, heading1, paragraph1, heading2, paragraph2, writer } = blog || {};

    return (

        <section className='pb-5'>
            <img src={banner} alt="" className='img-fluid w-100' />
            <div className="container">


                <article>
                    <div className='my-5 text-center'>

                        <h2 className=' display-5 fw-bold'>
                            {blogTitle}
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwf1jKNz3xHbLNq7ucv7Q0B0fpQ8JVvw2L6A&usqp=CAU"
                                width="50"
                                height="50"
                                className="ms-3 bg-orange rounded-circle d-none d-md-inline-block border-warning border border-5"
                                alt=""
                            />
                        </h2>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-capitalize'>
                            {heading1}
                        </h2>
                        <p>
                            {paragraph1}
                        </p>

                        <h2 className='text-capitalize'>
                            {heading2}
                        </h2>
                        <p>
                            {paragraph2}
                        </p>
                    </div>
                </article>

                <>
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <hr className="w-25" />
                        <span className='mx-2'>or</span>
                        <hr className="w-25" />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <Button as={Link} to="/blogs" className='w-md-50 mx-auto text-warning' variant="link" size="lg">
                            Go Back to Blogs <FaArrowAltCircleRight />
                        </Button>
                    </div>
                </>

            </div>

        </section>
    );
};

export default SingleBlogDetail;