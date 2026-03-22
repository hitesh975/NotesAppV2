import { useState, useContext } from "react"
import { DefinitionContext } from "./definitionContext";
import { useNavigate } from "react-router-dom"
import ButtonsType1 from "./components/Buttons/ButtonsType1";

export default function AddDefinitions () {
    const navigate = useNavigate();

    const { definitions, setDefinitions, saveDefinition } = useContext(DefinitionContext)!;
    const [definition, setDefinitionsInput] = useState("");

    const handleSave = () => {
        if (!definition.trim()) return;

        setDefinitions(prev => [...prev, definition]);
        saveDefinition();
        navigate(-1);
    };

    return (
        <div className="container">
            <textarea 
                placeholder="Definition"
                className="Definition"
                value={definition}
                onChange={(e)=> setDefinitionsInput(e.target.value)}
            />

            <div className="Buttons">
                <ButtonsType1 text="Save" onClick={handleSave}/>
                <ButtonsType1 text="Back" onClick={()=> navigate(-1)}/>
            </div>
        </div>
    )
}