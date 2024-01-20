import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import fridge_img from "./fridge-img.webp"
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import TaskHook from "../../Components/Hooks/TaskHook";
function CourseWindow({token, user, currentTask, handleCheckTask, error}){


    const [selectedRadio, setSelectedRadio] = useState('');
    const [puzzleAnswer, setPuzzleAnswer] = useState('')
    const [buttons, setButtons] = useState([])
    const {t, i18n} = useTranslation();
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
                    <button className='puzzle-reset-button' onClick={handleResetButton}>{t('coursePage.toolBar.reset')}</button>
                    <input className='puzzle-answer' value={puzzleAnswer} disabled/>
                </div>
            )
        }
        return(
            <div className="puzzle-content">
                <div className="puzzle-and-info">
                    {generatePuzzle("Ala ma kota kurewsko dużego kota.")}
                    <div className="info">
                        <h2>{t('coursePage.toolBar.uporzadkuj')}</h2>
                        <div className="username-error">error</div>
                    </div>

                </div>
                <span className="image-content-form-btn-wrap">
                    <form className="image-content-form" onSubmit={handleSubmit}>
                        <div className="image-content-input" style={{visibility: "hidden"}}>
                        </div>
                        <input type="hidden" name="puzzleAnswer" value={puzzleAnswer.trim()}/>
                        <div className="image-content-submit-button">
                            <input type="submit" value={t('coursePage.toolBar.przejdzDalej')}/>
                        </div>
                    </form>
                </span>
            </div>
        )
    }

    const imageContent = () =>{
        const readImage = () =>{
            const msg = new SpeechSynthesisUtterance()
            msg.text = currentTask.question
            window.speechSynthesis.speak(msg)
        }
        return(
            <div className="image-content">
                <div className="image-and-info">
                    <img src={currentTask.pictureUrl} title={currentTask.question} alt={currentTask.question} className="image"/>
                    <div className="info">
                        <h2>{t('coursePage.toolBar.nazwijObiekt')}</h2>
                        <button onClick={readImage}><img src="https://upload.wikimedia.org/wikipedia/commons/archive/2/21/20060623063418%21Speaker_Icon.svg" alt="asdsad"/></button>
                        <div className="username-error">{error}</div>
                    </div>

                </div>
                <span className="image-content-form-btn-wrap">
                    <form className="image-content-form" onSubmit={handleCheckTask}>
                        <div className="image-content-input">
                            <input type="text" name="answer" placeholder={t('coursePage.radio.radioChoose')} required/>
                        </div>
                        <div className="image-content-submit-button">
                            <input type="submit" value={t('coursePage.toolBar.przejdzDalej')}/>
                        </div>
                    </form>
                </span>
            </div>
        )
    }
    const listeningContent = () =>{
        const readImage = () =>{
            const msg = new SpeechSynthesisUtterance()
            msg.text = "There is no evidence that the famous painter knew."
            window.speechSynthesis.speak(msg)
        }
        return(
            <div className="listen-content">
                <div className="listen-and-info">
                    <button onClick={readImage}><img src="https://upload.wikimedia.org/wikipedia/commons/archive/2/21/20060623063418%21Speaker_Icon.svg" alt="sadsada"/></button>
                    <div className="info">
                        <h2>{t('coursePage.listen.listenInfo')}</h2>
                        <div className="username-error">error</div>
                    </div>

                </div>
                <span className="image-content-form-btn-wrap">
                    <form className="image-content-form">
                        <div className="image-content-input">
                            <input type="text" name="answer" placeholder={t('coursePage.radio.radioChoose')} required/>
                        </div>
                        <div className="image-content-submit-button">
                            <input type="submit" value={t('coursePage.toolBar.przejdzDalej')}/>
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
                            <label for="A"> are </label>
                        </div>
                        <div className="accesibilities-windows-text-medium" style={{marginTop: 10 + 'px'}}>
                            <input type="radio" id="B" value="B" name="course-radios" className="radio" onChange={handleRadioChange}/>
                            <label for="B"> is </label>
                        </div>
                        <div className="accesibilities-windows-text-medium" style={{marginTop: 10 + 'px'}}>
                            <input type="radio" id="C" value="C" name="course-radios" className="radio" onChange={handleRadioChange}/>
                            <label for="C"> be </label>
                        </div>
                        <div className="accesibilities-windows-text-medium" style={{marginTop: 10 + 'px'}}>
                            <input type="radio" id="D" value="D" name="course-radios" className="radio" onChange={handleRadioChange}/>
                            <label for="D"> to be </label>
                        </div>
                    </div>
                    <div className="info">
                        <h2>{t('coursePage.radio.radioChoose')}</h2>
                        <div className="username-error">error</div>
                    </div>

                </div>
                <span className="image-content-form-btn-wrap">
                    <form className="image-content-form" onSubmit={handleSubmit}>
                        <div className="image-content-input" style={{visibility: "hidden"}}>
                        </div>
                        <input type="hidden" name="selectedRadio" value={selectedRadio}/>
                        <div className="image-content-submit-button">
                            <input type="submit" value={t('coursePage.toolBar.przejdzDalej')}/>
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
                        <h2>{t('coursePage.toolBar.beginner')}</h2>
                        <div className="progresses">
                            <div className="progress-images">
                                <h4>{t('coursePage.toolBar.images')}</h4>
                                <div className="beginner-progress-images"><div
                                    className="beginner-progress-images-bar"></div></div>
                            </div>
                            <div className="progress-radio">
                                <h4>{t('coursePage.toolBar.radio')}</h4>
                                <div className="beginner-progress-radio"><div
                                    className="beginner-progress-radio-bar"></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="course-progress-medium">
                        <h2>{t('coursePage.toolBar.medium')}</h2>
                        <div className="progresses">
                            <div className="progress-radio">
                                <h4>{t('coursePage.toolBar.radio')}</h4>
                                <div className="medium-progress-radio"><div
                                    className="medium-progress-radio-bar"></div></div>
                            </div>
                            <div className="progress-puzzle">
                                <h4>{t('coursePage.toolBar.puzzle')}</h4>
                                <div className="medium-progress-puzzle"><div
                                    className="medium-progress-puzzle-bar"></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="course-progress-advanced">
                        <h2>{t('coursePage.toolBar.advanced')}</h2>
                        <div className="progresses">
                            <div className="progress-puzzle">
                                <h4>{t('coursePage.toolBar.puzzle')}</h4>
                                <div className="advanced-progress-puzzle"><div
                                    className="advanced-progress-puzzle-bar"></div></div>
                            </div>
                            <div className="progress-sentences">
                                <h4>{t('coursePage.toolBar.sentences')}</h4>
                                <div className="advanced-progress-sentences"><div
                                    className="advanced-progress-sentences-bar"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
                </span>
            </div>
            <div className="right-section">
                {imageContent()}
                {/*{radioContent()}*/}
                {/*{puzzleContent()}*/}
                {/*{listeningContent()}*/}
                {/*{currentTask.type === 'obraz' ? imageContent() : null}*/}
                {/*{currentTask.type === 'radio' ? radioContent() : null}*/}
                {/*{currentTask.type === 'listening' ? listeningContent() : null}*/}
                {/*{currentTask.type === 'puzzle' ? puzzleContent() : null}*/}
                {/*{currentTask === null ? imageContent() : null}*/}
            </div>
        </div>
    )
}
export default CourseWindow