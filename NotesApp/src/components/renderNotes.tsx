import ButtonsType2 from './Buttons/ButtonsType2';
import './renderNotes.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RenderNotes() {
        const keys: string[] = [];
        const Navigate = useNavigate();
        for (let i = 0; i < localStorage.length; i++) {
            const key: string | null = localStorage.key(i);
            if (key) {
                keys.push(key);
            }
        }

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
                    {keys.map((key: string) => {
                        const Title : string = key.slice(0, -5);
                        const date: string = new Date(parseInt(localStorage.getItem(key + "Date") || "0")).toLocaleString(); 
                        if (!Title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return null;
                        }
                        return (
                            <div key={key}>
                                {key.endsWith("Date") ? 
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