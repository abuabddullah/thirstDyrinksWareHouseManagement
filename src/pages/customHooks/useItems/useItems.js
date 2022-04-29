import React, { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `https://still-citadel-40412.herokuapp.com/items`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [items]);

    return [items, setItems];
};

export default useItems;