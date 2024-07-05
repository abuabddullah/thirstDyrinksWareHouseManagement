import { toast } from "react-toastify";

const updateMethod = (id, updateInfo) => {


    const url = `https://thirstdyrinkswarehousemanagement-server.onrender.com/items/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateInfo)
    })
        .then(res => res.json())
        .then(data => {
            console.log("success", data);
        })
        .catch(err => {
            console.log("error", err);
            toast.error("Error updating item");
        });
}

export {
    updateMethod
};
