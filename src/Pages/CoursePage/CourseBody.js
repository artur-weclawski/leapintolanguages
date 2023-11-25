import CourseWindow from "./CourseWindow";
import MobileCourseWindow from "./MobileCourseWindow";

const CourseBody=()=>{
    return(
        <div className="course-body">
            <CourseWindow/>
            <MobileCourseWindow/>
        </div>
    );
}
export default CourseBody