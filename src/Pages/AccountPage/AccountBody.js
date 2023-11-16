import MobileAccountWindow from "./MobileAccountWindow";
import AccountWindow from "./AccountWindow";
import "./AccountPage.css"
function AccountBody(){
    return(
        <div className="account-body">
            <AccountWindow/>
            <MobileAccountWindow/>
        </div>
    );
}
export default AccountBody