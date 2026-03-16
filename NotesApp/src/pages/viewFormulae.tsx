import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./viewFormulae.css"
import ButtonsType1 from "../components/Buttons/ButtonsType1";

export default function ViewForumulae() {
    const [formulae, setFormulae] = useState(()=>{
        return JSON.parse(localStorage.getItem('formulae') || '[]')
    })
    const Navigate= useNavigate();

    return(
        <div className="container">
            {formulae.map((Formula: string) => (
                <div key={Formula} className="formulae">
                    {Formula}
                </div>
            ))}
            <ButtonsType1 text='Back' onClick={()=>(Navigate(-1))}></ButtonsType1>
        </div>
    )
}