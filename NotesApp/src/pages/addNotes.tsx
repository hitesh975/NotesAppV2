import { Link } from "react-router-dom"

export default function AddNotesPage() {
    return(
        <div>
            <h1>Add Notes</h1>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}