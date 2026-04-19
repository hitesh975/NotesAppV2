// Handler functions for adding different element types to the note editor
import './editorHandler.css'
const createEditorElement = (type: string) => ({
    id: Date.now(),
    type: type,
    value: "",
    className: 'EditorInput',
    children: []
});

export const addHeading = (setEditorContent: any, editorContent: any) => {
    setEditorContent([...editorContent, createEditorElement("heading")]);
};

export const addDefinition = (setEditorContent: any, editorContent: any) => {
    setEditorContent([...editorContent, createEditorElement("definition")]);
};

export const addFormula = (setEditorContent: any, editorContent: any) => {
    setEditorContent([...editorContent, createEditorElement("formula")]);
};

export const addPoint = (setEditorContent: any, editorContent: any) => {
    setEditorContent([...editorContent, createEditorElement("point")]);
};

export const addParagraph = (setEditorContent: any, editorContent: any) => {
    setEditorContent([...editorContent, createEditorElement("paragraph")]);
};

export const addProcess = (setEditorContent: any, editorContent: any) => {
    setEditorContent([...editorContent, createEditorElement("process")]);
};

export const addTable = (setEditorContent: any, editorContent: any) => {
    setEditorContent([...editorContent, createEditorElement("table")]);
};

export const addExample = (setEditorContent: any, editorContent: any) => {
    setEditorContent([...editorContent, createEditorElement("example")]);
};

export const addKeyword = (setEditorContent: any, editorContent: any) => {
    setEditorContent([...editorContent, createEditorElement("keyword")]);
};
