import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import RegisterHook from "../../Components/Hooks/RegisterHook";
import {useTranslation} from "react-i18next";

function MobileRegistrationWindow({token,setToken,user,setUser}){
    const {t, i18n} = useTranslation();
    const{
        handleRegister
    } = RegisterHook()
    return(
        <div className="mobile-registration-window">
        <div className="mobile-section">
            <div className="registration-form">
                <form onSubmit={handleRegister}>
                    <h1 style={{marginTop:"20px", marginBottom:"-10px"}}>{t('registerPage.title')}</h1>
                    <div className="registration-input">
                        <label for="email">{t('registerPage.email.name')}</label>
                        <input type="text" name="email" required id="email"/>
                        <div className="username-error"> error</div>
                    </div>
                    <div className="registration-input">
                        <label for="username">{t('registerPage.username.name')}</label>
                        <input type="text" name="username" required id="username"/>
                        <div className="username-error"> error</div>
                    </div>
                    <div className="registration-input">
                        <label for="password">{t('registerPage.password.name')}</label>
                        <input type="text" name="password" required id="password"/>
                        <div className="username-error"> error</div>
                    </div>
                    <div className="registration-input">
                        <label for="rPassword">{t('registerPage.password.repeatName')}</label>
                        <input type="text" name="repeat-password" required id="rPassword"/>
                        <div className="username-error"> error</div>
                    </div>
                    <a href="/login" style={{marginTop:"-20px"}}>{t('registerPage.loginPageRedirect')}</a>
                    <div className="registration-submit-button">
                        <input type="submit" value={t('registerPage.submit')}/>
                        <span className="registration-form-ribbon-wrap">
                        <span className="registration-form-ribbon"></span>
                        </span>
                    </div>
                </form>
            </div>
        </div>
            <ReportBug/>
            <Accesibilities/>
        </div>
    );
}
export default MobileRegistrationWindow