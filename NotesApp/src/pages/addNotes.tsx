import { useNavigate } from "react-router-dom"
import ButtonsType1 from "../components/Buttons/ButtonsType1"
import { useState, useContext } from "react"
import { NotesContext } from "../notesContext"
import "./addNotes.css"
import { addHeading, addDefinition, addFormula, addPoint, addParagraph, addProcess, addTable, addExample, addKeyword } from "./editorHandlers"
type Note = {
    Type: string
    title: string
    content: string
    date: number
    lastRevised: number
    numberOfRevisions: number
    streak: number
}


export default function AddNotesPage() {
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
            return
        }

        const newNote: Note = {
            title: trimmedTitle + Math.floor(Math.random() * 100000),
            content: trimmedContent,
            date: Date.now() , //here
            lastRevised: Date.now() , //here
            numberOfRevisions: 0,
            streak: 0,
            Type:"note"
        }

        const updatedNotes = [...notes, newNote]
        setNotes(updatedNotes)
        saveNotes();
        setTitle("");
        setContent("");
        navigate("/viewNotes");
    }

    return (
        <div className="TopWrapper">
            <div className="sideBar">
                <button className="sideBarButton" onClick={() => addHeading(setEditorContent, editorContent)}>Heading</button>
                <button className="sideBarButton" onClick={() => addDefinition(setEditorContent, editorContent)}>Definition</button>
                <button className="sideBarButton" onClick={() => addFormula(setEditorContent, editorContent)}>Formula</button>
                <button className="sideBarButton" onClick={() => addPoint(setEditorContent, editorContent)}>Point</button>
                <button className="sideBarButton" onClick={() => addParagraph(setEditorContent, editorContent)}>Paragraph</button>
                <button className="sideBarButton" onClick={() => addProcess(setEditorContent, editorContent)}>Process</button>
                <button className="sideBarButton" onClick={() => addTable(setEditorContent, editorContent)}>Table</button>
                <button className="sideBarButton" onClick={() => addExample(setEditorContent, editorContent)}>Example</button>
                <button className="sideBarButton" onClick={() => addKeyword(setEditorContent, editorContent)}>Keyword</button>
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
                    {editorContent.map((item, index) => (
                        
                        <div
                            key={item.id}
                            className={`EditorInput ${selectedId === item.id ? "selected" : ""}`}
                            contentEditable={selectedId === item.id}
                            suppressContentEditableWarning
                            onClick={() => {
                                setSelectedId(item.id);
                                }}
                            onInput={(e) => {
                                const newContent = [...editorContent];
                                newContent[index] = {
                                    ...newContent[index],
                                    value: (e.target as HTMLElement).innerText
                                };
                                setEditorContent(newContent);
                            }}
                        >
                            {item.value}
                        </div>
                    ))}
                </div>

                <div>
                    <ButtonsType1
                        text="Go Back"
                        onClick={() => navigate("/")}
                    />

                    <ButtonsType1
                        text="Save Note"
                        onClick={() => {
                            saveNote(title, content)
                            navigate("/")
                        }}
                    />
                </div>
            </div>
        </div>
    )
}