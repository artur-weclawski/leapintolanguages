import HomeButton from "./HomeButton";
import PageStatus from "./PageStatus";
import LanguageDropdownList from "./LanguageDropdownList";
import AccountDropdownList from "./AccountDropdownList";
const Navigation = ({routeName, setRouteName, setUser, setToken}) =>{
    return(
        <div className="navigation">
            <div className="left-section">
                <HomeButton/>
            </div>
            <div className="right-section">
                <PageStatus routeName={routeName} setRouteName={setRouteName}/>
                <LanguageDropdownList/>
                <AccountDropdownList setUser={setUser} setToken={setToken}/>
            </div>

        </div>
    );
}
export default Navigation;