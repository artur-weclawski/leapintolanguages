import KnowledgeBaseWindow from "./KnowledgeBaseWindow";
import MobileKnowledgeBaseWindow from "./MobileKnowledgeBaseWindow";

function KnowledgeBaseBody(){
return(
    <div className="knowledge-base-body">
        <KnowledgeBaseWindow/>
        <MobileKnowledgeBaseWindow/>
    </div>
)
}
export default KnowledgeBaseBody