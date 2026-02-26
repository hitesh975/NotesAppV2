import ButtonsType1 from './Buttons/ButtonsType1';
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
                        if (!Title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return null;
                        }
                        return (
                            <ButtonsType1 key={key} text={Title} onClick={() => Navigate('../openNote', {state: {key}})} />
                        )
                    })}
                </div>
            </>
        )
    }