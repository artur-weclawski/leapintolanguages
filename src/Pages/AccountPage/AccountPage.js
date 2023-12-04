import NavBar from "../../NavBar/NavBar";
import "./AccountPage.css"
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
        setRouteName('Konto')
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
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <div className="account-body">
                <AccountWindow
                    token={token} setToken={setToken}
                    user={user} setUser={setUser}
                    coursesProgress={coursesProgress}
                    handleDeleteProfile={handleDeleteProfile}
                    handleEditProfile={handleEditProfile}
                    error={error}
                />
                <MobileAccountWindow
                    token={token} setToken={setToken}
                    user={user} setUser={setUser}/>
            </div>
            </body>
        );
    }
}
export default AccountPage