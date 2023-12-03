import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
function CourseDifficultyWindow(){
    return(
        <div className="course-difficulty-window">
            <div className="left-section">
                <ReportBug/>
                <Accesibilities/>
            </div>
            <div className="right-section">
                <div className="course-difficulty-content">
                    <span className="easy-btn-wrap">
                            <button className="easy-btn">Łatwy</button>
                        </span>
                    <span className="medium-btn-wrap">
                            <button className="medium-btn">Średni</button>
                        </span>
                    <span className="easy-btn-wrap">
                            <button className="easy-btn">Zaawansowany</button>
                        </span>
                </div>
            </div>
        </div>
    );
}
export  default CourseDifficultyWindow