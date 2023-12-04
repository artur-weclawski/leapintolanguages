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
                <div className="language">Polski</div>
                <div className="vbtn"> V </div>
            </button>
            </span>
            <span className="dropdown-content-wrap">
            <div className="dropdown-content">
                <a onClick={() => {handleSetLanguage('pl')}}> Polski </a>
                <a onClick={() => {handleSetLanguage('en')}}> Angielski </a>
                <a onClick={() => {handleSetLanguage('es')}}> Hiszpański </a>
            </div>
            </span>
        </div>
    );
}
export default LanguageDropdownList