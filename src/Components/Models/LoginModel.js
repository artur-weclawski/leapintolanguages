import User from "../Entites/User";
import AuthenticationController from "../Controllers/AuthenticationController";

class LoginModel {
    // emailRegex =
    //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    static handleLogin = (event) => {
        event.preventDefault()
        let username = event.target.username.value
        let password = event.target.password.value
        console.log(event.target)
        event.target.error = "Podano zle dane"
        let user = new User(null, username, password, null)
        // let response = AuthenticationController.login(user)
        // TODO: handleresponse jak już będzie backend
    }
}

export default LoginModel