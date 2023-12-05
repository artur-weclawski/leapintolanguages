import error_pepe from "./error-pepe.webp"
import {useTranslation} from "react-i18next";
const ErrorWindow = () =>{
    const {t, i18n} = useTranslation();

    return(
        <div className="error-section">
            <div className="message">
                <h1>404</h1>
                <h1>{t('errorPage.message')}</h1>
            </div>
            <div className="image">
                <img src={error_pepe} alt={'error-img'}/>
            </div>
        </div>
    )
}
export default ErrorWindow