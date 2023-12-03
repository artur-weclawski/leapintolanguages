import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import LoginHook from "../../Components/Hooks/LoginHook";
function MobileLoginWindow({token, setToken, user, setUser}){
    const {
        error,
        handleLogin
    } = LoginHook()
    return(
        <div className="mobile-login-window">
            <div className="mobile-section">
                <div className="login-form">
                    <form onSubmit={handleLogin}>
                        <h1>Logowanie</h1>
                        <div className="login-input">
                            <label>Username</label>
                            <input type="text" name="username" required/>
                        </div>
                        <div className="login-input">
                            <label>Password</label>
                            <input type="text" name="password" required/>
                            <div className="username-error">{error.visible ? error.message : ""}</div>
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
                <ReportBug/>
                <Accesibilities/>
            </div>
        </div>
    );
}
export default MobileLoginWindow