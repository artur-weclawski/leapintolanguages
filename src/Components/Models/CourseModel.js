import React, {useState} from 'react';

const CourseModel = () => {
    const [data, setData] = useState(null)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")


    const handleGetCourse = () => {

    }


    return{
        data,
        message,
        error,
        handleGetCourse,
    }
};

export default CourseModel;