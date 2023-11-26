import NavBar from "../../NavBar/NavBar";
import "./LoginPage.css"
import {useEffect} from "react";
import LoginWindow from "./LoginWindow";
import MobileLoginWindow from "./MobileLoginWindow";
function LoginPage({routeName, setRouteName}){
    useEffect(() => {
        setRouteName('Logowanie');
    }, []);
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
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            {changeWindows()}
        </body>
    );
}
export default LoginPage