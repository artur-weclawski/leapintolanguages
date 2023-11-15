import Bug from "../Entites/Bug";
import ReportBugController from "../Controllers/ReportBugController";

class ReportBugModel{

    static handleReportBug = (event) =>{
        event.preventDefault()
        let title = event.target.title.value
        let contents = event.target.contents.value

        let bug = new Bug(title, contents, null) //TODO: Pomyśleć jak będzie przechowywany użytkownik aby był dostępny wszędzie (LocalStorage?)
        ReportBugController.ReportBug(bug)
    }
}