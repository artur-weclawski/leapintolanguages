import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes";
import {useState} from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import AccountPage from "./Pages/AccountPage/AccountPage";
import CoursePage from "./Pages/CoursePage/CoursePage";
const App = () => {
    //TODO: Znaleść sposób na zalezienie usera tutaj
    const [user, setUser] = useState({id: 1, username: "Pepe", password: null, email: "pepe@pepe.pepe"})
    return(
        <Routes>
            <Route index element={<LoginPage/>}/>
            // Dostępne
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<RegistrationPage/>}/>
            <Route path="*" element={<p>Nic tu nie ma gałganie</p>}/>
            // Po zalogowaniu
            <Route element={<ProtectedRoute user ={user}/>}>
                <Route path="account" element={<AccountPage/>}/>
                <Route path="course" element={<CoursePage/>}/>
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