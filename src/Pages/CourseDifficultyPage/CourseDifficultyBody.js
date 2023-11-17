import "./CourseDifficultyPage.css"
import CourseDifficultyWindow from "./CourseDifficultyWindow";
import MobileCourseDifficultyWindow from "./MobileCourseDifficultyWindow";
function CourseDifficultyBody(){
    return(
        <div className="course-difficulty-body">
            <CourseDifficultyWindow/>
            <MobileCourseDifficultyWindow/>
        </div>
    )
}
export  default CourseDifficultyBody