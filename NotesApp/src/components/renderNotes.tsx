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
                    const Title = key.slice(0, -5);
                    return <div key={key}>{Title}</div>
                })}
            </div>
        )
    }