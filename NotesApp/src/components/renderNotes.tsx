import ButtonsType1 from './Buttons/ButtonsType1';
import './renderNotes.css';
import { useNavigate } from 'react-router-dom';

export default function RenderNotes() {
        const keys = [];
        const Navigate = useNavigate();
        for(let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if(key) {
                keys.push(key);
            }
        }
        return(
            <div className="notesList">
                {keys.map((key) => {
                    const Title = key.slice(0, -5); //PROBLEM HERE
                    return (
                        <ButtonsType1 key={key} text={Title} onClick={() => Navigate('../openNote', {state: {key}})} />
                    )
                })}
            </div>
        )
    }