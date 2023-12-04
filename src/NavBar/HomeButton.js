import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
function HomeButton(){
    const {t, i18n} = useTranslation();
    return(
        <span className="home-btn-wrap">
        <div className="home-btn">
            <Link to="/choosecourse" style={{textDecoration:'none'}}><h2>Leap into Languages</h2></Link>
        </div>
        </span>
    );
}
export default HomeButton