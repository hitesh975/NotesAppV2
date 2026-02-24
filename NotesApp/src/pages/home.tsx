import { useNavigate } from "react-router-dom"
import ButtonsType1 from "../components/Buttons"

export default function Home() {
        const navigate = useNavigate()
    return(
        <div>
            <ButtonsType1 text="Add Notes" onClick={() => navigate("/addNotes")}/>
        </div>
    )
}