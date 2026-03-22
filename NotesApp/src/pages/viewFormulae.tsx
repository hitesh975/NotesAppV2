import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FormulaContext } from "../formulaeContext";
import "./viewFormulae.css"
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import DOMPurify from "dompurify";
import Parse from "../components/parser";

export default function ViewForumulae() {
    const [search, setSearch] = useState('');
    const {formulae} = useContext(FormulaContext)!;
    const Navigate= useNavigate();

    return(
        <div className="container">
            <input type="text"
                   value={search}
                   onChange={(e)=>(setSearch(e.target.value))} />
            {formulae.map((Formula: string, index: number) => {
                if (!Formula.toLowerCase().includes(search.toLowerCase())) {
                            return null;
                        }
                return(
                
                <div key={index} className="formulae">
                    {Formula}
                </div>
            )
            })}
            <ButtonsType1 text='Back' onClick={()=>(Navigate(-1))}></ButtonsType1>
        </div>
    )
}