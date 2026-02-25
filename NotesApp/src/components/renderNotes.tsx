import './renderNotes.css';

export default function RenderNotes() {
        const keys = [];
        for(let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if(key) {
                keys.push(key);
            }
        }
        return(
            <div className="notesList">
                {keys.map((key) => {
                    return <div key={key}>{key}: {localStorage.getItem(key)}</div>
                })}
            </div>
        )
    }