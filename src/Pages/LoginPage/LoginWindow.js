import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import LoginHook from "../../Components/Hooks/LoginHook";
import i18n from "../../i18n";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

function LoginWindow({token, setToken, user, setUser}){
    const {
        error,
        handleLogin
    } = LoginHook(token, setToken, user, setUser)

    const {t, i18n} = useTranslation();
    useEffect(() => {
        i18n.changeLanguage('pl')
    }, []);

    return(
        <div className="login-window">
            <div className="left-section">
                <ReportBug/>
                <Accesibilities/>
            </div>
            <div className="right-section">
                <div className="cover"/>
                <span className="shadow"></span>
                <div className="login-form">
                <form onSubmit={handleLogin}>
                    <h1>{t('loginPage.title')}</h1>
                    <div className="login-input">
                        <label>{t('loginPage.username.name')}</label>
                        <input type="text" name="username" required/>
                    </div>
                    <div className="login-input">
                        <label>{t('loginPage.password.name')}</label>
                        <input type="text" name="password" required/>
                        <div className="username-error">{error.visible ? t(error.message) : ""}</div>
                    </div>
                    <a href="/register">Register here.</a>
                    <div className="login-submit-button">
                        <input type="submit" value="Zaloguj się"/>
                        <span className="login-form-ribbon-wrap">
                        <span className="login-form-ribbon"></span>
                        </span>
                    </div>


                </form>

                </div>
            </div>
        </div>
    );
}
export default LoginWindow;