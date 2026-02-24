import ButtonType1 from "../components/Buttons";
import { useNavigate } from "react-router-dom";

export default function ViewNotes() {
    const navigate = useNavigate()
    return(
        <div className="viewNotes">
            <h2>View Notes</h2>
            <div className="notesList">
                
            </div>
            <ButtonType1 text="go back" onClick={() => navigate("/")} />
        </div>
    )
}