import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import MobileRegistrationWindow from "./MobileRegistrationWindow";
import RegistrationWindow from "./RegistrationWindow";
import "./RegistrationPage.css"
function RegistrationBody(){
    return(
        <div className="registration-body">
            <RegistrationWindow/>
            <MobileRegistrationWindow/>
        </div>
    );
}
export default RegistrationBody