import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import "./AccountPage.css"
import ReactDOM from "react-dom";
import {useState} from "react";
import ProfileHook from "../../Components/Hooks/ProfileHook";

const AccountWindow = ({token, setToken, user, setUser}) => {

    console.log(user)
    console.log(token)

    const [courseName, setCourseName] = useState("Kurs języka angielskiego po polsku.");

    const changeLanguage = (name) => {
        setCourseName(name);
    }

        const {
            coursesData,
            message,
            error,
            profileData,
            handleEditProfile,
            handleDeleteProfile,
            // handleGetCoursesProgress,
            isLoaded
        } = ProfileHook()


        const openEditForm = () => {
            let element = document.getElementById('edit-password-form')
            let element2 = document.getElementById('approve-delete-form')
            let element3 = document.getElementById('account-content-right-progress')
            if (ReactDOM.findDOMNode(element).style.display === "none") {
                ReactDOM.findDOMNode(element2).style.display = "none"
                ReactDOM.findDOMNode(element).style.display = "flex"
                ReactDOM.findDOMNode(element3).style.display = "none"
            } else {
                ReactDOM.findDOMNode(element).style.display = "none"
                ReactDOM.findDOMNode(element3).style.display = "flex"
            }
        }
        const openDeleteForm = () => {
            let element = document.getElementById('edit-password-form')
            let element2 = document.getElementById('approve-delete-form')
            let element3 = document.getElementById('account-content-right-progress')
            if (ReactDOM.findDOMNode(element2).style.display === "none") {
                ReactDOM.findDOMNode(element).style.display = "none"
                ReactDOM.findDOMNode(element2).style.display = "flex"
                ReactDOM.findDOMNode(element3).style.display = "none"
            } else {
                ReactDOM.findDOMNode(element2).style.display = "none"
                ReactDOM.findDOMNode(element3).style.display = "flex"
            }
        }
        return (
            <div className="account-window">
                <div className="left-section">
                    <ReportBug/>
                    <Accesibilities/>
                </div>
                <div className="right-section">
                    <div className="account-content">
                        <div className="account-content-left">
                            <div className="account-content-userinfo">
                                <div className="email-info">
                                    <h1>Email:</h1>
                                    <h2>{user.username}</h2>
                                </div>
                                <div className="username-info">
                                    <h1>Username:</h1>
                                    <h2>{user.username}</h2>
                                </div>
                            </div>
                            <span className="account-content-edit-password-wrap">
                    <div className="account-content-edit-password">
                        <button className="account-content-edit-password-btn"
                                onClick={openEditForm}>Zmień hasło</button>
                    </div>
                            </span>
                            <span className="account-content-delete-account-wrap">
                    <div className="account-content-delete-account">
                        <button className="account-content-delete-account-btn"
                                onClick={openDeleteForm}>Usuń konto</button>
                    </div>
                        </span>
                        </div>
                        <span className="shadow"></span>
                        <div className="account-content-right">
                            <span className="account-content-right-progress-wrap" id="account-content-right-progress">
                        <div className="account-content-right-progress">
                            <h1>{courseName}</h1>
                            <div className="account-content-right-progress-beginner">
                            <h2>Początkujacy</h2>
                                <div className="progresses">
                                <div className="progress-images">
                                    <h4>Obrazki</h4>
                                    <div className="beginner-progress-images"><div
                                        className="beginner-progress-images-bar"></div></div>
                                </div>
                                <div className="progress-puzzle">
                                    <h4>Układanki</h4>
                                    <div className="beginner-progress-puzzle"><div
                                        className="beginner-progress-puzzle-bar"></div></div>
                                </div>
                                <div className="progress-sentences">
                                    <h4>Zdania</h4>
                                    <div className="beginner-progress-sentences"><div
                                        className="beginner-progress-sentences-bar"></div></div>
                                </div>
                                </div>
                            </div>
                            <div className="account-content-right-progress-medium">
                            <h2>Średni</h2>
                                <div className="progresses">
                                <div className="progress-images">
                                    <h4>Obrazki</h4>
                                    <div className="medium-progress-images"><div
                                        className="medium-progress-images-bar"></div></div>
                                </div>
                                <div className="progress-puzzle">
                                    <h4>Układanki</h4>
                                    <div className="medium-progress-puzzle"><div
                                        className="medium-progress-puzzle-bar"></div></div>
                                </div>
                                <div className="progress-sentences">
                                    <h4>Zdania</h4>
                                    <div className="medium-progress-sentences"><div
                                        className="medium-progress-sentences-bar"></div></div>
                                </div>
                                </div>
                            </div>
                            <div className="account-content-right-progress-advanced">
                            <h2>Zaawansowany</h2>
                                <div className="progresses">
                                <div className="progress-images">
                                    <h4>Obrazki</h4>
                                    <div className="advanced-progress-images"><div
                                        className="advanced-progress-images-bar"></div></div>
                                </div>
                                <div className="progress-puzzle">
                                    <h4>Układanki</h4>
                                    <div className="advanced-progress-puzzle"><div
                                        className="advanced-progress-puzzle-bar"></div></div>
                                </div>
                                <div className="progress-sentences">
                                    <h4>Zdania</h4>
                                    <div className="advanced-progress-sentences"><div
                                        className="advanced-progress-sentences-bar"></div></div>
                                </div>
                                </div>
                            </div>
                        </div>
                                <button className="progress-btn-ang-pol"
                                        onClick={() => changeLanguage("Kurs języka angielskiego po polsku.")}>Kurs angielskiego po polsku</button>
                                <button className="progress-btn-pol-ang"
                                        onClick={() => changeLanguage("Kurs języka polskiego po angielsku.")}>Kurs polskiego po angielsku</button>
                                <button className="progress-btn-spn-pol"
                                        onClick={() => changeLanguage("Kurs języka hiszpańskiego po polsku.")}>Kurs hiszpańskiego po polsku</button>
                                <button className="progress-btn-pol-spn"
                                        onClick={() => changeLanguage("Kurs języka polskiego po hiszpańsku.")}>Kurs polskiego po hiszpansku</button>
                            </span>
                            <div className="edit-password-form" id="edit-password-form">
                                <button className="edit-password-form-close" onClick={openEditForm}>X</button>
                                <form>
                                    <div className="edit-password-form-input">
                                        <label>Stare hasło</label>
                                        <input type="text" id="old-password-input" name="old-password" required/>
                                        <div className="username-error"> error</div>
                                    </div>
                                    <div className="edit-password-form-input">
                                        <label>Nowe hasło</label>
                                        <input type="text" id="new-password-input" name="new-password" required/>
                                        <div className="username-error"> error</div>
                                    </div>
                                    <div className="edit-password-form-submit-button">
                                        <input type="submit" value="Zmień hasło"/>
                                    </div>
                                </form>
                            </div>
                            <div className="approve-delete-form" id="approve-delete-form">
                                <h1>Czy na pewno chcesz usunąć konto?</h1>
                                <span className="approve-delete-form-no-wrap">
                    <div className="approve-delete-form-no">
                        <button className="approve-delete-form-no-btn" onClick={openDeleteForm}>Nie</button>
                    </div>
                        </span>
                                <span className="approve-delete-form-yes-wrap">
                    <div className="approve-delete-form-yes">
                        <button className="approve-delete-form-yes-btn">Tak</button>
                    </div>
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default AccountWindow;