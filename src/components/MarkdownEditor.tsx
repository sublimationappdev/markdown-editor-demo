import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeStarryNight from 'rehype-starry-night';
import rehypeRaw from 'rehype-raw';
import './MarkdownEditor.css';

const defaultMarkdown = `# react-markdown demo

This is a demo of \`react-markdown\` — a React component to render markdown.

## Features

* **Safe by default** — no \`dangerouslySetInnerHTML\` or XSS attacks
* **Components** — pass your own component to use instead of \`<h2>\` for \`## hi\`
* **Plugins** — many plugins you can pick and choose from
* **Compliant** — 100% to CommonMark, 100% to GFM with a plugin

## Syntax highlighting

Here is some JavaScript code:

\`\`\`js
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('World');
\`\`\`

And some Python:

\`\`\`python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fibonacci(10)))
\`\`\`

## Tables (GFM)

| Feature | Support |
| ------- | ------- |
| Headings | ✅ |
| Emphasis | ✅ |
| Code blocks | ✅ |
| Tables | ✅ |
| Task lists | ✅ |
| Strikethrough | ✅ |

## Task lists (GFM)

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Blockquotes

> React-markdown builds a virtual DOM, so React only replaces what changed,
> from a syntax tree. That's supported because we use unified, specifically
> remark for markdown and rehype for HTML, which are popular tools to transform
> content with plugins.

## Inline code and emphasis

You can use \`inline code\`, *emphasis*, **strong**, and ~~strikethrough~~.

## Links and images

[react-markdown on GitHub](https://github.com/remarkjs/react-markdown)

![react logo](https://react.dev/logo.svg)

## Math (with plugins)

The lift coefficient ($C_L$) is a dimensionless coefficient.

Inline math: $E = mc^2$

Block math:
$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$

## HTML (with rehype-raw)

<div class="note">

Some *emphasis* and <strong>strong</strong>!

</div>

---

*Edit the markdown on the left to see the preview update in real-time.*
`;

export function MarkdownEditor() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="markdown-editor">
      <header className="editor-header">
        <h1>Markdown Editor</h1>
        <p className="subtitle">Live preview powered by react-markdown</p>
      </header>

      <div className="editor-container">
        <div className="editor-pane">
          <label htmlFor="markdown-input" className="pane-label">
            Editor
          </label>
          <textarea
            id="markdown-input"
            className="markdown-input"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Write markdown here..."
            spellCheck={false}
          />
        </div>

        <div className="preview-pane">
          <label className="pane-label">Preview</label>
          <div className="preview-content">
            <Markdown
              children={markdown}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeStarryNight, rehypeRaw]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;