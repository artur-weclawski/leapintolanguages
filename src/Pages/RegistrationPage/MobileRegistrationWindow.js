function MobileRegistrationWindow(){
    return(
        <div className="mobile-Section">
            <div className="registration-form">
                <form>
                    <div className="input">
                        <label>Email</label>
                        <input type="text" name="email" required/>
                    </div>
                    <div className="input">
                        <label>Username</label>
                        <input type="text" name="username" required/>
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input type="text" name="password" required/>
                    </div>
                    <div className="input">
                        <label>Repeat Password</label>
                        <input type="text" name="repeat-password" required/>
                    </div>
                    <a href="#">Login here.</a>
                    <div className="submit-button">
                        <input type="submit"/>
                    </div>
                </form>

            </div>
        </div>
    );
}
export default MobileRegistrationWindow