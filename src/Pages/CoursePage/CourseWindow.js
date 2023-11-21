import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import "./CoursePage.css"
import fridge_img from "./fridge-img.webp"
import {useState} from "react";
function CourseWindow(){
    const readImage = () =>{
        const msg = new SpeechSynthesisUtterance()
        msg.text = "Fridge"
        window.speechSynthesis.speak(msg)
    }
    const [selectedRadio, setSelectedRadio] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        // Tutaj możesz wykorzystać wartość selectedRadio według potrzeb
        console.log('Wybrany radio button:', selectedRadio);

        // Przykład: Wysłanie danych do serwera
        // fetch('/przykladowy_serwer', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ selectedRadio }),
        // })
        // .then(response => response.json())
        // .then(data => console.log('Odpowiedź serwera:', data));

        // Jeśli chcesz przekazać dane do rodzica, możesz użyć callbacka przekazywanego jako props
        // this.props.onSubmitForm({ selectedRadio });
    };
    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
    };
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
    const radioContent = () =>{
        return(
            <div className="image-content">
                <div className="radio-and-info">
                    <div className="radios">
                        <h2>You ___ special.</h2>
                        <div className="accesibilities-windows-text-medium">
                            <input type="radio" id="A" value="A" name="course-radios" className="radio" onChange={handleRadioChange}/>
                            <label> are </label>
                        </div>
                        <div className="accesibilities-windows-text-medium" style={{marginTop: 10 + 'px'}}>
                            <input type="radio" id="B" value="B" name="course-radios" className="radio" onChange={handleRadioChange}/>
                            <label> is </label>
                        </div>
                        <div className="accesibilities-windows-text-medium" style={{marginTop: 10 + 'px'}}>
                            <input type="radio" id="C" value="C" name="course-radios" className="radio" onChange={handleRadioChange}/>
                            <label> be </label>
                        </div>
                        <div className="accesibilities-windows-text-medium" style={{marginTop: 10 + 'px'}}>
                            <input type="radio" id="D" value="D" name="course-radios" className="radio" onChange={handleRadioChange}/>
                            <label> to be </label>
                        </div>
                    </div>
                    <div className="info">
                        <h2>Wybierz właściwą odpowiedź</h2>
                        <div className="username-error">error</div>
                    </div>

                </div>
                <span className="image-content-form-btn-wrap">
                    <form className="image-content-form" onSubmit={handleSubmit}>
                        <div className="image-content-input" style={{visibility: "hidden"}}>
                        </div>
                        <input type="hidden" name="selectedRadio" value={selectedRadio}/>
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
                {/*{imageContent()}*/}
                {radioContent()}
            </div>
        </div>
    )
}
export default CourseWindow