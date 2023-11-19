import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import LoginHook from "../../Components/Hooks/LoginHook";
function LoginWindow(){
    const {
        error,
        handleLogin
    } = LoginHook()
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
                    <h1>Logowanie</h1>
                    <div className="input">
                        <label>Username</label>
                        <input type="text" name="username" required/>
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input type="text" name="password" required/>
                        <div className="username-error">{error.visible ? error.message : ""}</div>
                    </div>
                    <a href="#">Register here.</a>
                    <div className="submit-button">
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
export default LoginWindow