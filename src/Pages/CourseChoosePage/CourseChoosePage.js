import NavBar from "../../NavBar/NavBar";
import {useEffect} from "react";
import CourseChooseWindow from "./CourseChooseWindow";
import MobileCourseChooseWindow from "./MobileCourseChooseWindow";
import CourseHook from "../../Components/Hooks/CourseHook";
const CourseChoosePage = ({routeName, setRouteName, token, setToken, user, setUser, course, setCourse}) =>{
    useEffect(() => {
        setRouteName('Wybór kursu')
    }, []);


    const {
        handleSetCourse
    } = CourseHook(course, setCourse)

    return(
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <div className="course-choose-body">
                <CourseChooseWindow handleSetCourse={handleSetCourse}/>
                <MobileCourseChooseWindow/>
            </div>
        </body>
    )
}
export default CourseChoosePage