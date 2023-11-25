import "./NavBar.css"
const PageStatus = ({routeName, setRouteName}) =>{
    return(
        <span className="page-status-wrap">
        <div className="page-status">
            <h2>{routeName}</h2>
        </div>
        </span>
    );
}
export default PageStatus