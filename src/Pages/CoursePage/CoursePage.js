import NavBar from "../../NavBar/NavBar";
import {useEffect, useState} from "react";
import CourseWindow from "./CourseWindow";
import MobileCourseWindow from "./MobileCourseWindow";

const CoursePage = ({routeName, setRouteName})=>{
    useEffect(() => {
        setRouteName('Kurs')
    }, []);
    return(
        <body>
        <NavBar routeName={routeName} setRouteName={setRouteName}/>
        <div className="course-body">
            <CourseWindow/>
            <MobileCourseWindow/>
        </div>
        </body>
    )
}
export default CoursePage