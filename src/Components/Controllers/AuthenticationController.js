import PostTemplate from "../Templates/PostTemplate";
import Variables from "../Globals/Variables";

class AuthenticationController{
    static login(user){
        return(PostTemplate(user, Variables.API + "login"))
    }

    static register(user){
        PostTemplate(user, Variables.API + "register");
    }
}

export default AuthenticationController