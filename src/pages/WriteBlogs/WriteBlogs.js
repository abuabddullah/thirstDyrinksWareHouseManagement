import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../sharedPages/PageTitle/PageTitle';

const WriteBlogs = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        // e.target.reset();
        const email = e.target?.email?.value;
        const blogTitle = e.target?.blogTitle?.value;
        const banner = e.target?.banner?.value;
        const heading1 = e.target?.heading1?.value;
        const paragraph1 = e.target?.paragraph1?.value;
        const heading2 = e.target?.heading2?.value;
        const paragraph2 = e.target?.paragraph2?.value;
        const writer = e.target?.writer?.value;

        const blogInfo = {
            email,
            blogTitle,
            banner,
            heading1,
            paragraph1,
            heading2,
            paragraph2,
            writer
        }


        const url = `https://still-citadel-40412.herokuapp.com/blogs`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(blogInfo),
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Blog added successfully");
                e.target.reset();
            })
            .catch(err => console.log(err));
    }

    return (
        <section className='py-5 px-md-5'>
        <PageTitle title="WriteBlogs"/>
            <div className="container">
                <div className='mb-5 text-center display-5 fw-bold d-flex justify-content-center align-items-center'>
                    <img
                        src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top bg-orange rounded-circle  d-none d-md-block me-3"
                        alt=""
                    />
                    Write Blogs</div>

                <Form onSubmit={handleSubmit} className='bg-orangeTransparent py-4 p-2 p-md-5 w-md-75 mx-auto'>


                    <FloatingLabel
                        controlId="emailInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control
                            disabled
                            readOnly
                            value={user?.email || ""}
                            required
                            name='email'
                            type="email"
                            placeholder="mail@example.com"
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="titleInput"
                        label="Blog Title"
                        className="mb-3"
                    >
                        <Form.Control
                            required
                            name='blogTitle'
                            type="text"
                            placeholder="Blog Title"
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="bannerInput"
                        label="Blog Banner URL"
                        className="mb-3"
                    >
                        <Form.Control
                            required
                            name='banner'
                            type="text"
                            placeholder="Blog Banner URL"
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="heading1Input"
                        label="Heading 1"
                        className="mb-3"
                    >
                        <Form.Control
                            required
                            name='heading1'
                            type="text"
                            placeholder="Heading 1"
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingTextareaP-1"
                        label="Blog Description (Paragraph-1)"
                        className="mb-3">
                        <Form.Control
                            required
                            name='paragraph1'
                            as="textarea"
                            placeholder="Blog Description (Paragraph-1)"
                            style={{ height: '200px' }}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="heading2Input"
                        label="Heading 2"
                        className="mb-3"
                    >
                        <Form.Control
                            name='heading2'
                            type="text"
                            placeholder="Heading 2"
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingTextareaP-2"
                        label="Blog Description (Paragraph-2)"
                        className="mb-3">
                        <Form.Control
                            name='paragraph2'
                            as="textarea"
                            placeholder="Blog Description (Paragraph-2)"
                            style={{ height: '200px' }}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="WriterInput"
                        label="Writer Name"
                        className="mb-3"
                    >
                        <Form.Control
                            disabled
                            readOnly
                            value={user?.displayName || ""}
                            required
                            name='writer'
                            type="text"
                            placeholder="Writer Name"
                        />
                    </FloatingLabel>

                    <input className='d-block w-100 mx-auto bg-orange border-0 p-3 mt-3' type="submit" value="Upload" />
                </Form>

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

export default WriteBlogs;