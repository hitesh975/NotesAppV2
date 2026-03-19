import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ButtonsType1 from "./components/Buttons/ButtonsType1";

export default function AddDefinitions () {
    const Navigate = useNavigate();
    const [definition, Setdefinition] = useState("");
    
    function Save() {
        console.log("saved")
        const existing = localStorage.getItem("definitions")
        const existingArray = existing ? JSON.parse(existing) : [];
        existingArray.push(definition);
        localStorage.setItem("definitions",JSON.stringify(existingArray))
        Setdefinition("");
    }

    return (
        <div className="container">
            <textarea 
                placeholder="Definition"
                className="Definition"
                value={definition}
                onChange={(e)=> Setdefinition(e.target.value)}/>
            <div className="Buttons">
                <ButtonsType1 text="Save" onClick={()=>Save()}/>
                <ButtonsType1 text="Back" onClick={()=>Navigate(-1)}/>
            </div>
        </div>
    )
}