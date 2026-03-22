import { createContext } from "react";
type formula = string;
type FormulaContextType = {
    formulae: formula[];
    setFormulae: React.Dispatch<React.SetStateAction<formula[]>>;
    saveFormulae: () => void;
}

export const FormulaContext = createContext<FormulaContextType | null>(null);