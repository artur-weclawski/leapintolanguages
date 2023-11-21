import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import LoginWindow from "./Pages/LoginPage/LoginWindow";
import RegistrationWindow from "./Pages/RegistrationPage/RegistrationWindow";
import AccountWindow from "./Pages/AccountPage/AccountWindow";
import CourseWindow from "./Pages/CoursePage/CourseWindow";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes";
import {useState} from "react";
const App = () => {
    //TODO: Znaleść sposób na zalezienie usera tutaj
    const [user, setUser] = useState({id: 1, username: "Pepe", password: null, email: "pepe@pepe.pepe"})
    return(
        <Routes>
            <Route index element={<LoginWindow/>}/>
            // Dostępne
            <Route path="login" element={<LoginWindow/>}/>
            <Route path="register" element={<RegistrationWindow/>}/>
            <Route path="*" element={<p>Nic tu nie ma gałganie</p>}/>
            // Po zalogowaniu
            <Route element={<ProtectedRoute user ={user}/>}>
                <Route path="account" element={<AccountWindow/>}/>
                <Route path="course" element={<CourseWindow/>}/>
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
