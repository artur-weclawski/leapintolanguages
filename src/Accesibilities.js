import ReactDOM from "react-dom";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
const openAccesibilities = () =>{

    let element = document.getElementsByClassName('accesibilities-window')
    console.log(element)
    if(ReactDOM.findDOMNode(element[1]).style.visibility === "hidden"){
        ReactDOM.findDOMNode(element[0]).style.visibility = 'visible'
        ReactDOM.findDOMNode(element[1]).style.visibility = "visible"
    }else{
        ReactDOM.findDOMNode(element[0]).style.visibility = 'hidden'
        ReactDOM.findDOMNode(element[1]).style.visibility = "hidden"
    }
}

function Accesibilities() {
    const {t, i18n} = useTranslation();

    const changeThemeToNormal=() =>{
        document.documentElement.style.setProperty('--page_color','#ffffff')
        document.documentElement.style.setProperty('--page_background', 'url("https://www.transparenttextures.com/patterns/cream-paper.png")');
        document.documentElement.style.setProperty('--main_color', '#880e23');
        document.documentElement.style.setProperty('--main_border_color', 'none');
        document.documentElement.style.setProperty('--shadow_color', '#ffffff');
        document.documentElement.style.setProperty('--black_box_shadow_color', 'rgba(0, 0, 0, 0.5)');
        document.documentElement.style.setProperty('--form_box_shadow_color', 'rgba(0, 0, 0, 0.2)');
        document.documentElement.style.setProperty('--form_background_color', '#ffffff');
        document.documentElement.style.setProperty('--inside-div_color', '#ffffff');
        document.documentElement.style.setProperty('--inside-div_color_inverse', '#000000');
        document.documentElement.style.setProperty('--a_color', '#000000');
        document.documentElement.style.setProperty('--ribbon_background', 'url("https://www.transparenttextures.com/patterns/snow.png")');
        document.documentElement.style.setProperty('--wrap_drop_shadow_color', 'rgba(21, 1, 1, 0.6)');
        document.documentElement.style.setProperty('--button_hover_border_color_outline', '#ffffff');
        document.documentElement.style.setProperty('--input-focus_background_color', 'rgba(21,1,1,0.1)');
        document.documentElement.style.setProperty('--navbar_border_color', 'rgba(11, 11, 14, 0.9)');
        document.documentElement.style.setProperty('--navbar_box_shadow', '#282c34');
        document.documentElement.style.setProperty('--invert_image', 'none');
        document.documentElement.style.setProperty('--login-register_text_color', '#880e23');
    }
    const changeThemeToYellow = () =>{
        document.documentElement.style.setProperty('--page_color', 'yellow');
        document.documentElement.style.setProperty('--page_background', 'none');
        document.documentElement.style.setProperty('--main_color', 'yellow');
        document.documentElement.style.setProperty('--main_border_color', 'black');
        document.documentElement.style.setProperty('--shadow_color', 'yellow');
        document.documentElement.style.setProperty('--black_box_shadow_color', 'yellow');
        document.documentElement.style.setProperty('--form_box_shadow_color', 'yellow');
        document.documentElement.style.setProperty('--form_background_color', 'yellow');
        document.documentElement.style.setProperty('--inside-div_color', 'black');
        document.documentElement.style.setProperty('--inside-div_color_inverse', 'black');
        document.documentElement.style.setProperty('--a_color', 'yellow');
        document.documentElement.style.setProperty('--ribbon_background', 'none');
        document.documentElement.style.setProperty('--wrap_drop_shadow_color', 'black');
        document.documentElement.style.setProperty('--button_hover_border_color_outline', 'black');
        document.documentElement.style.setProperty('--input-focus_background_color', 'yellow');
        document.documentElement.style.setProperty('--navbar_border_color', 'yellow');
        document.documentElement.style.setProperty('--navbar_box_shadow', 'yellow');
        document.documentElement.style.setProperty('--invert_image', 'invert()');
        document.documentElement.style.setProperty('--login-register_text_color', 'black');
    }
    const changeThemetoBlack = () =>{
        document.documentElement.style.setProperty('--page_color', '#000000');
        document.documentElement.style.setProperty('--page_background', 'none');
        document.documentElement.style.setProperty('--main_color', '#000000');
        document.documentElement.style.setProperty('--main_border_color', '#fff');
        document.documentElement.style.setProperty('--shadow_color', '#000000');
        document.documentElement.style.setProperty('--black_box_shadow_color', '#000000');
        document.documentElement.style.setProperty('--form_box_shadow_color', '#000000');
        document.documentElement.style.setProperty('--form_background_color', '#000000');
        document.documentElement.style.setProperty('--inside-div_color', '#ffffff');
        document.documentElement.style.setProperty('--inside-div_color_inverse', '#fff');
        document.documentElement.style.setProperty('--a_color', '#000000');
        document.documentElement.style.setProperty('--ribbon_background', 'none');
        document.documentElement.style.setProperty('--wrap_drop_shadow_color', '#fff');
        document.documentElement.style.setProperty('--button_hover_border_color_outline', '#ffffff');
        document.documentElement.style.setProperty('--input-focus_background_color', '#000');
        document.documentElement.style.setProperty('--navbar_border_color', '#000');
        document.documentElement.style.setProperty('--navbar_box_shadow', '#000');
        document.documentElement.style.setProperty('--invert_image', 'invert()');
        document.documentElement.style.setProperty('--login-register_text_color', 'white');
    }

    const changeTextToSmall = () => {
        document.documentElement.style.setProperty('--text-scale', '0.9');
    }
    const changeTextToNormal = () => {
        document.documentElement.style.setProperty('--text-scale', '1.0');
    }
    const changeTextToBig = () => {
        document.documentElement.style.setProperty('--text-scale', '1.1');
    }
    const [theme, setTheme] = useState('');
    const [textSize, setTextSize] = useState('');
    useEffect(() => {

        const storedTheme = localStorage.getItem('theme')
        const storedScale = localStorage.getItem('textSize')
        if(storedTheme) setTheme(storedTheme)
        if(storedScale) setTextSize(storedScale)
        if (theme === 'normal' || theme === ''){
            changeThemeToNormal()
        }else if (theme === 'yellow'){
            changeThemeToYellow()
        }else{
            changeThemetoBlack()
        }
        if (textSize === 'normal' || textSize === ''){
            changeTextToNormal()
        }else if (textSize === 'small'){
            changeTextToSmall()
        }else{
            changeTextToBig()
        }
    }, [theme, textSize]);
    const handleChangeTheme = (event) =>{
        const value = event.target.value;
        localStorage.setItem('theme', value)
        setTheme((prevValue)=> (prevValue === value ? '' : value));
    }

    const handleChangeText = (event) =>{
        const value = event.target.value;
        localStorage.setItem('textSize', value)
        setTextSize((prevValue) => (prevValue === value ? '' : value));
    }
    return (
        <div>
            <div className="accesibilities-window accesibilities-window">
                <div className="accesibilities-window-typ">{t('accessibility.fontSize')}</div>
                <div className="accesibilities-window-text-size">

                    <div className="accesibilities-windows-text-small">

                    <input type="radio" id="small" value="small" name="text" className="radio" checked={textSize === 'small'} onChange={handleChangeText}/>
                    <label for="small"> {t('accessibility.sizes.small')} </label>
                    </div>
                    <div className="accesibilities-windows-text-medium">
                        <input type="radio" id="normal" value="normal" name="text" className="radio" checked={textSize === 'normal'} onChange={handleChangeText}/>
                        <label for="normal"> {t('accessibility.sizes.medium')} </label>
                    </div>
                    <div className="accesibilities-windows-text-big">
                        <input type="radio" id="big" value="big" name="text" className="radio" checked={textSize === 'big'} onChange={handleChangeText}/>
                        <label for="big"> {t('accessibility.sizes.big')} </label>
                    </div>
                </div>
                <div className="accesibilities-window-kontrast">{t('accessibility.contrast')}</div>
                <div className="accesibilities-window-contrast">
                    <div className="accesibilities-windows-contrast-normal">
                        <input type="radio" id="normal" value="normal" name="contrast" className="radio" checked={theme === 'normal'} onChange={handleChangeTheme}/>
                        <label for="normal"> A </label>
                    </div>
                    <div className="accesibilities-windows-contrast-yellow">
                        <input type="radio" id="yellow" value="yellow" name="contrast" className="radio" checked={theme === 'yellow'} onChange={handleChangeTheme}/>
                        <label for="yellow"> A </label>
                    </div>
                    <div className="accesibilities-windows-contrast-black">
                        <input type="radio" id="black" value="black" name="contrast" className="radio" checked={theme === 'black'} onChange={handleChangeTheme}/>
                        <label for="black"> A </label>
                    </div>
                </div>
            </div>
            <span className="accesibilities-wrap">
                <div className="accesibilities">
                <button onClick={openAccesibilities} className="accesibilities-btn" value="Dostępności">{t('accessibility.title')}</button>
                </div>
            </span>
        </div>
    );
}

export default Accesibilities