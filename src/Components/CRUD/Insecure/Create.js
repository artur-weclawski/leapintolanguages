import Variables from "../../Globals/Variables";
import {useEffect, useState} from "react";
import {useLocalStorage} from "../../LocalStorage/HandleLocalStorage";


const Create = () => {
    const handleCreate = async (data, endpoint) => {

        try{
            const response = await fetch(Variables.API + endpoint, {
                method: 'POST',
                // credentials: 'cors',
                headers: {
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


    return {
        handleCreate
    }
}
export default Create;