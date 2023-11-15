import User from "../Entites/User";
import AuthenticationController from "../Controllers/AuthenticationController";

class RegisterModel {


    static handleRegister = (event) => {
        event.preventDefault()
        let username = event.target.username.value
        let password = event.target.password.value
        let email = event.target.email.value

        const emailRegex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        emailRegex.test(email)

        let user = new User(null, username, password, email)
        let response = AuthenticationController.login(user)
        // TODO: handleresponse jak już będzie backend
    }
}

export default RegisterModel