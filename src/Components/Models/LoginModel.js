import User from "../Entites/User";
import AuthenticationController from "../Controllers/AuthenticationController";
import {useState} from "react";

function LoginModel() {
    const [error, setError] = useState({message: "Podano złe dane", visible: false})

    const handleError = (message, visible) =>{
        setError(error =>({
            ...error,
            ...{message, visible}
        }))
    }
    const handleLogin = (event) => {
        event.preventDefault()
        let username = event.target.username.value
        let password = event.target.password.value
        console.log(event.target)
        // event.target.error = "Podano zle dane"
        let user = new User(null, username, password, null)
        // let response = AuthenticationController.login(user)
        // TODO: handleresponse jak już będzie backend

        if(true){
            handleError(error.message, true)
        }
    }

    return{
        error,
        handleLogin
    }
}

export default LoginModel