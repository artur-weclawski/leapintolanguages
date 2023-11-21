import MobileRegistrationWindow from "./MobileRegistrationWindow";
import RegistrationWindow from "./RegistrationWindow";
function RegistrationBody(){
    return(
        <div className="registration-body">
            <RegistrationWindow/>
            <MobileRegistrationWindow/>
        </div>
    );
}
export default RegistrationBody