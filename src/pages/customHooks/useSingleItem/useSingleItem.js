import React, { useEffect, useState } from 'react';

const useSingleItem = (id) => {
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://still-citadel-40412.herokuapp.com/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [id,item.pdQuantity,item]);
    return [item, setItem];
};

export default useSingleItem;