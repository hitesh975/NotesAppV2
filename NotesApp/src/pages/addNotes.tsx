import { useNavigate } from "react-router-dom"
import ButtonsType1 from "../components/Buttons"
import { useState } from "react"
import "./addNotes.css"

export default function AddNotesPage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const titleCode  = 829674987468792874682746924867;

    function saveNote(title: string, content: string) {
        const Title = title.trim();
        const Content = content.trim();
        if(Title === "" || Content === "") {
            alert("Title and Content cannot be empty");
            return
        } else {
            const TitleKey = Title + titleCode;
            localStorage.setItem(TitleKey, Content);
        }
        
    }

    return(
        <div>
            <h2>Add Notes</h2>
            <div className="container">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <ButtonsType1 text="Go Back" onClick={() => navigate("/")}/>
                <ButtonsType1 text="Save Note" onClick={() => {
                    saveNote(title, content)
                    navigate("/")
                }}/>    
            </div>
        </div>
    )
}