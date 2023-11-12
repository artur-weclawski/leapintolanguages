function MobileLoginWindow(){
    return(
            <div className="mobile-Section">
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
    );
}
export default MobileLoginWindow