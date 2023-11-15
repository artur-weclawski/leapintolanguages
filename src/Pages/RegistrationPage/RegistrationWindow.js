import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";

function RegistrationWindow(){
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
                    <form>
                        <h1 style={{marginBottom:"-10px"}}>Rejestrowanie</h1>
                        <div className="input">
                            <label>Email</label>
                            <input type="text" name="email" required/>
                            <div className="username-error"> error</div>
                        </div>
                        <div className="input">
                            <label>Username</label>
                            <input type="text" name="username" required/>
                            <div className="username-error"> error</div>
                        </div>
                        <div className="input">
                            <label>Password</label>
                            <input type="text" name="password" required/>
                            <div className="username-error"> error</div>
                        </div>
                        <div className="input">
                            <label>Repeat Password</label>
                            <input type="text" name="repeat-password" required/>
                            <div className="username-error"> error</div>
                        </div>
                        <a href="#" style={{marginTop:"-20px"}}>Login here.</a>
                        <div className="submit-button">
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