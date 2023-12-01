import "./CourseDifficultyPage.css"
import NavBar from "../../NavBar/NavBar";
import {useEffect} from "react";
import CourseDifficultyWindow from "./CourseDifficultyWindow";
import MobileCourseDifficultyWindow from "./MobileCourseDifficultyWindow";
import CourseHook from "../../Components/Hooks/CourseHook";
const CourseDifficultyPage=({routeName, setRouteName, course, setCourse})=>{
    useEffect(() => {
        setRouteName('Wybór trudności kursu')
    }, []);

    const {
        handleSetDifficulty
    } = CourseHook(course, setCourse)

    return(
        <body>
        <NavBar routeName={routeName} setRouteName={setRouteName}/>
        <div className="course-difficulty-body">
            <CourseDifficultyWindow handleSetDifficulty={handleSetDifficulty}/>
            <MobileCourseDifficultyWindow/>
        </div>
        </body>
    );
}
export default CourseDifficultyPage