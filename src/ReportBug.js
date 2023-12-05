import "./Accesibilities.css"
import ReactDOM from 'react-dom';
import report_bug_btn_image from "./report-bug-btn.png"
import {useTranslation} from "react-i18next";
function ReportBug(){
    const {t, i18n} = useTranslation();
    const openForm = () =>{
        console.log(123)
        let element = document.getElementsByClassName('report-bug-form')
        if(ReactDOM.findDOMNode(element[1]).style.visibility === "hidden"){
            ReactDOM.findDOMNode(element[0]).style.visibility = 'visible'
            ReactDOM.findDOMNode(element[1]).style.visibility = "visible"
        }else{
            ReactDOM.findDOMNode(element[0]).style.visibility = 'hidden'
            ReactDOM.findDOMNode(element[1]).style.visibility = "hidden"
        }
    }
    const closeForm = () =>{
        let element = document.getElementsByClassName('report-bug-form')
        ReactDOM.findDOMNode(element[0]).style.visibility = "hidden"
        ReactDOM.findDOMNode(element[1]).style.visibility = "hidden"
    }
    return(
        <div>
            <div className="report-bug-form">
                <div className="naglowek">
                    <h1>{t('reportBug.title')}</h1>
                    <button onClick={closeForm} className="report-bug-form-close">X</button>
                </div>
                <form className="report-bug-form-body">
                    <div className="bug-input-temat">
                        <label>{t('reportBug.title')}</label>
                        <input type="text" name="temat" required/>
                        <div className="temat-error"> error</div>
                    </div>
                    <div className="bug-input-zawartosc">
                        <label>{t('reportBug.contrast')}</label>
                        <textarea name="zawartosc" required/>
                        <div className="zawartosc-error"> error</div>
                    </div>
                    <div className="bug-submit-button">
                        <input type="submit" value={t('reportBug.submit')}/>
                        <span className="report-bug-form-ribbon-wrap">
                        <span className="report-bug-form-ribbon"></span>
                        </span>
                    </div>
                </form>
            </div>
        <span className="report-bug-wrap">
        <div className="report-bug">
            <button onClick={openForm} className="report-bug-btn"><img src={report_bug_btn_image}/></button>
        </div>
        </span>
        </div>
    );
}
export default ReportBug