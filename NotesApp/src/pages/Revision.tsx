import "./Revision.css"

function calculateRevisionPending(key: string) {

}

function checkRevisionPending(key: string) {
    
}

export default function Revision() {
    const keys: string[] = []
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