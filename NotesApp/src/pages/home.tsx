import { Link } from "react-router-dom"

export default function Home() {
    return(
        <div>
            <Link to="/addNotes">
                <button>Add Notes</button>
            </Link>
        </div>
    )
}