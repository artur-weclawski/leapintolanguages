import "./LoginPage.css"
function MobileLoginWindow(){
    return(
            <div className="mobile-section">
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
                        <a href="#">Register here.</a>
                        <div className="submit-button">
                            <input type="submit"/>
                        </div>
                    </form>

                </div>
            </div>
    );
}
export default MobileLoginWindow