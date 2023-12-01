import NavBar from "../../NavBar/NavBar";
import {useEffect, useState} from "react";
import CourseWindow from "./CourseWindow";
import MobileCourseWindow from "./MobileCourseWindow";
import TaskHook from "../../Components/Hooks/TaskHook";

const CoursePage = ({routeName, setRouteName, token, setToken, user, setUser, course, setCourse})=>{
    const [tasks, setTasks] = useState(null)
    const [currentTask, setCurrentTask] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);

    const {
        handleGetTasks,
        handlePostTask,
        handleCurrentTask
    } = TaskHook(user, token, course, tasks, setTasks, currentTask, setCurrentTask)



    useEffect(() => {
        setRouteName('Kurs')
        handleGetTasks()
            .then(tasks => {
                setCurrentTask(tasks)
            })
            .then(() => setIsLoaded(true))
        handleCurrentTask()
    }, []);


    // setCurrentTask(tasks.find(t =>{
    //     !t.isComplted
    // }))
    //
    // for (let i = 0; i < tasks.length; i++) {
    //     if(!tasks[i].isCompleted){
    //         setCurrentTask(tasks[i])
    //         break;
    //     }
    // }

    if (isLoaded){
        return(
            <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <div className="course-body">
                <CourseWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
                <MobileCourseWindow token={token} setToken={setToken} user={user} setUser={setUser}/>
            </div>
            </body>
        )
    }
}
export default CoursePage