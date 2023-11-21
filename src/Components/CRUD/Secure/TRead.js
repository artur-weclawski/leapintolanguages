import Variables from "../../Globals/Variables";
import {useEffect, useState} from "react";
import {useLocalStorage} from "../../LocalStorage/HandleLocalStorage";



const TRead = (endpoint) => {
    const [token, setToken] = useLocalStorage("token", null)

    const handleRead = async (endpoint) => {
        try{
            const response = await fetch(Variables.API + endpoint, {
                method: 'GET',
                // credentials: 'cors',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            const res = await response.json()
            console.log(res)
            console.log(response)
            if (!response.ok){
                throw new Error('Error')
            }
            return response
        } catch (error){
            console.error(error)
            return error
        }
    }

    return{
        handleRead
    }
}
export default TRead;