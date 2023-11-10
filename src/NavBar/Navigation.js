import HomeButton from "./HomeButton";
import PageStatus from "./PageStatus";
import LanguageDropdownList from "./LanguageDropdownList";
import AccountDropdownList from "./AccountDropdownList";
import './NavBar.css'
function Navigation(){
    return(
        <div className="navigation">
            <HomeButton/>
            <PageStatus/>
            <LanguageDropdownList/>
            <AccountDropdownList/>
        </div>
    );
}
export default Navigation;