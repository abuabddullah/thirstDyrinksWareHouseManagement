import { useEffect, useState } from 'react';

const useSingleItem = (id) => {
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://thirstdyrinkswarehousemanagement-server.onrender.com/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [id,item.pdQuantity,item]);
    return [item, setItem];
};

export default useSingleItem;