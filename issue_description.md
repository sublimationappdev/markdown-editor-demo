Integrate react-markdown into the markdown-editor app and set up a demo editor page as the frontpage.

## Summary
- Install react-markdown and related packages (remark-gfm, rehype-starry-night, rehype-raw)
- Create a MarkdownEditor component with split-view layout (editor on left, live preview on right)
- Configure react-markdown with:
  - GitHub Flavored Markdown (GFM) support via remark-gfm (tables, task lists, strikethrough)
  - Syntax highlighting via rehype-starry-night
  - Raw HTML support via rehype-raw
- Set up the MarkdownEditor as the app's frontpage (replace default Vite/React demo)
- Include comprehensive demo markdown showcasing all features

## Acceptance Criteria
- [ ] react-markdown and dependencies installed
- [ ] MarkdownEditor component created with split-view layout
- [ ] Live preview updates as user types in editor
- [ ] Syntax highlighting works for code blocks (JS, Python, etc.)
- [ ] GFM features work: tables, task lists, strikethrough
- [ ] Raw HTML rendering works (with rehype-raw)
- [ ] MarkdownEditor is the default frontpage at "/"
- [ ] Responsive design works on mobile (stacks vertically)
- [ ] Build completes without errors

## Investigation Findings
- The react-markdown repo (C:\Users\vboxuser\projects\react-markdown-main) uses a demo at https://remarkjs.github.io/react-markdown/
- The demo is a split-view editor with live preview
- We replicated this pattern in our MarkdownEditor component
- Used the same plugins: remark-gfm, rehype-starry-night, rehype-raw

## Files Changed
- package.json - Added dependencies
- src/components/MarkdownEditor.tsx - New component
- src/components/MarkdownEditor.css - New styles
- src/App.tsx - Updated to use MarkdownEditor
- src/App.css - Simplified for full-screen layout
- src/index.css - Updated for full-width root