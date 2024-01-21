import NavBar from "../../NavBar/NavBar";
import {useEffect, useState} from "react";
import CourseWindow from "./CourseWindow";
import MobileCourseWindow from "./MobileCourseWindow";
import TaskHook from "../../Components/Hooks/TaskHook";
import CourseHook from "../../Components/Hooks/CourseHook";

const CoursePage = ({routeName, setRouteName, token, setToken, user, setUser, course, setCourse}) => {
    const [tasks, setTasks] = useState(null)
    const [currentTask, setCurrentTask] = useState(null)
    const [courseProgress, setCourseProgress] = useState(null);
    const [isLoadedProgress, setIsLoadedProgress] = useState(false);
    const [isLoadedTasks, setIsLoadedTasks] = useState(false);

    const {
        handleGetTasks,
        handleCheckTask,
        error
    } = TaskHook(user, token, course, tasks, setTasks, currentTask, setCurrentTask)

    const {
        handleGetCourseProgress
    } = CourseHook(course, setCourse, token, user, courseProgress, setCourseProgress)

    const getCoursesProgress = () => {
        handleGetTasks()
            .then(() => {
                setIsLoadedTasks(true)
            })
    }

    const getTasks = () => {
        handleGetCourseProgress()
            .then(() => {

            })
            .then(() => {
                setIsLoadedProgress(true)
            })
    }

    useEffect(() => {
        setRouteName("kurs")
        getCoursesProgress()
        getTasks()
    }, []);

    if (isLoadedTasks && isLoadedProgress) {
        console.log(currentTask)
        document.documentElement.style.setProperty('--beginner-progress-images-bar_width', courseProgress.easy.obraz.completionPercentage + '%')
        document.documentElement.style.setProperty('--beginner-progress-radio-bar_width', courseProgress.easy.radius.completionPercentage + '%')
        document.documentElement.style.setProperty('--medium-progress-puzzle-bar_width', courseProgress.medium.ukladanka.completionPercentage + '%')
        document.documentElement.style.setProperty('--medium-progress-radio-bar_width', courseProgress.medium.radius.completionPercentage + '%')
        document.documentElement.style.setProperty('--advanced-progress-sentences-bar_width', courseProgress.hard.sluchanie.completionPercentage + '%')
        return (
            <body>
            <NavBar routeName={routeName} setRouteName={setRouteName} setUser={setUser} setToken={setToken}/>
            <div className="course-body">
                <CourseWindow currentTask={currentTask} handleCheckTask={handleCheckTask}
                              error={error}/>
                <MobileCourseWindow
                    currentTask={currentTask} handleCheckTask={handleCheckTask}
                    error={error}/>
            </div>
            </body>
        )
    }
}
export default CoursePage