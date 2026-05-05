import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextBlock from "./textblock";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, TextBlock],
    content: "<p>Start typing...</p>",
  });

  if (!editor) return null;

  return (
    <div>
      {/* BUTTON */}
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertContent({
              type: "textBlock",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "New Text Block" }],
                },
              ],
            })
            .run()
        }
      >
        Add Text Block
      </button>

      {/* EDITOR */}
      <EditorContent editor={editor} />
    </div>
  );
}
