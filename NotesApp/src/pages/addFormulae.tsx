import { useState, useContext } from "react";
import { FormulaContext } from "../formulaeContext";
import { useNavigate } from "react-router-dom"
import "./addFormulae.css"
import ButtonsType1 from "../components/Buttons/ButtonsType1";

export default function AddFormulae() {
    const {formulae, setFormulae, saveFormulae} = useContext(FormulaContext)!;
    const [formula, setFormula] = useState("")
    function saveFormula() {
        if (!formula.trim()) return;

        setFormulae(prev => [...prev, formula]);
        saveFormulae();
        Navigate(-1);
    }
    const Navigate = useNavigate();
    return(
        <div className="container formulaContainer">
            <textarea
                    className="formula"
                    placeholder="Content"
                    value={formula}
                    onChange={(e) => setFormula(e.target.value)}
            />
            <div className="Buttons">
                <ButtonsType1  text="Save" onClick={()=>{saveFormula()}}/>
                <ButtonsType1 text="Go Back" onClick={()=>{Navigate(-1)}} />
            </div>
        </div>
    )
}