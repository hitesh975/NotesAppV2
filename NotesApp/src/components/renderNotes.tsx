import ButtonsType2 from './Buttons/ButtonsType2';
import './renderNotes.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RenderNotes() {
        const Navigate = useNavigate();
        const [notes, setNotes] = useState(() => {
        const stored = localStorage.getItem("notes");
        return stored ? JSON.parse(stored) : [];
        });

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
                    {notes.map((title: string) => {
                        const Title : string = title.slice(0, -5);
                        const date : string =  
                        if (!Title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return null;
                        }
                        return (
                            <div key={title}>
                                {title.endsWith("Date") ? 
                                    null :
                                    <ButtonsType2  
                                        text1={Title} 
                                        text2={date} 
                                        onClick={() => Navigate('../openNote', {state: {key}})} />}
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }