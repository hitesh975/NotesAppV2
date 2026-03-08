//notes type
    type Note = {
        title: string;
        lastRevised: number;       
        numberOfRevisions: number; };

//new function
    export default function calculateNextRevision(note: Note): number {
        const baseInterval = 24 * 60 * 60 * 1000; // 1 day in ms
        const multiplier = 1.7;

        const interval =
            baseInterval * Math.pow(multiplier, note.numberOfRevisions);
        return note.lastRevised + interval; 
    }