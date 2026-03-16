import ButtonType1 from "../components/Buttons/ButtonsType1";
import { useNavigate } from "react-router-dom";
import RenderNotes from "../components/renderNotes";
import { useState } from "react";
import './viewNotes.css';

export default function ViewNotes() {
    const navigate = useNavigate();
    const [notes, setNotes] = useState<any[]>(() => {
        return JSON.parse(localStorage.getItem('notes') || '[]');
    });

    const clearAll = () => {
        setNotes([]);
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