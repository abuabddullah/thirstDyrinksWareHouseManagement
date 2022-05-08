import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const useMyItems = (user) => {
    const [myItems, setMyItems] = useState([]);


    useEffect(() => {
        const url = `https://still-citadel-40412.herokuapp.com/myItems`;
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