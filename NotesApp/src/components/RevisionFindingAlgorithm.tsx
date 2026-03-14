import { useState } from "react";
import { useEffect } from "react";
import calculateNextRevision from "./calculateNextRevision";

export default function RevisionFindingAlgorithm() {
    //new function
    function revisionfinder() {
        const [notes, setNotes] = useState<Note[]>([]);

        useEffect(() => {
            const stored = localStorage.getItem("notes");

            if (stored) {
                const parsed: Note[] = JSON.parse(stored);
                setNotes(parsed);
            }
        }, []);

        const pendingNotes = notes.filter((note) => //apparently error here, note.filter()
            isRevisionPending(note)
        );
        return pendingNotes;
    }

    //notes type
    type Note = {
        title: string;
        lastRevised: number;       
        numberOfRevisions: number; };

    //new function
    function isRevisionPending(note: Note): boolean {
        const nextRevision = calculateNextRevision(note);
        return Date.now() >= nextRevision;
    }
    const pendingNotes = revisionfinder();
    return pendingNotes;    
}