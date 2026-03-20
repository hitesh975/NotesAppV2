import { useNavigate } from "react-router-dom"
import { useState } from "react"
import ButtonsType1 from "./components/Buttons/ButtonsType1";

export default function ViewDefinitions () {
    const Navigate = useNavigate();
    const [definitions] = useState(()=>{
        return JSON.parse(localStorage.getItem('definitions') || '[]')
    })
    return (
        <div className="container">
            {definitions.map((definition : String) => {
                return (
                    <div key={definition+"definition"} className="formulae">
                        {definition}
                    </div>
                )
            })}
            <ButtonsType1 text="Back" onClick={()=>Navigate(-1)}/>
        </div>
    )
}