import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import {useTranslation} from "react-i18next";

function CourseChooseWindow({handleSetCourse}){
    const {t, i18n} = useTranslation();
    return(
        <div className="course-choose-window">
            <div className="left-section">
                <ReportBug/>
                <Accesibilities/>
            </div>
            <div className="right-section">
                <div className="course-choose-content">
                    <div className="english-courses">
                        <span className="pol-eng-btn-wrap">
                            <button className="pol-eng-btn" onClick={() => {
                                handleSetCourse('Pol-Ang')
                            }}>
                                Kurs języka angielskiego po polsku
                            </button>
                        </span>
                        <span className="eng-pol-btn-wrap">
                            <button className="eng-pol-btn" onClick={() => {
                                handleSetCourse('Ang-Pol')
                            }}>
                                Kurs języka polskiego po angielsku
                            </button>
                        </span>
                    </div>
                    <div className="spanish-courses">
                        <span className="pol-eng-btn-wrap">
                            <button className="pol-eng-btn" onClick={() => {
                                handleSetCourse('Pol-Spa')
                            }}>
                                Kurs języka hiszpańskiego po polsku
                            </button>
                        </span>
                        <span className="eng-pol-btn-wrap">
                            <button className="eng-pol-btn" onClick={() => {
                                handleSetCourse('Spa-Pol')
                            }}>
                                Kurs języka polskiego po hiszpańsku
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CourseChooseWindow