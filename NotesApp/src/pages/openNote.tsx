import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import { NotesContext } from "../notesContext";
import "./openNote.css";
import DOMPurify from "dompurify";
import Parse from "../components/parser";

export default function OpenNote() {
  const navigate = useNavigate();
  const location = useLocation();
  const { notes, setNotes, saveNotes } = useContext(NotesContext)!;
  const TitleKey = (location.state as { key: string } | undefined)?.key;

  const selectedNote = notes.find((n) => n.title === TitleKey);
  const [noteText, setNoteText] = useState<string>(selectedNote?.content ?? "");

  useEffect(() => {
    setNoteText(selectedNote?.content ?? "");
  }, [selectedNote?.content]);

  if (!TitleKey) {
    return (
      <div className="TopWrapper">
        <div className="open-note-container">Missing note key.</div>
      </div>
    );
  }

  if (!selectedNote) {
    return (
      <div className="TopWrapper">
        <div className="open-note-container">Note not found or already deleted.</div>
      </div>
    );
  }

  const Title = TitleKey.slice(0, -5);

  const saveNote = () => {
    if (!selectedNote) return;

    const trimmed = noteText.trim();
    if (trimmed === "") {
      alert("Note content cannot be empty.");
      return;
    }

    const updatedNotes = notes.map((note) => {
      if (note.title !== TitleKey) return note;
      return {
        ...note,
        content: trimmed,
      };
    });

    setNotes(updatedNotes);
    saveNotes();
    setNoteText(trimmed);
    alert("Note saved successfully.");
  };

  const deleteNote = () => {
    const filtered = notes.filter((note) => note.title !== TitleKey);
    setNotes(filtered);
    saveNotes();
    navigate(-1);
  };

  return (
    <div className="TopWrapper">
      <div className="open-note-container">
        <h2>{Title}</h2>
        <div
          className="NotesContent"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(Parse(noteText))
          }}
        />
        <div className="ButtonsOpenNote">
          <ButtonsType1 text="Go Back" onClick={() => navigate(-1)} />
          <ButtonsType1 text="Delete" onClick={deleteNote} />
          <ButtonsType1 text="Save changes" onClick={saveNote} />
        </div>
      </div>
    </div>
  );
}
