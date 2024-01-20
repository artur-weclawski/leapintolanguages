import NavBar from "../../NavBar/NavBar";
import {useEffect} from "react";
import LoginWindow from "./LoginWindow";
import MobileLoginWindow from "./MobileLoginWindow";
import {useTranslation} from "react-i18next";
function LoginPage({routeName, setRouteName, token, setToken, user, setUser}){
    useEffect(() => {
        setRouteName("logowanie");
    }, []);
    return(
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName} setUser={setUser} setToken={setToken}/>
            <div className="login-body">
                <LoginWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
                <MobileLoginWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
            </div>
        </body>
    );
}
export default LoginPage