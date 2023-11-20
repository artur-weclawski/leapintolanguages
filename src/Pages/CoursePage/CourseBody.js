import CourseWindow from "./CourseWindow";
import MobileCourseWindow from "./MobileCourseWindow";

function CourseBody(){
    return(
        <div className="course-body">
            <CourseWindow/>
            <MobileCourseWindow/>
        </div>
    );
}
export default CourseBody