import "./Revision.css"
//IMPORTANT : we have not loaded the notes from localStorage, we are just using the notes variable which is empty. We need to load the notes from localStorage and then use it to calculate the revision pending.

function calculateRevisionPending(key: string) {
    const max_interval = 270;
    if (!note) return 0;
    const date = parseInt(note.lastRevised || "0");
    const currentTime = Date.now();
    const timeDiff = currentTime - date;
    let next_revision = timeDiff * 1.7; // 1.7 is growth rate
    if (next_revision > max_interval) {next_revision = 270}
    return Math.round(next_revision)
}

function checkRevisionPending(key: string) {
    const next_revision = calculateRevisionPending(key);
    if (Date.now() >= )
}

export default function Revision() {
    const Revision_Pending_Keys: string[] = []
    for (let i = 0; i < notes.length; i++) {
        const key = notes[i].title;
        if (calculateRevisionPending(key) > 0) {
            Revision_Pending_Keys.push(key);
        }
    }

    return (
        <div>
            <h1>Revision</h1>
            {Revision_Pending_Keys.length === 0 ? <p>No Revision Pending</p> : Revision_Pending_Keys.map((key) => (
                <div key={key} className="RevisionCard">
                    <h2>{key}</h2>
                    <p>{checkRevisionPending(key)}</p>
                </div>
            ))}
        </div>
    );
}