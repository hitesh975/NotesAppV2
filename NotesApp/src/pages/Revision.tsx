import { useEffect, useState } from "react";
import "./Revision.css";
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import { useNavigate } from "react-router-dom";

type Note = {
  title: string;
  lastRevised: number;       
  numberOfRevisions: number; };

function calculateNextRevision(note: Note): number {
  const baseInterval = 24 * 60 * 60 * 1000; // 1 day in ms
  const multiplier = 1.7;

  const interval =
    baseInterval * Math.pow(multiplier, note.numberOfRevisions);

  return note.lastRevised + interval;
}

function isRevisionPending(note: Note): boolean {
  const nextRevision = calculateNextRevision(note);
  return Date.now() >= nextRevision;
}


export default function Revision() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("notes");

    if (stored) {
      const parsed: Note[] = JSON.parse(stored);
      setNotes(parsed);
    }
  }, []);

  const pendingNotes = notes.filter((note) =>
    isRevisionPending(note)
  );

  return (
    <div>
      <h1>Revision</h1>

      {pendingNotes.length === 0 && (
        <div className="revisionNote">
          <p className="noRevisionPending">No revisions pending</p>
        </div>
      )}

      {pendingNotes.map((note) => {
        const nextRevision = calculateNextRevision(note);
      
        return (
          <div key={note.title} className="revisionNote">
            <ButtonsType1 text={note.title.slice(0, -5)} onClick={() => {
              /*for now i will just navigate the user to the note they saved, will add a proper things
              to revise later */
              navigate('./openNote', {state: {key: note.title}})
            }}/>
            <p className="RevisionComponent">
              Last Revised:{" "}
              {new Date(note.lastRevised).toLocaleDateString()}
            </p>
            <p className="RevisionComponent">
              Next Revision:{" "}
              {new Date(nextRevision).toLocaleDateString()}
            </p>
            <p className="RevisionComponent">
              Number of Revisions: {note.numberOfRevisions}
            </p>
          </div>
        );
      })}
    </div>
  );
}