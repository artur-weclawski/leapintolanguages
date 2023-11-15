import PostTemplate from "../Templates/PostTemplate";
import User from "../Entites/User";
import Variables from "../Globals/Variables";

class AuthenticationController{

    login(obj){
        let user = new User(null, obj.username, obj.password, null)
        return(PostTemplate(user, Variables.API + "login"))
    }

    register(obj){
        let user = new User(null, obj.username, obj.password, obj.email)
        PostTemplate(user, Variables.API + "register");
    }
}