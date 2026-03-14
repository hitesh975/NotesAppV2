import ButtonsType1 from "../components/Buttons/ButtonsType1"
import { useNavigate } from "react-router-dom"

export default function Formulae() {
    const Navigate = useNavigate();
    return(
        <div>
            <ButtonsType1  text="add formulae" onClick={() => {Navigate("./addFormulae")}}/>
            <ButtonsType1  text="view formulae" onClick={() => {Navigate("./viewFormulae")}}/>
        </div>
    )
}