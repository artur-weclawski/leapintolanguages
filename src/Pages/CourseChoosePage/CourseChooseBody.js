import "./CourseChoosePage.css"
import CourseChooseWindow from "./CourseChooseWindow";
import MobileCourseChooseWindow from "./MobileCourseChooseWindow";

function CourseChooseBody(){
    return(
        <div className="course-choose-body">
            <CourseChooseWindow/>
            <MobileCourseChooseWindow/>
        </div>
    );
}
export default CourseChooseBody