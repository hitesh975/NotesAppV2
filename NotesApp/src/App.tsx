import { Routes, Route } from "react-router-dom"
import AddNotesPage from "./pages/addNotes"
import Home from "./pages/home"
import ViewNotes from "./pages/viewNotes"
import OpenNote from "./pages/openNote"

export default function App() {
  return (
    <div>
      <h1>Notes App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addNotes" element={<AddNotesPage />} />
          <Route path="/viewNotes" element={<ViewNotes />} />
          <Route path="/openNote" element={<OpenNote />} />
        </Routes>
    </div>
  )
}