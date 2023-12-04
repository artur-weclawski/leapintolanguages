import NavBar from "../../NavBar/NavBar";
import {useEffect, useState} from "react";
import CourseWindow from "./CourseWindow";
import MobileCourseWindow from "./MobileCourseWindow";
import TaskHook from "../../Components/Hooks/TaskHook";
import CourseHook from "../../Components/Hooks/CourseHook";

const CoursePage = ({routeName, setRouteName, token, setToken, user, setUser, course, setCourse})=>{
    const [tasks, setTasks] = useState(null)
    const [currentTask, setCurrentTask] = useState(null)
    const [courseProgress, setCourseProgress] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const {
        handleGetTasks,
        handlePostTask,
        handleCurrentTask,
        handleCheckTask,
        error
    } = TaskHook(user, token, course, tasks, setTasks, currentTask, setCurrentTask)

    const {
        handleGetCourseProgress
    } = CourseHook(course, setCourse, token, user, courseProgress, setCourseProgress)


    useEffect(() => {
        setRouteName('Kurs')
        handleGetTasks()
            .then(() => {
                handleGetCourseProgress()
                    .then(() => {
                        setIsLoaded(true)
                    })
            })
    }, []);

    if (isLoaded){
        return(
            <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <div className="course-body">
                <CourseWindow token={token} user={user} currentTask={currentTask} handleCheckTask={handleCheckTask} error={error}/>
                <MobileCourseWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
            </div>
            </body>
        )
    }
}
export default CoursePage