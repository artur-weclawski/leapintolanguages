import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import './NavBar.css'
function NavBar(){
    return(
        <div className="navbar">
        <Navigation/>
        <MobileNavigation/>
        </div>
    );
}
export default NavBar