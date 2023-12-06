import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useLocalStorage} from "../Components/LocalStorage/HandleLocalStorage";
function AccountDropdownList(){
    const {t, i18n} = useTranslation();

    const navigation = useNavigate()

    const [user, setUser] = useLocalStorage("user", null)
    const [token, setToken] = useLocalStorage("token", null)

    const handleLogOut = () => {
        console.log(user)
        console.log(token)
        setToken(null)
        setUser(null)
        console.log(user)
        console.log(token)
        navigation("/login")
    }

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
                <a onClick={() => {handleLogOut()}}> {t('NavBar.logout')} </a>
            </div>
            </span>
        </div>
    );
}
export default AccountDropdownList