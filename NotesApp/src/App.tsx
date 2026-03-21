import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import { NotesContext } from "./notesContext";
import AddNotesPage from "./pages/addNotes"
import Home from "./pages/home"
import ViewNotes from "./pages/viewNotes"
import OpenNote from "./pages/openNote"
import Revision from "./pages/Revision"
import Formulae from "./pages/formulae"
import AddFormulae from "./pages/addFormulae"
import ViewForumulae from "./pages/viewFormulae"
import Definitions from "./Definitions"
import AddDefinitions from "./addDefinitions"
import ViewDefinitions from "./viewDefinitions"

type Note = {
    title: string
    content: string
    date: number
    lastRevised: number
    numberOfRevisions: number
}

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    const stored = localStorage.getItem("notes");
    if (stored) {
      setNotes(JSON.parse(stored));
    }
  }, []);
  const saveNotes = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  return (
    <NotesContext.Provider value={{notes, setNotes, saveNotes}}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addNotes" element={<AddNotesPage />}/>
          <Route path="/viewNotes" element={<ViewNotes />}/>
          <Route path="/openNote" element={<OpenNote />}/>
          <Route path="/Revision" element={<Revision />}/>
          <Route path="/formulae" element={<Formulae/>}/>
          <Route path="/formulae/addFormulae" element={<AddFormulae/>} />
          <Route path="/formulae/viewFormulae" element={<ViewForumulae/>}/>
          <Route path="/Definitions" element={<Definitions/>}/>
          <Route path="/Definitions/addDefinitions" element={<AddDefinitions/>}/>
          <Route path="/Definitions/viewDefinitions" element={<ViewDefinitions/>}/>
        </Routes>
    </NotesContext.Provider>
  )
}