import { useNavigate } from "react-router-dom"
import ButtonsType1 from "../components/Buttons/ButtonsType1"
import { useState } from "react"
import "./addNotes.css"

type Note = {
    title: string
    content: string
    date: number
    lastRevised: number
    numberOfRevisions: number
}

export default function AddNotesPage() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    function saveNote(title: string, content: string) {
        const trimmedTitle = title.trim()
        const trimmedContent = content.trim()

        if (trimmedTitle === "" || trimmedContent === "") {
            alert("Title and Content cannot be empty")
            return
        }

        const newNote: Note = {
            title: trimmedTitle + Math.floor(Math.random() * 100000),
            content: trimmedContent,
            date: Date.now(),
            lastRevised: Date.now(),
            numberOfRevisions: 0
        }

        const existing = localStorage.getItem("notes")
        const notesArray: Note[] = existing ? JSON.parse(existing) : []

        notesArray.push(newNote)

        localStorage.setItem("notes", JSON.stringify(notesArray))
    }

    return (
        <div className="TopWrapper">
            <div className="AddNotesContainer">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

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