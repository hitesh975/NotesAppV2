import ButtonsType1 from "./components/Buttons/ButtonsType1"
import { useNavigate } from "react-router-dom"

export default function Definitions () {
    const navigate = useNavigate();
    return (
        <div className="container">
            <ButtonsType1 text="add definition" onClick={()=>{navigate("/Definitions/addDefinitions")}}/>
            <ButtonsType1 text="view definitions" onClick={()=>navigate("/Definitions/viewDefinitions")}/>
            <ButtonsType1 text="Back" onClick={()=>navigate(-1)}/>
        </div>
    )
}