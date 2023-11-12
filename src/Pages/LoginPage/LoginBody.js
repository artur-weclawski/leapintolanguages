import LoginWindow from "./LoginWindow";
import MobileLoginWindow from "./MobileLoginWindow";
import './LoginPage.css'
function LoginBody(){
    return(
        <div className="login-body">
            <LoginWindow/>
            <MobileLoginWindow/>
        </div>
    );
}
export default LoginBody