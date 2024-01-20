import NavBar from "../../NavBar/NavBar";
import {useEffect} from "react";
import CourseDifficultyWindow from "./CourseDifficultyWindow";
import MobileCourseDifficultyWindow from "./MobileCourseDifficultyWindow";
import CourseHook from "../../Components/Hooks/CourseHook";
const CourseDifficultyPage=({routeName, setRouteName, course, setCourse, setUser, setToken})=>{
    useEffect(() => {
        setRouteName("wyborTrudnosciKursu")
    }, []);

    const {
        handleSetDifficulty
    } = CourseHook(course, setCourse)

    return(
        <body>
        <NavBar routeName={routeName} setRouteName={setRouteName} setUser={setUser} setToken={setToken}/>
        <div className="course-difficulty-body">
            <CourseDifficultyWindow handleSetDifficulty={handleSetDifficulty}/>
            <MobileCourseDifficultyWindow handleSetDifficulty={handleSetDifficulty}/>
        </div>
        </body>
    );
}
export default CourseDifficultyPage