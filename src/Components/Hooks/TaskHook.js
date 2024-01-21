import TRead from "../CRUD/Secure/TRead";
import {useState} from "react";
import TUpdate from "../CRUD/Secure/TUpdate";
import {useNavigate} from "react-router-dom";

const TaskHook = (user, token, course, tasks, setTasks, currentTask, setCurrentTask) => {

    const navigate = useNavigate()

    const {
        handleRead
    } = TRead()

    const {
        handleUpdate
    } = TUpdate()

    const [error, setError] = useState("");

    const handleCurrentTask = (_tasks) => {
        return (_tasks.find(t => {
            return !t.isCompleted
        }))
    }

    const handleCheckTask = (answer) =>{
        if (currentTask.answer === answer){
            handleTaskPassed().then(() => {
                window.location.reload(true)
            })
        } else setError("bledna odpowiedz")
    }

    const handleTaskPassed = async () => {
        const _body = {user_id: user.id, task_id: currentTask.id}
        const response = await handleUpdate(token, _body, "api/task/complete")
        setCurrentTask(currentTask.isCompleted === true)
        handleCurrentTask(tasks)
    }

    const handleGetTasks = async () => {

        const body = {user_id: user.id, course_name: course.name, difficulty: course.difficulty}
        const tasks = await handleRead(token, body, "api/tasks")
        setTasks(tasks.tasksResponse)
        setCurrentTask(handleCurrentTask(tasks.tasksResponse))
    }

    return{
        handleGetTasks,
        handleCurrentTask,
        handleCheckTask,
        error
    }
};

export default TaskHook;