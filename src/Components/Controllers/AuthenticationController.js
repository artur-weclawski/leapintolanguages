import Create from "../CRUD/Insecure/Create";

const AuthenticationController = () =>{

    const {
        isSent,
        handleCreate
    } = Create()

    const login = async (user) =>{
        return await handleCreate(user, "auth/login")
    }

    const register = async (user) =>{
        return await handleCreate(user, "auth/signup")
    }

    return {
        login,
        register,
        PostTemplate: Create
    }
}

export default AuthenticationController