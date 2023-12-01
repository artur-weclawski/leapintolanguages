import TRead from "../CRUD/Secure/TRead";

const TaskHook = (user, token, course, tasks, setTasks, currentTask, setCurrentTask) => {

    const {
        handleRead
    } = TRead()


    const handleCurrentTask = () => {
        console.log(tasks.find(t => !t.isCompleted))
    }

    const handleGetTasks = async () => {
        const body = {user_id: user.id, course_name: course.name, difficulty: course.difficulty}
        const tasks = await handleRead(token, body, "api/tasks")
        console.log(tasks.tasksResponse)
        return(tasks.tasksResponse)
    }

    const handlePostTask = async () => {


    }

    return{
        handleGetTasks,
        handlePostTask,
        handleCurrentTask
    }
};

export default TaskHook;