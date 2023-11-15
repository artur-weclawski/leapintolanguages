import './NavBar.css';
import peepo_polska from "./peepo_polska.png"
function LanguageDropdownList(){
    return(
        <div className="dropdown dropdown-language">
            <span className="dropbtn-wrap">
            <button className="dropbtn">
                <div className="language">Polski</div>
                <img className="image" src={peepo_polska}></img>
                <div className="vbtn"> V </div>
            </button>
            </span>
            <span className="dropdown-content-wrap">
            <div className="dropdown-content">
                <a> Polski </a>
                <a> Angielski </a>
                <a> Hiszpański </a>
            </div>
            </span>
        </div>
    );
}
export default LanguageDropdownList