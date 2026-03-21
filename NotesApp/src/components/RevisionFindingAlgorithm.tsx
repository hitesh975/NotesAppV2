import calculateNextRevision from "./calculateNextRevision";
import { useStorage, type Note } from "../App";

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
    const { notes } = useStorage();
    return notes.filter((note) => isRevisionPending(note));
}
