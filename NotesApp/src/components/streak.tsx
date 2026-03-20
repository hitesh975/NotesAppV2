export default function Streak() {
    const notes = localStorage.getItem("notes") || "[]";
    const notesParsed = JSON.parse(notes);

    return(
        <div>Notes stored: {Array.isArray(notesParsed) ? notesParsed.length : 0}</div>
    )
}