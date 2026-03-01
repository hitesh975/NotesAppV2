import "./Revision.css"

function calculateRevisionPending(key: string) {
    const max_interval = 270;
    const date = parseInt(localStorage.getItem(key + "last revised") || "0");
    const currentTime = Date.now();
    const timeDiff = currentTime - date;
    let next_revision = timeDiff * 1.7; // 1.7 is growth rate
    if (next_revision > max_interval) {next_revision = 270}
    return Math.round(next_revision)
}

function checkRevisionPending(key: string) {
    
}

export default function Revision() {
    const keys = Object.keys(localStorage);
    const Revision_Pending_Keys: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i) || "")
        checkRevisionPending(keys[i])
    }

    return (
        <div>
            <h1>Revision</h1>
        </div>
    );
}