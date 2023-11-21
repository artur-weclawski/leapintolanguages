import React, {useState} from 'react';
import User from "../Entites/User";
import AuthenticationController from "../Controllers/AuthenticationController";

const RegisterHook = () => {
    const {
        login,
        register,
        PostTemplate
    } = AuthenticationController()


    const [errors, setErrors] = useState(
        [
            {type: "username", message: "", visible: false},
            {type: "password", message: "", visible: false},
            {type: "email", message: "", visible: false},
        ]
    )

    const handleErrors = (type, message, visible) => {
        errors.map(error =>{
            if(error.type === type){
                return {type, message, visible}
            }
            else
                return error
        })
    }

    const handleRegexError = (regex, data, type, message) => {
        if (!regex.test(data)){
            handleErrors(type, message, true);
        }
        else
            handleErrors(type, "", false)
    }

    const handleRegister = (event) => {
        //Email Regex
        const emailRegex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
        //6-12 characters only letters
        const usernameRegex = /.\S[a-z]{6,12}/;

        const USERNAME_REGEX_ERROR_MESSAGE = "USERNAME_REGEX_ERROR_MESSAGE"
        const USERNAME_SERVER_ERROR_MESSAGE = "USERNAME_SERVER_ERROR_MESSAGE"
        const PASSWORD_REGEX_ERROR_MESSAGE = "PASSWORD_REGEX_ERROR_MESSAGE"
        const PASSWORD_SERVER_ERROR_MESSAGE = "PASSWORD_SERVER_ERROR_MESSAGE"
        const EMAIL_REGEX_ERROR_MESSAGE = "EMAIL_REGEX_ERROR_MESSAGE"
        const EMAIL_SERVER_ERROR_MESSAGE = "EMAIL_SERVER_ERROR_MESSAGE"

        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value
        const email = event.target.email.value

        const values = [
            {
                id: "username", value: username, ERRORS: {
                    Regex : USERNAME_REGEX_ERROR_MESSAGE,
                    Server : USERNAME_SERVER_ERROR_MESSAGE
            },
                regex : usernameRegex
            },
            {
                id: "password", value: password, ERRORS: {
                    Regex : PASSWORD_REGEX_ERROR_MESSAGE,
                    Server : PASSWORD_SERVER_ERROR_MESSAGE
                },
                regex: passwordRegex
            },
            {
                id: "email", value: email, ERRORS: {
                    Regex : EMAIL_REGEX_ERROR_MESSAGE,
                    Server : EMAIL_SERVER_ERROR_MESSAGE
                },
                regex: emailRegex
            },
        ]

        values.map(value => {
            handleRegexError(value.regex, value.value, value.id, value.ERRORS.Regex)
        })
        if(errors.map(e => e.visible)){
            const user = new User(null, username, password, email)
            const response = register(user);
            //TODO: Server Errors
            if(true){

            }
            // localStorage.setItem("profile", JSON.stringify(id:))

        }

    }

    return{
        errors,
        handleRegister
    }
};

export default RegisterHook;
