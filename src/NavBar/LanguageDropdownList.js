import './NavBar.css';
function LanguageDropdownList(){
    return(
        <div className="dropdown">
            <button class="dropbtn">
                <div className="language">Jezyk</div>
                <div className="image">[img]</div>
                <div className="vbtn"> V </div>
            </button>
            <div className="dropdown-content">
                <a> Jezyk 1 </a>
                <a> Jezyk 2 </a>
                <a> Jezyk 3 </a>
            </div>
        </div>
    );
}
export default LanguageDropdownList