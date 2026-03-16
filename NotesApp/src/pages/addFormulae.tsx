import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./addFormulae.css"
import ButtonsType1 from "../components/Buttons/ButtonsType1";

export default function AddFormulae() {
    function saveFormula() {
        const existing = localStorage.getItem("formulae")
        const formulaArray = existing ? JSON.parse(existing) : []
        const newFormula = content;

        formulaArray.push(newFormula);
        localStorage.setItem('formulae', JSON.stringify(formulaArray));
    }

    const [content, setContent] = useState('');
    const Navigate = useNavigate();
    return(
        <div className="container formulaContainer">
            <textarea
                    className="formula"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
            />
            <div className="Buttons">
                <ButtonsType1  text="Save" onClick={()=>{saveFormula()}}/>
                <ButtonsType1 text="Go Back" onClick={()=>{Navigate(-1)}} />
            </div>
        </div>
    )
}