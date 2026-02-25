import ButtonType1 from "../components/Buttons/ButtonsType1";
import { useNavigate } from "react-router-dom";
import RenderNotes from "../components/renderNotes";
import './viewNotes.css';

export default function ViewNotes() {
    const navigate = useNavigate()
    return(
        <div className="viewNotes">
            <h2>View Notes</h2>
            <div className="renderContainer">
                <RenderNotes />
            </div>
            <ButtonType1 text="go back" onClick={() => navigate("/")} />
        </div>
    )
}