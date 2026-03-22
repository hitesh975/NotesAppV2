import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DefinitionContext } from "./definitionContext";
import ButtonsType1 from "./components/Buttons/ButtonsType1";

export default function ViewDefinitions () {
    const navigate = useNavigate();
    const { definitions } = useContext(DefinitionContext)!;

    return (
        <div className="container">
            {definitions.map((definition: string, index: number) => {
                return (
                    <div key={index} className="formulae">
                        {definition}
                    </div>
                )
            })}
            
            <ButtonsType1 text="Back" onClick={()=> navigate(-1)}/>
        </div>
    )
}