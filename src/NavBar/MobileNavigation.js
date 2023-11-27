import './NavBar.css'
import peepo_polska from "./peepo_polska.png";
import ReactDOM from "react-dom";
const MobileNavigation = ({routeName, setRouteName}) =>{
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
                <h2 style={{color:'white'}}> Wybór języka </h2>
                    <span style={{display:'flex', borderBottom:'2px solid white', marginTop:'-15px'}}>
                <a> Polski </a>
                <a> Angielski </a>
                <a> Hiszpański </a>
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
                        <li><a href="#Polski" style={{marginTop:'-20px'}}>Polski</a>
                        <ul>
                            <li><a href="#Polski-Pierwsze">Pierwsze</a></li>
                            <li><a href="#Polski-Drugie">Drugie</a></li>
                            <li><a href="#Polski-Trzecie">Trzecie</a></li>
                        </ul>
                        </li>
                        <li><a href="#Angielski">Angielski</a>
                        <ul>
                            <li><a href="#Angielski-Pierwsze">First</a></li>
                            <li><a href="#Angielski-Drugie">Second</a></li>
                            <li><a href="#Angielski-Trzecie">Third</a></li>
                        </ul>
                        </li>
                        <li><a href="#Hiszpanski">Hiszpański</a>
                        <ul>
                            <li><a href="#Hiszpanski-Pierwsze">Primo</a></li>
                            <li><a href="#Hiszpanski-Drugie">Drugie Primo</a></li>
                            <li><a href="#Hiszpanski-Trzecie">Trzecie Primo</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
                <h2 style={{color:'white'}}> Wybór języka </h2>
                    <span style={{display:'flex', borderBottom:'2px solid white', marginTop:'-15px'}}>
                <a> Polski </a>
                <a> Angielski </a>
                <a> Hiszpański </a>
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
                    <div className="course-progress-beginner" style={{display:'none'}}>
                        <h2 style={{marginTop: '-50px'}}>Początkujacy</h2>
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
                    <div className="course-progress-medium" style={{display:'none'}}>
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
                    <div className="course-progress-advanced" style={{display:'none'}}>
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
                <h2 style={{color:'white'}}> Wybór języka </h2>
                    <span style={{display:'flex', borderBottom:'2px solid white', marginTop:'-15px'}}>
                <a> Polski </a>
                <a> Angielski </a>
                <a> Hiszpański </a>
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
    }


}
export default MobileNavigation