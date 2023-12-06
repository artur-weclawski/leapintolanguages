import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import LoginHook from "../../Components/Hooks/LoginHook";
import {useTranslation} from "react-i18next";

function LoginWindow({token, setToken, user, setUser}){
    const {
        error,
        handleLogin
    } = LoginHook(token, setToken, user, setUser)
    const {t, i18n} = useTranslation();
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
                        <label for="username">{t('loginPage.username.name')}</label>
                        <input type="text" name="username" required id="username"/>
                    </div>
                    <div className="login-input">
                        <label for={"password"}>{t('loginPage.password.name')}</label>
                        <input type="password" name="password" required id="password"/>
                        <div className="username-error">{error.visible ? t(error.message) : ""}</div>
                    </div>
                    <a href="/register">{t('loginPage.registerPageRedirect')}</a>
                    <div className="login-submit-button">
                        <input type="submit" value={t('loginPage.submit')}/>
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