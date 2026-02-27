import { useLocation } from "react-router-dom"
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import "./openNote.css"

export default function OpenNote() {
    const location = useLocation();
    const key = location.state?.key;
    const Title = key ? key.slice(0, -5) : "Note not found";
    const noteText = key ? localStorage.getItem(key) || "Note content not found" : "Note content not found";
    return(
        <div className="TopWrapper">
            <div className="open-note-container">
                <h2>{Title}</h2>
                <p className="NotesContent">{noteText.split("\n").map((line, index) => <span key={index}>{line}<br/></span>)}</p>
                <ButtonsType1 text="Go Back" onClick={() => window.history.back()}/>
            </div>
        </div>
    )
}