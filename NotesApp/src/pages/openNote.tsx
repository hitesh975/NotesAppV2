import { useLocation } from "react-router-dom"
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import "./openNote.css"

export default function OpenNote() {
    const TitleKey = useLocation().state.key;
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const Title = TitleKey.slice(0, -5);
    const selectedNote = notes.find((n: any) => n.title === TitleKey);
    const noteText = selectedNote ? selectedNote.content : "Note not found"
    
    return(
        <div className="TopWrapper">
            <div className="open-note-container">
                <h2>{Title}</h2>
                <p className="NotesContent">{noteText}</p>
                <ButtonsType1 text="Go Back" onClick={() => window.history.back()}/>
                <ButtonsType1 text="Delete" onClick={() => {}}/>
            </div>
        </div>
    )
}
