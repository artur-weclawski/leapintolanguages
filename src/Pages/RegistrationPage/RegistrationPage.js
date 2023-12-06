import NavBar from "../../NavBar/NavBar";
import RegistrationWindow from "./RegistrationWindow";
import MobileRegistrationWindow from "./MobileRegistrationWindow";
import {useEffect} from "react";
function RegistrationPage({routeName, setRouteName, token, setToken, user, setUser}){
    console.log(token)
    useEffect(() => {
        setRouteName("Rejestracja");
    }, []);
    return(
        <body>
        <NavBar routeName={routeName}/>
        <div className="registration-body">
            <RegistrationWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
            <MobileRegistrationWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
        </div>
        </body>
    );
}
export default RegistrationPage