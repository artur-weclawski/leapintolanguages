import NavBar from "../../NavBar/NavBar";
import {useEffect} from "react";
import KnowledgeBaseWindow from "./KnowledgeBaseWindow";
import MobileKnowledgeBaseWindow from "./MobileKnowledgeBaseWindow";

const KnowledgeBasePage =({routeName, setRouteName}) =>{
    useEffect(() => {
        setRouteName('Baza wiedzy');
    }, []);
    return(
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName}/>
            <div className="knowledge-base-body">
                <KnowledgeBaseWindow/>
                <MobileKnowledgeBaseWindow/>
            </div>
        </body>
    )
}
export default KnowledgeBasePage