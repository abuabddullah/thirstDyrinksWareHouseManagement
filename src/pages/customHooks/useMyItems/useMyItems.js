import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const useMyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);


    useEffect(() => {
        const url = `https://still-citadel-40412.herokuapp.com/myItems?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyItems(data)
            })
    }, [user.email])


    return [myItems, setMyItems];
};

export default useMyItems;