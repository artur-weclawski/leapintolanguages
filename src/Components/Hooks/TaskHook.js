import TRead from "../CRUD/Secure/TRead";
import {useState} from "react";
import TUpdate from "../CRUD/Secure/TUpdate";

const TaskHook = (user, token, course, tasks, setTasks, currentTask, setCurrentTask) => {

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

    const handleCheckTask = (event) =>{
        event.preventDefault()
        console.log(event.target.answer.value)
        const _answer = event.target.answer.value
        console.log(currentTask)
        if (currentTask.answer === _answer){
            handleTaskPassed()
        } else setError("bledna odpowiedz")
    }

    const handleTaskPassed = async () => {
        console.log(currentTask)
        const _body = {user_id: user.id, task_id: currentTask.id}
        console.log(_body)
        const response = await handleUpdate(token, _body, "api/task/complete")
        console.log(response)
        setCurrentTask(currentTask.isCompleted === true)
        handleCurrentTask(tasks)
    }

    const handleGetTasks = async () => {

        const body = {user_id: user.id, course_name: course.name, difficulty: course.difficulty}
        const tasks = await handleRead(token, body, "api/tasks")
        setTasks(tasks.tasksResponse)
        setCurrentTask(handleCurrentTask(tasks.tasksResponse))
    }

    const handlePostTask = async () => {


    }

    return{
        handleGetTasks,
        handlePostTask,
        handleCurrentTask,
        handleCheckTask,
        error
    }
};

export default TaskHook;