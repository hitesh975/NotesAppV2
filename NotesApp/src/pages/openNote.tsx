import { useLocation } from "react-router-dom"
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import "./openNote.css"
import { useState } from "react";

export default function OpenNote() {
    const TitleKey = useLocation().state.key;
    const notes = useState(() => {
        JSON.parse(localStorage.getItem('notes') || "[]");
    })
    const selectedNote = notes.find((note: any) => note.title === TitleKey);
    const Title = selectedNote ? selectedNote.title.slice(0, -5) : "Note Not Found";
    const noteText = selectedNote ? selectedNote.text : "The note you are looking for does not exist.";
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