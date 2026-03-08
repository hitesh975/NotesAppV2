import { useNavigate } from "react-router-dom"
import ButtonsType1 from "../components/Buttons/ButtonsType1"
import NotificationButton from "../components/Buttons/notificationButton"
import "./home.css"

export default function Home() {
        const navigate = useNavigate()
    return(
        <div className="container">
            <ButtonsType1 text="Add Notes" onClick={() => navigate("/addNotes")}/>
            <ButtonsType1 text="View Notes" onClick={() => navigate("/viewNotes")}/>
            <NotificationButton text="Revision" count={5 /* place holder */} onClick={() => navigate("/revision")}/>
        </div>
    )
}