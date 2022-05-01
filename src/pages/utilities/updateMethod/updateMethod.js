import { toast } from "react-toastify";

const updateMethod = (id, updateInfo,toastMessaage) => {


    const url = `https://still-citadel-40412.herokuapp.com/items/${id}`;
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
            // toast.success("Item updated successfully");
            toast.success(toastMessaage);
            // e.target.reset();
        })
        .catch(err => {
            console.log("error", err);
            toast.error("Error updating item");
        });
}

export {
    updateMethod
}