export default function DeleteNote(titleKey: string) {
    let notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes = notes.filter((n: any) => n.title !== titleKey);
    localStorage.setItem('notes', JSON.stringify(notes));
}