import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import RegisterHook from "../../Components/Hooks/RegisterHook";
import {useTranslation} from "react-i18next";
function RegistrationWindow({token, setToken, user, setUser}){
    // console.log(token)
    const{
        errors,
        handleRegister
    } = RegisterHook(token, setToken, user, setUser)


    const {t, i18n} = useTranslation();
    return(
        <div className="registration-window">
            <div className="left-section">
                <ReportBug/>
                <Accesibilities/>
            </div>
            <div className="right-section">
                <div className="cover"/>
                <span className="shadow"></span>
                <div className="registration-form">
                    <form onSubmit={handleRegister }>
                        <h1 style={{marginBottom:"-10px"}}>Rejestracja</h1>
                        <div className="registration-input">
                            <label>Email</label>
                            <input type="text" name="email" required/>
                            <div className="username-error">{errors[2].visible ? t(errors[2].message) : ""}</div>
                        </div>
                        <div className="registration-input">
                            <label>Username</label>
                            <input type="text" name="username" required/>
                            <div className="username-error">{errors[0].visible ? errors[0].message : ""}</div>
                        </div>
                        <div className="registration-input">
                            <label>Password</label>
                            <input type="text" name="password" required/>
                            <div className="username-error">{errors[1].visible ? errors[1].message : ""}</div>
                        </div>
                        <div className="registration-input">
                            <label>Repeat Password</label>
                            <input type="text" name="repeat-password" required/>
                            <div className="username-error">{errors[1].visible ? errors[1].message : ""}</div>
                        </div>
                        <a href="/login" style={{marginTop:"-20px"}}>Login here.</a>
                        <div className="registration-submit-button">
                            <input type="submit" value="Zarejestruj się"/>
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