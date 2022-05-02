import React, { useEffect, useState } from 'react';

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://still-citadel-40412.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs])


    return [blogs, setBlogs];
};

export default useBlogs;