import { useLocation } from "react-router-dom"
export default function OpenNote() {
    const location = useLocation();
    const key = location.state?.key;
    const Title = key ? key.slice(0, -5) : "Note not found";
    console.log(Title); //PROBLEM HERE
    return(
        <div>
            <h2>{Title}</h2>
            <p>{key ? localStorage.getItem(key) : "Note not found"}</p>
        </div>
    )
}