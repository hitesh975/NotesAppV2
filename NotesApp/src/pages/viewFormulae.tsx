import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./viewFormulae.css"

export default function ViewForumulae() {
    const [formulae, setFormulae] = useState(()=>{
        return JSON.parse(localStorage.getItem('formulae') || '[]')
    })

    return(
        <div className="container">
            {formulae.map((Formula: string) => (
                <div key={Formula} className="formulae">
                    {Formula}
                </div>
            ))}
        </div>
    )
}