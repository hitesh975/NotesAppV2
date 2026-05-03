import { useNavigate } from "react-router-dom"
import ButtonsType1 from "../components/Buttons/ButtonsType1"
import { useState, useContext, useRef, useEffect } from "react"
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
type EditorElement = {
    id: number
    type: string
    value: string
    className: string
    children: EditorElement[]
}


export default function AddNotesPage() {
    function getObjectById(id: number | null) {
        if(selectedId === null) {
            return null;
        }

        return editorContent.find(item => item.id === id);
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
            const elementId = parseInt((el as HTMLElement).getAttribute("data-editor-id") || "");
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
                <button className="sideBarButton" onClick={() => addHeading(setEditorContent, editorContent, obj, selectedId)}>Heading</button>
                <button className="sideBarButton" onClick={() => addDefinition(setEditorContent, editorContent, obj)}>Definition</button>
                <button className="sideBarButton" onClick={() => addFormula(setEditorContent, editorContent, obj)}>Formula</button>
                <button className="sideBarButton" onClick={() => addPoint(setEditorContent, editorContent, obj)}>Point</button>
                <button className="sideBarButton" onClick={() => addParagraph(setEditorContent, editorContent, obj)}>Paragraph</button>
                <button className="sideBarButton" onClick={() => addProcess(setEditorContent, editorContent, obj)}>Process</button>
                <button className="sideBarButton" onClick={() => addTable(setEditorContent, editorContent, obj)}>Table</button>
                <button className="sideBarButton" onClick={() => addExample(setEditorContent, editorContent, obj)}>Example</button>
                <button className="sideBarButton" onClick={() => addKeyword(setEditorContent, editorContent, obj)}>Keyword</button>
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
                        return (
                        <div
                            key={item.id}
                            data-editor-id={item.id}
                            className={`EditorInput ${selectedId === item.id ? "selected" : ""}`}
                            contentEditable={false}
                            suppressContentEditableWarning
                            onClick={() => {
                                if (selectedId === item.id) {
                                    setSelectedId(null)
                                } else {setSelectedId(item.id);}
                                console.log("selected id:", selectedId);
                                console.log(selectedId === item.id);
                                }}
                            
                        >
                            
                        </div>
                    )})}
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