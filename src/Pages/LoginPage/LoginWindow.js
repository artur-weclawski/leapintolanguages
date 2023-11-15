import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";

function LoginWindow(){
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
                <form>
                    <h1>Logowanie</h1>
                    <div className="input">
                        <label>Username</label>
                        <input type="text" name="username" required/>
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input type="text" name="password" required/>
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