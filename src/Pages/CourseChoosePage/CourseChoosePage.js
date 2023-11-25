import NavBar from "../../NavBar/NavBar";
import CourseChooseBody from "./CourseChooseBody";
import "./CourseChoosePage.css"
import {useEffect, useState} from "react";
const CourseChoosePage = ({routeName, setRouteName}) =>{
    useEffect(() => {
        setRouteName('Wybór kursu')
    }, []);
    return(
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <CourseChooseBody/>
        </body>
    )
}
export default CourseChoosePage