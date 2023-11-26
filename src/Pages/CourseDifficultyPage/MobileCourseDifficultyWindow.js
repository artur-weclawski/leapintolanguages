import "./CourseDifficultyPage.css"
import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";

function MobileCourseDifficultyWindow(){
    return(
        <div className="mobile-course-difficulty-window">
            <div className="mobile-section">
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
            <ReportBug/>
            <Accesibilities/>
        </div>
    );
}
export default MobileCourseDifficultyWindow