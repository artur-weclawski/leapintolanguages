import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
const MobileNavigation = ({routeName, setRouteName}) =>{
    const {t, i18n} = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem('i18nextLng'))
    }, []);
    const handleSetLanguage = (lng) =>{
        i18n.changeLanguage(lng)
    }
    if(routeName === 'Kurs')
    {
        return(
            <div className="mobile-navigation">
                <div className="dropdown dropdown-language">
            <span className="dropbtn-wrap">
            <button className="dropbtn">
                <h1>Leap into languages</h1>
            </button>
            </span>
                    <span className="dropdown-content-wrap">
            <div className="dropdown-content">
                <h2 style={{color: 'white'}}>{routeName}</h2>
                    <div className="course-progress-beginner">
                        <h2 style={{marginTop: '-50px'}}>Początkujacy</h2>
                        <div className="progresses">
                            <div className="progress-images">
                                <h4>Obrazki</h4>
                                <div className="beginner-progress-images"><div
                                    className="beginner-progress-images-bar"></div></div>
                            </div>
                            <div className="progress-radio">
                                <h4>Uzupełnianie</h4>
                                <div className="beginner-progress-radio"><div
                                    className="beginner-progress-radio-bar"></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="course-progress-medium">
                        <h2>Średni</h2>
                        <div className="progresses">
                            <div className="progress-radio">
                                <h4>Uzupełnianie</h4>
                                <div className="medium-progress-radio"><div
                                    className="medium-progress-radio-bar"></div></div>
                            </div>
                            <div className="progress-puzzle">
                                <h4>Układanki</h4>
                                <div className="medium-progress-puzzle"><div
                                    className="medium-progress-puzzle-bar"></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="course-progress-advanced">
                        <h2>Zaawansowany</h2>
                        <div className="progresses">
                            <div className="progress-puzzle">
                                <h4>Układanki</h4>
                                <div className="advanced-progress-puzzle"><div
                                    className="advanced-progress-puzzle-bar"></div></div>
                            </div>
                            <div className="progress-sentences">
                                <h4>Słuchanie</h4>
                                <div className="advanced-progress-sentences"><div
                                    className="advanced-progress-sentences-bar"></div></div>
                            </div>
                        </div>
                    </div>
                <h2 style={{color:'white'}}> Wybór języka </h2>
                    <span style={{display:'flex', borderBottom:'2px solid white', marginTop:'-15px'}}>
                <a onClick={() => {handleSetLanguage('pl')}}> Polski </a>
                <a onClick={() => {handleSetLanguage('en')}}> Angielski </a>
                <a onClick={() => {handleSetLanguage('es')}}> Hiszpański </a>
                    </span>
                <a> Konto </a>
                <a> Kursy </a>
                <a> Baza wiedzy </a>
                <a style={{marginBottom:'50px'}}> Wyloguj się </a>
            </div>
            </span>
                </div>
            </div>
        );
    }else if(routeName === 'Baza wiedzy'){
        return(
            <div className="mobile-navigation">
                <div className="dropdown dropdown-language">
            <span className="dropbtn-wrap">
            <button className="dropbtn">
                <h1>Leap into languages</h1>
            </button>
            </span>
                    <span className="dropdown-content-wrap">
            <div className="dropdown-content">
                <h2 style={{color: 'white'}}>{routeName}</h2>
                    <div className="left-contents">
                    <ul className="left-contents-ul">
                        <li><a href="#Polskim" style={{marginTop:'-20px'}}>Polski</a>
                        <ul>
                            <li><a href="#Polski-Pierwszem">Pierwsze</a></li>
                            <li><a href="#Polski-Drugiem">Drugie</a></li>
                            <li><a href="#Polski-Trzeciem">Trzecie</a></li>
                        </ul>
                        </li>
                        <li><a href="#Angielskim">Angielski</a>
                        <ul>
                            <li><a href="#Angielski-Pierwszem">First</a></li>
                            <li><a href="#Angielski-Drugiem">Second</a></li>
                            <li><a href="#Angielski-Trzeciem">Third</a></li>
                        </ul>
                        </li>
                        <li><a href="#Hiszpanskim">Hiszpański</a>
                        <ul>
                            <li><a href="#Hiszpanski-Pierwszem">Primo</a></li>
                            <li><a href="#Hiszpanski-Drugiem">Drugie Primo</a></li>
                            <li><a href="#Hiszpanski-Trzeciem">Trzecie Primo</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
                <h2 style={{color:'white'}}> Wybór języka </h2>
                    <span style={{display:'flex', borderBottom:'2px solid white', marginTop:'-15px'}}>
                <a onClick={() => {handleSetLanguage('pl')}}> Polski </a>
                <a onClick={() => {handleSetLanguage('en')}}> Angielski </a>
                <a onClick={() => {handleSetLanguage('es')}}> Hiszpański </a>
                    </span>
                <Link to="/account"> Konto </Link>
                <Link to="/choosecourse"> Kursy </Link>
                <Link to="/knowledgeBase"> Baza wiedzy</Link>
                <a style={{marginBottom:'50px'}}> Wyloguj się </a>
            </div>
            </span>
                </div>
            </div>
        );
    } else{
        return(
            <div className="mobile-navigation">
                <div className="dropdown dropdown-language">
            <span className="dropbtn-wrap">
            <button className="dropbtn">
                <h1>Leap into languages</h1>
            </button>
            </span>
                    <span className="dropdown-content-wrap">
            <div className="dropdown-content">
                <h2 style={{color: 'white'}}>{routeName}</h2>

                <h2 style={{color:'white'}}> Wybór języka </h2>
                    <span style={{display:'flex', borderBottom:'2px solid white', marginTop:'-15px'}}>
                        <a onClick={() => {handleSetLanguage('pl')}}> Polski </a>
                        <a onClick={() => {handleSetLanguage('en')}}> Angielski </a>
                        <a onClick={() => {handleSetLanguage('es')}}> Hiszpański </a>
                    </span>
                <Link to="/account"> Konto </Link>
                <Link to="/choosecourse"> Kursy </Link>
                <Link to="/knowledgeBase"> Baza wiedzy</Link>
                <a style={{marginBottom:'50px'}}> Wyloguj się </a>
            </div>
            </span>
                </div>
            </div>
        );
    }


}
export default MobileNavigation