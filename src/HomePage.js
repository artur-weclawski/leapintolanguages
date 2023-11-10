import NavBar from "./NavBar";
import LoginWindow from "./LoginWindow";
import MobileLoginWindow from "./MobileLoginWindow";

function HomePage(){
    return(
        <body>
            <NavBar/>
            <LoginWindow/>
            <MobileLoginWindow/>
        </body>
    );
}