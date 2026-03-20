import "./Revision.css";
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import { useNavigate } from "react-router-dom";
import RevisionFindingAlgorithm from "../components/RevisionFindingAlgorithm";
import calculateNextRevision from "../components/calculateNextRevision";

export default function Revision() {
  const navigate = useNavigate();
  const pendingNotes = RevisionFindingAlgorithm();

  return (
    <div className="revisionContainer">
      {pendingNotes.length === 0 && (
        <div className="revisionNote">
          <p className="noRevisionPending">No revisions pending</p>
        </div>
      )}

      {pendingNotes.map((note) => {
        const [nextRevision, due] = calculateNextRevision(note);
      
        return (
          <div key={note.title} className="revisionNote">
            <ButtonsType1 text={note.title.slice(0, -5)} onClick={() => {
              /*for now i will just navigate the user to the note they saved, will add a proper things
              to revise later */
              navigate('./openNote', {state: {key: note.title}});
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
            <p className="RevisionComponent">
              Due: {" "}
              {new Date(due).toLocaleDateString()}
            </p>
          </div>
        );
      })}
        <ButtonsType1 text="Go Back" onClick={() => {navigate("/")}}></ButtonsType1>
    </div>
  );
}