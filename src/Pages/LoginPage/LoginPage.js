import NavBar from "../../NavBar/NavBar";
import "./LoginPage.css"
import {useEffect} from "react";
import LoginWindow from "./LoginWindow";
import MobileLoginWindow from "./MobileLoginWindow";
function LoginPage({routeName, setRouteName}){
    useEffect(() => {
        setRouteName('Logowanie');
    }, []);
    return(
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <div className="login-body">
                <LoginWindow/>
                <MobileLoginWindow/>
            </div>
        </body>
    );
}
export default LoginPage