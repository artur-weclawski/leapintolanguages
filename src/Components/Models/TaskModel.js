import React, {useState} from 'react';

const TaskModel = () => {
    const [data, setData] = useState(null)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")


    const handleGetTask = () => {

    }

    const handlePostTask = () => {

    }

    return{
        data,
        message,
        error,
        handleGetTask,
        handlePostTask
    }
};

export default TaskModel;