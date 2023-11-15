import "./Accesibilities.css"
import ReactDOM from 'react-dom';
import report_bug_btn_image from "./report-bug-btn.png"
function ReportBug(){
    const openForm = () =>{
        console.log(123)
        let element = document.getElementById('report-bug-form')
        if(ReactDOM.findDOMNode(element).style.visibility === "hidden"){
            ReactDOM.findDOMNode(element).style.visibility = "visible"
        }else{
            ReactDOM.findDOMNode(element).style.visibility = "hidden"
        }
    }
    const closeForm = () =>{
        console.log(123)
        let element = document.getElementById('report-bug-form')
        ReactDOM.findDOMNode(element).style.visibility = "hidden"
    }
    return(
        <div>
            <div className="report-bug-form" id='report-bug-form'>
                <div className="naglowek">
                    <h1>Zgłoś błąd</h1>
                    <button onClick={closeForm} className="report-bug-form-close">X</button>
                </div>
                <form className="report-bug-form-body">
                    <div className="bug-input-temat">
                        <label>Temat</label>
                        <input type="text" name="temat" required/>
                        <div className="temat-error"> error</div>
                    </div>
                    <div className="bug-input-zawartosc">
                        <label>Opisz problem</label>
                        <textarea name="zawartosc" required/>
                        <div className="zawartosc-error"> error</div>
                    </div>
                    <div className="bug-submit-button">
                        <input type="submit" value="Prześlij zgłoszenie"/>
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