import { useNavigate } from "react-router-dom"
import ButtonsType1 from "../components/Buttons/ButtonsType1"
import { useState } from "react"
import "./addNotes.css"

export default function AddNotesPage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    type Note = {
        title: string;
        Content: string;
        lastReviewed: number;
        nextReview: number;
    }
    const [notes, setNotes] = useState<Note[]>([])

    function saveNote(title: string, content: string) {
        const Title = title.trim();
        const TitleKey = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000).toString();
        const Content = content.trim();
        if(Title === "" || Content === "") {
            alert("Title and Content cannot be empty");
            return;
        } else {
            const note = {
                title: Title + TitleKey,
                Content,
                lastReviewed: Date.now().toString(),
                nextReview: Date.now() + (1 * 86400000)
            };
            setNotes(prev => [...prev, note]);
            localStorage.setItem('notes', JSON.stringify(notes));
        }
        
    }

    return(
        <div className="TopWrapper">
            <div className="AddNotesContainer">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <div>
                    <ButtonsType1 text="Go Back" onClick={() => navigate("/")}/>
                    <ButtonsType1 text="Save Note" onClick={() => {
                        saveNote(title, content)
                        navigate("/")
                    }}/>    
                </div>
            </div>
        </div>
        
    )
}