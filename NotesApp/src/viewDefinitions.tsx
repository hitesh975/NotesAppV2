import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DefinitionContext } from "./definitionContext";
import ButtonsType1 from "./components/Buttons/ButtonsType1";
import RenderNotes from "./components/renderNotes";

export default function ViewDefinitions () {
    const navigate = useNavigate();
    const { definitions, setDefinitions, saveDefinition } = useContext(DefinitionContext)!;
    const clearAll = () => {
        setDefinitions([]);
        saveDefinition();
    };

    return (
        <div>
            <div className="TopWrapper">
                <div className="renderContainer">
                    
                    <RenderNotes notes={definitions} setNotes={setDefinitions} />
                    <div>
                        <ButtonsType1 text="Back" onClick={() => {navigate(-1)}}></ButtonsType1>
                         <ButtonsType1 text="clear all" onClick={clearAll} />
                    </div>
                </div>
            </div>
        </div>
    )
}