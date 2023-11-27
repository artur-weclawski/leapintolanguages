import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes";
import {useEffect, useState} from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import AccountPage from "./Pages/AccountPage/AccountPage";
import CoursePage from "./Pages/CoursePage/CoursePage";
import CourseChoosePage from "./Pages/CourseChoosePage/CourseChoosePage";
import CourseDifficultyPage from "./Pages/CourseDifficultyPage/CourseDifficultyPage";
import KnowledgeBasePage from "./Pages/KnowledgeBasePage/KnowledgeBasePage";
import {useLocalStorage} from "./Components/LocalStorage/HandleLocalStorage";
const App = () => {
    //TODO: Znaleść sposób na zalezienie usera tutaj

    const [user, setUser] = useLocalStorage("user", null)
    const [token, setToken] = useLocalStorage("token", null)
    const [routeName, setRouteName] = useState("login");
    return(
        <Routes>
            <Route index element={<LoginPage routeName={routeName} setRouteName={setRouteName} token={token} setToken={setToken} user={user} setUser={setUser}/>}/>
            // Dostępne
            <Route path="login" element={<LoginPage routeName={routeName} setRouteName={setRouteName} token={token} setToken={setToken} user={user} setUser={setUser}/>}/>
            <Route path="register" element={<RegistrationPage routeName={routeName} setRouteName={setRouteName} token={token} setToken={setToken} user={user} setUser={setUser}/>}/>
            <Route path="*" element={<p>Nic tu nie ma gałganie</p>}/>
            // Po zalogowaniu
            <Route element={<ProtectedRoute user ={user}/>}>
                <Route index element={<AccountPage routeName={routeName} setRouteName={setRouteName} token={token} setToken={setToken} user={user} setUser={setUser}/>}/>
                <Route path="knowledgeBase" element={<KnowledgeBasePage routeName={routeName} setRouteName={setRouteName}/>}/>
                <Route path="account" element={<AccountPage routeName={routeName} setRouteName={setRouteName} token={token} setToken={setToken} user={user} setUser={setUser}/>}/>
                <Route path="choosecourse" element={<CourseChoosePage routeName={routeName} setRouteName={setRouteName}/>}/>
                <Route path="difficultycourse" element={<CourseDifficultyPage routeName={routeName} setRouteName={setRouteName}/> }/>
                <Route path="course" element={<CoursePage routeName={routeName} setRouteName={setRouteName}/>}/>
            </Route>
            // TODO: Reszta
        </Routes>
    )
}

/// Przykład nawigacji
const Navigation = () => {
    return (
        <nav>
            <Link to="/login">login</Link>
            <Link to="/register">register</Link>
        </nav>
    );
};

export default App;