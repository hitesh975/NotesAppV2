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
type FormulaContextType = {
    formulae: Note[];
    setFormulae: React.Dispatch<React.SetStateAction<Note[]>>;
    saveFormulae: () => void;
}

export const FormulaContext = createContext<FormulaContextType | null>(null);