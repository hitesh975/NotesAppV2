import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import "./openNote.css";

type Note = {
  title: string;
  content: string;
  date: number;
  lastRevised: number;
  numberOfRevisions: number;
};

export default function OpenNote() {
  const navigate = useNavigate();
  const location = useLocation();
  const TitleKey = (location.state as { key: string } | undefined)?.key;

  const [notes, setNotes] = useState<Note[]>(() => {
    return JSON.parse(localStorage.getItem("notes") || "[]");
  });

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

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    setNoteText(trimmed);
    alert("Note saved successfully.");
  };

  const deleteNote = () => {
    const filtered = notes.filter((note) => note.title !== TitleKey);
    localStorage.setItem("notes", JSON.stringify(filtered));
    setNotes(filtered);
    navigate(-1);
  };

  return (
    <div className="TopWrapper">
      <div className="open-note-container">
        <h2>{Title}</h2>
        <textarea
          className="NotesContent"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
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
