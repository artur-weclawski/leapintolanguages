import {useTranslation} from "react-i18next";

const PageStatus = ({routeName, setRouteName}) =>{
    const {t, i18n} = useTranslation();
    return(
        <span className="page-status-wrap">
        <div className="page-status">
            <h2>{routeName}</h2>
        </div>
        </span>
    );
}
export default PageStatus