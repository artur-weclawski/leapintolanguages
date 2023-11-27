import React, {useState} from 'react';
import User from "../Entites/User";
import AuthenticationController from "../Controllers/AuthenticationController";
import {useNavigate} from "react-router-dom";

const RegisterHook = (token, setToken, user, setUser) => {
    console.log(token)
    console.log(user)

    const navigate = useNavigate();

    const {
        register
    } = AuthenticationController()


    const [errors, setErrors] = useState(
        [
            {message: "", visible: false},
            {message: "", visible: false},
            {message: "", visible: false}
        ]
    )

    const handleErrors = (id, message, visible) => {
        const changeError = errors.map((error, index) =>{
            if(index === id){
                console.log("chuj")
                return {message: message, visible: visible}
            }else return error
        })
        setErrors(changeError)
    }

    const handleRegexError = (regex, data, type, message) => {
        if (!regex.test(data)) {
            handleErrors(type, message, true);
        } else
            handleErrors(type, "", false)
    }

    const handleRegister = async (event) => {
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
                id: 0, value: username, ERRORS: {
                    Regex: USERNAME_REGEX_ERROR_MESSAGE,
                    Server: USERNAME_SERVER_ERROR_MESSAGE
                },
                regex: usernameRegex
            },
            {
                id: 1, value: password, ERRORS: {
                    Regex: PASSWORD_REGEX_ERROR_MESSAGE,
                    Server: PASSWORD_SERVER_ERROR_MESSAGE
                },
                regex: passwordRegex
            },
            {
                id: 2, value: email, ERRORS: {
                    Regex: EMAIL_REGEX_ERROR_MESSAGE,
                    Server: EMAIL_SERVER_ERROR_MESSAGE
                },
                regex: emailRegex
            },
        ]

        values.map(value => {
            handleRegexError(value.regex, value.value, value.id, value.ERRORS.Regex)
        })
        if (errors.map(e => e.visible)) {
            const _user = new User(null, username, password, email)
            const response = await register(_user);
            console.log(response)
            if (response.hasOwnProperty("jwt")) {
                _user.id = response.user_id
                setToken(response.jwt)
                setUser(_user)
                navigate('/account')
            } else {
                console.log(response)
                response.messages.map(m => {
                    if (m.includes("username")) {
                        console.log("eo")
                        handleErrors(0, m, true)
                    }
                    if (m.includes("email")) {
                        handleErrors(2, m, true)
                    }
                })
            }

        }
        console.log(errors)
    }

    return {
        errors,
        handleRegister
    }
};

export default RegisterHook;
