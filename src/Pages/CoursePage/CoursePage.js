import NavBar from "../../NavBar/NavBar";
import CourseBody from "./CourseBody";
import {useEffect} from "react";

const CoursePage = ({routeName, setRouteName})=>{
    useEffect(() => {
        setRouteName('Kurs')
    }, []);
    return(
        <body>
        <NavBar routeName={routeName} setRouteName={setRouteName}/>
        <CourseBody/>
        </body>
    )
}
export default CoursePage