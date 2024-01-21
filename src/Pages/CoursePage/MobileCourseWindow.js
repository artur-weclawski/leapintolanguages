import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import loginWindow from "../LoginPage/LoginWindow";
function MobileCourseWindow({currentTask, handleCheckTask, error}){
    const [selectedRadio, setSelectedRadio] = useState('');
    const [puzzleAnswer, setPuzzleAnswer] = useState('')
    const [buttons, setButtons] = useState([]);
    const {t, i18n} = useTranslation();

    const navigate = useNavigate()

    useEffect(() => {
        if(currentTask.type === 'ukladanka') {
            const shuffleButtons = (sentence_to_translate, sentence) => {
                let arrayOfWords = sentence.split(' ');
                for (let i = arrayOfWords.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [arrayOfWords[i], arrayOfWords[j]] = [arrayOfWords[j], arrayOfWords[i]];
                }
                return arrayOfWords
            }

            setButtons(shuffleButtons(currentTask.question, currentTask.answer));
        }
    }, []);

    const puzzleContent = () =>{

        const handleSubmit = (event) => {
            event.preventDefault()
            handleCheckTask(puzzleAnswer.trim())
        }
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
                                <button className='puzzle-button'
                                        key={index} name={word} value={word}
                                        onClick={() => handlePuzzleButton(word)}>{word}</button>)
                        })}
                    </div>
                    <button className='puzzle-reset-button'
                            onClick={handleResetButton}>{t('coursePage.toolBar.reset')}</button>
                    <input className='puzzle-answer' value={puzzleAnswer} disabled/>
                </div>
            )
        }
        return(
            <div className="puzzle-content">
                <div className="puzzle-and-info">
                    {generatePuzzle(currentTask.question)}
                    <div className="info">
                        <h2>{t('coursePage.toolBar.uporzadkuj')}</h2>
                        <div className="username-error">{error}</div>
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
        const readImage = () => {
            const msg = new SpeechSynthesisUtterance()
            msg.text = currentTask.question
            window.speechSynthesis.speak(msg)
        }
        const readAnswer = (event) => {
            event.preventDefault()
            handleCheckTask(event.target.answer.value)
        }
        return(
            <div className="image-content">
                <div className="image-and-info">
                    <img src={currentTask.pictureUrl} title={currentTask.question} alt={currentTask.question} className="image"/>
                    <div className="info">
                        <h2>{t('coursePage.toolBar.nazwijObiekt')}</h2>
                        <button onClick={readImage}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/archive/2/21/20060623063418%21Speaker_Icon.svg" alt="sadas"/></button>
                        <div className="username-error">{error}</div>
                    </div>

                </div>
                <span className="image-content-form-btn-wrap">
                    <form className="image-content-form" onSubmit={readAnswer}>
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
        const handleSubmit = (event) => {
            event.preventDefault()
            handleCheckTask(event.target.answer.value)
        }
        const readImage = () => {
            const msg = new SpeechSynthesisUtterance()
            msg.text = currentTask.question
            window.speechSynthesis.speak(msg)
        }
        return(
            <div className="listen-content">
                <div className="listen-and-info">
                    <button onClick={readImage}><img src="https://upload.wikimedia.org/wikipedia/commons/archive/2/21/20060623063418%21Speaker_Icon.svg" alt="sadada"/></button>
                    <div className="info">
                        <h2>{t('coursePage.listen.listenInfo')}</h2>
                        <div className="username-error">{error}</div>
                    </div>

                </div>
                <span className="image-content-form-btn-wrap">
                    <form className="image-content-form" onSubmit={handleSubmit}>
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
            handleCheckTask(selectedRadio)
        };
        const handleRadioChange = (event) => {
            setSelectedRadio(event.target.value);
        };
        return(
            <div className="image-content">
                <div className="radio-and-info">
                    <div className="radios">
                        <h2>{currentTask.question}</h2>
                        <div className="accesibilities-windows-text-medium">
                            <input type="radio" id="0" value={currentTask.possible_answer[0]} name="course-radios"
                                   className="radio" onChange={handleRadioChange}/>
                            <label for="0">{currentTask.possible_answer[0]}</label>
                        </div>
                        <div className="accesibilities-windows-text-medium" style={{marginTop: 10 + 'px'}}>
                            <input type="radio" id="1" value={currentTask.possible_answer[1]} name="course-radios"
                                   className="radio" onChange={handleRadioChange}/>
                            <label for="1">{currentTask.possible_answer[1]}</label>
                        </div>
                        <div className="accesibilities-windows-text-medium" style={{marginTop: 10 + 'px'}}>
                            <input type="radio" id="2" value={currentTask.possible_answer[2]} name="course-radios"
                                   className="radio" onChange={handleRadioChange}/>
                            <label for="2">{currentTask.possible_answer[2]}</label>
                        </div>
                        <div className="accesibilities-windows-text-medium" style={{marginTop: 10 + 'px'}}>
                            <input type="radio" id="3" value={currentTask.possible_answer[3]} name="course-radios"
                                   className="radio" onChange={handleRadioChange}/>
                            <label for="3">{currentTask.possible_answer[3]}</label>
                        </div>
                    </div>
                    <div className="info">
                        <h2>{t('coursePage.radio.radioChoose')}</h2>
                        <div className="username-error">{error}</div>
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
    if (currentTask === undefined) {
        currentTask = {type: null}
    }

    console.log(currentTask)
    return(
     <div className="mobile-course-window">
         <div className="mobile-section">
             {
                 currentTask.type === null ?
                     window.location.replace("/account")
                  :
                     currentTask.type === 'obraz' ? imageContent() :
                         currentTask.type === 'radius' ? radioContent() :
                             currentTask.type === 'sluchanie' ? listeningContent() :
                                 currentTask.type === 'ukladanka' ? puzzleContent() : null
             }
         </div>
        <ReportBug/>
         <Accesibilities/>
     </div>
    )
}
export default MobileCourseWindow