import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import MobileRegistrationWindow from "./MobileRegistrationWindow";

function RegistrationBody(){
    return(
        <div className="registration-window">
            <div className="left-section">
                <ReportBug/>
                <Accesibilities/>
            </div>
            <div className="right-section">

                <MobileRegistrationWindow/>
            </div>
        </div>
    );
}
export default RegistrationBody