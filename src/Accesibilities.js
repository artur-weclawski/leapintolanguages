import "./Accesibilities.css"
import ReactDOM from "react-dom";
const openAccesibilities = () =>{
    console.log(123)
    let element = document.getElementById('accesibilities-window')
    if(ReactDOM.findDOMNode(element).style.visibility === "hidden"){
        ReactDOM.findDOMNode(element).style.visibility = "visible"
    }else{
        ReactDOM.findDOMNode(element).style.visibility = "hidden"
    }
}
function Accesibilities() {
    return (
        <div>
            <div className="accesibilities-window" id={"accesibilities-window"}>
                <div className="accesibilities-window-typ">Rozmiar tekstu</div>
                <div className="accesibilities-window-text-size">

                    <div className="accesibilities-windows-text-small">

                    <input type="radio" id="90%" value="90%" name="text" className="radio"/>
                    <label> Small </label>
                    </div>
                    <div className="accesibilities-windows-text-medium">
                        <input type="radio" id="100%" value="100%" name="text" className="radio" checked/>
                        <label> Medium </label>
                    </div>
                    <div className="accesibilities-windows-text-big">
                        <input type="radio" id="120%" value="120%" name="text" className="radio"/>
                        <label > Big </label>
                    </div>
                </div>
                <div className="accesibilities-window-kontrast">Kontrast</div>
                <div className="accesibilities-window-contrast">
                    <div className="accesibilities-windows-contrast-normal">
                        <input type="radio" id="normal" value="normal" name="contrast" className="radio" checked/>
                        <label> A </label>
                    </div>
                    <div className="accesibilities-windows-contrast-yellow">
                        <input type="radio" id="yellow" value="yellow" name="contrast" className="radio"/>
                        <label> A </label>
                    </div>
                    <div className="accesibilities-windows-contrast-black">
                        <input type="radio" id="black" value="black" name="contrast" className="radio"/>
                        <label> A </label>
                    </div>
                </div>
            </div>
            <span className="accesibilities-wrap">
                <div className="accesibilities">
                <button onClick={openAccesibilities} className="accesibilities-btn" value="Dostępności">Dostępności</button>
                </div>
            </span>
        </div>
    );
}

export default Accesibilities