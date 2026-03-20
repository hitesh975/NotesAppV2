import calculateNextRevision from "./calculateNextRevision";

type Note = {
    title: string;
    lastRevised: number;
    numberOfRevisions: number;
    streak: number;
};

function isRevisionPending(note: Note): boolean {
    const parsedNote: Note = {
        title: note.title,
        lastRevised: Number(note.lastRevised) || 0,
        numberOfRevisions: Number(note.numberOfRevisions) || 0,
        streak: Number((note as any).streak) || 0,
    };
    const [nextRevision, due] = calculateNextRevision(parsedNote);
    const now = Date.now();
    return now >= nextRevision && now <= due;
}

export default function RevisionFindingAlgorithm(): Note[] {
    const stored = localStorage.getItem("notes");
    const notes: Note[] = stored ? JSON.parse(stored) : [];
    const PendingNotes = notes.filter((note) => isRevisionPending(note))
    return PendingNotes;
}
