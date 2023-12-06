import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import {useTranslation} from "react-i18next";

function MobileCourseChooseWindow(){
    const {t, i18n} = useTranslation();
    return(
        <div className="mobile-course-choose-window">
            <div className="mobile-section">
                <div className="course-choose-content">
                    <div className="english-courses">
                        <span className="pol-eng-btn-wrap">
                            <button className="pol-eng-btn">{t('accountPage.coursesProgress.polishToEnglish')}</button>
                        </span>
                        <span className="eng-pol-btn-wrap">
                            <button className="eng-pol-btn">{t('accountPage.coursesProgress.englishToPolish')}</button>
                        </span>
                    </div>
                    <div className="spanish-courses">
                        <span className="pol-eng-btn-wrap">
                            <button className="pol-eng-btn">{t('accountPage.coursesProgress.polishToSpanish')}</button>
                        </span>
                        <span className="eng-pol-btn-wrap">
                            <button className="eng-pol-btn">{t('accountPage.coursesProgress.spanishToPolish')}</button>
                        </span>
                    </div>
                </div>
            </div>
            <ReportBug/>
            <Accesibilities/>
        </div>
    );
}
export default MobileCourseChooseWindow