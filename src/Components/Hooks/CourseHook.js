import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const CourseHook = (course, setCourse) => {

    const navigate = useNavigate();

    const handleChangeCourse = (name) => {
        setCourse({name: name, difficulty: course.difficulty})
    }

    const handleChangeDifficulty = (difficulty) => {
        setCourse({name: course.name, difficulty: difficulty})
    }

    const handleSetCourse = (name) => {
        console.log(course)
        handleChangeCourse(name)
        navigate('/difficultycourse')
    }

    const handleSetDifficulty = (difficulty) => {
        console.log(difficulty)
        handleChangeDifficulty(difficulty)
        navigate('/course')
    }


    return{
        handleSetDifficulty,
        handleSetCourse
    }
};

export default CourseHook;