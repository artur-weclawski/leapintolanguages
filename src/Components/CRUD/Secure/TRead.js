import Variables from "../../Globals/Variables";
import {useEffect, useState} from "react";
import {useLocalStorage} from "../../LocalStorage/HandleLocalStorage";



const TRead = () => {


    const handleRead = async (token, body, endpoint) => {
        const response = await fetch(Variables.API + endpoint, {
            method: 'POST',
            // credentials: 'no-cors',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        console.log(response)
        return await response.json()
    }

    return{
        handleRead
    }
}
export default TRead;