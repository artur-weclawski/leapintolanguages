import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
const NavBar=({routeName, setRouteName, setUser, setToken}) =>{
    return(
        <div className="navbar">
        <Navigation routeName={routeName} setRouteName={setRouteName} setUser={setUser} setToken={setToken}/>
        <MobileNavigation routeName={routeName} setRouteName={setRouteName} setUser={setUser} setToken={setToken}/>
        </div>
    );
}
export default NavBar