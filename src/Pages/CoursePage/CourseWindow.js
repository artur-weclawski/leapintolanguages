import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import "./CoursePage.css"
import fridge_img from "./fridge-img.webp"
function CourseWindow(){
    const readImage = () =>{
        const msg = new SpeechSynthesisUtterance()
        msg.text = "Fridge"
        window.speechSynthesis.speak(msg)
    }
    const imageContent = () =>{
        return(
            <div className="image-content">
                <div className="image-and-info">
                    <img src={fridge_img} title="fridge" alt="fridge" className="image"/>
                    <div className="info">
                        <h2>Nazwij obiekt znajdujący się na obrazku po angielsku.</h2>
                        <button onClick={readImage}><img src="https://upload.wikimedia.org/wikipedia/commons/archive/2/21/20060623063418%21Speaker_Icon.svg"/></button>
                        <div className="username-error">error</div>
                    </div>

                </div>
                <span className="image-content-form-btn-wrap">
                    <form className="image-content-form">
                        <div className="image-content-input">
                            <input type="text" name="answer" placeholder="Wprowadź odpowiedź" required/>
                        </div>
                        <div className="image-content-submit-button">
                            <input type="submit" value="Przejdź dalej"/>
                        </div>
                    </form>
                </span>

            </div>
        )
    }
    return(
        <div className="course-window">
            <div className="left-section">
                <ReportBug/>
                <Accesibilities/>
            </div>
            <div className="right-section">
                {imageContent()}
            </div>
        </div>
    )
}
export default CourseWindow