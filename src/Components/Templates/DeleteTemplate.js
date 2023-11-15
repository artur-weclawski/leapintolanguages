import Variables from "../Globals/Variables";
import {useEffect, useState} from "react";



const DeleteTemplate = (id, token, data) => {

    const endpoint = Variables.API + "" + id; // TODO: Koncówka endpointa

    const [error, setError] = useState(null);
    const [isDeleted, setIsDeleted] = useState(false);
    const [message, setMessage] = useState(null)
    const handleDelete = () => {
        fetch(Variables.API + "/games", {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                res.json()
                setMessage(res)
                setIsDeleted(true);
                // TODO: Transform json to String
            })
            .then((error) =>{
                setIsDeleted(true);
                setError(error)
            })
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isDeleted) {
        return <div>Loading...</div>;
    }

    if (data) {
        return (
            <div>Dane</div>
        );
    }

}
export default DeleteTemplate;