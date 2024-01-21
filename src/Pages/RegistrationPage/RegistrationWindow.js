import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import RegisterHook from "../../Components/Hooks/RegisterHook";
import {useTranslation} from "react-i18next";

function RegistrationWindow({token, setToken, user, setUser}) {
    // console.log(token)
    const {
        errors,
        handleRegister
    } = RegisterHook(token, setToken, user, setUser)


    const {t, i18n} = useTranslation();
    return (
        <div className="registration-window">
            <div className="left-section">
                <ReportBug/>
                <Accesibilities/>
            </div>
            <div className="right-section">
                <div className="cover"/>
                <span className="shadow"></span>
                <div className="registration-form">
                    <form onSubmit={handleRegister}>
                        <h1 style={{marginBottom: "-10px"}}>{t('registerPage.title')}</h1>
                        <div className="registration-input">
                            <label for="email">{t('registerPage.email.name')}</label>
                            <input type="text" name="email" required id="email"/>
                            <div className="username-error">{errors[2].visible ? t(errors[2].message) : ""}</div>
                        </div>
                        <div className="registration-input">
                            <label for="username">{t('registerPage.username.name')}</label>
                            <input type="text" name="username" required id="username"/>
                            <div className="username-error">{errors[0].visible ? t(errors[0].message) : ""}</div>
                        </div>
                        <div className="registration-input">
                            <label for="password">{t('registerPage.password.name')}</label>
                            <input type="password" name="password" required id="password"/>
                            <div className="username-error">{errors[1].visible ? t(errors[1].message) : ""}</div>
                        </div>
                        <div className="registration-input">
                            <label for="rPassword">{t('registerPage.password.repeatName')}</label>
                            <input type="password" name="repeat-password" required id="rPassword"/>
                            <div className="username-error">{errors[1].visible ? t(errors[1].message) : ""}</div>
                        </div>
                        <a href="/login" style={{marginTop: "-20px"}}>{t('registerPage.loginPageRedirect')}</a>
                        <div className="registration-submit-button">
                            <input type="submit" value={t('registerPage.submit')}/>
                            <span className="registration-form-ribbon-wrap">
                        <span className="registration-form-ribbon"></span>
                        </span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default RegistrationWindow