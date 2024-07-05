import { useEffect, useState } from 'react';

const useMyItems = (user) => {
    const [myItems, setMyItems] = useState([]);


    useEffect(() => {
        const url = `https://thirstdyrinkswarehousemanagement-server.onrender.com/myItems`;
        fetch(url,{
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyItems(data)
            })
    }, [user.email, myItems])


    return [myItems, setMyItems];
};

export default useMyItems;