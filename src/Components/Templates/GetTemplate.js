import Variables from "../Globals/Variables";
import {useEffect, useState} from "react";



const GetTemplate = (id, token) => {

    const endpoint = Variables.API + "" + id; // TODO: Koncówka endpointa

    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null)

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
    }, [id]);
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (data) {
        return (
            <div>Dane</div>
        );
    }

}
export default GetTemplate;