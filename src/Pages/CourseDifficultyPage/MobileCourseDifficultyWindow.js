import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import {useTranslation} from "react-i18next";
function MobileCourseDifficultyWindow({handleSetDifficulty}){
    const {t, i18n} = useTranslation();
    return(
        <div className="mobile-course-difficulty-window">
            <div className="mobile-section">
                <div className="course-difficulty-content">
                    <span className="easy-btn-wrap">
                            <button className="easy-btn"
                                    onClick={() => {handleSetDifficulty('easy')}}
                            >
                                {t('coursePage.toolBar.beginner')}
                            </button>
                        </span>
                    <span className="medium-btn-wrap">
                            <button className="medium-btn"
                                    onClick={() => {handleSetDifficulty('medium')}}
                            >
                                {t('coursePage.toolBar.medium')}
                            </button>
                        </span>
                    <span className="easy-btn-wrap">
                            <button className="easy-btn"
                                    onClick={() => {handleSetDifficulty('hard')}}
                            >
                                {t('coursePage.toolBar.advanced')}
                            </button>
                        </span>
                </div>
            </div>
            <ReportBug/>
            <Accesibilities/>
        </div>
    );
}
export default MobileCourseDifficultyWindow