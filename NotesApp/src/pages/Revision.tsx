import "./Revision.css"

function calculateRevisionPending(key: string) {
    const RevisionCount = parseInt(localStorage.getItem(key + "RevisionCount") || "0");
    const date = parseInt(localStorage.getItem(key + "last revised") || "0");
    const currentTime = Date.now();
    const timeDiff = currentTime - date;
    const next_revision = null// not decided
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