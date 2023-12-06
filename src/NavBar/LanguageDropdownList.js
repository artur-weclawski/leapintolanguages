import {useTranslation} from "react-i18next";
import {useContext, useEffect, useState} from "react";

const LanguageDropdownList = () => {
    const {t, i18n} = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem('i18nextLng'))
    }, []);
    const handleSetLanguage = (lng) =>{
        i18n.changeLanguage(lng)
    }
    return(
        <div className="dropdown dropdown-language">
            <span className="dropbtn-wrap">
            <button className="dropbtn">
                <div className="language">{t('NavBar.localization.language')}</div>
                <div className="vbtn"> V </div>
            </button>
            </span>
            <span className="dropdown-content-wrap">
            <div className="dropdown-content">
                <a onClick={() => {handleSetLanguage('pl')}}> {t('NavBar.localization.polish')} </a>
                <a onClick={() => {handleSetLanguage('en')}}> {t('NavBar.localization.english')} </a>
                <a onClick={() => {handleSetLanguage('es')}}> {t('NavBar.localization.spanish')} </a>
            </div>
            </span>
        </div>
    );
}
export default LanguageDropdownList