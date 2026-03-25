//notes type
    type Note = {
    title: string
    content: string
    date: number
    lastRevised: number
    numberOfRevisions: number
    streak: number
    Type: string
}

//new function
    export default function calculateNextRevision(note: Note): [number, number] {
        const oneDay = 24 * 60 * 60 * 1000; // 1 day in ms
        const baseInterval = oneDay; 
        const multiplier = 1.7;

        const interval =
            baseInterval * Math.pow(multiplier, note.numberOfRevisions);
        const due = note.lastRevised + interval + oneDay;
        return [note.lastRevised + interval, due]; 
    }