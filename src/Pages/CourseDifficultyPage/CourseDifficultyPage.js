import "./CourseDifficultyPage.css"
import NavBar from "../../NavBar/NavBar";
import CourseDifficultyBody from "./CourseDifficultyBody";
import {useEffect, useState} from "react";
const CourseDifficultyPage=({routeName, setRouteName})=>{
    useEffect(() => {
        setRouteName('Wybór trudności kursu')
    }, []);
    return(
        <body>
        <NavBar routeName={routeName} setRouteName={setRouteName}/>
        <CourseDifficultyBody/>
        </body>
    );
}
export default CourseDifficultyPage