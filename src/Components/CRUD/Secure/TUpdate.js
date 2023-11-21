import Variables from "../../Globals/Variables";
import {useEffect, useState} from "react";
import {useLocalStorage} from "../../LocalStorage/HandleLocalStorage";



const TUpdate = () => {

    const [token, setToken] = useLocalStorage("token", null)
    const handleUpdate = async (data, endpoint) => {
        try{
            const response = await fetch(Variables.API + endpoint, {
                method: 'PUT',
                // credentials: 'cors',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
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
}
export default TUpdate;