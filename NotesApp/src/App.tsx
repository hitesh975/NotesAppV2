import { Routes, Route } from "react-router-dom"
import AddNotesPage from "./pages/addNotes"
import Home from "./pages/home"
import ViewNotes from "./pages/viewNotes"

export default function App() {
  return (
    <div>
      <h1>Notes App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addNotes" element={<AddNotesPage />} />
          <Route path="/viewNotes" element={<ViewNotes />} />
        </Routes>
    </div>
  )
}