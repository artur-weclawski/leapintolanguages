import ReportBug from "../../ReportBug";
import Accesibilities from "../../Accesibilities";
import {useTranslation} from "react-i18next";
function KnowledgeBaseWindow (){
    const {t, i18n} = useTranslation();
    let knowledge_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return(
        <div className="knowledge-base-window">
            <div className="left-section">
                <ReportBug/>
                <Accesibilities/>
                <span className="left-contents-wrap">
                <div className="left-contents">
                    <ul className="left-contents-ul">
                        <li><a href="#Polski">{t('knowledgeBasePage.polish.title')}</a>
                        <ul>
                            <li><a href="#Polski-Pierwsze">I</a></li>
                            <li><a href="#Polski-Drugie">II</a></li>
                            <li><a href="#Polski-Trzecie">III</a></li>
                        </ul>
                        </li>
                        <li><a href="#Angielski">{t('knowledgeBasePage.english.title')}</a>
                        <ul>
                            <li><a href="#Angielski-Pierwsze">I</a></li>
                            <li><a href="#Angielski-Drugie">II</a></li>
                            <li><a href="#Angielski-Trzecie">III</a></li>
                        </ul>
                        </li>
                        <li><a href="#Hiszpanski">{t('knowledgeBasePage.spanish.title')}</a>
                        <ul>
                            <li><a href="#Hiszpanski-Pierwsze">I</a></li>
                            <li><a href="#Hiszpanski-Drugie">II</a></li>
                            <li><a href="#Hiszpanski-Trzecie">III</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
                    </span>
            </div>

            <div className="right-section">
                <div className="right-section-content">
                    <div id="Polski">{t('knowledgeBasePage.polish.title')}</div>
                    <div id="Polski-Pierwsze">
                        {knowledge_content}
                    </div>
                    <div id="Polski-Drugie">
                        {knowledge_content}
                    </div>
                    <div id="Polski-Trzecie">
                        {knowledge_content}
                    </div>
                    <div id="Angielski">{t('knowledgeBasePage.english.title')}</div>
                    <div id="Angielski-Pierwsze">
                        {knowledge_content}
                    </div>
                    <div id="Angielski-Drugie">
                        {knowledge_content}
                    </div>
                    <div id="Angielski-Trzecie">
                        {knowledge_content}
                    </div>
                    <div id="Hiszpanski">{t('knowledgeBasePage.spanish.title')}</div>
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