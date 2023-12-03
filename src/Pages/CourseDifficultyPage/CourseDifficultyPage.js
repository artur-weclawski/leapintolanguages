import NavBar from "../../NavBar/NavBar";
import {useEffect} from "react";
import CourseDifficultyWindow from "./CourseDifficultyWindow";
import MobileCourseDifficultyWindow from "./MobileCourseDifficultyWindow";
const CourseDifficultyPage=({routeName, setRouteName})=>{
    useEffect(() => {
        setRouteName('Wybór trudności kursu')
    }, []);
    return(
        <body>
        <NavBar routeName={routeName} setRouteName={setRouteName}/>
        <div className="course-difficulty-body">
            <CourseDifficultyWindow/>
            <MobileCourseDifficultyWindow/>
        </div>
        </body>
    );
}
export default CourseDifficultyPage