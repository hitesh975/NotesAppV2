import { useState, useContext } from "react";
import { FormulaContext } from "../formulaeContext";
import { useNavigate } from "react-router-dom"
import "./addFormulae.css"
import ButtonsType1 from "../components/Buttons/ButtonsType1";
type Note = {
    title: string
    content: string
    date: number
    lastRevised: number
    numberOfRevisions: number
    streak: number
    Type: string
}
export default function AddFormulae() {
    const { setFormulae, saveFormulae } = useContext(FormulaContext)!;
    const [formula, setFormula] = useState("")
    function saveFormula() {
        if (!formula.trim()) return;
        const newFormula: Note = {
            title: formula + Math.floor(Math.random() * 100000),
            content: formula,
            date: Date.now(),
            lastRevised: Date.now(),
            numberOfRevisions: 0,
            streak: 0,
            Type: "formula"
        }

        setFormulae(prev => [...prev, newFormula]);
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