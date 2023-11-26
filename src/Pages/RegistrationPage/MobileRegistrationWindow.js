import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import RegisterHook from "../../Components/Hooks/RegisterHook";

function MobileRegistrationWindow({token,setToken,user,setUser}){
    const{
        handleRegister
    } = RegisterHook()
    return(
        <div className="mobile-registration-window">
        <div className="mobile-section">
            <div className="registration-form">
                <form onSubmit={handleRegister}>
                    <h1 style={{marginTop:"20px", marginBottom:"-10px"}}>Rejestracja</h1>
                    <div className="registration-input">
                        <label>Email</label>
                        <input type="text" name="email" required/>
                        <div className="username-error"> error</div>
                    </div>
                    <div className="registration-input">
                        <label>Username</label>
                        <input type="text" name="username" required/>
                        <div className="username-error"> error</div>
                    </div>
                    <div className="registration-input">
                        <label>Password</label>
                        <input type="text" name="password" required/>
                        <div className="username-error"> error</div>
                    </div>
                    <div className="registration-input">
                        <label>Repeat Password</label>
                        <input type="text" name="repeat-password" required/>
                        <div className="username-error"> error</div>
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
            <ReportBug/>
            <Accesibilities/>
        </div>
    );
}
export default MobileRegistrationWindow