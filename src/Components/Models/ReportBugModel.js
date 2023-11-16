import Bug from "../Entites/Bug";
import ReportBugController from "../Controllers/ReportBugController";


import React, {useState} from 'react';

const ReportBugModel = () => {
    const [message, setMessage] = useState("")

    const handleReportBug = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const contents = event.target.contents.value

        const bug = new Bug(title, contents, null) //TODO: Pomyśleć jak będzie przechowywany użytkownik aby był dostępny wszędzie (LocalStorage?)
        ReportBugController.ReportBug(bug)
        setMessage("Dziękujemy za twój feedback, nasz zespół już pracuje nad naprawą ewentualnego błędu :)")
    }

    return{
        message,
        handleReportBug
    }
};

export default ReportBugModel;
