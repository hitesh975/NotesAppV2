import { Node } from "@tiptap/react";

const textBlock = Node.create({
  name: "textBlock",
  group: "block",
  content: "block+",
  parseHTML() {
    return [{ tag: 'div[data-type="text-block"]' }];
  },
  renderHTML() {
    return ["div", { "data-type": "text-block" }, 0];
  },
});

export default textBlock;
