import {
  useEditor,
  EditorContent,
  Editor as TiptapEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextBlock from "./textblock";
import { useEffect } from "react";

type Props = {
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setEditor: React.Dispatch<React.SetStateAction<TiptapEditor | null>>;
};

export default function Editor({ setContent, setEditor }: Props) {
  const editor = useEditor({
    extensions: [StarterKit, TextBlock],
    content: "<p>Start typing...</p>",

    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor) {
      setEditor(editor);
    }
  }, [editor, setEditor]);

  if (!editor) return null;

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
