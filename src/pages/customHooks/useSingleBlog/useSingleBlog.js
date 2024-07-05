import { useEffect, useState } from 'react';

const useSingleBlog = (id) => {
    const [blog, setBlog] = useState({});
    useEffect(() => {
        const url = `https://thirstdyrinkswarehousemanagement-server.onrender.com/blogs/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
            })
    }, [id, blog?.paragraph1, blog?.paragraph2]);
    return [blog, setBlog];
};

export default useSingleBlog;