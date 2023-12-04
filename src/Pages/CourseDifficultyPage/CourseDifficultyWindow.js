import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import {useTranslation} from "react-i18next";

function CourseDifficultyWindow({handleSetDifficulty}){

    const {t, i18n} = useTranslation();
    return(
        <div className="course-difficulty-window">
            <div className="left-section">
                <ReportBug/>
                <Accesibilities/>
            </div>
            <div className="right-section">
                <div className="course-difficulty-content">
                    <span className="easy-btn-wrap">
                            <button className="easy-btn"
                                    onClick={() => {handleSetDifficulty('easy')}}
                            >
                                Łatwy
                            </button>
                        </span>
                    <span className="medium-btn-wrap">
                            <button className="medium-btn"
                                    onClick={() => {handleSetDifficulty('medium')}}
                            >
                                Średni
                            </button>
                        </span>
                    <span className="easy-btn-wrap">
                            <button className="easy-btn"
                                    onClick={() => {handleSetDifficulty('hard')}}
                            >
                                Zaawansowany
                            </button>
                        </span>
                </div>
            </div>
        </div>
    );
}
export  default CourseDifficultyWindow