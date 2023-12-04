import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import TRead from "../CRUD/Secure/TRead";

const CourseHook = (course, setCourse, token, user, courseProgress, setCourseProgress) => {

    const {
        handleRead
    } = TRead()

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

    const handleGetCourseProgress = async () => {
        setCourseProgress(await handleRead(token, {user_id : user.id, course_name: course.name}, "api/course"))
    }


    return{
        handleSetDifficulty,
        handleSetCourse,
        handleGetCourseProgress
    }
};

export default CourseHook;