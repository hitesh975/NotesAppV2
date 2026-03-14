import { Routes, Route } from "react-router-dom"
import AddNotesPage from "./pages/addNotes"
import Home from "./pages/home"
import ViewNotes from "./pages/viewNotes"
import OpenNote from "./pages/openNote"
import Revision from "./pages/Revision"
import Formulae from "./pages/formulae"
import AddFormulae from "./pages/addFormulae"
import ViewForumulae from "./pages/viewFormulae"

export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addNotes" element={<AddNotesPage />} />
          <Route path="/viewNotes" element={<ViewNotes />} />
          <Route path="/openNote" element={<OpenNote />} />
          <Route path="/Revision" element={<Revision />} />
          <Route path="/formulae" element={<Formulae/>} />
          <Route path="/formulae/addFormulae" element={<AddFormulae/>} />
          <Route path="/formulae/viewFormulae" element={<ViewForumulae/>}/>
        </Routes>
    </div>
  )
}