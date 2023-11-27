import "./KnowledgeBasePage.css"
import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
function  MobileKnowledgeBaseWindow (){
    let knowledge_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return(
        <div className="mobile-knowledge-base-window">
            <div className='mobile-section'>
                <div className="right-section-content">
                    <div id="Polski">Polski</div>
                    <div id="Polski-Pierwsze">
                        {knowledge_content}
                    </div>
                    <div id="Polski-Drugie">
                        {knowledge_content}
                    </div>
                    <div id="Polski-Trzecie">
                        {knowledge_content}
                    </div>
                    <div id="Angielski">Angielski</div>
                    <div id="Angielski-Pierwsze">
                        {knowledge_content}
                    </div>
                    <div id="Angielski-Drugie">
                        {knowledge_content}
                    </div>
                    <div id="Angielski-Trzecie">
                        {knowledge_content}
                    </div>
                    <div id="Hiszpanski">Hiszpański</div>
                    <div id="Hiszpanski-Pierwsze">
                        {knowledge_content}
                    </div>
                    <div id="Hiszpanski-Drugie">
                        {knowledge_content}
                    </div>
                    <div id="Hiszpanski-Trzecie">
                        {knowledge_content}
                    </div>
                </div>
            </div>
            <ReportBug/>
            <Accesibilities/>
        </div>
    );
}
export default MobileKnowledgeBaseWindow