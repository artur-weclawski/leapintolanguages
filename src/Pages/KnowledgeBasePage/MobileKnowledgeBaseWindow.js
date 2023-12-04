import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import {useTranslation} from "react-i18next";
function  MobileKnowledgeBaseWindow (){
    const {t, i18n} = useTranslation();
    let knowledge_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return(
        <div className="mobile-knowledge-base-window">
            <div className='mobile-section'>
                <div className="right-section-content">
                    <div id="Polskim">Polski</div>
                    <div id="Polski-Pierwszem">
                        {knowledge_content}
                    </div>
                    <div id="Polski-Drugiem">
                        {knowledge_content}
                    </div>
                    <div id="Polski-Trzeciem">
                        {knowledge_content}
                    </div>
                    <div id="Angielskim">Angielski</div>
                    <div id="Angielski-Pierwszem">
                        {knowledge_content}
                    </div>
                    <div id="Angielski-Drugiem">
                        {knowledge_content}
                    </div>
                    <div id="Angielski-Trzeciem">
                        {knowledge_content}
                    </div>
                    <div id="Hiszpanskim">Hiszpański</div>
                    <div id="Hiszpanski-Pierwszem">
                        {knowledge_content}
                    </div>
                    <div id="Hiszpanski-Drugiem">
                        {knowledge_content}
                    </div>
                    <div id="Hiszpanski-Trzeciem">
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