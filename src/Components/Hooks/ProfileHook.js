import {useState} from "react";
import CourseController from "../Controllers/CourseController";
import {useLocalStorage} from "../LocalStorage/HandleLocalStorage";
import User from "../Entites/User";

const initialProfileData = {
    id: null,
    username: null,
    email: null
}

const ProfileHook = () => {
    const [coursesData, setCoursesData] = useState(null)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    const [profileData, setProfileData] = useLocalStorage("profile",null)



    const handleEditProfile = (event) => {
        event.preventDefault()
        const password =  event.target.password.value

        const user = new User(profileData.id, profileData.username, password, profileData.email);
    }

    const handleDeleteProfile = (event) => {

    }

    // const handleGetCoursesProgress = () => {
    //     CourseController.getCoursesProgressByUser(profileData.id)
    // }

    return{
        coursesData,
        message,
        error,
        profileData,
        handleEditProfile,
        handleDeleteProfile,
        // handleGetCoursesProgress,
        isLoaded
    }
};

export default ProfileHook;