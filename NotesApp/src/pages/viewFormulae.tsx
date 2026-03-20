import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./viewFormulae.css"
import ButtonsType1 from "../components/Buttons/ButtonsType1";

export default function ViewForumulae() {
    const [search, setSearch] = useState('');
    const [formulae] = useState(()=>{
        return JSON.parse(localStorage.getItem('formulae') || '[]')
    })
    const Navigate= useNavigate();

    return(
        <div className="container">
            <input type="text"
                   value={search}
                   onChange={(e)=>(setSearch(e.target.value))} />
            {formulae.map((Formula: string) => {
                if (!Formula.toLowerCase().includes(search.toLowerCase())) {
                            return null;
                        }
                return(
                
                <div key={Formula} className="formulae">
                    {Formula}
                </div>
            )
            })}
            <ButtonsType1 text='Back' onClick={()=>(Navigate(-1))}></ButtonsType1>
        </div>
    )
}