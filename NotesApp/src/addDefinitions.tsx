import { useState, useContext } from "react"
import { DefinitionContext } from "./definitionContext";
import { useNavigate } from "react-router-dom"
import ButtonsType1 from "./components/Buttons/ButtonsType1";
type Note = {
    title: string
    content: string
    date: number
    lastRevised: number
    numberOfRevisions: number
    streak: number
    Type: string
}

export default function AddDefinitions () {
    const navigate = useNavigate();

    const { setDefinitions, saveDefinition } = useContext(DefinitionContext)!;
    const [definition, setDefinitionsInput] = useState("");

    const handleSave = () => {
        if (!definition.trim()) return;
        const newDefinition: Note = {
            title: definition + Math.floor(Math.random() * 100000),
            content: definition,
            date: Date.now(),
            lastRevised: Date.now(),
            numberOfRevisions: 0,
            streak: 0,
            Type: "formula"
        }

        setDefinitions(prev => [...prev, newDefinition]);
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