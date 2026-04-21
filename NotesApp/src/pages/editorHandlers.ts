// Handler functions for adding different element types to the note editor
import './editorHandler.css'
type EditorElement = {
    id: number
    type: string
    value: string
    className: string
    children: EditorElement[]
}
const createEditorElement = (type: string) => ({
    id: Date.now(),
    type: type,
    value: "",
    className: 'EditorInput',
    children: []
});

export function addHeading(element: EditorElement) {
    const newElement = createEditorElement('heading');
    element.children.push(newElement);
}
