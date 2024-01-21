import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import ReactDOM from "react-dom";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

const AccountWindow = ({
                           user,
                           coursesProgress,
                           handleDeleteProfile, handleEditProfile, error
                       }) => {

    const [courseName, setCourseName] = useState('accountPage.coursesProgress.polishToEnglish');
    const {t, i18n} = useTranslation();
    const [currentCourseProgress, setCurrentCourseProgress] = useState(coursesProgress['Pol-Ang']);
    console.log(currentCourseProgress)
    useEffect(() => {
        changeLanguage('accountPage.coursesProgress.polishToEnglish', "Ang-Pol")
    }, []);

    const changeLanguage = (name, courseTag) => {
        setCurrentCourseProgress(coursesProgress[courseTag])

        setCourseName(name);
        document.documentElement.style.setProperty('--beginner-progress-images-bar_width',currentCourseProgress.easy.obraz.completionPercentage * 100 + '%')
        document.documentElement.style.setProperty('--beginner-progress-radio-bar_width',currentCourseProgress.easy.radius.completionPercentage * 100 + '%')
        document.documentElement.style.setProperty('--medium-progress-puzzle-bar_width',currentCourseProgress.medium.ukladanka.completionPercentage * 100 + '%')
        document.documentElement.style.setProperty('--medium-progress-radio-bar_width',currentCourseProgress.medium.radius.completionPercentage * 100 + '%')
        document.documentElement.style.setProperty('--advanced-progress-sentences-bar_width',currentCourseProgress.hard.sluchanie.completionPercentage * 100 + '%')
    }
        const openEditForm = () => {
            let element = document.getElementsByClassName('edit-password-form')
            let element2 = document.getElementsByClassName('approve-delete-form')
            let element3 = document.getElementsByClassName('account-content-right-progress-wrap')
            if (ReactDOM.findDOMNode(element[0]).style.display === "none") {
                ReactDOM.findDOMNode(element[0]).style.display = "flex"
                ReactDOM.findDOMNode(element2[0]).style.display = "none"
                ReactDOM.findDOMNode(element3[0]).style.display = "none"
                ReactDOM.findDOMNode(element2[1]).style.display = "none"
                ReactDOM.findDOMNode(element[1]).style.display = "flex"
                ReactDOM.findDOMNode(element3[1]).style.display = "none"
            } else {
                ReactDOM.findDOMNode(element[0]).style.display = "none"
                ReactDOM.findDOMNode(element3[0]).style.display = "flex"
                ReactDOM.findDOMNode(element[1]).style.display = "none"
                ReactDOM.findDOMNode(element3[1]).style.display = "flex"
            }
        }
        const openDeleteForm = () => {
            let element = document.getElementsByClassName('edit-password-form')
            let element2 = document.getElementsByClassName('approve-delete-form')
            let element3 = document.getElementsByClassName('account-content-right-progress-wrap')
            if (ReactDOM.findDOMNode(element2[0]).style.display === "none") {
                ReactDOM.findDOMNode(element[0]).style.display = "none"
                ReactDOM.findDOMNode(element2[0]).style.display = "flex"
                ReactDOM.findDOMNode(element3[0]).style.display = "none"
                ReactDOM.findDOMNode(element[1]).style.display = "none"
                ReactDOM.findDOMNode(element2[1]).style.display = "flex"
                ReactDOM.findDOMNode(element3[1]).style.display = "none"
            } else {
                ReactDOM.findDOMNode(element2[0]).style.display = "none"
                ReactDOM.findDOMNode(element3[0]).style.display = "flex"
                ReactDOM.findDOMNode(element2[1]).style.display = "none"
                ReactDOM.findDOMNode(element3[1]).style.display = "flex"
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
                                    <h1>{t('accountPage.email')}</h1>
                                    <h2>{user.email}</h2>
                                </div>
                                <div className="username-info">
                                    <h1>{t('accountPage.userName')}</h1>
                                    <h2>{user.username}</h2>
                                </div>
                            </div>
                            <span className="account-content-edit-password-wrap">
                    <div className="account-content-edit-password">
                        <button className="account-content-edit-password-btn"
                                onClick={() => openEditForm()}>{t('accountPage.changePassword.button')}</button>
                    </div>
                            </span>
                        <span className="account-content-delete-account-wrap">
                    <div className="account-content-delete-account">
                        <button className="account-content-delete-account-btn"
                                onClick={() => openDeleteForm()}>{t('accountPage.deleteAccount.button')}</button>
                    </div>
                        </span>
                    </div>
                    <span className="shadow"></span>
                    <div className="account-content-right">
                            <span className="account-content-right-progress-wrap">
                        <div className="account-content-right-progress">
                            <h1>{t(courseName)}</h1>
                            <div className="account-content-right-progress-beginner">
                            <h2>{t('accountPage.coursesProgress.beginner')}</h2>
                        <div className="progresses">
                            <div className="progress-images">
                                <h4>{t('accountPage.coursesProgress.images')}</h4>
                                <div className="beginner-progress-images"><div
                                    className="beginner-progress-images-bar"></div></div>
                            </div>
                            <div className="progress-radio">
                                <h4>{t('coursePage.toolBar.radio')}</h4>
                                <div className="beginner-progress-radio"><div
                                    className="beginner-progress-radio-bar"></div></div>
                            </div>
                        </div>
                            </div>
                            <div className="account-content-right-progress-medium">
                            <h2>{t('coursePage.toolBar.medium')}</h2>
                        <div className="progresses">
                            <div className="progress-radio">
                                <h4>{t('coursePage.toolBar.radio')}</h4>
                                <div className="medium-progress-radio"><div
                                    className="medium-progress-radio-bar"></div></div>
                            </div>
                            <div className="progress-puzzle">
                                <h4>{t('coursePage.toolBar.puzzle')}</h4>
                                <div className="medium-progress-puzzle"><div
                                    className="medium-progress-puzzle-bar"></div></div>
                            </div>
                        </div>
                            </div>
                            <div className="account-content-right-progress-advanced">
                            <h2>{t('coursePage.toolBar.advanced')}</h2>
                        <div className="progresses">
                            <div className="progress-sentences">
                                <h4>{t('coursePage.toolBar.sentences')}</h4>
                                <div className="advanced-progress-sentences"><div
                                    className="advanced-progress-sentences-bar"></div></div>
                            </div>
                        </div>
                            </div>
                        </div>
                                <div className="account-content-right-progress-buttons">
                                <button className="progress-btn-ang-pol"
                                        onClick={() => changeLanguage('accountPage.coursesProgress.polishToEnglish', "Ang-Pol")}>{t('accountPage.coursesProgress.polishToEnglish')}</button>
                                <button className="progress-btn-pol-ang"
                                        onClick={() => changeLanguage('accountPage.coursesProgress.englishToPolish', "Pol-Ang")}>{t('accountPage.coursesProgress.englishToPolish')}</button>
                                <button className="progress-btn-spn-pol"
                                        onClick={() => changeLanguage('accountPage.coursesProgress.polishToSpanish', "Spa-Pol")}>{t('accountPage.coursesProgress.polishToSpanish')}</button>
                                <button className="progress-btn-pol-spn"
                                        onClick={() => changeLanguage('accountPage.coursesProgress.spanishToPolish', "Pol-Spa")}>{t('accountPage.coursesProgress.spanishToPolish')}</button>
                                </div>
                            </span>
                            <div className="edit-password-form">
                                <button className="edit-password-form-close" onClick={() => openEditForm()}>X</button>
                                <form onSubmit={handleEditProfile}>
                                    <div className="edit-password-form-input">
                                        <label for="old-password-input">{t('accountPage.changePassword.oldPassword')}</label>
                                        <input type="password" id="old-password-input" name="oldPassword" required/>
                                    </div>
                                    <div className="edit-password-form-input">
                                        <label for="new-password-input">{t('accountPage.changePassword.newPassword')}</label>
                                        <input type="password" id="new-password-input" name="newPassword" required/>
                                        <div className="username-error">{error}</div>
                                    </div>
                                    <div className="edit-password-form-submit-button">
                                        <input type="submit" value={t('accountPage.changePassword.button')}/>
                                    </div>
                                </form>
                            </div>
                            <div className="approve-delete-form">
                                <h1>{t('accountPage.deleteAccount.title')}</h1>
                                <span className="approve-delete-form-no-wrap">
                    <div className="approve-delete-form-no">
                        <button className="approve-delete-form-no-btn" onClick={() => openDeleteForm()}>{t('accountPage.deleteAccount.cancel')}</button>
                    </div>
                        </span>
                            <span className="approve-delete-form-yes-wrap">
                    <div className="approve-delete-form-yes">
                        <button className="approve-delete-form-yes-btn" onClick={() => {
                            handleDeleteProfile()
                        }}>{t('accountPage.deleteAccount.submit')}</button>
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