import HomeButton from "./HomeButton";
import PageStatus from "./PageStatus";
import LanguageDropdownList from "./LanguageDropdownList";
import AccountDropdownList from "./AccountDropdownList";

function Navigation(){
    return(
        <div className="NavLinks">
            <HomeButton/>
            <PageStatus/>
            <LanguageDropdownList/>
            <AccountDropdownList/>
        </div>
    );
}
export default Navigation;