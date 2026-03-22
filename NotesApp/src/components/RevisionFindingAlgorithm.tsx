import calculateNextRevision from "./calculateNextRevision";
import { useContext } from "react";
import { NotesContext } from "../notesContext"; 

type Note = {
    title: string
    content: string
    date: number
    lastRevised: number
    numberOfRevisions: number
    streak: number
}
function isRevisionPending(note: Note): boolean {
    const parsedNote: Note = {
        title: note.title,
        lastRevised: Number(note.lastRevised) || 0,
        numberOfRevisions: Number(note.numberOfRevisions) || 0,
        streak: Number((note as any).streak) || 0,
        content: note.content,
        date: note.date,
    };
    const [nextRevision, due] = calculateNextRevision(parsedNote);
    const now = Date.now();
    return now >= nextRevision && now <= due;
}

export default function useRevisionPendingNotes(): Note[] {
    const {notes} = useContext(NotesContext)!;
    return notes.filter((note) => isRevisionPending(note));
}
