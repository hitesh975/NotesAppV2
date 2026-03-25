import calculateNextRevision from "./calculateNextRevision";

type Note = {
    title: string
    content: string
    date: number
    lastRevised: number
    numberOfRevisions: number
    streak: number
    Type: string
}



export default function isMissed (note: Note): Boolean {
    const oneDay = 24 * 60 * 60 * 1000; // 1 day in ms
    const parsedNote: Note = {
        title: note.title,
        lastRevised: Number(note.lastRevised) || 0,
        numberOfRevisions: Number(note.numberOfRevisions) || 0,
        streak: Number((note as any).streak) || 0,
        content: note.content,
        date: note.date,
        Type: note.Type
    };
    const [nextRevision] = calculateNextRevision(parsedNote);
    const date = Date.now()
    if (date > nextRevision && date < nextRevision * 3 * oneDay) {
        return true
    } else {return false}
}