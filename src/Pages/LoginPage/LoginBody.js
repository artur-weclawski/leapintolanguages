import LoginWindow from "./LoginWindow";
import MobileLoginWindow from "./MobileLoginWindow";
import './LoginPage.css'
import {useEffect} from "react";
function LoginBody(){
    const changeWindows = () =>{
        if(window.innerWidth > 1400){
            return(
                <div className="login-body">
                    <LoginWindow/>
                    <MobileLoginWindow/>
                </div>
            )
        }else{
            return(
                <div className="login-body">
                    <MobileLoginWindow/>
                    <LoginWindow/>
                </div>
            )
        }
    }
    return(
        changeWindows()
    );
}
export default LoginBody