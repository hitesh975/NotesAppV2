import { useNavigate } from "react-router-dom";
import ButtonsType1 from "../components/Buttons/ButtonsType1";
import { useState, useContext, useEffect } from "react";
import { NotesContext } from "../notesContext";
import "./addNotes.css";
import { useEditor, EditorContent } from "@tiptap/react";
type Note = {
  Type: string;
  title: string;
  content: string;
  date: number;
  lastRevised: number;
  numberOfRevisions: number;
  streak: number;
};
type EditorElement = {
  id: number;
  type: string;
  value: string;
  className: string;
  children: EditorElement[];
};

function TreeNode({
  item,
  selectedId,
  setSelectedId,
  type,
}: {
  item: EditorElement;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
  type: boolean;
}) {
  return (
    <div contentEditable={false} suppressContentEditableWarning>
      <div
        key={item.id}
        data-editor-id={item.id}
        className={`EditorInput ${selectedId === item.id ? "selected" : ""} ${type ? "type1" : "type2"} `}
        contentEditable={false}
        suppressContentEditableWarning
        onClick={() => {
          if (selectedId === item.id) {
            setSelectedId(null);
          } else {
            setSelectedId(item.id);
          }
          console.log("selected id:", selectedId);
          console.log(selectedId === item.id);
        }}
      >
        {item.value}
        {item.children?.map((child) => (
          <TreeNode
            key={child.id}
            item={child}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            type={!type}
          />
        ))}
      </div>
    </div>
  );
}

export default function AddNotesPage() {
  function getObjectById(id: number | null) {
    if (selectedId === null) {
      return null;
    }

    return editorContent.find((item) => item.id === id);
  }
  console.log("Component rendered");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const oneDay = 24 * 60 * 60 * 1000; // 1 day in ms
  const navigate = useNavigate();
  const { notes, setNotes, saveNotes } = useContext(NotesContext)!;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editorContent, setEditorContent] = useState<any[]>([]);

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
      date: Date.now(), //here
      lastRevised: Date.now(), //here
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

  const obj: EditorElement | null = getObjectById(selectedId);

  useEffect(() => {
    const allElements = document.querySelectorAll("[data-editor-id]");
    allElements.forEach((el) => {
      const elementId = parseInt(
        (el as HTMLElement).getAttribute("data-editor-id") || "",
      );
      if (selectedId !== null && elementId === selectedId) {
        (el as HTMLElement).contentEditable = "true";
        (el as HTMLElement).focus();
      } else {
        (el as HTMLElement).contentEditable = "false";
      }
    });
  }, [selectedId]);

  return (
    <div className="TopWrapper">
      <div className="sideBar">
        <button
          className="sideBarButton"
          onClick={() =>
            editor()
              .chain()
              .focus()
              .insertContent({
                type: "textBlock",
                content: [
                  {
                    type: "paragraph",
                    text: "New Text Block",
                  },
                ],
              })
          }
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
          {editorContent.map((item) => {
            return TreeNode({ item, selectedId, setSelectedId, type: false });
          })}
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
