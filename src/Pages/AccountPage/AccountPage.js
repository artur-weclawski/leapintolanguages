import NavBar from "../../NavBar/NavBar";
import {useEffect, useState} from "react";
import AccountWindow from "./AccountWindow";
import MobileAccountWindow from "./MobileAccountWindow";
import ProfileHook from "../../Components/Hooks/ProfileHook";
const AccountPage = ({routeName, setRouteName, token, setToken, user, setUser}) =>{

    const [coursesProgress, setCoursesProgress] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const {
        handleGetAllCoursesProgress,
        handleDeleteProfile,
        handleEditProfile,
        error
    } = ProfileHook(user, setUser, token, setToken)

    useEffect(() => {
        setRouteName("konto")
        handleGetAllCoursesProgress()
            .then((data) => {
                setCoursesProgress(data)
            })
            .then(() => {
                setIsLoaded(true)
            })
    }, []);


    if (isLoaded){
        return(
            <body>
            <NavBar routeName={routeName} setRouteName={setRouteName} setUser={setUser} setToken={setToken}/>
            <div className="account-body">
                <AccountWindow
                    user={user}
                    coursesProgress={coursesProgress}
                    handleDeleteProfile={handleDeleteProfile}
                    handleEditProfile={handleEditProfile}
                    error={error}
                />
                <MobileAccountWindow
                    user={user}
                    coursesProgress={coursesProgress}
                    handleDeleteProfile={handleDeleteProfile}
                    handleEditProfile={handleEditProfile}
                    error={error}
                />
            </div>
            </body>
        );
    }
}
export default AccountPage