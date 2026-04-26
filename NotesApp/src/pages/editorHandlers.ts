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

function addtool(
    setEditorContent: React.Dispatch<React.SetStateAction<EditorElement[]>>,
    editorContent: EditorElement[],
    selected: EditorElement | null,
    element: string
) {
    const newElement = createEditorElement(element);

    if (selected) {
        const updated = editorContent.map(item =>
            item.id === selected.id
                ? { ...item, children: [...item.children, newElement] }
                : item
        );

        setEditorContent(updated);
    } else {
        setEditorContent([...editorContent, newElement]);
    }
}

export function addHeading(setEditorContent: any, editorContent: any, selected: EditorElement | null) {
    addtool(setEditorContent, editorContent, selected, "Heading");
}

export function addDefinition(setEditorContent: any, editorContent: any, selected: EditorElement | null) {
    addtool(setEditorContent, editorContent, selected, "Definition");
}

export function addFormula(setEditorContent: any, editorContent: any, selected: EditorElement | null) {
    addtool(setEditorContent, editorContent, selected, "Formula");
}
export function addPoint(setEditorContent: any, editorContent: any, selected: EditorElement | null) {
    addtool(setEditorContent, editorContent, selected, "Point");
}

export function addParagraph(setEditorContent: any, editorContent: any, selected: EditorElement | null) {
    addtool(setEditorContent, editorContent, selected, "Paragraph");
}

export function addProcess(setEditorContent: any, editorContent: any, selected: EditorElement | null) {
    addtool(setEditorContent, editorContent, selected, "Process");
}

export function addTable(setEditorContent: any, editorContent: any, selected: EditorElement | null) {
    addtool(setEditorContent, editorContent, selected, "Table");
}

export function addExample(setEditorContent: any, editorContent: any, selected: EditorElement | null) {
    addtool(setEditorContent, editorContent, selected, "Example");
}

export function addKeyword(setEditorContent: any, editorContent: any, selected: EditorElement | null) {
    addtool(setEditorContent, editorContent, selected, "Keyword");
}
       
