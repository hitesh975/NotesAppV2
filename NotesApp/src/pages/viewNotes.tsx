import ButtonType1 from "../components/Buttons/ButtonsType1";
import { useNavigate } from "react-router-dom";
import RenderNotes from "../components/renderNotes";
import { useContext } from "react";
import { NotesContext } from "../notesContext";
import './viewNotes.css';

export default function ViewNotes() {
    const navigate = useNavigate();
    const { notes, setNotes, saveNotes } = useContext(NotesContext)!;

    const clearAll = () => {
        setNotes([]);
        saveNotes();
    };

    return (
        <div className="TopWrapper">
            <div className="renderContainer">
                <RenderNotes notes={notes} setNotes={setNotes} />
                <div>
                    <ButtonType1 text="go back" onClick={() => navigate("/")} />
                    <ButtonType1 text="clear all" onClick={clearAll} />
                </div>
            </div>
        </div>
    );
}