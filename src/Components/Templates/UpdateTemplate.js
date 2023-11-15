import Variables from "../Globals/Variables";
import {useEffect, useState} from "react";



const UpdateTemplate = (id, token, data) => {

    const endpoint = Variables.API + "" + id; // TODO: Koncówka endpointa

    const [error, setError] = useState(null);
    const [isUpdated, setIsUpdated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [message, setMessage] = useState(null);
    const [data, setData] = useState(null);
    const handleUpdate = () => {
        fetch(Variables.API + "/games", {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // id: id
                // name: data.name....
                // TODO : JSON body
            })
        })
            .then(res => {
                res.json()
                setMessage(res)
                setIsUpdated(true);
                // TODO: Transform json to String
            })
            .then((error) =>{
                setIsUpdated(true);
                setError(error)
            })
    }

    useEffect(() => {
        fetch(endpoint, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            })
        })
            .then(res => res.json())
            .then(
                (data) => {
                    setData(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [id])


    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isUpdated) {
        return <div>Loading...</div>;
    }

    if (data) {
        return (
            <div>Dane</div>
        );
    }

}
export default UpdateTemplate;