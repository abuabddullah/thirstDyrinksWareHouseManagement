import { toast } from "react-toastify";

const getAccessToken = (user) => {
    const url = `https://thirstdyrinkswarehousemanagement-server.onrender.com/login`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: user.user.email
        })
    })
        .then(res => res.json())
        .then(data => {
            toast.success('Logging in Successful', { id: 'login' });
            localStorage.setItem('accessToken', data.accessToken);
        })
};

export default getAccessToken;