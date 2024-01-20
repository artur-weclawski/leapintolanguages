import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {useLocalStorage} from "../Components/LocalStorage/HandleLocalStorage";
const MobileNavigation = ({routeName, setRouteName, setUser, setToken}) =>{
    const {t, i18n} = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem('i18nextLng'))
    }, []);
    const handleSetLanguage = (lng) =>{
        i18n.changeLanguage(lng)
    }

    const navigation = useNavigate()


    const handleLogOut = () => {
        setToken(null)
        setUser(null)
        navigation("/login")
    }

    if(routeName === 'kurs')
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
                <h2 style={{color: 'white'}}>{t('pageStatus.'+{routeName}.routeName)}</h2>
                <h2 style={{color: 'white'}}>Peepo</h2>
                    <div className="course-progress-beginner">
                        <h2 style={{marginTop: '-50px'}}>{t('coursePage.toolBar.beginner')}</h2>
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
                <h2 style={{color:'white'}}> {t('NavBar.chooseLanguage')} </h2>
                    <span style={{display:'flex', borderBottom:'2px solid white', marginTop:'-15px'}}>
                <a onClick={() => {handleSetLanguage('pl')}}> {t('NavBar.localization.polish')} </a>
                <a onClick={() => {handleSetLanguage('en')}}> {t('NavBar.localization.english')} </a>
                <a onClick={() => {handleSetLanguage('es')}}> {t('NavBar.localization.spanish')} </a>
                    </span>
                <Link to="/account"> {t('NavBar.account')} </Link>
                <Link to="/choosecourse"> {t('NavBar.courses')} </Link>
                <Link to="/knowledgeBase"> {t('NavBar.knowledgeBase')}</Link>
                <a style={{marginBottom:'50px'}} onClick={() => {handleLogOut()}}> {t('NavBar.logout')} </a>
            </div>
            </span>
                </div>
            </div>
        );
    }else if(routeName === 'bazaWiedzy'){
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
                <h2 style={{color: 'white'}}>{t('pageStatus.'+{routeName}.routeName)}</h2>
                <h2 style={{color: 'white'}}>Peepo</h2>
                    <div className="left-contents">
                    <ul className="left-contents-ul">
                        <li><a href="#Polskim" style={{marginTop:'-20px'}}>{t('knowledgeBasePage.polish.title')}</a>
                        <ul>
                            <li><a href="#Polski-Pierwszem">I</a></li>
                            <li><a href="#Polski-Drugiem">II</a></li>
                            <li><a href="#Polski-Trzeciem">III</a></li>
                        </ul>
                        </li>
                        <li><a href="#Angielskim">{t('knowledgeBasePage.english.title')}</a>
                        <ul>
                            <li><a href="#Angielski-Pierwszem">I</a></li>
                            <li><a href="#Angielski-Drugiem">II</a></li>
                            <li><a href="#Angielski-Trzeciem">III</a></li>
                        </ul>
                        </li>
                        <li><a href="#Hiszpanskim">{t('knowledgeBasePage.spanish.title')}</a>
                        <ul>
                            <li><a href="#Hiszpanski-Pierwszem">I</a></li>
                            <li><a href="#Hiszpanski-Drugiem">II</a></li>
                            <li><a href="#Hiszpanski-Trzeciem">III</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
                <h2 style={{color:'white'}}> {t('NavBar.chooseLanguage')} </h2>
                    <span style={{display:'flex', borderBottom:'2px solid white', marginTop:'-15px'}}>
                <a onClick={() => {handleSetLanguage('pl')}}> {t('knowledgeBasePage.polish.title')} </a>
                <a onClick={() => {handleSetLanguage('en')}}> {t('knowledgeBasePage.english.title')} </a>
                <a onClick={() => {handleSetLanguage('es')}}> {t('knowledgeBasePage.spanish.title')} </a>
                    </span>
                <Link to="/account"> {t('NavBar.account')} </Link>
                <Link to="/choosecourse"> {t('NavBar.courses')} </Link>
                <Link to="/knowledgeBase"> {t('NavBar.knowledgeBase')}</Link>
                <a style={{marginBottom:'50px'}} onClick={() => {handleLogOut()}}> {t('NavBar.logout')} </a>
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
                <h2 style={{color: 'white'}}>{t('pageStatus.'+{routeName}.routeName)}</h2>
                <h2 style={{color: 'white'}}>Peepo</h2>
                <h2 style={{color:'white'}}> {t('NavBar.chooseLanguage')} </h2>
                    <span style={{display:'flex', borderBottom:'2px solid white', marginTop:'-15px'}}>
                        <a onClick={() => {handleSetLanguage('pl')}}> {t('NavBar.localization.polish')} </a>
                        <a onClick={() => {handleSetLanguage('en')}}> {t('NavBar.localization.english')} </a>
                        <a onClick={() => {handleSetLanguage('es')}}> {t('NavBar.localization.spanish')} </a>
                    </span>
                <Link to="/account"> {t('NavBar.account')} </Link>
                <Link to="/choosecourse"> {t('NavBar.courses')} </Link>
                <Link to="/knowledgeBase"> {t('NavBar.knowledgeBase')}</Link>
                <a style={{marginBottom:'50px'}} onClick={() => {handleLogOut()}}> {t('NavBar.logout')} </a>
            </div>
            </span>
                </div>
            </div>
        );
    }


}
export default MobileNavigation