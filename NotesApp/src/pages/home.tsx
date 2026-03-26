import { useNavigate } from "react-router-dom"
import ButtonsType1 from "../components/Buttons/ButtonsType1"
import NotificationButton from "../components/Buttons/notificationButton"
import "./home.css"
import useRevisionPendingNotes from "../components/RevisionFindingAlgorithm";

export default function Home() {
        const navigate = useNavigate();
        const {pendingNotes} = useRevisionPendingNotes();
        const pendingCount = pendingNotes.length;
    return(
        <div className="container">
            <ButtonsType1 text="Add Notes" onClick={() => navigate("/addNotes")}/>
            <ButtonsType1 text="View Notes" onClick={() => navigate("/viewNotes")}/>
            <NotificationButton text="Revision" count={pendingCount} onClick={() => navigate("/revision")}/>
            <ButtonsType1 text="formulae" onClick={() => navigate("/formulae")} />
            <ButtonsType1 text="Defnitions" onClick={()=> navigate("/definitions")}/>
        </div>
    )
}