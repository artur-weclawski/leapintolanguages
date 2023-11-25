import NavBar from "../../NavBar/NavBar";
import KnowledgeBaseBody from "./KnowledgeBaseBody";
import {useEffect} from "react";

const KnowledgeBasePage =({routeName, setRouteName}) =>{
    useEffect(() => {
        setRouteName('Baza wiedzy');
    }, []);
    return(
        <body>
        <NavBar routeName={routeName} setRouteName={setRouteName}/>
        <KnowledgeBaseBody/>
        </body>
    )
}
export default KnowledgeBasePage