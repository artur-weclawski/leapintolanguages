import NavBar from "../../NavBar/NavBar";
import {useEffect} from "react";
import KnowledgeBaseWindow from "./KnowledgeBaseWindow";
import MobileKnowledgeBaseWindow from "./MobileKnowledgeBaseWindow";

const KnowledgeBasePage =({routeName, setRouteName, setUser, setToken}) =>{
    useEffect(() => {
        setRouteName("bazaWiedzy");
    }, []);
    return(
        <body>
            <NavBar routeName={routeName} setRouteName={setRouteName} setUser={setUser} setToken={setToken}/>
            <div className="knowledge-base-body">
                <KnowledgeBaseWindow/>
                <MobileKnowledgeBaseWindow/>
            </div>
        </body>
    )
}
export default KnowledgeBasePage