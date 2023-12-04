import {useState} from "react";
import CourseController from "../Controllers/CourseController";
import {useLocalStorage} from "../LocalStorage/HandleLocalStorage";
import User from "../Entites/User";
import TRead from "../CRUD/Secure/TRead";
import TUpdate from "../CRUD/Secure/TUpdate";
import TDelete from "../CRUD/Secure/TDelete";
import {useNavigate} from "react-router-dom";

const initialProfileData = {
    id: null,
    username: null,
    email: null
}

const ProfileHook = (user, setUser, token, setToken) => {
    const [error, setError] = useState("")

    const {
        handleRead
    } = TRead()

    const {
        handleUpdate
    } = TUpdate()

    const {
        handleDelete
    } = TDelete()


    const navigate = useNavigate()

    const handleEditProfile = async (event) => {
        event.preventDefault()
        const passwordRegex
            = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
        console.log(event.target.oldPassword.value)
        console.log(event.target.newPassword.value)
        const oldPassword = event.target.oldPassword.value
        const newPassword = event.target.newPassword.value
        if(oldPassword !== newPassword){
            if(passwordRegex.test(newPassword)){
                const body = {id : user.id, oldPassword: oldPassword, newPassword: newPassword}
                const response = await handleUpdate(token, body, "api/changePassword")
                console.log(response)
                if(response.error){
                    setError(response.message)
                }
                else setError("Twoje hasło zostało zmienione")
            } else setError("Złe hasło")
        } else setError("hasła są takie same")
    }

    const handleDeleteProfile = async () => {
        console.log("eo")
        const response = await handleDelete(token, "api/deleteUser/" + user.id)
        console.log(response)
        setToken(null)
        setUser(null)
        navigate("/login")
    }

    const handleGetAllCoursesProgress = async () => {
        const body = {user_id : user.id}
        return await handleRead(token, body, 'api/course/all')
    }

    return{
        error,
        handleEditProfile,
        handleDeleteProfile,
        handleGetAllCoursesProgress
    }
};

export default ProfileHook;