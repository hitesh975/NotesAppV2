import { useNavigate } from "react-router-dom";
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import { useState, useContext } from "react";
import { NotesContext } from "../notesContext";
import "./addNotes.css";

import Editor from "../components/editor/editorHandlers";
import { Editor as TiptapEditor } from "@tiptap/react";

type Note = {
  Type: string;
  title: string;
  content: string;
  date: number;
  lastRevised: number;
  numberOfRevisions: number;
  streak: number;
};

export default function AddNotesPage() {
  console.log("Component rendered");

  const oneDay = 24 * 60 * 60 * 1000; // 1 day in ms
  const navigate = useNavigate();
  const { notes, setNotes, saveNotes } = useContext(NotesContext)!;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [editor, setEditor] = useState<TiptapEditor | null>(null);

  function saveNote(title: string, content: string) {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (trimmedTitle === "" || trimmedContent === "") {
      alert("Title and Content cannot be empty");
      return;
    }

    const newNote: Note = {
      title: trimmedTitle + Math.floor(Math.random() * 100000),
      content: trimmedContent,
      date: Date.now(),
      lastRevised: Date.now(),
      numberOfRevisions: 0,
      streak: 0,
      Type: "note",
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNotes();

    setTitle("");
    setContent("");

    navigate("/viewNotes");
  }

  return (
    <div className="TopWrapper">
      <div className="sideBar">
        <button
          className="sideBarButton"
          onClick={() => {
            console.log("button clicked");

            if (!editor) return;

            editor
              .chain()
              .focus()
              .insertContent({
                type: "textBlock",
                content: [
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "New Text Block",
                      },
                    ],
                  },
                ],
              })
              .run();
          }}
        >
          Text Block
        </button>
      </div>

      <div className="AddNotesContainer">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title"
        />

        <div className="NoteEditorContainer">
          <Editor setContent={setContent} setEditor={setEditor} />
        </div>

        <div>
          <ButtonsType1 text="Go Back" onClick={() => navigate("/")} />

          <ButtonsType1
            text="Save Note"
            onClick={() => {
              saveNote(title, content);
              navigate("/");
            }}
          />
        </div>
      </div>
    </div>
  );
}
