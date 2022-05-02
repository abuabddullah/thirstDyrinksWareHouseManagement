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

        <section className='py-5 px-md-5'>
            <div className="container">
                <div className='mb-5 text-center display-5 fw-bold d-flex justify-content-center align-items-center'>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwf1jKNz3xHbLNq7ucv7Q0B0fpQ8JVvw2L6A&usqp=CAU"
                        width="50"
                        height="50"
                        className="d-inline-block align-top bg-orange rounded-circle d-none d-md-block me-3 border-warning border"
                        alt=""
                    />
                    {blogTitle}</div>

                <article>
                    <img src={banner} alt="" className='img-fluid' />
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