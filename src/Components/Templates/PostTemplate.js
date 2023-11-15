import Variables from "../Globals/Variables";
import {useEffect, useState} from "react";
import {useLocalStorage} from "../LocalStorage/HandleLocalStorage";



const PostTemplate = (data, endpoint) => {

    // const endpoint = Variables.API + ""; // TODO: Koncówka endpointa

    const [error, setError] = useState(null);
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState(null);
    const [token, setToken] = useLocalStorage("token", null);
    const handlePost = () => {
        fetch(Variables.API + endpoint, {
            method: 'POST',
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
                setIsSent(true);
                // TODO: Transform json to String
            })
            .then((error) =>{
                setIsSent(true);
                setError(error)
            })
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isSent) {
        return <div>Loading...</div>;
    }

    if (data) {
        return (
            <div>Dane</div>
        );
    }

}
export default PostTemplate;