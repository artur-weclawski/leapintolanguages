import React, {useState} from 'react';

const ExamModel = () => {
    const [data, setData] = useState(null)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")


    const handleGetExam = () => {

    }


    return{
        data,
        message,
        error,
        handleGetExam,
    }
};

export default ExamModel;