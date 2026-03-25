import { createContext } from "react";
type Note = {
    title: string
    content: string
    date: number
    lastRevised: number
    numberOfRevisions: number
    streak: number
    Type: string
}
type definitionContextType = {
    definitions: Note[];
    setDefinitions: React.Dispatch<React.SetStateAction<Note[]>>;
    saveDefinition: () => void;
}
export const DefinitionContext = createContext<definitionContextType | null>(null);