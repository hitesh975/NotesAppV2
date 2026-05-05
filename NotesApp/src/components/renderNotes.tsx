import React, { useState } from "react";
import ButtonsType2 from "./Buttons/ButtonsType2";
import "./renderNotes.css";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../assets/delete.svg";

type Note = {
  title: string;
  content: string;
  date: number;
  lastRevised: number;
  numberOfRevisions: number;
  streak: number;
  Type: string;
};

interface RenderNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function RenderNotes({ notes, setNotes }: RenderNotesProps) {
  const Navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (titleKey: string) => {
    const filtered = notes.filter((n) => n.title !== titleKey);
    setNotes(filtered);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Notes"
        className="searchBar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="notesList">
        {notes.map((Notes: any) => {
          const titleKey = Notes.title;
          const title = titleKey.slice(0, -5);
          const date = new Date(parseInt(Notes.date)).toLocaleDateString();
          if (!title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return null;
          }
          if (Notes.Type === "note") {
            return (
              <div key={Notes.title} className="noteList">
                <ButtonsType2
                  text1={title}
                  text2={date}
                  onClick={() =>
                    Navigate("../openNote", { state: { key: Notes.title } })
                  }
                ></ButtonsType2>
                <button
                  className="deleteButton1"
                  onClick={() => handleDelete(titleKey)}
                >
                  <img src={deleteIcon} alt="delete" className="delete-icon" />
                </button>
              </div>
            );
          } else {
            return (
              <div key={Notes.title} className="NotnoteList">
                <div className="ButtonType1">{Notes.content}</div>
                <button
                  className="deleteButton1"
                  onClick={() => handleDelete(titleKey)}
                >
                  <img src={deleteIcon} alt="delete" className="delete-icon" />
                </button>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
