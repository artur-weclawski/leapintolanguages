import ReportBug from "../ReportBug";
import Accesibilities from "../Accesibilities";

function LoginWindow(){
    return(
        <div className="login-window">
            <div className="left-section">
                <ReportBug/>
                <Accesibilities/>
            </div>
            <div className="right-section">
                <div className="login-form">
                <form>
                    <div className="input">
                        <label>Username</label>
                        <input type="text" name="username" required/>
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input type="text" name="password" required/>
                    </div>
                    <div className="submit-button">
                        <input type="submit"/>
                    </div>
                </form>
                    <a href="#">Register here.</a>
                </div>
            </div>
        </div>
    );
}
export default LoginWindow