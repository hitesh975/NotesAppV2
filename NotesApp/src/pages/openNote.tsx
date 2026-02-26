import { useLocation } from "react-router-dom"
import ButtonsType1 from "../components/Buttons/ButtonsType1";

export default function OpenNote() {
    const location = useLocation();
    const key = location.state?.key;
    const Title = key ? key.slice(0, -5) : "Note not found";
    return(
        <div>
            <h2>{Title}</h2>
            <p>{key ? localStorage.getItem(key) : "Note not found"}</p>
            <ButtonsType1 text="Go Back" onClick={() => window.history.back()}/>
        </div>
    )
}