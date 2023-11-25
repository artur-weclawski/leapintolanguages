import NavBar from "../../NavBar/NavBar";
import AccountBody from "./AccountBody";
import "./AccountPage.css"
import {useEffect} from "react";
const AccountPage = ({routeName, setRouteName}) =>{
    useEffect(() => {
        setRouteName('Konto')
    }, []);
    return(
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <AccountBody/>
        </body>
    );

}
export default AccountPage