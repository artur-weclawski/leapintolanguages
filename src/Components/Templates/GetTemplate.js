import Variables from "../Globals/Variables";
import {useEffect, useState} from "react";
import {useLocalStorage} from "../LocalStorage/HandleLocalStorage";



const GetTemplate = (endpoint) => {

    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null)
    const [token, setToken] = useLocalStorage("token", null)

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
    }, []);
    // return res;

}
export default GetTemplate;