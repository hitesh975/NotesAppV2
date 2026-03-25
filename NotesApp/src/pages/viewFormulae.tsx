import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormulaContext } from "../formulaeContext";
import "./viewFormulae.css"
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import RenderNotes from "../components/renderNotes";

export default function ViewForumulae() {
    const {formulae, setFormulae, saveFormulae} = useContext(FormulaContext)!;
    const Navigate= useNavigate();
    const clearAll = () => {
        setFormulae([]);
        saveFormulae();
    };

   return (
    <div>
        <div className="TopWrapper">
                    <div className="renderContainer">
                        <RenderNotes notes={formulae} setNotes={setFormulae} />
                        <div>
                            <ButtonsType1 text="Back" onClick={() => {Navigate(-1)}}></ButtonsType1>
                            <ButtonsType1 text="clear all" onClick={clearAll} />
                        </div>
                    </div>
                </div>
    </div>
   )
}
   