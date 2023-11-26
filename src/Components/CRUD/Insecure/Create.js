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
            if (!response.ok){
                throw new Error(res)
            }
            return res
        } catch (error){
            console.log(error)
            return error
        }


    }


    return {
        handleCreate
    }
}
export default Create;