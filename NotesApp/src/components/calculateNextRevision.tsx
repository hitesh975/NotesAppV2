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
    export default function calculateNextRevision(note: Note): [number, number, boolean] {
        const oneDay = 24 * 60 * 60 * 1000; // 1 day in ms
        const baseInterval = oneDay; 
        const multiplier = 1.7;

        const interval =
            baseInterval * Math.pow(multiplier, note.numberOfRevisions);
        const due = note.lastRevised + interval + oneDay;
        if (due > Date.now()) {return [note.lastRevised + interval, due, false];} else {
            const threeDays = oneDay * 3
            const newDue = due +  threeDays;
            return[due + oneDay, newDue, true];
        }
    }