import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `https://thirstdyrinkswarehousemanagement-server.onrender.com/items`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [items]);

    return [items, setItems];
};

export default useItems;