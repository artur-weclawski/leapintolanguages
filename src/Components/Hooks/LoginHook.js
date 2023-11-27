import User from "../Entites/User";
import AuthenticationController from "../Controllers/AuthenticationController";
import {useState} from "react";
import Create from "../CRUD/Insecure/Create";
import {useNavigate} from "react-router-dom";

function LoginHook(token, setToken, user, setUser) {
    const [error, setError] = useState({message: "loginPage.errors.wrongData", visible: false})

    const navigate = useNavigate()

    const {
        handleCreate
    } = Create()


    const handleError = (message, visible) =>{
        setError(error =>({
            ...error,
            ...{message, visible}
        }))
    }
    const handleLogin = async (event) => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value
        const _user = new User(null, username, password, null)
        const response = await handleCreate(_user, "auth/signup")

        if(response.hasOwnProperty("jwt")){
            _user.id = response.id
            _user.email = response.email
            setUser(_user)
            setToken(response.jwt)
            navigate('/account')
        }else{
            handleError(error.message, true)
        }
    }

    return{
        error,
        handleLogin
    }
}

export default LoginHook