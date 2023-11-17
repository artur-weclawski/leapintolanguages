import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import "./KnowledgeBasePage.css"
function KnowledgeBaseWindow (){
    let knowledge_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return(
        <div className="knowledge-base-window">
            <div className="left-section">
                <ReportBug/>
                <Accesibilities/>
                <span className="left-contents-wrap">
                <div className="left-contents">
                    <ul className="left-contents-ul">
                        <li><a href="#Polski">Polski</a>
                        <ul>
                            <li><a href="#Polski-Pierwsze">Pierwsze</a></li>
                            <li><a href="#Polski-Drugie">Drugie</a></li>
                            <li><a href="#Polski-Trzecie">Trzecie</a></li>
                        </ul>
                        </li>
                        <li><a href="#Angielski">Angielski</a>
                        <ul>
                            <li><a href="#Angielski-Pierwsze">First</a></li>
                            <li><a href="#Angielski-Drugie">Second</a></li>
                            <li><a href="#Angielski-Trzecie">Third</a></li>
                        </ul>
                        </li>
                        <li><a href="#Hiszpanski">Hiszpański</a>
                        <ul>
                            <li><a href="#Hiszpanski-Pierwsze">Primo</a></li>
                            <li><a href="#Hiszpanski-Drugie">Drugie Primo</a></li>
                            <li><a href="#Hiszpanski-Trzecie">Trzecie Primo</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
                    </span>
            </div>

            <div className="right-section">
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
        </div>
    );
}
export default KnowledgeBaseWindow