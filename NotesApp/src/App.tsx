import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import { NotesContext } from "./notesContext";
import { DefinitionContext } from "./definitionContext";
import { FormulaContext } from "./formulaeContext";
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
    streak: number
    Type: string
}

export default function App() {

  //formula context ///////////////////////////////////
  const [formulae, setFormulae] = useState<Note[]>([])
  useEffect(() => {
    const stored = localStorage.getItem("formulae");
    if (stored) {
      setFormulae(JSON.parse(stored));
    }
  }, [])
  const saveFormulae = () => {
    localStorage.setItem("formulae", JSON.stringify(formulae));
  }
  //formula context end ///////////////////////////////

  //definition context /////////////////////////////////
  const [definitions, setDefinitions] = useState<Note[]>([])
  useEffect(() => {
    const stored = localStorage.getItem("definitions");
    if (stored) {
      setDefinitions(JSON.parse(stored));
    }
  }, [])
  const saveDefinition = () => {
    localStorage.setItem("definitions", JSON.stringify(definitions))
  }

  //definition context end //////////////////////////

  //notes context///////////////////////////////////
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
  //notes context end////////////////////////////////
  return (
    <NotesContext.Provider value={{notes, setNotes, saveNotes}}>
      <DefinitionContext.Provider value={{definitions, setDefinitions, saveDefinition}}>
        <FormulaContext.Provider value={{formulae, setFormulae, saveFormulae }}>
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
        </FormulaContext.Provider>
      </DefinitionContext.Provider>
    </NotesContext.Provider>
  )
}