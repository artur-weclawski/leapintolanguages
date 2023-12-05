import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
function AccountDropdownList(){
    const {t, i18n} = useTranslation();
    return(
        <div className="dropdown dropdown-account">
            <span className="dropbtn-wrap">
            <button className="dropbtn">
                <div className="account-name">Peepo</div>
                <div className="vbtn"> V </div>
            </button>
            </span>
            <span className="dropdown-content-wrap">
            <div className="dropdown-content dropdown-content-account">
                <Link to="/account"> {t('NavBar.account')} </Link>
                <Link to="/choosecourse"> {t('NavBar.courses')} </Link>
                <Link to="/knowledgeBase"> {t('NavBar.knowledgeBase')}</Link>
                <a> {t('NavBar.logout')} </a>
            </div>
            </span>
        </div>
    );
}
export default AccountDropdownList