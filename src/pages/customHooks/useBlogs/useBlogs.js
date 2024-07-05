import { useEffect, useState } from 'react';

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://thirstdyrinkswarehousemanagement-server.onrender.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs])


    return [blogs, setBlogs];
};

export default useBlogs;