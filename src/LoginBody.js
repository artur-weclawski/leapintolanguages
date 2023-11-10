import LoginWindow from "./LoginWindow";
import MobileLoginWindow from "./MobileLoginWindow";

function LoginBody(){
    return(
        <div className="LoginBody">
            <LoginWindow/>
            <MobileLoginWindow/>
        </div>
    );
}
export default LoginBody