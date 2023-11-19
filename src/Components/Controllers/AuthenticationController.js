import PostTemplate from "../Templates/PostTemplate";
import Variables from "../Globals/Variables";

const AuthenticationController = () =>{

    const {
        isSent,
        handlePost
    } = PostTemplate()

    const login = (user) =>{

    }

    const register = (user) =>{
        const response = handlePost(user, "auth/signup")
        console.log(response)
    }

    return {
        login,
        register,
        PostTemplate
    }
}

export default AuthenticationController