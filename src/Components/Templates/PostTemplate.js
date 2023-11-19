import Variables from "../Globals/Variables";
import {useEffect, useState} from "react";
import {useLocalStorage} from "../LocalStorage/HandleLocalStorage";



const PostTemplate = () => {
    const [error, setError] = useState(null);
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState(null);
    const [token, setToken] = useLocalStorage("token", null);
    const handlePost = (data, endpoint) => {
        // console.log(JSON.stringify(data))
        console.log(JSON.stringify({
            id: data.id,
            username: data.username,
            password: data.password,
            email: data.email
        }))
        fetch(Variables.API + endpoint, {
            method: 'POST',
            body: JSON.stringify({
                id: data.id,
                username: data.username,
                password: data.password,
                email: data.email
            })
        }, message)
            .then(res => {
                res.json()
                setMessage(res)
                setIsSent(true);
            })
            .then((error) =>{
                setIsSent(true);
                setError(error)
            })
        if(isSent){
            if(error)
                return error;
            return message
        }
    }


    return {
        isSent,
        handlePost
    }
}
export default PostTemplate;