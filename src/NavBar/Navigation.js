import HomeButton from "./HomeButton";
import PageStatus from "./PageStatus";
import LanguageDropdownList from "./LanguageDropdownList";
import AccountDropdownList from "./AccountDropdownList";
import './NavBar.css'
const Navigation = ({routeName, setRouteName}) =>{
    return(
        <div className="navigation">
            <div className="left-section">
                <HomeButton/>
            </div>
            <div className="right-section">
                <PageStatus routeName={routeName} setRouteName={setRouteName}/>
                <LanguageDropdownList/>
                <AccountDropdownList/>
            </div>

        </div>
    );
}
export default Navigation;