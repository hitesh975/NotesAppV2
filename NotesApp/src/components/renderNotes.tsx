import ButtonsType2 from './Buttons/ButtonsType2';
import './renderNotes.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RenderNotes() {
        const Navigate = useNavigate();
        const notes = JSON.parse(localStorage.getItem('notes') || "[]");

        const [searchTerm, setSearchTerm] = useState('');
        return(
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
                        const title = Notes.title.slice(0, -5);
                        const date = new Date(parseInt(Notes.date)).toLocaleDateString();
                        if (!title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return null;
                        }
                        return (
                            <div key={Notes.title} className='noteList'>
                                <ButtonsType2 text1={title} text2={date} onClick={
                                    () => Navigate('../openNote', {state: {key: Notes.title}})
                                }></ButtonsType2>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
