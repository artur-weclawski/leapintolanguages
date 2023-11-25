import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import './NavBar.css'
const NavBar=({routeName, setRouteName}) =>{
    return(
        <div className="navbar">
        <Navigation routeName={routeName} setRouteName={setRouteName}/>
        <MobileNavigation routeName={routeName} setRouteName={setRouteName}/>
        </div>
    );
}
export default NavBar