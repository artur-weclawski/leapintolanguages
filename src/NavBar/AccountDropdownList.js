import peepo_profile from "./pepe_profile.webp"
function AccountDropdownList(){
    return(
        <div className="dropdown dropdown-account">
            <span className="dropbtn-wrap">
            <button className="dropbtn">
                <div className="account-name">Peepo</div>
                <img className="image" src={peepo_profile}></img>
                <div className="vbtn"> V </div>
            </button>
            </span>
            <span className="dropdown-content-wrap">
            <div className="dropdown-content">
                <a> Konto </a>
                <a> Kursy </a>
                <a> Baza wiedzy </a>
                <a> Wyloguj się </a>
            </div>
            </span>
        </div>
    );
}
export default AccountDropdownList