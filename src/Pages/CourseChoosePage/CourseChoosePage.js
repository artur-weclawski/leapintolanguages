import NavBar from "../../NavBar/NavBar";
import {useEffect} from "react";
import CourseChooseWindow from "./CourseChooseWindow";
import MobileCourseChooseWindow from "./MobileCourseChooseWindow";
const CourseChoosePage = ({routeName, setRouteName}) =>{
    useEffect(() => {
        setRouteName('Wybór kursu')
    }, []);
    return(
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <div className="course-choose-body">
                <CourseChooseWindow/>
                <MobileCourseChooseWindow/>
            </div>
        </body>
    )
}
export default CourseChoosePage