import { Routes, Route } from "react-router-dom"
import AddNotesPage from "./pages/addNotes"
import Home from "./pages/home"

export default function App() {
  return (
    <div>
      <h1>Notes App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addNotes" element={<AddNotesPage />} />
        </Routes>
    </div>
  )
}