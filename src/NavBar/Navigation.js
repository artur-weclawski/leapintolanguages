import HomeButton from "./HomeButton";
import PageStatus from "./PageStatus";
import LanguageDropdownList from "./LanguageDropdownList";
import AccountDropdownList from "./AccountDropdownList";
import './NavBar.css'
function Navigation(){
    return(
        <div className="navigation">
            <div className="left-section">
                <HomeButton/>
            </div>
            <div className="right-section">
                <PageStatus/>
                <LanguageDropdownList/>
                <AccountDropdownList/>
            </div>

        </div>
    );
}
export default Navigation;