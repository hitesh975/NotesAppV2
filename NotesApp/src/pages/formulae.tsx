import ButtonsType1 from "../components/Buttons/ButtonsType1"
import { useNavigate } from "react-router-dom"
import "./formulae.css"

export default function Formulae() {
    const Navigate = useNavigate();
    return(
        <div className="container">
            <ButtonsType1  text="add formulae" onClick={() => {Navigate("/formulae/addFormulae")}}/>
            <ButtonsType1  text="view formulae" onClick={() => {Navigate("/formulae/viewFormulae")}}/>
            <ButtonsType1 text="Back" onClick={()=> Navigate(-1)}/>
        </div>
    )
}