import { createContext } from "react";
type definition = string;
type definitionContextType = {
    definitions: definition[];
    setDefinitions: React.Dispatch<React.SetStateAction<definition[]>>;
    saveDefinition: () => void;
}
export const DefinitionContext = createContext<definitionContextType | null>(null);