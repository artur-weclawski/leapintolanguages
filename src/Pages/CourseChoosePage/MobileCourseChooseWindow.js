import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";

function MobileCourseChooseWindow(){
    return(
        <div className="mobile-course-choose-window">
            <div className="mobile-section">
                <div className="course-choose-content">
                    <div className="english-courses">
                        <span className="pol-eng-btn-wrap">
                            <button className="pol-eng-btn">Kurs języka angielskiego po polsku</button>
                        </span>
                        <span className="eng-pol-btn-wrap">
                            <button className="eng-pol-btn">Kurs języka polskiego po angielsku</button>
                        </span>
                    </div>
                    <div className="spanish-courses">
                        <span className="pol-eng-btn-wrap">
                            <button className="pol-eng-btn">Kurs języka hiszpańskiego po polsku</button>
                        </span>
                        <span className="eng-pol-btn-wrap">
                            <button className="eng-pol-btn">Kurs języka polskiego po hiszpańsku</button>
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