import NavBar from "../../NavBar/NavBar";
import RegistrationBody from "./RegistrationBody";
import RegistrationWindow from "./RegistrationWindow";
import MobileRegistrationWindow from "./MobileRegistrationWindow";
function RegistrationPage({routeName, setRouteName, token, setToken, user, setUser}){
    console.log(token)
    return(
        <body>
        <NavBar/>
        <div className="registration-body">
            <RegistrationWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
            <MobileRegistrationWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
        </div>
        </body>
    );
}
export default RegistrationPage