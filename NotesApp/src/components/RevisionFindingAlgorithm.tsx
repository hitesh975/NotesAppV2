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
    Type: string
}

export default function useRevisionPendingNotes(): {
    pendingNotes: Note[];
    missedNotes: Note[];
    upcomingNotes: Note[];
} {
    const { notes } = useContext(NotesContext)!;

    const pendingNotes: Note[] = [];
    const missedNotes: Note[] = [];
    const upcomingNotes: Note[] = [];

    const now = Date.now();

    for (const note of notes) {
        if (note.Type !== "note") continue;

        const parsedNote: Note = {
            title: note.title,
            lastRevised: Number(note.lastRevised) || 0,
            numberOfRevisions: Number(note.numberOfRevisions) || 0,
            streak: Number((note as any).streak) || 0,
            content: note.content,
            date: note.date,
            Type: note.Type
        };

        const [nextRevision, due] = calculateNextRevision(parsedNote);

        if (now > due) {
            missedNotes.push(note);
            continue;
        }

        if (now >= nextRevision && now <= due) {
            pendingNotes.push(note);
            continue;
        }

        if (now < nextRevision) {
            upcomingNotes.push(note);
        }
    }

    return {
        pendingNotes,
        missedNotes,
        upcomingNotes
    };
}
