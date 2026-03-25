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
type NotesContextType = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  saveNotes: () => void;
};

export const NotesContext = createContext<NotesContextType | null>(null);