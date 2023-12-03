import NavBar from "../../NavBar/NavBar";
import {useEffect} from "react";
import LoginWindow from "./LoginWindow";
import MobileLoginWindow from "./MobileLoginWindow";
function LoginPage({routeName, setRouteName, token, setToken, user, setUser}){
    useEffect(() => {
        setRouteName('Logowanie');
    }, []);
    return(
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <div className="login-body">
                <LoginWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
                <MobileLoginWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
            </div>
        </body>
    );
}
export default LoginPage