import React, { useEffect, useState } from 'react';

const useSingleBlog = (id) => {
    const [blog, setBlog] = useState({});
    useEffect(() => {
        const url = `https://still-citadel-40412.herokuapp.com/blogs/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
            })
    }, [id, blog?.paragraph1, blog?.paragraph2]);
    return [blog, setBlog];
};

export default useSingleBlog;