import {useState} from "react";

const ProfileHook = () => {
    const [data, setData] = useState(null)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const handleEditProfile = (event) => {

    }

    const handleDeleteProfile = (event) => {

    }

    return{
        data,
        message,
        error,
        handleEditProfile,
        handleDeleteProfile
    }
};

export default ProfileHook;