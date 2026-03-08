import { useLocation } from "react-router-dom"
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import "./openNote.css"
import { useState } from "react";

export default function OpenNote() {
    const TitleKey = useLocation().state.key;
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const Title = TitleKey.slice(0, -5);
    const selectedNote = notes.find((n: any) => n.title === TitleKey);
    const [noteText, setNoteText] = useState(selectedNote.content)
    
    return(
        <div className="TopWrapper">
            <div className="open-note-container">
                <h2>{Title}</h2>
                <textarea className="NotesContent">{noteText}</textarea>
                <div className="ButtonsOpenNote">
                    <ButtonsType1 text="Go Back" onClick={() => window.history.back()}/>
                    <ButtonsType1 text="Delete" onClick={() => {}}/>
                    <ButtonsType1 text="save changes" onClick={() => {
                        setNoteText(noteText)
                    }}></ButtonsType1>
                </div>
            </div>
        </div>
    )
}
