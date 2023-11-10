import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

function NavBar(){
    return(
        <div className="NavBar">
        <Navigation/>
        <MobileNavigation/>
        </div>
    );
}
export default NavBar