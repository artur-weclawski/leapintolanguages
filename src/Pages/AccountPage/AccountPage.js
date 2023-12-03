import NavBar from "../../NavBar/NavBar";
import {useEffect} from "react";
import AccountWindow from "./AccountWindow";
import MobileAccountWindow from "./MobileAccountWindow";
const AccountPage = ({routeName, setRouteName, token, setToken, user, setUser}) =>{
    useEffect(() => {
        setRouteName('Konto')
    }, []);
    return(
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <div className="account-body">
                <AccountWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
                <MobileAccountWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
            </div>
        </body>
    );

}
export default AccountPage