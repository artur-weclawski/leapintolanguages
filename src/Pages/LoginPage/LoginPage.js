import NavBar from "../../NavBar/NavBar";
import LoginBody from "./LoginBody";
import "./LoginPage.css"
import {useEffect} from "react";
function LoginPage({routeName, setRouteName}){
    useEffect(() => {
        setRouteName('Logowanie');
    }, []);
    return(
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <LoginBody/>
        </body>
    );
}
export default LoginPage