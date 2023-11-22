import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import "./CoursePage.css"
import fridge_img from "./fridge-img.webp"
import {useEffect, useState} from "react";
function CourseWindow(){
    const [selectedRadio, setSelectedRadio] = useState('');
    const [puzzleAnswer, setPuzzleAnswer] = useState('')
    const [buttons, setButtons] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Utworzone zdanie:',puzzleAnswer.trim());

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

    useEffect(() => {
        setButtons(shuffleButtons('Ala ma kurewsko dużego kota.', 'Ala has a fucking big cat.'));
    }, []);
    const shuffleButtons = (sentence_to_translate,sentence) =>{
        let arrayOfWords = sentence.split(' ');
        for (let i = arrayOfWords.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrayOfWords[i], arrayOfWords[j]] = [arrayOfWords[j], arrayOfWords[i]];
        }
        return arrayOfWords
    }
    const puzzleContent = () =>{
        function handlePuzzleButton(word){
            setPuzzleAnswer(puzzleAnswer + ' ' + word)
        }
        function handleResetButton(){
            setPuzzleAnswer('')
        }
        const generatePuzzle = (sentence_to_translate) =>{

            return(
                <div className="puzzle">
                    <h2>{sentence_to_translate}</h2>
                    <div className='puzzle-buttons'>
                    {buttons.map((word, index)=>{
                        return(
                      <button className='puzzle-button' key={index} name={word} value={word} onClick={() => handlePuzzleButton(word)}>{word}</button>)
                    })}
                    </div>
                    <button className='puzzle-reset-button' onClick={handleResetButton}>Reset</button>
                    <input className='puzzle-answer' value={puzzleAnswer} disabled/>
                </div>
            )
        }
        return(
            <div className="puzzle-content">
                <div className="puzzle-and-info">
                    {generatePuzzle("Ala ma kota kurewsko dużego kota.")}
                    <div className="info">
                        <h2>Uporządkuj słowa w odpowiedniej kolejności.</h2>
                        <div className="username-error">error</div>
                    </div>

                </div>
                <span className="image-content-form-btn-wrap">
                    <form className="image-content-form" onSubmit={handleSubmit}>
                        <div className="image-content-input" style={{visibility: "hidden"}}>
                        </div>
                        <input type="hidden" name="puzzleAnswer" value={puzzleAnswer.trim()}/>
                        <div className="image-content-submit-button">
                            <input type="submit" value="Przejdź dalej"/>
                        </div>
                    </form>
                </span>
            </div>
        )
    }

    const imageContent = () =>{
        const readImage = () =>{
            const msg = new SpeechSynthesisUtterance()
            msg.text = "Fridge"
            window.speechSynthesis.speak(msg)
        }
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
                <span className="course-progress-wrap">
                <div className="course-progress">
                    <div className="course-progress-beginner">
                        <h2>Początkujacy</h2>
                        <div className="progresses">
                            <div className="progress-images">
                                <h4>Obrazki</h4>
                                <div className="beginner-progress-images"><div
                                    className="beginner-progress-images-bar"></div></div>
                            </div>
                            <div className="progress-puzzle">
                                <h4>Układanki</h4>
                                <div className="beginner-progress-puzzle"><div
                                    className="beginner-progress-puzzle-bar"></div></div>
                            </div>
                            <div className="progress-sentences">
                                <h4>Zdania</h4>
                                <div className="beginner-progress-sentences"><div
                                    className="beginner-progress-sentences-bar"></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="course-progress-medium">
                        <h2>Średni</h2>
                        <div className="progresses">
                            <div className="progress-images">
                                <h4>Obrazki</h4>
                                <div className="medium-progress-images"><div
                                    className="medium-progress-images-bar"></div></div>
                            </div>
                            <div className="progress-puzzle">
                                <h4>Układanki</h4>
                                <div className="medium-progress-puzzle"><div
                                    className="medium-progress-puzzle-bar"></div></div>
                            </div>
                            <div className="progress-sentences">
                                <h4>Zdania</h4>
                                <div className="medium-progress-sentences"><div
                                    className="medium-progress-sentences-bar"></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="course-progress-advanced">
                        <h2>Zaawansowany</h2>
                        <div className="progresses">
                            <div className="progress-images">
                                <h4>Obrazki</h4>
                                <div className="advanced-progress-images"><div
                                    className="advanced-progress-images-bar"></div></div>
                            </div>
                            <div className="progress-puzzle">
                                <h4>Układanki</h4>
                                <div className="advanced-progress-puzzle"><div
                                    className="advanced-progress-puzzle-bar"></div></div>
                            </div>
                            <div className="progress-sentences">
                                <h4>Zdania</h4>
                                <div className="advanced-progress-sentences"><div
                                    className="advanced-progress-sentences-bar"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
                </span>
            </div>
            <div className="right-section">
                {/*{imageContent()}*/}
                {/*{radioContent()}*/}
                {puzzleContent()}
            </div>
        </div>
    )
}
export default CourseWindow